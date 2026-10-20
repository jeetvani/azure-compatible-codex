import { products } from "@/content/catalog";
import { draftCopy } from "@/content/business";
import { verifiedProduct } from "@/lib/cart";
import { Container, SectionHeading } from "@/components/ui";
import { ProductCard } from "./ProductCard";
import s from "./shop.module.css";
import ui from "@/components/site/site.module.css";
import home from "@/components/site/home.module.css";
export function CatalogSection() { const catalog = products.filter(verifiedProduct); return <section id="shop" className={`${ui.section} ${home.shop}`}><Container><p className={home.sectionLabel}>The shop</p><SectionHeading title="Choose your bottled water.">{draftCopy.catalog}</SectionHeading>{catalog.length ? <div className={s.productGrid}>{catalog.map(product => <ProductCard product={product} key={product.id}/>)}</div> : <CatalogPendingPanel/>}</Container></section>; }
export function CatalogPendingPanel() { return <div className={s.pending}><div className={s.pendingIntro}><span className={s.pendingLabel}>Catalog pending</span><h3>Product details are being confirmed</h3></div><dl className={s.pendingDetails}>{[["Products","[Product names to be confirmed]"],["Capacities","[Capacities to be confirmed]"],["Selling units","[Selling units to be confirmed]"],["Prices","[Prices to be confirmed]"]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><div className={s.pendingActions}><button className={ui.button} disabled aria-describedby="catalog-unavailable">Add to cart</button><p id="catalog-unavailable">Products cannot be added until details and prices are confirmed.</p></div></div>; }
