# Coal River Standard — master to-do list
Updated November 15, 2026. This is the consolidated execution list for the Small Business Website / Coal River Standard venture. It supersedes obsolete status and provisional prices in older Showroom roadmaps; it does not erase their reusable templates or authorize a public launch.

## November 16–17, 2026 verified progress checkpoint

**Master list remains 24 tasks.** No new tasks have been added. Earlier 27-item planning was a regrouping, not additional scope.

**Before this batch:** 2/24 fully complete (Tasks 1 and 2; 8.3% by strict equal-weight task count).
**After this batch:** 2/24 fully complete (8.3%). The work advanced several partially complete tasks, but none of their remaining acceptance gates can honestly be marked fully complete. This strict measure deliberately does not count partial work as completion.

**Evidence and corrections**
- Task 4: WV LLC formation approved, effective **November 10, 2026**, and WV state tax registration accepted per owner-provided records; unemployment processing/mailed certificate and private archival remain outstanding. The older unverified status below is superseded.
- Task 5: EIN remains **pending owner action** and stays first in the owner action queue.
- Task 13: 8-table PostgreSQL CRM schema committed in database/001_crm_schema.sql with RLS enabled and no access-granting policies. Not applied to a database, no authentication, not a working app.
- Tasks 14–16: draft monthly report and unit economics worksheet committed. Provider installation, real measurement, recurring price approval and distribution remain pending.
- Task 17: evidence-based fictional first-client rehearsal plan committed at operations/FIRST_CLIENT_REHEARSAL.md. The actual end-to-end test is not passed.
- Task 18: three **fictional** existing Website Showroom demos adapted and published under dist/demos/ and linked from dist/work.html. Source-level CSP fix, link checks and a GitHub Actions quality workflow added. 62-industry builder/export testing and browser/mobile QA remain pending.
- Task 20: checked committed HTML/CSS for three demo links, absence of inline styling, and disclaimers; Netlify reports production deploy ready and team login required. Real browser, device, keyboard, contact form and end-to-end acceptance tests remain pending.
- Public launch (Task 22) **not approved**; Netlify team login remains enabled.

**First-client decision:** The secure manual workbook and approved paperwork may be sufficient for an initial small build once owner-only business/payment/legal steps and a real end-to-end rehearsal pass; a production CRM and fully automated reporting are not prerequisites for the first basic client. Do not solicit clients or take payments until owner authorizes and required gates pass.

---

## Working rule
Sean authorized larger batches on November 15, 2026. Group related independent tasks, complete their available implementation and preparation, and report finished work, tests, concrete owner decisions and remaining dependencies at each substantial checkpoint. The earlier one-task-per-continue rule is superseded. Do not confuse a prepared template or manual prototype with a deployed system. Tasks needing owner documents, external approval, login, purchases, signatures or account opening remain dependent; explain the concrete dependency rather than pretending they are done.

## Already completed — do not repeat
- Company name chosen and filing/fees submitted per portal screenshots; agency approval itself remains unverified.
- Approved package pricing: One Page $595, Business $995, Expanded $1,495, Booking from $1,345, Starter Store from $1,995, Custom Systems individually quoted.
- Private GitHub/Netlify business site with separate Home, Services, Pricing, Our Work, About, Contact and privacy pages.
- Categorized inquiry form, required fields, guided prompts, spam honeypot, failure preservation, and first-name-only public introduction.
- Sean saved/confirmed notifications to coalriverstandard@gmail.com. On November 14 he confirmed the spam-filtered test arrived after marking it verified. Screenshots show category in the subject, message contents, correct destination, correct Reply-To and reply draft.
- Existing intake/proposal/sales drafts; unsigned operating-agreement draft; prepared city application and clerk-call worksheet.

