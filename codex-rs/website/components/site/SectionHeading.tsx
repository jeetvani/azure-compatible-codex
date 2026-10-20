import styles from "./site.module.css";

type Props = { title: string; intro?: string; eyebrow?: string; id?: string };
export function SectionHeading({ title, intro, eyebrow, id }: Props) {
  return <div className={styles.sectionHeading}>{eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}<h2 id={id}>{title}</h2>{intro && <p>{intro}</p>}</div>;
}
