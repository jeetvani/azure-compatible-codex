import { ActionLink } from "./ActionLink";
import styles from "./home.module.css";

const steps = [
  ["۱", "اپنی ضرورت بتائیں", "عروسی ملبوسات یا برائیڈز میڈ ڈریسز کا انتخاب کریں۔"],
  ["۲", "پسندیدہ تاریخ لکھیں", "اگر کوئی تاریخ ذہن میں ہے تو اسے پیغام میں شامل کریں۔"],
  ["۳", "پیغام بھیجیں، پھر جواب کا انتظار کریں", "رابطہ دستیاب ہونے پر پیغام خود بھیجیں۔ وقت کی تصدیق کاروبار کے جواب سے ہوگی۔"],
] as const;

export function EnquirySteps() {
  return <><ol className={styles.steps}>{steps.map(([number, title, copy]) => <li key={number}><span className={styles.stepNumber}>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol><div className={styles.stepsAction}><ActionLink href="/appointment-request">اپائنٹمنٹ کی درخواست</ActionLink></div></>;
}
