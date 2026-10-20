export const siteIdentity = {
  name: "Neha Dressing Center",
  displayName: "نیہا ڈریسنگ سینٹر",
  nameIsProvisional: true,
  regionLabel: "ایل اے کے علاقے",
  regionIsProvisional: true,
} as const;

export type ContactChannel = {
  label: string;
  value: string | null;
};

export const contactConfig: {
  sms: ContactChannel;
  whatsapp: ContactChannel;
} = {
  sms: { label: "ایس ایم ایس", value: null },
  whatsapp: { label: "واٹس ایپ", value: null },
};

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? null;

export const publicSiteUrl = (() => {
  if (!configuredUrl) return null;
  try {
    const url = new URL(configuredUrl);
    return url.protocol === "https:" ? url : null;
  } catch {
    return null;
  }
})();

export const metadataCopy = {
  home: {
    title: `${siteIdentity.displayName} | ایل اے میں شادی کے ملبوسات`,
    description:
      "ایل اے کے علاقے میں بھارتی اور جنوبی ایشیائی عروسی ملبوسات اور برائیڈز میڈ ڈریسز کے بارے میں دریافت کریں اور اپائنٹمنٹ کی درخواست کا متن تیار کریں۔",
  },
  appointment: {
    title: `اپائنٹمنٹ کی درخواست | ${siteIdentity.displayName}`,
    description:
      "ملبوسات کی ضرورت اور پسندیدہ تاریخ کے ساتھ اپائنٹمنٹ کی درخواست کا پیغام تیار کریں۔ یہ فارم خودکار بکنگ یا ارسال نہیں کرتا۔",
  },
} as const;
