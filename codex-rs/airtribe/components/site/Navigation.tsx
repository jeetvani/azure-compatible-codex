"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";
import { ActionLink } from "./ActionLink";
import styles from "./site.module.css";
export function Navigation() {
  const pathname = usePathname();
  return <NavigationContent key={pathname} pathname={pathname} />;
}
function NavigationContent({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); button.current?.focus(); } };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  const active = (href: string) => pathname === href ? "page" as const : pathname.startsWith(href + "/") ? "location" as const : undefined;
  return <>
    <nav className={styles.desktopNav} aria-label="Main navigation">
      {navigation.map(link => <Link key={link.href} href={link.href} aria-current={active(link.href)}>{link.label}</Link>)}
      <ActionLink href="/enroll" current={pathname === "/enroll"}>Enroll now</ActionLink>
    </nav>
    <button ref={button} className={styles.menuButton} type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
    <nav id="mobile-navigation" className={styles.mobileNav} aria-label="Mobile navigation" hidden={!open}>
      {[...navigation, { label: "Contact", href: "/contact" }, { label: "Enroll now", href: "/enroll" }].map(link => <Link key={link.href} href={link.href} aria-current={active(link.href)} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></Link>)}
    </nav>
  </>;
}
