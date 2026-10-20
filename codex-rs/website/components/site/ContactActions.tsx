import { contactConfig } from "@/content/site";
import { makeSmsHref, makeWhatsappHref, normalizeInternationalNumber } from "@/lib/appointment-message";
import styles from "./site.module.css";

type Props = { message?: string; mode?: "dark" | "light"; requireMessage?: boolean };

export function ContactActions({ message = "", mode = "dark", requireMessage = false }: Props) {
  const smsConfigured = Boolean(normalizeInternationalNumber(contactConfig.sms.value));
  const whatsappConfigured = Boolean(normalizeInternationalNumber(contactConfig.whatsapp.value));
  const canHandoff = !requireMessage || Boolean(message);
  const smsHref = canHandoff ? makeSmsHref(contactConfig.sms.value, message) : null;
  const whatsappHref = canHandoff ? makeWhatsappHref(contactConfig.whatsapp.value, message) : null;
  const unavailable = !smsConfigured && !whatsappConfigured;
  const waitingForMessage = !unavailable && !canHandoff;
  return <div className={styles.contactActions}>
    {smsHref ? <a className={styles.contactLink} href={smsHref}>ایس ایم ایس میں کھولیں</a> : <button className={styles.contactDisabled} type="button" disabled>{smsConfigured ? "ایس ایم ایس — پہلے پیغام تیار کریں" : "ایس ایم ایس — نمبر درکار"}</button>}
    {whatsappHref ? <a className={styles.contactLink} href={whatsappHref} target="_blank" rel="noreferrer">واٹس ایپ میں کھولیں</a> : <button className={styles.contactDisabled} type="button" disabled>{whatsappConfigured ? "واٹس ایپ — پہلے پیغام تیار کریں" : "واٹس ایپ — نمبر درکار"}</button>}
    <p className={styles.contactHelp} style={mode === "light" ? { color: "var(--muted)" } : undefined}>
      {unavailable ? "رابطہ نمبر ابھی شامل نہیں کیے گئے۔ فی الحال درخواست کا متن تیار کر کے کاپی کیا جا سکتا ہے۔" : waitingForMessage ? "پہلے موجودہ تفصیل سے پیغام تیار کریں۔" : "پیغام متعلقہ ایپ میں کھلے گا؛ اسے بھیجنے کا فیصلہ آپ کریں گے۔"}
    </p>
  </div>;
}
