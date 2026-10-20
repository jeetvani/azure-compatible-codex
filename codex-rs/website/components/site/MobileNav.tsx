"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./site.module.css";

const links = [
  ["ہوم", "/"], ["ملبوسات", "/#attire"], ["رابطہ", "/#contact"], ["اپائنٹمنٹ کی درخواست", "/appointment-request"],
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const id = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); buttonRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return <div className={styles.mobileWrap}>
    <button ref={buttonRef} type="button" className={styles.menuButton} aria-expanded={open} aria-controls={id} onClick={() => setOpen((value) => !value)}>مینو</button>
    {open && <div id={id} className={styles.mobilePanel}>
      <nav className={styles.mobileNav} aria-label="موبائل نیویگیشن">
        {links.map(([label, href]) => <Link key={href} className={styles.navLink} href={href} aria-current={(href === "/" && pathname === "/") || (href === "/appointment-request" && pathname === href) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
    </div>}
  </div>;
}
