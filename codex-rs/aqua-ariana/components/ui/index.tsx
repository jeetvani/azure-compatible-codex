import Link from "next/link";
import type { ReactNode } from "react";
import s from "@/components/site/site.module.css";
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) { return <div className={`${s.container} ${className}`}>{children}</div>; }
export function ButtonLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) { return <Link href={href} className={`${s.button} ${secondary ? s.secondary : ""}`}>{children}</Link>; }
export function TextLink({ href, children }: { href: string; children: ReactNode }) { return <Link href={href}>{children}</Link>; }
export function SectionHeading({ title, children }: { title: string; children?: ReactNode }) { return <div className={s.sectionHeading}><h2>{title}</h2>{children && <p>{children}</p>}</div>; }
export function StatusNotice({ children }: { children: ReactNode }) { return <div className={s.notice}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v1"/></svg><div>{children}</div></div>; }
