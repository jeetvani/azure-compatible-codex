# Aqua Ariana — local first draft

An English-language Next.js App Router / React 19 / TypeScript website. Built in an isolated directory because the surrounding workspace contains unrelated Rust code and website drafts. No existing project was replaced. No resources were provisioned and nothing was published.

## Run locally

```sh
npm install
npm run dev -- --hostname 127.0.0.1 --port 3102
```

For the production preview, run `npm run build` then `npm run start -- --hostname 127.0.0.1 --port 3102`.

Routes: `/` (shop and FAQ anchors), `/cart`, `/checkout`, `/pickup`. Framework robots and sitemap handlers are also included. Cart and checkout carry `noindex, follow` metadata.

## Editable content and behavior

- `content/business.ts`: confirmed business facts, null unknowns, separate draft copy.
- `content/catalog.ts`: **empty** catalog and future verified-product type. Do not add sample stock to this file.
- `content/faqs.ts`: accurate draft FAQs.
- `components/site`: shared navigation, footer, pickup information, audience rows and typographic product visual.
- `components/shop`: pending catalog, future product and quantity controls, local cart and blocked checkout.
- `app/globals.css`: exact color/type/spacing tokens and accessibility foundations. Component CSS modules hold responsive layouts.
- `lib/cart.ts`: strict quantities, verified-ID restoration, integer-minor-unit display subtotals and common-currency checks.
- `lib/checkout-readiness.ts`: explicitly closed commerce gate. No request handler or payment session exists. A public client flag, changed local storage, or a populated catalog cannot authorize checkout.

The local cart stores only known verified product IDs and positive whole quantities under `aqua-ariana:cart:v1`. Unknown IDs, invalid JSON, duplicates and invalid quantities are discarded during restoration. Storage failures leave the in-memory cart usable. No personal information is collected or persisted. Test fixtures exist only in the test file; they are never imported into the site.

No verified fonts or photographs were available. The requested font stacks fall back to local system fonts; there are no external font requests. The homepage uses the specified typographic fallback. No bottle imagery, logo, stock or environmental claims were invented.

## Business facts required before launch

Verify product identities, capacities, selling units, availability, integer minor-unit prices, currency and its minor-unit definition, tax rules and complete totals. Confirm minimum orders and any actual bulk tiers. Supply the pickup street address approved for publication, hours, instructions, order-readiness process and applicable pickup rules. Approve cancellation/refund and privacy terms. Supply verified product imagery/logo assets if desired. No public phone/email was provided or invented.

No domain is confirmed. Keep `SITE_URL` unset until an approved HTTPS public origin is available. The validator requires an HTTPS origin without credentials, path, query or fragment. With no host, canonical URLs and metadataBase are omitted, sitemap has no URL entries and robots has no sitemap declaration. Once supplied, rebuild; the sitemap includes only `/` and `/pickup`.

## B — backend dependencies (not implemented)

Authoritative availability, server-validated quantities, pricing, currency, tax calculation and payable totals; order creation/storage; pickup readiness and fulfillment handling; payment-session creation; idempotency; authenticated/verified provider callbacks; and a trustworthy confirmation flow. Real processing/retry/failure behavior must be implemented with that backend. Payment must never automatically mean ready for pickup. Transactional receipt/pickup email orchestration is required only if selected for the eventual workflow.

## C — external authorization (not supplied)

Owner-selected payment provider and authorized server-side credentials. If email is needed, an authorized email provider and verified sender. Credentials must remain server-side and out of source control. No provider was selected or connected. There are no analytics, map integrations or external accounts.

## Validation

- `npm test`: 5 tests passed for the shipped empty catalog, closed checkout, malformed/unsafe quantities, invalid JSON, unknown/unverified IDs, duplicate entries, persistence round trips, quantity updates, removal, mixed currencies and safe minor-unit subtotals.
- `npm run lint`: passed.
- `npm run typecheck`: passed after fixing sitemap closure narrowing.
- `npm run build`: passed; all four pages and robots/sitemap prerendered.
- Local HTTP checks: all four routes returned successfully; exactly one H1 each; navigation destinations and shop/FAQ anchors exist; correct page/Open Graph metadata; cart/checkout noindex; no purchaser/payment inputs; commerce buttons natively disabled with descriptions; no fabricated sitemap host.
- Desktop browser: homepage visual, product fallback and catalog accessibility tree inspected; home wordmark navigation verified. The available native browser tooling was interrupted by changes to the user's browser, so precise viewport checks at 320/375/768/1024/1440, 200% zoom, mobile-menu keyboard/Escape behavior, all FAQ interactions and browser-storage tampering could not be fully verified. These remain manual QA items. Persistence and tampering guards were exercised at the utility level, not through a browser storage editor.
- Contrast calculations: forest/white 7.13:1; secondary/background 7.30:1; primary text/background 16.74:1; border/background 4.59:1; focus/white 9.46:1; error/white 8.31:1. Source includes 48px buttons, 44px-minimum stepper targets, visible focus, native disclosures, reduced-motion overrides and responsive stacking; these do not substitute for the remaining browser QA.

Online payment and order processing are **not connected**. This is a finished interface draft, not an operational shop.
