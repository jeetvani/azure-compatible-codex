"use client";
import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/content/catalog";
import { formatMoney, verifiedProduct } from "@/lib/cart";
import { useCart } from "./CartProvider";
import { QuantityStepper } from "./QuantityStepper";
import s from "./shop.module.css";
import ui from "@/components/site/site.module.css";
export function ProductCard({ product }: { product: Product }) {
 const [quantity,setQuantity] = useState(1); const [valid,setValid] = useState(true); const { add } = useCart();
 if (!verifiedProduct(product)) return null;
 return <article className={s.productCard}>{product.image && <Image src={product.image.src} alt={product.image.alt} width={product.image.width} height={product.image.height} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"/>}<h3>{product.name}</h3><p>{product.capacity} · {product.sellingUnit}</p><p className={s.price}>{formatMoney(product.priceMinor, product.currency)}</p>{product.availability && <p>{product.availability}</p>}<QuantityStepper name={product.name} value={quantity} maximum={product.maximumQuantity} onChange={setQuantity} onValidityChange={setValid}/><button className={ui.button} disabled={!valid} onClick={() => add(product.id, quantity)}>Add to cart</button>{!valid && <p className={ui.note}>Enter a valid quantity before adding to cart.</p>}</article>;
}