## Ordered tasks
| # | Task | Status |
| --- | --- | --- |
| 1 | Contact-email cleanup | DONE |
| 2 | Client paperwork packet | DONE — TEMPLATES |
| 3 | Private client-file storage | PREPARED — BUSINESS DRIVE CONNECTION NEEDED |
| 4 | State formation and tax-registration documents | OWNER / EXTERNAL |
| 5 | EIN | DEPENDENT |
| 6 | Operating agreement | DEPENDENT |
| 7 | St. Albans licensing and home-office questions | OWNER / EXTERNAL |
| 8 | Employer and brand readiness | OWNER / EXTERNAL |
| 9 | Bank requirements and business accounts | RESEARCH PREPARED — BANK CONFIRMATION / OWNER OPENING |
| 10 | Tax and bookkeeping setup | CASH WORKBOOK READY — TAX CLASSIFICATION OPEN |
| 11 | Stripe and invoice readiness | DEPENDENT |
| 12 | Hosting, support and care scope | CONCRETE PROPOSAL — OWNER DECISIONS / TESTS |
| 13 | Client book — private first version | MANUAL STARTER READY — AUTHENTICATED APP PENDING |
| 14 | Analytics provider and included setup | READY |
| 15 | Monthly reporting workflow | AFTER CLIENT BOOK / MEASUREMENT |
| 16 | Analytics/care pricing and website wording | AFTER COST / WORKFLOW CHECK |
| 17 | End-to-end delivery rehearsal | AFTER PAPERWORK / STORAGE / PAYMENT TESTS |
| 18 | Showroom and portfolio decision | READY / OPTIONAL INTEGRATION |
| 19 | Final domain and website identity | OWNER + TECHNICAL |
| 20 | One consolidated website acceptance review | READY AFTER CONTENT |
| 21 | Search, privacy and launch preparation | AFTER FINAL DOMAIN / ANALYTICS |
| 22 | Public launch | OWNER APPROVAL / DEPENDENT |
| 23 | First-client outreach and market validation | AFTER READINESS + OUTREACH APPROVAL |
| 24 | Later expansion | LATER / NOT LAUNCH BLOCKER |

### 1. Contact-email cleanup
Status: DONE

Record the owner-confirmed notification delivery and Reply-To; separate the category label from dropdown choices and submit a readable category value. Preserve spam filtering. A future received email will confirm the revised visual formatting.

### 2. Client paperwork packet
Status: DONE — TEMPLATE PREPARATION

Consolidate existing intake/proposal and Showroom scope, service-agreement draft, change-order, invoice, exact-version launch-approval, and handoff templates. Align package limits, two revisions, payment milestones, content rights, ownership, cancellation/refunds, support, and analytics. Mark legal review items clearly; keep completed client records out of GitHub.

### 3. Private client-file storage
Status: PREPARED — BUSINESS DRIVE CONNECTION NEEDED

Create a restricted Google Drive company/client folder structure; separate internal and shareable materials, define project IDs, versions, permissions, retention, export and backup/restore. Verify the correct business account; no passwords or payment cards in records.

### 4. State formation and tax-registration documents
Status: OWNER / EXTERNAL

Filing and fees were submitted according to portal screenshots. Verify agency status; save issued formation/tax documents and actual effective date. Approval is unverified. Do not refile because an old worksheet says draft.

### 5. EIN
Status: DEPENDENT

Using confirmed formation details, complete the official free IRS process and save the issued confirmation privately. Do not expose identifiers in source control.

### 6. Operating agreement
Status: DEPENDENT

Use the existing unsigned draft, insert verified formation details, review decisions, and have Sean adopt/sign it. Do not recreate a duplicate or claim it is signed.

### 7. St. Albans licensing and home-office questions
Status: OWNER / EXTERNAL

Use the prepared application and clerk worksheet. Confirm category, fee, start date/license year, required identifiers, home occupation/zoning, B&O classification/rate/filing dates, submission and payment. Obtain and save required approval.

### 8. Employer and brand readiness
Status: OWNER / EXTERNAL

Confirm outside-business requirements at the employer; keep work separate from employer time/equipment. Close unresolved brand/trademark/domain checks; state acceptance alone is not trademark clearance. Avoid reopening the chosen name without evidence of a problem.

### 9. Bank requirements and business accounts
Status: RESEARCH PREPARED — BANK CONFIRMATION / OWNER OPENING

Check Climate First's current checking/money-market requirements, opening deposits, fees, eligibility, and required documents; compare alternatives only if necessary. Owner opens/funds accounts when eligible. Keep business funds and tax reserves separate from household funds.

### 10. Tax and bookkeeping setup
Status: CASH WORKBOOK READY — TAX CLASSIFICATION OPEN

Confirm tax treatment for website design, custom programming, digital deliverables, hosting/care and reporting; resolve city B&O and filing obligations. Build private revenue/expense/invoice/time records, startup contributions/reimbursements, tax-reserve transfers and a calendar. Treat 30% as a provisional reserve, not a verified liability.

### 11. Stripe and invoice readiness
Status: DEPENDENT

Configure verified business identity and bank destination; use hosted invoices/checkout. Define deposits, balances, receipts, refunds, cancellation/late-payment and disputes consistently with the agreement. Test success/failure, duplicates, refunds, fees and payout reconciliation before live collection.

### 12. Hosting, support and care scope
Status: CONCRETE PROPOSAL — OWNER DECISIONS / TESTS

