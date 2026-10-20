import Link from "next/link";
import styles from "./home.module.css";

type Props = { title: string; copy: string; variant: "bridal" | "party" };
export function OfferingRow({ title, copy, variant }: Props) {
  return <article className={`${styles.offering} ${variant === "party" ? styles.offeringReverse : ""}`}>
    <div className={styles.offeringCopy}><h3>{title}</h3><p>{copy}</p><Link href="/appointment-request">درخواست تیار کریں <span aria-hidden="true">←</span></Link></div>
    <div className={`${styles.swatch} ${variant === "party" ? styles.swatchParty : ""}`} aria-hidden="true"><span /></div>
  </article>;
}
