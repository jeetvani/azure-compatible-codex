import { business } from "@/content/business";
import s from "./site.module.css";
export function PickupDetails({ readiness = false }: { readiness?: boolean }) {
 const rows = [["Location", `${business.city}, ${business.region}`], ["Address", business.address ?? "[Pickup address to be confirmed]"], ["Hours", business.hours ?? "[Pickup hours to be confirmed]"], ["Instructions", business.instructions ?? "[Pickup instructions to be confirmed]"], ...(readiness ? [["Order readiness", business.readinessProcess ?? "[Readiness process to be confirmed]"]] : [])];
 return <dl className={s.details}>{rows.map(([label,value]) => <div className={s.detailRow} key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}
