import Link from "next/link";
import { checkoutRequirements, getCheckoutReadiness } from "@/lib/checkout-readiness";
import s from "./shop.module.css";
import ui from "@/components/site/site.module.css";
export function CheckoutReadinessPanel() { return <section className={s.requirements}><h2>Before checkout can open</h2><dl>{checkoutRequirements.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>; }
export function PaymentAvailabilityPanel() { const readiness = getCheckoutReadiness(); return <section className={s.payment}><h2>Payment availability</h2><button disabled={!readiness.canPay} className={ui.button} aria-describedby="payment-unavailable">Pay online</button><p id="payment-unavailable">Payment is not connected. No payment can be submitted.</p><div className={s.paymentLinks}><Link href="/cart">Return to cart</Link><Link href="/pickup">Pickup details</Link></div></section>; }
