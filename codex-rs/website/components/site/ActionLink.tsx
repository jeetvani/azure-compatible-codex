import Link from "next/link";
import styles from "./site.module.css";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "white"; darkFocus?: boolean };

export function ActionLink({ href, children, variant = "primary", darkFocus = false }: Props) {
  const className = `${variant === "primary" ? styles.ctaLink : variant === "white" ? styles.whiteLink : styles.secondaryLink} ${darkFocus ? styles.darkFocus : ""}`;
  return <Link href={href} className={className}>{children}</Link>;
}
