# Client book, website analytics, and reporting
Working requirements — November 15, 2026

## Owner direction
Sean requires analytics/reporting to appear in the pricing breakdown, a system to deliver that service, and a highly detailed private client book of business. This document records requirements, not a functioning application or a finalized monthly price.

## Pricing requirements
| Component | Pricing treatment | Defined scope |
| --- | --- | --- |
| Basic website measurement | Included in website build pricing; explicitly itemized as included | Analytics setup, owner access, page/traffic-source reporting, relevant contact-event setup, verification and handoff |
| Monthly reporting | Paid care-plan inclusion; monthly amount still undecided | One monthly summary, comparison to the previous comparable period, inquiries and contact clicks reported separately, short practical recommendations |
| Improvement work | Included only within a stated care-plan allowance or separately quoted | A report does not imply unlimited edits, SEO work, or guaranteed traffic/leads |
| External software and hosting | State whether included or billed separately before quoting | Record per-site analytics cost, hosting, storage and reporting costs; no provider selected by this plan |

Before finalizing a care-plan price, record software cost per client, report preparation/review time, hourly labor allowance, support time, hosting if included, and margin. Define report delivery timing, support response targets, edit limits, cancellation and data handoff. Amend the public-facing pricing breakdown and proposal templates only once those terms and the technical delivery method are established. Existing website package amounts are not changed by this document.

## Proposed private workspace
One company workspace links clients, contacts, websites, projects, agreements, invoices, tasks, activity and reports by stable IDs. One client may have multiple contacts, websites and projects. Internal notes must remain separate from anything shared with a client.

### Detailed client record
| Section | Fields |
| --- | --- |
| Identity | Client ID, legal/trading business name, industry, business website, business address if needed, timezone, status, created/updated dates |
| Contacts | Multiple contacts, role, decision maker, billing contact, email, phone, preferred channel and contact hours |
| Relationship | Lead source/referral, first inquiry, services requested, goals, priorities, budget range, target date, lost/paused reason |
| Sales pipeline | New inquiry, qualifying, proposal sent, awaiting decision, won, lost; quote amount, proposal version, expiry, next action and due date |
| Projects | Scope, deliverables, package, start/target dates, stage, milestones, dependencies, outstanding client materials, revision allowance and usage |
| Agreements | Proposal, signed scope/agreement, approvals, change orders, agreed prices and dates, restricted document links |
| Billing | Invoice/reference ID, deposit, total, payment schedule, due dates, confirmed payment status, outstanding balance, refunds, care-plan fee and billing frequency |
| Website operations | Domain, registrar, hosting project, repository reference, ownership, renewal dates, responsible payer, launch date, maintenance status, access-grant status |
| Analytics | Website/property IDs, event definitions, tracking start date, verification status, access owner, reporting timezone, report schedule, last report and next due date |
| Service history | Requests, priority, status, commitments, work log, time spent, delivery date and approval |
| Relationship notes | Dated communication summaries, business preferences, decisions and follow-ups; distinguish internal notes from client-visible summaries |
| Offboarding | End date, reason, final invoice, file/data export, ownership handoff, access removal and retention review date |

Do not store passwords, secret keys or payment-card details in client records. Store access references and delegated-access status. Completed client records and private documents belong in restricted storage, not source control.

### Views required
- Search/filter clients by name, contact, status, service, plan and next action.
- Today/overdue follow-ups; projects awaiting the client; upcoming launches and renewals.
- Unpaid/overdue invoices with confirmed status; active care plans and recurring contracted revenue.
- Monthly reports due, delivered, blocked by access, or missing tracking data.
- A client timeline combining inquiries, proposals, project activity, invoices, requests and reports.
- Exportable client records and a documented backup/restore process.

## Website reporting delivery
1. Associate each website with its correct client and analytics property.
2. Record tracking start date, timezone, event setup, owner access and validation result.
3. Gather the selected monthly period with the prior comparable period and collection coverage.
4. Produce a draft from available data; allow manual entry/import in the first version with source and collection date recorded.
5. Sean reviews and marks the report approved before delivery. Do not automatically email clients in the first version.
6. Save the approved report/version and delivery status in that client's history.

### Report content
Visitors, visits, page views, popular pages, traffic sources, successful inquiry submissions, phone clicks and email clicks where supported. Include date range, data source, previous-period change, coverage gaps and two or three practical observations/actions. Label unavailable data and partial months. Phone/email clicks are intent signals, not confirmed calls, emails, leads or revenue. Define visitors and visits according to the chosen provider; do not mix metrics across providers.

Client-facing access must expose only that client's approved information. A client dashboard is a later stage; owner access to the selected analytics service may satisfy basic stats access initially.

## Build sequence
1. Build the private client book first: records, contacts, pipeline, tasks, project tracking, document references, invoice references, search and export.
2. Add linked website measurement records and monthly report drafting/history; rehearse using fictional data.
3. Validate a measurement provider and one test website end to end; measure actual recurring costs and review time.
4. Finalize care-plan scope and price, then update pricing and sales documents consistently.
5. Add automated data retrieval and optional client-only dashboards after the manual workflow is reliable.

The first build must work on phone and laptop with persistent, authenticated storage. A single-device browser-only store is insufficient for the production client book. Technology selection remains open.

## One consolidated acceptance review
Using fictional records, verify client/contact creation and editing, multiple sites per client, lead-to-project conversion without duplicate records, dated follow-ups, invoice calculations/status, care-plan tracking, report provenance/periods and missing-data labels, report review and history, mobile/desktop access, permission isolation, export and restore. Confirm that one client's data cannot appear in another client's report or view. No real customer data or live payment collection is needed for the rehearsal.
