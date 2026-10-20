import { pageMetadata } from "@/lib/metadata";
import { pickupFAQs } from "@/content/faqs";
import { Container, ButtonLink, SectionHeading, StatusNotice } from "@/components/ui";
import { PickupDetails } from "@/components/site/PickupDetails";
import { FAQList } from "@/components/site/FAQList";
import s from "@/components/site/site.module.css";
export const metadata = pageMetadata("/pickup", "Pickup details | Aqua Ariana", "Review Aqua Ariana pickup information for San Francisco, including the current status of the address, hours and pickup instructions.");
export default function Pickup() { return <div className={s.section}><Container><div className={s.pageIntro}><p className={s.eyebrow}>Pickup only</p><h1>Pickup in San Francisco.</h1><p>Aqua Ariana uses a pickup model in San Francisco. Review the location and instructions here before placing an order.</p><StatusNotice>Pickup details are not complete yet.</StatusNotice></div><section className={s.pickupLocation}><SectionHeading title="Location and pickup details"/><PickupDetails readiness/></section><section className={s.faq}><SectionHeading title="Pickup and ordering questions"/><FAQList items={pickupFAQs}/></section><section className={s.returnRow}><div><h2>Review the product information</h2><p>Return to the shop section to see the current catalog status.</p></div><ButtonLink href="/#shop">Browse bottles</ButtonLink></section></Container></div>; }
