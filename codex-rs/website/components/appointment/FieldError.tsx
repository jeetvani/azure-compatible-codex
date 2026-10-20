import styles from "./appointment.module.css";

export function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return <p id={id} className={styles.error} role="alert">{children}</p>;
}
