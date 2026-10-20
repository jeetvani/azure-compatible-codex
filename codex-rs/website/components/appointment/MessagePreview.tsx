"use client";

import { useRef, useState } from "react";
import styles from "./appointment.module.css";

export function MessagePreview({ message }: { message: string }) {
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const [copyStatus, setCopyStatus] = useState("");

  async function copyMessage() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopyStatus("پیغام کاپی ہو گیا۔");
    } catch {
      areaRef.current?.focus();
      areaRef.current?.select();
      setCopyStatus("براہِ کرم متن منتخب کر کے خود کاپی کریں۔");
    }
  }

  return <aside className={styles.preview} aria-labelledby="preview-title">
    <h2 id="preview-title">آپ کا پیغام</h2>
    {!message ? <p className={styles.previewHelper}>تفصیل درج کر کے پیغام تیار کریں۔</p> : <>
      <label htmlFor="message-preview">تیار شدہ پیغام</label>
      <textarea ref={areaRef} id="message-preview" className={styles.previewArea} value={message} readOnly rows={9} />
      <p className={styles.ready}>پیغام تیار ہے؛ ابھی بھیجا نہیں گیا۔</p>
    </>}
    <button type="button" className={styles.copyButton} onClick={copyMessage} disabled={!message}>پیغام کاپی کریں</button>
    <p className={styles.liveStatus} aria-live="polite">{copyStatus}</p>
  </aside>;
}
