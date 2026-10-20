import assert from "node:assert/strict";
import test from "node:test";
import { buildAppointmentMessage, formatLocalDate, makeSmsHref, makeWhatsappHref, normalizeInternationalNumber, validateDraft } from "../lib/appointment-message.ts";

test("validates required trimmed fields", () => {
  assert.deepEqual(validateDraft({ name: "  ", interest: "", date: "", notes: "" }), {
    name: "براہِ کرم اپنا نام لکھیں۔",
    interest: "براہِ کرم ملبوسات کی قسم منتخب کریں۔",
  });
});

test("builds text safely with optional values and a timezone-neutral date", () => {
  const message = buildAppointmentMessage({ name: "مریم <b>", interest: "دونوں", date: "2026-11-09", notes: "سرخ رنگ" });
  assert.match(message, /مریم <b>/);
  assert.match(message, /09\/11\/2026/);
  assert.match(message, /مزید تفصیل: سرخ رنگ/);
  assert.equal(formatLocalDate("not-a-date"), "not-a-date");
});

test("only creates encoded handoff URLs for valid international numbers", () => {
  assert.equal(normalizeInternationalNumber("+1 (213) 555-0100"), "12135550100");
  assert.equal(normalizeInternationalNumber("123"), null);
  assert.equal(makeSmsHref(null, "سلام"), null);
  assert.equal(makeSmsHref("+12135550100", "سلام"), "sms:12135550100?body=%D8%B3%D9%84%D8%A7%D9%85");
  assert.equal(makeWhatsappHref("+12135550100", "سلام"), "https://wa.me/12135550100?text=%D8%B3%D9%84%D8%A7%D9%85");
});
