import type { Metadata } from "next";
import { AppointmentComposer } from "@/components/appointment/AppointmentComposer";
import { AppointmentFAQ } from "@/components/appointment/AppointmentFAQ";
import appointmentStyles from "@/components/appointment/appointment.module.css";
import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { WovenDivider } from "@/components/site/WovenDivider";
import { metadataCopy } from "@/content/site";

export const metadata: Metadata = {
  title: metadataCopy.appointment.title,
  description: metadataCopy.appointment.description,
  openGraph: { title: metadataCopy.appointment.title, description: metadataCopy.appointment.description, type: "website", locale: "ur_PK" },
};

export default function AppointmentPage() {
  return <>
    <SiteHeader route="appointment" />
    <main id="main-content">
      <section className={appointmentStyles.intro}><Container><div className={appointmentStyles.introGrid}>
        <div><h1>اپائنٹمنٹ کی درخواست</h1><p>اپنی ضرورت اور پسندیدہ تاریخ لکھ کر ایک پیغام تیار کریں۔ یہ فارم خود بخود درخواست نہیں بھیجتا۔</p></div>
        <aside className={appointmentStyles.notice}><strong>یہ اپائنٹمنٹ کی تصدیق نہیں ہے۔</strong><p>وقت کی تصدیق کاروبار کے جواب سے ہوگی۔</p></aside>
      </div></Container></section>
      <WovenDivider />
      <AppointmentComposer />
      <section className={appointmentStyles.faq} aria-labelledby="faq-title"><Container>
        <SectionHeading id="faq-title" title="مختصر سوالات" />
        <AppointmentFAQ />
      </Container></section>
    </main>
    <SiteFooter />
  </>;
}
