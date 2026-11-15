# Client workbook version 1
Created November 15, 2026 as an editable Excel starter, not the authenticated CRM application.

## Structure
Overview shows entered-record totals and independent review observations. Settings holds the editable reserve assumption and opening balances. Clients, Contacts, Sites and Projects are separate to support multiple people and websites for one business. Invoices, Money and Reserve separate invoice obligations, checking receipts/fees and actual savings movements. Actions, Time and Documents support follow-ups, delivery costs and versioned evidence.

The workbook starts empty. It contains no invented clients or actual account balances. There are 100 prepared rows per table, with filters, frozen headers, dropdowns and duplicate-ID highlighting. This is a manual starter: there is no login, record isolation, audit-grade change history, bank sync, automatic reminder or customer dashboard. Excel is the file target. Formulas are tested with the authoring engine and native LibreOffice recalculation; Microsoft Excel, Google Sheets import and mobile behavior remain unverified.

## Verification
Authoring tests cover a $497.50 deposit on a $995 invoice, a $14.73 example fee, reserve rate changes, a $100 refund and matched checking/reserve transfers. These amounts are fictional test inputs, not published processor prices. Temporary test records are removed before delivery. Formula scanning, native recalculation and visual checks are recorded in the batch validation notes.

## Upgrade path
Use only after business-owned storage and permissions are verified. The authenticated client-book application remains a separate implementation task. Preserve IDs and export tables to enable migration without renaming clients or losing document references. No actual client records belong in GitHub.