Choose ownership/delegated access, hosting cost/payer, backups, restore/rollback, updates, monitoring, response targets, correction window, edit allowance, cancellation and offboarding. Decide whether care is offered at launch; do not reinstate the obsolete $59 promise.

### 13. Client book — private first version
Status: MANUAL STARTER READY — AUTHENTICATED APP PENDING

Build persistent authenticated phone/laptop records for clients, multiple contacts/sites, leads, projects, tasks, document references, invoice references, care plans and dated history; search/filter, follow-ups, exports and restore. No secrets/cards; fictional records until access controls and isolation are tested.

### 14. Analytics provider and included setup
Status: READY

Validate a provider on one controlled test site. Define visitors/visits/page views/sources, contact events, timezone, coverage, owner access, costs and privacy/consent. Included basic setup does not mean tracking has already been installed for clients.

### 15. Monthly reporting workflow
Status: AFTER CLIENT BOOK / MEASUREMENT

Link each website/property to its client. Draft period comparisons, separate inquiries from phone/email clicks, disclose missing data, add practical observations, and retain versions/history. Sean reviews before sharing. Start with manual entry/import; automation or client dashboards come later.

### 16. Analytics/care pricing and website wording
Status: AFTER COST / WORKFLOW CHECK

Itemize included basic analytics and owner access in website pricing/proposals; set monthly reporting/care price only after measuring software, hosting, review/support time and margin. Define limits and terms; package build prices stay approved unless Sean changes them.

### 17. End-to-end delivery rehearsal
Status: AFTER PAPERWORK / STORAGE / PAYMENT TESTS

Run one fictional client from inquiry to qualification, quote, accepted scope, test payment, content collection, revisions, change order, exact-version approval, launch/rollback and handoff. Track labor/cost/margin; record failures and fix them without real charges.

### 18. Showroom and portfolio decision
Status: READY / OPTIONAL INTEGRATION

Review the existing 62-industry configurations, styles and exports rather than rebuilding. Retest special-character escaping, links, placeholders, keyboard/mobile and export ownership. Polish restaurant, home-service and automotive concepts. Decide what belongs on Coal River Standard; internal builder/exporter stays private unless separately approved.

### 19. Final domain and website identity
Status: OWNER + TECHNICAL

Choose/register an owner-controlled domain; connect DNS/HTTPS and redirect/404 rules. Confirm public business email, first-name-only introduction and truthful service area; no home address/phone published by default. Finalize logo/favicon assets and licenses without inventing credentials or reviews.

### 20. One consolidated website acceptance review
Status: READY AFTER CONTENT

Review all pages on phone and desktop: layout, navigation, keyboard, contrast, overflow, accessibility, performance, contact validation/failure/success, categorized email and reply behavior. Keep a known-good version and one combined review record; retest only changes/failures.

### 21. Search, privacy and launch preparation
Status: AFTER FINAL DOMAIN / ANALYTICS

Finish privacy/contact/retention wording and needed terms. Add final canonical/social URLs, sitemap, robots settings, truthful structured data, Search Console and meaningful inquiry conversion measurement. Prepare uptime/forms/spam checks, backups and rollback. Keep noindex and login until authorized launch.

### 22. Public launch
Status: OWNER APPROVAL / DEPENDENT

Only after required business/payment/data/privacy/QA gates, obtain explicit public-launch approval. Remove protection and prelaunch/indexing restrictions for intended marketing pages only; keep internal/client systems private. Check signed-out access, HTTPS, inquiries and rollback; record release and launch date.

### 23. First-client outreach and market validation
Status: AFTER READINESS + OUTREACH APPROVAL

Build and verify about 25 suitable prospects and approved channels; prepare five personalized first contacts, referrals and educational redesign material. Send only after authorization. Track responses, proposals, wins, actual hours/costs and margin; seek separate voluntary portfolio/testimonial permission after delivery.

### 24. Later expansion
Status: LATER / NOT LAUNCH BLOCKER

After validated delivery, consider scoped menu PDFs, logos/identity, images, letterhead, stationery, business documents and creative bundles. Confirm formats, rights, revisions and pricing first. Add automated reporting/client dashboards or complex custom systems only after reliable private workflows.


## Task 1 evidence and limits
- Original delivery and Reply-To verified from Sean's November 14 screenshots, not inferred from code.
- Test was initially spam-filtered; continue checking Netlify Spam submissions. Do not disable the filter merely to pass a test.
- Category label moved outside the select so the label no longer includes all options. Payload now includes a readable selected label instead of a machine code.
- Regression checks cover preserved drafts, duplicate prompts, invalid submissions, all seven category values, failure behavior, and shared-page script safety.
- Formatting implementation is complete; revised appearance in a newly received notification is not yet observed. Include that focused check in Task 20, not a full repeated inquiry setup.

