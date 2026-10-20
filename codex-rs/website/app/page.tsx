import { ActionLink } from "@/components/site/ActionLink";
import { ContactActions } from "@/components/site/ContactActions";
import { Container } from "@/components/site/Container";
import { EnquirySteps } from "@/components/site/EnquirySteps";
import { OfferingRow } from "@/components/site/OfferingRow";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { TextileArch } from "@/components/site/TextileArch";
import { WovenDivider } from "@/components/site/WovenDivider";
import styles from "@/components/site/home.module.css";

export default function HomePage() {
  return <>
    <SiteHeader route="home" />
    <main id="main-content">
      <section className={styles.hero}><Container><div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>ایل اے کے علاقے کے لیے</p>
          <h1>دلہن اور اس کی سہیلیوں کے لیے شادی کے ملبوسات</h1>
          <p>بھارتی اور جنوبی ایشیائی عروسی ملبوسات اور برائیڈز میڈ ڈریسز کے بارے میں بات کریں۔ اپنی ضرورت بتائیں اور ملاقات کے لیے درخواست تیار کریں۔</p>
          <div className={styles.heroActions}><ActionLink href="/appointment-request">اپائنٹمنٹ کی درخواست</ActionLink><ActionLink href="#contact" variant="secondary">رابطے کے طریقے</ActionLink></div>
          <p className={styles.helper}>درخواست بھیجنا اپائنٹمنٹ کی تصدیق نہیں ہے۔</p>
        </div>
        <div className={styles.heroArt}><TextileArch /></div>
      </div></Container></section>
      <WovenDivider />
      <section id="attire" className={styles.attire}><Container>
        <SectionHeading title="شادی کے ملبوسات" intro="دلہن اور برائیڈل پارٹی کے لیے اپنی ضرورت کے مطابق گفتگو شروع کریں۔" />
        <div className={styles.offerings}>
          <OfferingRow variant="bridal" title="عروسی ملبوسات" copy="بھارتی اور جنوبی ایشیائی عروسی ملبوسات کے بارے میں دریافت کریں اور اپنی پسند بتائیں۔" />
          <OfferingRow variant="party" title="برائیڈز میڈ ڈریسز" copy="دلہن کی سہیلیوں کے ملبوسات کے لیے اپنی پسند اور گروپ کی ضرورت بتائیں۔" />
        </div>
      </Container></section>
      <section className={styles.stepsSection}><Container>
        <SectionHeading title="ملاقات کی درخواست کیسے تیار کریں؟" />
        <EnquirySteps />
      </Container></section>
      <section id="contact" className={styles.contact}><Container><div className={styles.contactGrid}>
        <div><h2>اپنی ضرورت پر بات کریں</h2><p>ایس ایم ایس یا واٹس ایپ کے ذریعے ملبوسات اور اپائنٹمنٹ کے بارے میں دریافت کریں۔</p></div>
        <div className={styles.contactButtons}><ContactActions /><ActionLink href="/appointment-request" variant="white" darkFocus>درخواست کا متن تیار کریں</ActionLink></div>
      </div></Container></section>
    </main>
    <SiteFooter />
  </>;
}
