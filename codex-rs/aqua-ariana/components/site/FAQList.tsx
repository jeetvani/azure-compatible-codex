import Link from "next/link";
import type { FAQ } from "@/content/faqs";
import s from "./site.module.css";
export function FAQList({ items }: { items: FAQ[] }) { return <div className={s.faqList}>{items.map(item => <details className={s.faqItem} key={item.question}><summary>{item.question}</summary><p>{item.answer}{item.pickupLink && <><br/><Link href="/pickup">View pickup details</Link></>}</p></details>)}</div>; }
