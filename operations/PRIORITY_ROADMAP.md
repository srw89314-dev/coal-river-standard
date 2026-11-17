# Coal River Standard — priority roadmap and ownership
Updated November 16, 2026. Canonical 24-task list remains BACKLOG.md. This file orders existing tasks by first-client dependency; it does not add tasks or authorize public launch.

## Progress definition
- **Overall business build estimate before this phase:** approximately 66% (subjective weighted estimate; not the 2/24 strict task closure score).
- **After this phase:** approximately 67% (provisional; offline report draft code and regression tests implemented, not production analytics).
- **Fully closed master tasks:** 2/24; unchanged. Do not treat estimates as a certification of legal or operational readiness.
- First paying client requires all legal/payment/data/delivery minimum gates, even if the weighted percentage is high.

## Phase 1 — Business/legal/payment foundation (highest priority)
**Tasks:** 3,4,5,6,7,8,9,10,11.
**Owner:** Apply for free EIN using IRS official process, save confirmation in private business storage; review/sign existing operating agreement; call St. Albans for license/home occupation/B&O; confirm Fifth Third outside-business policy; connect business-owned Drive; choose and open checking/tax-reserve accounts; verify Stripe identity/bank; confirm tax classifications with qualified local professional where needed.
**Assistant:** Keep formation status accurate (effective 2026-11-10, WV tax accepted); provide forms, storage access tests, banking comparison, bookkeeping templates and test-case scripts; never enter owner credentials or file taxes without authorization.
**Blocked until owner:** Actual EIN, signed agreement, city/employer approvals, business Drive, bank account and Stripe activation.
**Gate:** Documents stored privately, business compliance confirmed, payments tested without real charges.

## Phase 2 — First-client operating workflow
**Tasks:** 12,13,17, with reuse of completed Task 2.
**Assistant:** Complete intake-to-proposal-to-approval-to-handoff runbook; build authenticated client app only after safe data backend/access rules are available; test fictional project; track hours and margin.
**Owner:** Approve hosting/ownership/support terms and reviewed agreement; provide business storage/identity access when needed.
**Gate:** End-to-end fictional client test including test payment, rollback and secure handoff. Secure manual records can substitute for full CRM for initial basic projects.

## Phase 3 — Website, showroom, acceptance
**Tasks:** 18,19,20,21.
**Assistant:** Maintain three fictional demos, test nested links/CSP, run mobile/browser/accessibility/form/security/rollback acceptance, prepare SEO and privacy for final domain.
**Owner:** Choose and control domain, approve public business identity and final customer-facing copy.
**Gate:** Browser and live form checks passed, privacy and index settings appropriate, rollback tested. Keep team login and noindex before launch.

## Phase 4 — Efficient reporting and optional recurring services
**Tasks:** 14,15,16.
**Assistant:** Validate analytics provider on owned test property, define metrics and consent, generate owner-reviewed reports, measure costs and propose pricing.
**Owner:** Approve provider/privacy, reporting service level and recurring prices. Never promise unapproved fees.
**Implemented this batch:** reporting/monthly-report.cjs creates local **draft-only** markdown from supplied JSON metrics, with explicit missing-data handling, zero-baseline handling, inquiry/click separation and mandatory owner review; tests/monthly-report.test.cjs added to GitHub Actions. No live data integration, no actual client reports, no approval automation.
**Gate:** Measured data with source and limitations, owner-reviewed report, recurring economics approved.

## Phase 5 — Launch, outreach and expansion
**Tasks:** 22,23,24.
**Assistant:** Prepare release, launch QA, prospect research and outreach drafts, track conversion and costs after authorized launch.
**Owner:** Explicitly approve public launch and separately approve external outreach and any real transactions.
**Gate:** Required readiness gates passed and approval recorded.

## Immediate owner action queue (no 50-question interview)
1. Obtain EIN at https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number and save confirmation **privately**.
2. Review/sign the existing operating agreement; confirm St. Albans city requirements and employer outside-business clearance.
3. Connect business-owned storage as coalriverstandard@gmail.com, then open business checking and tax-reserve accounts.
4. Configure Stripe identity and bank in owner-controlled account; run test mode before real charges.
5. Approve hosting/support and client agreement terms; choose final domain and authorize launch only when ready.

## Guardrails
- No SSN, EIN, banking details, passwords or real client data in GitHub.
- No real client payments, unsolicited outreach, or public site release without approval.
- Website Showroom is the internal design engine; Coal River Standard is the client-facing business.
- No recurring analytics/care price is approved.
- Work can be pushed to GitHub main and private Netlify for review, but team-login restriction must remain active.
