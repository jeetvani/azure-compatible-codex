"use client";

import { useRef, useState } from "react";
import { AppointmentDraft, buildAppointmentMessage, INTERESTS, validateDraft } from "@/lib/appointment-message";
import { ContactActions } from "@/components/site/ContactActions";
import { Container } from "@/components/site/Container";
import { FieldError } from "./FieldError";
import { MessagePreview } from "./MessagePreview";
import styles from "./appointment.module.css";

const EMPTY: AppointmentDraft = { name: "", interest: "", date: "", notes: "" };

export function AppointmentComposer() {
  const [draft, setDraft] = useState(EMPTY);
  const [errors, setErrors] = useState<ReturnType<typeof validateDraft>>({});
  const [message, setMessage] = useState("");
  const [generationStatus, setGenerationStatus] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const interestRef = useRef<HTMLSelectElement>(null);

  function update<K extends keyof AppointmentDraft>(key: K, value: AppointmentDraft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (message) {
      setMessage("");
      setGenerationStatus("تفصیل بدل گئی ہے۔ نیا پیغام تیار کریں۔");
    }
  }

  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateDraft(draft);
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.interest) {
      setMessage("");
      setGenerationStatus("");
      (nextErrors.name ? nameRef.current : interestRef.current)?.focus();
      return;
    }
    setMessage(buildAppointmentMessage(draft));
    setGenerationStatus("پیغام تیار ہے؛ ابھی بھیجا نہیں گیا۔");
  }

  return <>
    <section className={styles.composerSection} aria-labelledby="composer-title"><Container>
      <div className={styles.composerGrid}>
        <form className={styles.form} onSubmit={prepare} noValidate>
          <h2 id="composer-title">درخواست کا متن تیار کریں</h2>
          <div className={styles.field}>
            <label htmlFor="name">آپ کا نام <span aria-hidden="true">*</span></label>
            <input ref={nameRef} id="name" name="name" required maxLength={100} value={draft.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={`name-limit${errors.name ? " name-error" : ""}`} />
            <p id="name-limit" className={styles.help}>زیادہ سے زیادہ ۱۰۰ حروف</p>
            <FieldError id="name-error">{errors.name}</FieldError>
          </div>
          <div className={styles.field}>
            <label htmlFor="interest">آپ کس کے لیے دریافت کر رہے ہیں؟ <span aria-hidden="true">*</span></label>
            <select ref={interestRef} id="interest" name="interest" required value={draft.interest} onChange={(event) => update("interest", event.target.value)} aria-invalid={Boolean(errors.interest)} aria-describedby={errors.interest ? "interest-error" : undefined}>
              <option value="">انتخاب کریں</option>{INTERESTS.map((interest) => <option key={interest}>{interest}</option>)}
            </select>
            <FieldError id="interest-error">{errors.interest}</FieldError>
          </div>
          <div className={styles.field}>
            <label htmlFor="date">پسندیدہ تاریخ (اختیاری)</label>
            <input id="date" className={styles.dateInput} name="date" type="date" value={draft.date} onChange={(event) => update("date", event.target.value)} aria-describedby="date-help" />
            <p id="date-help" className={styles.help}>یہ صرف آپ کی ترجیح ہے، دستیابی کی تصدیق نہیں۔</p>
          </div>
          <div className={styles.field}>
            <label htmlFor="notes">مزید تفصیل (اختیاری)</label>
            <textarea id="notes" name="notes" rows={6} maxLength={1000} value={draft.notes} onChange={(event) => update("notes", event.target.value)} aria-describedby="notes-help" />
            <p id="notes-help" className={styles.help}>زیادہ سے زیادہ ۱۰۰۰ حروف</p>
          </div>
          <p className={styles.privacyHelp}>یہ معلومات صرف اسی صفحے پر پیغام بنانے کے لیے استعمال ہوتی ہیں؛ اس مسودے میں انہیں محفوظ یا ارسال نہیں کیا جاتا۔</p>
          <button className={styles.prepareButton} type="submit">پیغام تیار کریں</button>
          <p className={styles.liveStatus} aria-live="polite">{generationStatus}</p>
        </form>
        <MessagePreview message={message} />
      </div>
    </Container></section>
    <section className={styles.handoff} aria-labelledby="handoff-title"><Container><div className={styles.handoffGrid}>
      <div><h2 id="handoff-title">پیغام خود بھیجیں</h2><p>رابطہ دستیاب ہونے پر تیار شدہ پیغام اپنی پسند کی ایپ میں کھولیں۔ ایپ کھلنا پیغام بھیجنا نہیں ہے۔</p></div>
      <ContactActions message={message} mode="dark" requireMessage />
    </div></Container></section>
  </>;
}
