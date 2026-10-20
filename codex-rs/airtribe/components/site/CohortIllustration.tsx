import { sharedCopy } from "@/content/site";
import styles from "./site.module.css";
export function CohortIllustration({ compact = false }: { compact?: boolean }) {
  return <figure className={`${styles.cohortFigure} ${compact ? styles.cohortCompact : ""}`}><div className={styles.diagramCanvas}>
    <svg viewBox="0 0 460 400" fill="none" aria-hidden="true" className={styles.cohortSvg}>
      <path d="M20 36H440M20 358H440M40 16V378M420 16V378" stroke="#CBD3C9" />
      <circle cx="230" cy="195" r="145" stroke="#CBD3C9" strokeDasharray="3 7" />
      <circle cx="230" cy="195" r="107" fill="#ECEFE9" stroke="#CBD3C9" />
      <g stroke="#124D43" strokeWidth="1.75" strokeLinecap="round"><path d="M230 87V143M119 251L184 216M341 251L276 216M119 139L184 175M341 139L276 175M230 247V313" /></g>
      <rect x="155" y="150" width="150" height="90" rx="12" fill="#D7ED83" stroke="#124D43" strokeWidth="1.75" />
      <g stroke="#182B29" strokeWidth="1.75" strokeLinecap="round"><circle cx="215" cy="176" r="5" /><circle cx="230" cy="173" r="5" /><circle cx="245" cy="176" r="5" /><path d="M207 191C207 182 222 182 222 191M222 189C222 180 238 180 238 189M238 191C238 182 253 182 253 191" /></g>

      <g stroke="#124D43" strokeWidth="1.75"><circle cx="230" cy="74" r="19" fill="#124D43" /><circle cx="114" cy="134" r="19" fill="#FFFFFF" /><circle cx="346" cy="134" r="19" fill="#FFFFFF" /><circle cx="114" cy="258" r="19" fill="#FFFFFF" /><circle cx="346" cy="258" r="19" fill="#D7ED83" /><circle cx="230" cy="319" r="19" fill="#FFFFFF" /></g>
      <g strokeWidth="1.75" strokeLinecap="round"><path d="M222 74H238M230 66V82" stroke="#FFFFFF" /><path d="M107 134H121M114 127V141M339 134H353M346 127V141M107 258H121M114 251V265M339 258H353M346 251V265M223 319H237M230 312V326" stroke="#124D43" /></g>


      <path d="M148 70H195M267 328H286" stroke="#124D43" strokeWidth="1.75" strokeLinecap="round" />
    </svg><span className={styles.diagramLive}>Live sessions</span><span className={styles.diagramShared}>Shared cohort</span><span className={styles.diagramTech}>Tech upskilling</span></div>
    <figcaption><span className={styles.figureIndex}>FIG. 01</span>{sharedCopy.illustrationCaption}</figcaption>
  </figure>;
}
