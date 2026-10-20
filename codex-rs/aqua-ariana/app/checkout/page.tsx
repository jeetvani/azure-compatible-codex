import { pageMetadata } from "@/lib/metadata";
import { Container, StatusNotice } from "@/components/ui";
import { CompactOrderStatus, OrderSummary } from "@/components/shop/OrderSummary";
import { CheckoutReadinessPanel, PaymentAvailabilityPanel } from "@/components/shop/CheckoutReadinessPanel";
import s from "@/components/site/site.module.css";
import shop from "@/components/shop/shop.module.css";
export const metadata = pageMetadata("/checkout", "Checkout | Aqua Ariana", "Review the product, pricing, pickup and payment requirements for an Aqua Ariana order.", true);
export default function Checkout() { return <div className={s.section}><Container><div className={s.pageIntro}><p className={s.eyebrow}>Pickup only · San Francisco</p><h1>Checkout</h1><p>No payment will be taken. Products, complete pricing, pickup arrangements, purchase policies and the payment connection must be confirmed before checkout can open.</p><StatusNotice>Online payment is not available yet.</StatusNotice></div><CompactOrderStatus/><div className={shop.checkoutGrid}><CheckoutReadinessPanel/><div className={shop.checkoutAside}><OrderSummary review/><PaymentAvailabilityPanel/></div></div></Container></div>; }
