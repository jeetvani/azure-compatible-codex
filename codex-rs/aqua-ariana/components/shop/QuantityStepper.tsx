"use client";
import { useId, useState } from "react";
import { parseQuantity } from "@/lib/cart";
import s from "./shop.module.css";
export function QuantityStepper({ name, value, maximum, onChange, onValidityChange }: { name: string; value: number; maximum?: number; onChange: (value: number) => void; onValidityChange?: (valid: boolean) => void }) {
 const id = useId(); const [text, setText] = useState<string | null>(null);
 const displayed = text ?? String(value); const parsed = parseQuantity(displayed, maximum); const invalid = parsed === null;
 const commit = (quantity: number) => { setText(null); onChange(quantity); onValidityChange?.(true); };
 return <div className={s.quantity}><label htmlFor={id}>Quantity for {name}</label><div className={s.stepper}><button type="button" aria-label={`Decrease quantity for ${name}`} disabled={invalid || value <= 1} onClick={() => commit(value - 1)}>−</button><input id={id} type="text" inputMode="numeric" value={displayed} aria-invalid={invalid} aria-describedby={invalid ? `${id}-error` : undefined} onChange={e => { setText(e.target.value); const next = parseQuantity(e.target.value, maximum); onValidityChange?.(next !== null); if (next !== null) onChange(next); }}/><button type="button" aria-label={`Increase quantity for ${name}`} disabled={invalid || value >= Number.MAX_SAFE_INTEGER || (maximum !== undefined && value >= maximum)} onClick={() => commit(value + 1)}>+</button></div>{invalid && <p id={`${id}-error`} className={s.quantityError}>Enter a positive whole number{maximum !== undefined ? ` up to ${maximum}` : ""}.</p>}</div>;
}
