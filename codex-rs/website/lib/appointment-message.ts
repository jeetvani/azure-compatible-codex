export const INTERESTS = [
  "عروسی ملبوسات",
  "برائیڈز میڈ ڈریسز",
  "دونوں",
] as const;

export type Interest = (typeof INTERESTS)[number];

export type AppointmentDraft = {
  name: string;
  interest: string;
  date: string;
  notes: string;
};

export type DraftErrors = Partial<Record<"name" | "interest", string>>;

export function validateDraft(draft: AppointmentDraft): DraftErrors {
  const errors: DraftErrors = {};
  if (!draft.name.trim()) errors.name = "براہِ کرم اپنا نام لکھیں۔";
  if (!INTERESTS.includes(draft.interest as Interest)) {
    errors.interest = "براہِ کرم ملبوسات کی قسم منتخب کریں۔";
  }
  return errors;
}

export function formatLocalDate(value: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;
  const [, year, month, day] = match;
  return `${day}/${month}/${year}`;
}

export function buildAppointmentMessage(draft: AppointmentDraft): string {
  const lines = [
    `السلام علیکم، میرا نام ${draft.name.trim()} ہے۔ میں ${draft.interest} کے بارے میں دریافت کرنا چاہتا/چاہتی ہوں۔`,
  ];
  if (draft.date) lines.push(`پسندیدہ تاریخ: ${formatLocalDate(draft.date)}`);
  if (draft.notes.trim()) lines.push(`مزید تفصیل: ${draft.notes.trim()}`);
  lines.push("براہِ کرم اپائنٹمنٹ کے ممکنہ وقت کے بارے میں بتائیں۔");
  return lines.join("\n");
}

export function normalizeInternationalNumber(value: string | null): string | null {
  if (!value) return null;
  const digits = value.replace(/[\s()+.-]/g, "");
  return /^[1-9]\d{7,14}$/.test(digits) ? digits : null;
}

export function makeSmsHref(value: string | null, message: string): string | null {
  const digits = normalizeInternationalNumber(value);
  if (!digits) return null;
  // SMS query handling varies by device; this conservative form is user-initiated.
  return message ? `sms:${digits}?body=${encodeURIComponent(message)}` : `sms:${digits}`;
}

export function makeWhatsappHref(value: string | null, message: string): string | null {
  const digits = normalizeInternationalNumber(value);
  if (!digits) return null;
  return message ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}` : `https://wa.me/${digits}`;
}