## Deferred and superseded
- Drop all old $299/$399/$749/$750/$999/$1,999 and $59/$79 care price hypotheses as current offers; use approved prices above.
- Do not recreate the company homepage, business inbox, inquiry route, or multipage conversion.
- A December 25 target from old planning is not a fixed deadline or launch approval.
- Do not count old percent-complete estimates as evidence or inflate progress for planning documents.
- Do not carry unrelated Hearthside, game, finance-site or household work into this venture's task list.
- No fresh formation submission merely because the original draft says “not filed.”
- Public showroom integration, ongoing care and creative expansion are optional; they must not silently become launch blockers.

## Source reconciliation
Reviewed the current business BACKLOG, LAUNCH_CHECKLIST, INQUIRY_SETUP and sales drafts; Showroom ROADMAP, EXECUTION_ROADMAP, CREATIVE_SERVICES_BACKLOG, CHRISTMAS_2026_LAUNCH_PLAN, SEO_AND_TRUST_LAUNCH, INQUIRY_PAYMENT_PLAN, INTEGRATED_RELEASE_REVIEW and LAUNCH_CONTROL; and the open preparation work:
- [Showroom PR 7 — scope/change/launch templates](https://github.com/srw89314-dev/website-showroom/pull/7)
- [Business PR 2 — detailed client book/analytics requirements](https://github.com/srw89314-dev/coal-river-standard/pull/2)

Those PRs are preparation sources, not evidence of built applications or accepted client agreements. Reuse and reconcile them in the matching numbered task; no blanket merge is implied.

## Task 2 evidence and limits
- Consolidated the reusable templates in [client-packet](client-packet/README.md), aligned with approved package prices and two revision rounds. Supersedes duplicate intake and proposal drafts in sales.
- Delivered an editable 16-page Word packet, with questionnaire/discovery, proposal, two-page scope, two-page agreement review draft, change order, invoice/payment preparation, revisions, exact-release launch approval, handoff, and optional publicity permission.
- Checked all 16 rendered pages, package prices, sample installment arithmetic, invoice/project balance separation and canonical template links. No completed client records or personal identifiers committed.
- Agreement is explicitly not ready for signature. Ownership/license wording, cancellation/refunds, warranties, liability, privacy, disputes and precedence require review. Owner support/hosting choices, tax treatment, payment setup and analytics validation remain in their numbered tasks.
- Task 2 ended before Task 3. That historical stop was superseded when Sean subsequently authorized larger batches.

## Operations batch — November 15, 2026
- Sean chose coalriverstandard@gmail.com as the owner for private business files. Connected Drive profile is personal; no company/client folders or records were written there. [Storage plan](operations/PRIVATE_STORAGE.md) and a portable folder scaffold are ready. Actual Drive creation, owner/permission checks and cloud restore remain pending the business connection.
- Built and delivered a blank twelve-tab Excel workbook for clients, contacts, sites, projects, follow-ups, documents, hours, invoices, checking cash and reserve-account records. [Workbook guide](operations/CLIENT_WORKBOOK.md). This manual starter is not the authenticated Task 13 app.
- Tested deposit/fee/invoice arithmetic, refunds, sales-tax exclusion from reserve basis, reserve-rate edits, missing-date flags and matched reserve transfers. Scanned authoring formula errors and checked native LibreOffice recalculation. Inspected all worksheet views. Test records were cleared. Microsoft Excel, Google Sheets conversion and mobile behavior remain unverified.
- [Bank research](operations/BANK_READINESS.md) verifies published opening amounts, e-statement fee conditions and variable-rate relationship rules. WV eligibility, LLC documents, pending city-license acceptance and full opening disclosures still need bank confirmation. No accounts opened or funds moved.
- [Bookkeeping and tax guide](operations/BOOKKEEPING_AND_TAX.md) separates a provisional reserve rule from actual liability; sales-tax classifications, B&O and payment amounts/dates remain unresolved. No filing or payment automation created.
- [Hosting/support proposal](operations/HOSTING_SUPPORT_PROPOSAL.md) provides specific choices for review: client-owned domain/hosting, build/handoff first, proposed review/correction/response periods and no recurring care price yet. Not accepted terms, not a published offer. Platform costs and rollback testing remain open.
- Completed this batch's available deliverables. Required approvals, EIN, existing operating-agreement adoption, bank opening, Stripe and public launch remain dependent. No website release or outbound client/banker messages were made.
