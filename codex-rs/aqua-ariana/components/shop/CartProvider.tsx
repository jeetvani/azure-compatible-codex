"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { products } from "@/content/catalog";
import { CART_KEY, parseCart, sanitizeCart, setCartQuantity, removeCartItem, validQuantity, verifiedProduct, type CartEntry } from "@/lib/cart";
type CartContextValue = { entries: CartEntry[]; count: number; add: (id: string, quantity: number) => void; update: (id: string, quantity: number) => void; remove: (id: string) => void };
const CartContext = createContext<CartContextValue | null>(null);
export function CartProvider({ children }: { children: React.ReactNode }) {
 const [entries, setEntries] = useState<CartEntry[]>([]); const [message, setMessage] = useState("");
 const current = useRef<CartEntry[]>([]);
 useEffect(() => {
   const read = () => { let restored: CartEntry[] = []; try { restored = parseCart(localStorage.getItem(CART_KEY), products); } catch {} current.current = restored; setEntries(restored); };
   // Hydrate after the server-matching empty first render; storage never contains business facts.
   const timer = window.setTimeout(read, 0);
   const sync = (e: StorageEvent) => { if (e.key === CART_KEY || e.key === null) read(); };
   window.addEventListener("storage", sync);
   return () => { clearTimeout(timer); window.removeEventListener("storage", sync); };
 }, []);
 const commit = (next: CartEntry[], announcement: string) => {
   const safe = sanitizeCart(next, products); current.current = safe; setEntries(safe); setMessage(announcement);
   try { localStorage.setItem(CART_KEY, JSON.stringify(safe)); } catch { /* The in-memory cart remains usable. */ }
 };
 const update = (id: string, quantity: number) => {
   const product = products.find(p => p.id === id && verifiedProduct(p));
   if (!product || !validQuantity(quantity, product.maximumQuantity)) return;
   commit(setCartQuantity(current.current, id, quantity, products), `${product.name} quantity updated to ${quantity} in your cart.`);
 };
 const add = (id: string, quantity: number) => {
   const product = products.find(p => p.id === id && verifiedProduct(p));
   const total = (current.current.find(e => e.productId === id)?.quantity ?? 0) + quantity;
   if (!product || !validQuantity(quantity) || !validQuantity(total, product.maximumQuantity)) { setMessage("This quantity cannot be added. Review the product quantity limit."); return; }
   commit(setCartQuantity(current.current, id, total, products), `${product.name} added to your local cart. Quantity: ${total}.`);
 };
 const remove = (id: string) => {
   if (!current.current.some(e => e.productId === id)) return;
   commit(removeCartItem(current.current, id), `${products.find(p => p.id === id)?.name ?? "Product"} removed from your cart.`);
 };
 return <CartContext.Provider value={{ entries, count: entries.reduce((n,e) => n + e.quantity, 0), add, update, remove }}>{children}<div className="sr-only" aria-live="polite" aria-atomic="true">{message}</div></CartContext.Provider>;
}
export function useCart() { const value = useContext(CartContext); if (!value) throw new Error("CartProvider is required"); return value; }
