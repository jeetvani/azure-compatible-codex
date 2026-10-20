"use client";
import { useRef } from "react";
import type { Product } from "@/content/catalog";
import { products } from "@/content/catalog";
import { formatMoney } from "@/lib/cart";
import { ButtonLink } from "@/components/ui";
import { useCart } from "./CartProvider";
import { QuantityStepper } from "./QuantityStepper";
import s from "./shop.module.css";
import ui from "@/components/site/site.module.css";
export function CartContents() {
 const { entries } = useCart(); const region = useRef<HTMLDivElement>(null);
 const retainFocus = () => requestAnimationFrame(() => { const target = region.current?.querySelector<HTMLElement>("button:not(:disabled), a"); target?.focus(); });
 return <div ref={region}>{entries.length ? <div className={s.lineItems}>{entries.map(entry => { const product = products.find(p => p.id === entry.productId); return product ? <CartLineItem key={product.id} product={product} quantity={entry.quantity} afterRemove={retainFocus}/> : null; })}</div> : <CartEmptyState/>}</div>;
}
export function CartEmptyState() { return <div className={s.empty}><svg className={s.emptyIcon} aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 7h14l1 14H4L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg><h2>Your cart is empty</h2><p>Products can be added once the catalog and prices are confirmed.</p><div className={ui.actions}><ButtonLink href="/#shop">Browse bottles</ButtonLink><ButtonLink href="/pickup" secondary>Pickup details</ButtonLink></div></div>; }
export function CartLineItem({product,quantity,afterRemove}: {product: Product; quantity: number; afterRemove: () => void}) { const {update,remove} = useCart(); return <article className={s.lineItem}><h2>{product.name}</h2><p>{product.capacity} · {product.sellingUnit}</p><p>{formatMoney(product.priceMinor,product.currency)} per selling unit</p><QuantityStepper name={product.name} value={quantity} maximum={product.maximumQuantity} onChange={value => update(product.id,value)}/><button className={s.remove} aria-label={`Remove ${product.name} from cart`} onClick={() => {remove(product.id);afterRemove();}}>Remove</button></article>; }
