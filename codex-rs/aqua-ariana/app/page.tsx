import { pageMetadata } from "@/lib/metadata";
import { draftCopy } from "@/content/business";
import { homeFAQs } from "@/content/faqs";
import { Container, ButtonLink, TextLink, SectionHeading } from "@/components/ui";
import { HeroProductVisual } from "@/components/site/HeroProductVisual";
import { CatalogSection } from "@/components/shop/CatalogSection";
import { PickupDetails } from "@/components/site/PickupDetails";
import { AudienceRow } from "@/components/site/AudienceRow";
import { FAQList } from "@/components/site/FAQList";
import s from "@/components/site/site.module.css";
import h from "@/components/site/home.module.css";
export const metadata = pageMetadata("/", "Aqua Ariana | Bottled water in San Francisco", "Bottled drinking water for offices, events, restaurants and shops. View Aqua Ariana product information and pickup details for San Francisco.");
export default function Home() { return <><section className={h.hero}><Container><div className={h.heroGrid}><div className={h.heroCopy}><p className={s.eyebrow}>Pickup only · San Francisco</p><h1>Bottled water for your business.</h1><p>{draftCopy.hero}</p><div className={`${s.actions} ${h.heroActions}`}><ButtonLink href="/#shop">Buy online</ButtonLink><ButtonLink href="/pickup" secondary>Pickup details</ButtonLink></div><p className={h.heroNote}>Online ordering is not available yet.</p></div><HeroProductVisual/></div></Container></section><CatalogSection/><section className={`${s.section} ${h.pickupBand}`}><Container><div className={h.pickupGrid}><div className={h.pickupCopy}><p className={h.sectionLabel}>Pickup information</p><h2>Plan your pickup.</h2><p>Pickup is in San Francisco. The street address, hours and pickup instructions are still to be confirmed. These details must be available before an order can be placed.</p><TextLink href="/pickup">View pickup details</TextLink></div><PickupDetails/></div></Container></section><section className={`${s.section} ${h.audiences}`}><Container><SectionHeading title="For offices, events, restaurants and shops."/><AudienceRow/><TextLink href="/#shop">Browse bottles</TextLink></Container></section><section id="faq" className={`${s.section} ${h.faqSection}`}><Container><div className={s.faq}><SectionHeading title="Before you order."/><FAQList items={homeFAQs}/></div></Container></section></>; }
