import { contactConfig } from "@/content/site";
import { normalizeInternationalNumber } from "@/lib/appointment-message";
import styles from "./appointment.module.css";

export function AppointmentFAQ() {
  const contactsReady = Boolean(normalizeInternationalNumber(contactConfig.sms.value) || normalizeInternationalNumber(contactConfig.whatsapp.value));
  return <div className={styles.faqList}>
    <details><summary>کیا یہ فارم اپائنٹمنٹ بک کرتا ہے؟</summary><p>نہیں۔ یہ صرف درخواست کا پیغام تیار کرتا ہے۔ ملاقات کا وقت کاروبار کے جواب کے بعد طے ہوگا۔</p></details>
    <details><summary>کیا تاریخ منتخب کرنے سے وقت دستیاب ہو جاتا ہے؟</summary><p>نہیں۔ منتخب تاریخ صرف آپ کی ترجیح ہے۔ دستیابی کی تصدیق الگ سے ہوگی۔</p></details>
    <details><summary>درخواست کیسے بھیجوں؟</summary><p>{contactsReady ? "پیغام تیار کرنے کے بعد اسے ایس ایم ایس یا واٹس ایپ میں کھول کر خود بھیجیں۔" : "رابطہ نمبر دستیاب ہونے پر پیغام ایس ایم ایس یا واٹس ایپ میں کھول کر خود بھیجیں۔ ابھی نمبر شامل نہیں ہیں، اس لیے متن کاپی کیا جا سکتا ہے۔"}</p></details>
  </div>;
}
