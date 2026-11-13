# Inquiry routing — implementation status
Updated November 13, 2026.

## Implemented
- Required message category: new informational site, redesign, booking, store, custom features/accounts, existing-project help, or general question.
- Category-specific questions and an explicit button to insert prompts. Existing draft text is retained; duplicate prompt insertion is prevented.
- Required identity/business/location/email/message fields retained. Browser validation rejects blank required text, messages shorter than 20 characters, unknown categories, and remaining [Your answer] placeholders.
- Category included in submitted data and notification subject.
- Existing name=email field supports reply-to behavior documented by Netlify. Actual reply routing must be verified in a received notification.
- Spam honeypot retained; client-side checks are not a guarantee against direct automated submissions.
- Failed submissions keep the draft. Confirmation says submitted, not delivered to email.
- Owner's public introduction uses Sean without the surname.

## Required notification destination
coalriverstandard@gmail.com — explicitly authorized by Sean.

This address in a document or privacy page does not configure Netlify notifications. Configuration and actual delivery have NOT been verified. Netlify browser access currently requires sign-in; the installed connector cannot manage notification recipients.

## Finish routing, then test
1. Sign into the correct Netlify project, Coal River Standard.
2. Forms > Submission notifications: inspect existing notifications to avoid duplicates.
3. Add or edit an email notification for website-inquiry addressed to coalriverstandard@gmail.com.
4. If Netlify sends a recipient-confirmation message, confirm it from that inbox; delivery remains pending until confirmation. Do not add a team member or change access just to bypass email verification.
5. Submit one clearly identified owner test using a real reachable email and useful, non-sensitive text.
6. Verify category/message in Netlify and the correct inbox, inspect spam if missing, and check that Reply targets the submitter.
7. Record results here and update BACKLOG.md only after evidence is obtained.

No public launch, automatic client replies, customer payment collection, or expanded account access is authorized by this setup note.
