import { pageMetadata } from "@/lib/metadata";
import { Container, StatusNotice } from "@/components/ui";
import { CartContents } from "@/components/shop/CartContents";
import { OrderSummary } from "@/components/shop/OrderSummary";
import s from "@/components/site/site.module.css";
import shop from "@/components/shop/shop.module.css";
export const metadata = pageMetadata("/cart", "Your cart | Aqua Ariana", "Review your Aqua Ariana bottled water selections and pickup order requirements.", true);
export default function Cart() { return <div className={s.section}><Container><div className={s.pageIntro}><p className={s.eyebrow}>Pickup only · San Francisco</p><h1>Your cart</h1><StatusNotice>Online ordering is not available yet.</StatusNotice></div><div className={shop.cartGrid}><CartContents/><OrderSummary/></div></Container></div>; }
