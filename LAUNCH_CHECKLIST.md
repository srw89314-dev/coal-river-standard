# Coal River Standard public-launch checklist

Updated November 22, 2026. The ordered [master task list](BACKLOG.md) is the current execution source. Owner approved the pricing preview and authorized the multi-page update for the protected site. This is not approval to remove visitor protection.

## Implemented

- Private GitHub repository and Netlify continuous deployment
- Team-login protection across all deploys, verified on the November 22 production deploy
- Approved pricing menu: $595 / $995 / $1,495 informational packages; booking from $1,345; starter store from $1,995; custom systems individually quoted
- Separate Home, Services, Pricing, Our Work, About, and Contact pages
- Shared navigation including small-screen layouts; a shorter homepage
- Three clearly labeled fictional showroom examples
- Contact form moved to its own page, preserving Netlify form name and spam honeypot
- Shared JavaScript handles pages with and without the form
- Automated Chromium checks passed for all 11 pages at four viewport sizes, with simulated inquiry success and failure
- [Fictional delivery rehearsal](operations/LAUNCH_VERIFICATION_2026-11-22.md) documented, including local rollback and record restore
- Historical notification delivery and Reply-To verified by Sean after manual spam review
- [Lead intake and qualifying steps](sales/lead-response-playbook.md) documented
- Existing privacy page, security headers, and custom error page retained
- $59 care-plan promise removed; care pricing remains undecided

## Remaining before public launch

- Review this multi-page version on an actual phone and desktop; complete QA_APPROVAL.md
- During final QA, check the cleaned-up category label in a new notification and continue reviewing spam submissions
- Archive the approved WV formation and tax-registration documents, confirm EIN and remaining municipal requirements, and finalize the business details to display
- Finalize client agreement, scope/change process, intake, and private client-file storage
- Confirm banking and payment/invoicing readiness before accepting paid projects
- Confirm applicable sales-tax treatment before issuing invoices
- Decide whether to offer a care plan; it can be omitted at launch
- Choose/register the owner-controlled domain, configure it, and verify HTTPS
- Replace/add canonical and social URLs for the final domain; generate sitemap and robots settings
- After final approval, remove prelaunch notices/noindex and Netlify team-login protection as one deliberate launch step

