"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useCart } from "@/components/shop/CartProvider";
import { Container } from "@/components/ui";
import s from "./site.module.css";
const links = [{ label: "Shop", href: "/#shop" }, { label: "Pickup", href: "/pickup" }, { label: "FAQ", href: "/#faq" }];
export function SiteHeader() {
 const path = usePathname(); const { count } = useCart();
 const [open, setOpen] = useState(false); const trigger = useRef<HTMLButtonElement>(null);
 const close = () => setOpen(false);
 const navLinks = <>{links.map(link => <Link className={s.navLink} key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined} onClick={close}>{link.label}</Link>)}<Link className={s.navLink} href="/cart" aria-current={path === "/cart" ? "page" : undefined} onClick={close}>Cart ({count})</Link><Link className={s.button} href="/#shop" onClick={close}>Buy online</Link></>;
 return <header className={s.header} onKeyDown={e => { if (e.key === "Escape" && open) { close(); trigger.current?.focus(); } }}><Container><div className={s.headerRow}><Link className={s.wordmark} href="/" onClick={close} aria-current={path === "/" ? "page" : undefined}>Aqua Ariana</Link><nav className={s.desktopNav} aria-label="Main navigation">{navLinks}</nav><div className={s.mobileControls}><Link className={s.navLink} href="/cart" onClick={close} aria-current={path === "/cart" ? "page" : undefined}>Cart ({count})</Link><button ref={trigger} className={s.menuButton} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>Menu <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 8h16M4 16h16"}/></svg></button></div></div><MobileNavigation open={open}>{navLinks}</MobileNavigation></Container></header>;
}
function MobileNavigation({open, children}: {open: boolean; children: React.ReactNode}) { return <div id="mobile-navigation" className={s.mobilePanel} hidden={!open}><nav aria-label="Mobile main navigation">{children}</nav></div>; }
