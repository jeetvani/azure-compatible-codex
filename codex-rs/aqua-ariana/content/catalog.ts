export type Currency = { code: string; minorUnitDigits: number };
export type Product = {
  id: string; verified: boolean; name: string; capacity: string; sellingUnit: string;
  priceMinor: number; currency: Currency; availability?: string; maximumQuantity?: number;
  image?: { src: string; alt: string; width: number; height: number };
};
// Add entries only after their identity, unit, price and currency are verified.
export const products: readonly Product[] = [];
