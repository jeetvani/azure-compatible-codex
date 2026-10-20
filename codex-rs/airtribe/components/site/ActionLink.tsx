import Link from "next/link";
import styles from "./site.module.css";
export function ActionLink({ href, children, variant = "primary", current = false }: { href: string; children: React.ReactNode; current?: boolean; variant?: "primary" | "secondary" | "light" }) {
  return <Link href={href} aria-current={current ? "page" : undefined} className={`${styles.action} ${styles[variant]}`}>{children}<span aria-hidden="true">↗</span></Link>;
}
