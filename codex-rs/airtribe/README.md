# Airtribe — the live learning fieldbook

An unpublished, English first-draft website for Airtribe. This is a proposed visual system and draft editorial copy, not an established brand identity. The site uses Next.js App Router, React 19, TypeScript, and CSS modules. It does not collect personal information or accept enrollment requests or payments.

## Workspace and files

The original workspace was inspected before implementation. `../website/` contains an unrelated clothing-business draft; it and all Rust/repository changes were preserved. Airtribe is isolated in this directory with a single `app/` root. Dependency ranges, resolved dependency versions, strict TypeScript settings, ESLint configuration, and `poweredByHeader: false` were retained from the existing Next.js project. No packages were added to that project.

- `app/`: eight requested pages, layout, global tokens, missing-page handling, robots and sitemap.
- `components/site/`: shared navigation, footer, actions, section layouts, pending panel, definition lists, native FAQ accordions, and original SVG/CSS cohort illustration. The Container component reuses the workspace equivalent.
- `content/site.ts`: approved business facts, draft settings, navigation, metadata and editorial copy.
- `content/programs.ts`: empty approved catalog, separate pending template, future program schema, and enrollment/readiness copy.
- `content/faqs.ts`: shared FAQ answers used on Home, FAQ and the detail template.
- `lib/metadata.ts`: metadata helper and explicitly unconfigured production origin.
- `tests/draft-boundaries.test.ts`: production HTTP and content-boundary checks.
- `VALIDATION.md`: completed checks, findings and browser-testing limits.

## Run locally

```sh
cd airtribe
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3217
```

Visit `http://127.0.0.1:3217`. The site has no runtime external connections. Manrope and Source Sans 3 are declared with Arial/sans-serif fallbacks; font files were not available and no remote font build dependency was introduced. Consequently, exact font appearance depends on locally available fonts. All illustration assets are original inline SVG/CSS, with readable HTML labels.

For production verification:

```sh
npm run lint
npm run typecheck
npm run build
npm run start -- --hostname 127.0.0.1 --port 3217
```

In another terminal, from this directory, run `npm test`. Tests require that local production server on port 3217. Stop the preview with Ctrl+C when finished.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Hero, live positioning, pending programs, cohort format, FAQ preview, enrollment readiness |
| `/programs` | Pending catalog, pre-enrollment review guide, availability notice |
| `/programs/program-details` | Explicit draft template; overview, facts, enrollment summary, curriculum, dates, learning details, questions |
| `/how-live-cohorts-work` | Confirmed format, program details to review, programs action |
| `/enroll` | Disconnected preview, pending selection facts, website prerequisites, available next actions |
| `/faq` | Seven shared native disclosure accordions and alternative navigation |
| `/about` | Confirmed company, audience and offering information |
| `/contact` | Public-contact pending state and relevant site alternatives |

Unsupported routes, including fictional program slugs, return 404. There are zero real program entries. The template is separate from the catalog and does not imply availability. Its content components can be populated from future approved program data without changing the visual layout; routing and real enrollment still require implementation. Query strings on the enrollment page do not create selections or echo arbitrary program information.

## Pending owner content

Program titles and overviews; curriculum and learning requirements; cohort dates, session schedules and time zones; duration; instructors; prerequisites and learning expectations; fees and currencies; enrollment availability; outcomes; policies and enrollment terms; public contact methods; production domain; owner-approved brand and font assets. No values have been invented. The ambiguous business-model input “both” is not interpreted as customer segments or delivery modes.

## Direct-enrollment dependencies

**Category B — infrastructure, not implemented:** authoritative program/cohort availability validation; real enrollment creation and persistence; approved enrollment terms; privacy and consent handling; authoritative transaction state. The visible readiness checklist describes website requirements, not admissions criteria. There are no forms, submission handlers, mock APIs, records, localStorage simulations, or success screens.

**Category C — authorized external services, not connected:** payment processing only if required by the owner-approved enrollment process, and enrollment confirmation delivery through an authorized provider. These require owner-selected services and credentials plus category B work. Nothing is provisioned or connected. Analytics, maps, chat and external accounts are absent.

## Discovery and publication

A trusted production origin was not present. `productionOrigin` remains `null`; the sitemap is empty and robots.txt has no sitemap URL and disallows crawling. Root metadata conservatively marks the entire unpublished draft noindex; the template and enrollment preview also explicitly set noindex. No canonical URL, absolute OG URL, fake domain, Course/Offer/Review/LocalBusiness schema or fabricated legal-policy links are emitted. Matching text Open Graph metadata is supplied per route; no raster OG asset is assumed.

Before any separately authorized launch, supply the trusted origin in `lib/metadata.ts`, review indexing in `app/layout.tsx`, and retain noindex/exclusion for the template and enrollment preview. Owner content and category B/C work remain blockers for real enrollment. This task includes no deployment or publishing.
