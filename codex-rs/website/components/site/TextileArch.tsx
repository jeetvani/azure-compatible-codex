import styles from "./home.module.css";

export function TextileArch() {
  return <div className={styles.arch} aria-hidden="true">
    <div className={styles.archInner}><span className={styles.archDiamond} /><span className={styles.archDiamond} /><span className={styles.archDiamond} /></div>
  </div>;
}
