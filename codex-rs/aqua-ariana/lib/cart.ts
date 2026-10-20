import type { Product, Currency } from "../content/catalog.ts";
export const CART_KEY = "aqua-ariana:cart:v1";
export type CartEntry = { productId: string; quantity: number };
export function validQuantity(value: unknown, maximum?: number): value is number {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 1 && (maximum === undefined || value <= maximum);
}
export function parseQuantity(value: string, maximum?: number): number | null {
  if (!/^[1-9]\d*$/.test(value)) return null;
  const quantity = Number(value);
  return validQuantity(quantity, maximum) ? quantity : null;
}
export function verifiedProduct(product: Product): boolean {
  return product.verified === true && !!product.id.trim() && !!product.name.trim() && !!product.capacity.trim() && !!product.sellingUnit.trim()
    && Number.isSafeInteger(product.priceMinor) && product.priceMinor >= 0
    && /^[A-Z]{3}$/.test(product.currency.code) && Number.isInteger(product.currency.minorUnitDigits)
    && product.currency.minorUnitDigits >= 0 && product.currency.minorUnitDigits <= 4
    && (product.maximumQuantity === undefined || validQuantity(product.maximumQuantity));
}
export function sanitizeCart(value: unknown, catalog: readonly Product[]): CartEntry[] {
  if (!Array.isArray(value)) return [];
  const seen = new Set<string>();
  return value.flatMap((entry: unknown) => {
    if (!entry || typeof entry !== "object" || !("productId" in entry) || !("quantity" in entry)) return [];
    const product = catalog.find(p => p.id === entry.productId && verifiedProduct(p));
    if (!product || seen.has(product.id) || !validQuantity(entry.quantity, product.maximumQuantity)) return [];
    seen.add(product.id);
    return [{ productId: product.id, quantity: entry.quantity }];
  });
}
export function parseCart(raw: string | null, catalog: readonly Product[]): CartEntry[] {
  try { return sanitizeCart(raw ? JSON.parse(raw) : [], catalog); } catch { return []; }
}
export function setCartQuantity(cart: CartEntry[], id: string, quantity: number, catalog: readonly Product[]): CartEntry[] {
  const product = catalog.find(p => p.id === id && verifiedProduct(p));
  if (!product || !validQuantity(quantity, product.maximumQuantity)) return cart;
  return sanitizeCart([...cart.filter(e => e.productId !== id), { productId: id, quantity }], catalog);
}
export function removeCartItem(cart: CartEntry[], id: string): CartEntry[] { return cart.filter(e => e.productId !== id); }
export function displaySubtotal(cart: CartEntry[], catalog: readonly Product[]): { minor: number; currency: Currency } | null {
  const valid = sanitizeCart(cart, catalog);
  if (!valid.length || valid.length !== cart.length) return null;
  const first = catalog.find(p => p.id === valid[0].productId)!;
  let minor = 0;
  for (const entry of valid) {
    const product = catalog.find(p => p.id === entry.productId)!;
    if (product.currency.code !== first.currency.code || product.currency.minorUnitDigits !== first.currency.minorUnitDigits) return null;
    minor += product.priceMinor * entry.quantity;
    if (!Number.isSafeInteger(minor)) return null;
  }
  return { minor, currency: first.currency };
}
export function formatMoney(minor: number, currency: Currency): string {
  return new Intl.NumberFormat("en", { style: "currency", currency: currency.code, minimumFractionDigits: currency.minorUnitDigits, maximumFractionDigits: currency.minorUnitDigits }).format(minor / 10 ** currency.minorUnitDigits);
}
