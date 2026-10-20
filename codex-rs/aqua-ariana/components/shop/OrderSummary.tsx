"use client";
import Link from "next/link";
import { products } from "@/content/catalog";
import { displaySubtotal, formatMoney } from "@/lib/cart";
import { useCart } from "./CartProvider";
import s from "./shop.module.css";
import ui from "@/components/site/site.module.css";
export function OrderSummary({ review = false }: { review?: boolean }) {
 const { entries, count } = useCart(); const subtotal = displaySubtotal(entries, products);
 return <section className={s.summary} aria-label={review ? "Order review" : "Order summary"}><h2>{review ? "Order review" : "Order summary"}</h2><p className={s.summaryCount}>{count} {count === 1 ? "item" : "items"}{review && count === 0 ? " · Your cart is empty" : ""}</p>{review && entries.length > 0 && <ul className={s.reviewList}>{entries.map(entry => { const product = products.find(p => p.id === entry.productId)!; return <li key={entry.productId}>{product.name}<span>{product.capacity} · {product.sellingUnit} · Quantity {entry.quantity}</span><span>{formatMoney(product.priceMinor,product.currency)} per selling unit</span></li>; })}</ul>}<dl><div><dt>Subtotal</dt><dd>{subtotal ? formatMoney(subtotal.minor, subtotal.currency) : "Not available"}</dd></div><div><dt>Taxes and total</dt><dd>To be confirmed</dd></div></dl>{!review && <><button className={ui.button} disabled aria-describedby="checkout-gate">Continue to checkout</button><p className={s.summaryNote} id="checkout-gate">Checkout is unavailable until products, prices and pickup details are confirmed.</p><Link className={s.summaryLink} href="/checkout">View checkout requirements</Link></>}{review && <p className={s.summaryNote}>Pickup only · San Francisco</p>}</section>;
}
export function CompactOrderStatus() { const {count} = useCart(); return <div className={s.compactStatus}><strong>Checkout unavailable</strong><p>{count} {count === 1 ? "item" : "items"} · Total not available</p></div>; }
