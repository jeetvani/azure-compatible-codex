# Validation and delivery record

Date: 19 October 2026. Status: implemented local first draft; unpublished. Browser visual and interactive verification remains outstanding.

## Commands and results

| Command/check | Final result |
| --- | --- |
| `npm ci --offline --no-audit --no-fund` in `airtribe/` | Passed; installed the existing lockfile's versions from cache |
| `npm run lint` | Passed using the retained Next.js ESLint rules |
| `npm run typecheck` | Passed; strict settings retained |
| `npm run build` | Passed; all eight routes, 404 handling, robots.txt and sitemap.xml generated |
| `npm run start -- --hostname 127.0.0.1 --port 3217` | Production preview served successfully on loopback |
| `npm test` against the final rebuilt preview | 9/9 tests passed |
| HTMLParser inspection of rendered sections | All 34 planned semantic sections contain an H1 introduction or H2; one H1 on each route |

The temporary production server was stopped after verification. No hosting, publishing or external account connection was performed.

A sitemap TypeScript narrowing error and an ES2018-only regex flag in the new test were caught and fixed without relaxing configuration. Final checks were rerun. No pre-existing project was modified or tested; its status cannot be inferred from these checks. Installation reported a deprecation warning for the existing locked ESLint version, and Node 23 reported its experimental type-stripping warning during tests. Neither prevented the checks from passing.

## Verified by production HTTP and source checks

- All eight requested routes return 200; nonexistent paths and unsupported program slugs return 404.
- Every rendered header/footer link, CTA, breadcrumb and in-page anchor resolves to an implemented route/ID.
- Unique exact titles, descriptions, matching Open Graph text, English document language, one H1, header/main/footer and skip link are present.
- Every FAQ uses native details/summary; Home has 3, FAQ has 7 and the template has 2. One starts open in each region.
- The mobile menu is rendered closed with `hidden`, matching `aria-controls`, and `aria-expanded=false`. Navigation has current-route state, and a no-JavaScript link fallback is present.
- The client implementation includes an Escape handler returning focus to the toggle, closes on link click, and resets state on pathname changes, including browser history navigation. These behaviors were inspected in source, not exercised in a browser.
- The approved program collection is empty; the marked template's unknown data is null. The enrollment preview cannot interpret arbitrary query parameters as program/cohort selections.
- Enrollment's disabled button is present with an adjacent explanation. No forms, inputs, selectors, submission handlers, browser-storage simulation, contact protocols or fabricated structured data are present.
- The template/enrollment pages are noindex. With no trusted origin, the sitemap contains no URLs and robots disallows indexing without a fabricated sitemap URL. The entire unpublished draft also retains conservative noindex metadata.
- All referenced local production CSS and JavaScript assets return 200. There are no remote font/image dependencies.

## Contrast calculations

Actual implemented color-pair calculations passed WCAG AA text requirements (4.5:1) and control/focus boundary requirements (3:1). Examples:

| Combination | Ratio |
| --- | --- |
| Dark text on paper | 13.47:1 |
| Secondary text on muted surface | 5.80:1 |
| White text on deep teal | 9.68:1 |
| White text on primary hover | 12.43:1 |
| Dark text on lime | 11.53:1 |
| Control border on muted surface | 3.46:1 |
| Blue focus on paper | 5.44:1 |

The tests also cover dark, secondary and primary text on paper/white/muted surfaces, control borders and focus on each light surface, and lime on deep teal. Static status meaning is conveyed through visible text. Focus uses an immediate 3px blue outline, 3px offset and white separating halo. Accordion boundaries use the control-border token. Decorative panel lines are not used as the only button boundary.

## Browser tooling limitation — checks not claimed

Computer-use inventory exposed no connected browser surface. Selecting the installed Brave browser returned **“Computer Use was not approved to use Brave Browser.”** Browser inspection could therefore not proceed. No browser screenshots, interactive click/keyboard results, or console observations are claimed.

These checks remain outstanding in an approved browser:

- Visual rendering, reading order, clipping and horizontal overflow at 320, 375, 768, 1024 and 1440px.
- Actual browser 200% zoom/reflow.
- Opening/closing the mobile menu, Escape focus restoration, navigation/history closure, and absence of hidden tabbable menu items.
- Keyboard activation of details/summary; visible focus through the complete tab sequence; skip-link focus and scrolling.
- Disabled-button behavior through actual input.
- Reduced-motion media emulation and resulting motion/scroll behavior.
- Browser console errors, hydration behavior, and visual font rendering.

Responsive breakpoint rules, stacking, wrapping, minimum target sizes, in-flow summaries, fallback fonts, and reduced-motion styles are implemented and source-reviewed. That does not replace the browser checks above. No visual inspection at the requested sizes or zoom level was performed.

## Remaining dependencies

See README.md for the full owner-content list and category B/C requirements. Program facts, dates, curriculum, instructors, prerequisites, duration, fees/currency, outcomes, enrollment availability, terms/policies, contacts, domain and assets remain pending. Manrope/Source Sans 3 assets are not bundled; Arial/sans-serif fallbacks keep the build offline-safe. A production origin must be confirmed before discovery configuration can be completed. Real enrollment requires authoritative availability validation, persistence, consent and transaction state; owner-selected payment processing (if required) and confirmation delivery require separate authorized services and credentials.
