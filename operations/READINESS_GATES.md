# Readiness gates and acceptance checklist

## CRM release gates
- [ ] Authenticated owner login works on phone and laptop; unauthenticated access denied.
- [ ] Role permissions tested at server/database, not just hidden UI.
- [ ] One client can have multiple contacts, websites, projects, invoices and activities.
- [ ] Client/project ID uniqueness and cross-client references enforced.
- [ ] Search, follow-up due dates, exports and restore tested.
- [ ] Audit log, backups, retention and recovery designed and verified.
- [ ] No SSNs, payment cards, passwords or real client records in GitHub.

## Analytics/reporting gates
- [ ] Provider tested on an owned test site; no client-site installation without authorization.
- [ ] Visitor, session, pageview and inquiry definitions documented.
- [ ] Consent, privacy disclosures, access and retention reviewed.
- [ ] Missing data and zero baselines handled honestly.
- [ ] Draft report requires owner approval before sharing.

## Business gates
- [ ] EIN issued and confirmation privately saved.
- [ ] Operating agreement reviewed and signed.
- [ ] City licensing and employer outside-business rules confirmed.
- [ ] Business-owned storage permissions and restore tested.
- [ ] Bank, bookkeeping, tax classifications and Stripe test workflow complete.
- [ ] Hosting/support obligations and optional pricing approved.
- [ ] Final QA, rollback and explicit owner public-launch approval recorded.
