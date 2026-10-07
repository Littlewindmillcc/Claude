# Shopify customer notifications — warmer, more personal

Shopify has no API for reading or editing notification templates, so these are **paste-in templates**.
Each one lives in `templates/` and is pasted into **Shopify admin > Settings > Notifications > Customer notifications**.

## What Klaviyo already covers (left untouched)

Checked live in Klaviyo on 7 Oct 2026. These all send from Klaviyo, so nothing here changes them.

| Klaviyo flow | Trigger | Status |
|---|---|---|
| LW Shipping Update – On Its Way | Confirmed Shipment | live |
| Post-Purchase – NEW (thank-you, then review nudge) | Fulfilled Order | live |
| Review request (email + SMS) | metric | live |
| Abandoned Cart · Added to Cart Reminder · Browse Abandonment | metric | live |
| Welcome · SMS Welcome · VIP Launch · Customer Winback · Sunset | list / metric | live |

You confirmed Shopify's own **Shipping confirmation** is switched off, so customers get Klaviyo's "left the station" email only.

## What comes direct from Shopify (fixed here)

Klaviyo has **no flow** for any of these (it records Refunded Order, Cancelled Order, Marked Out for Delivery and
Delivered Shipment events, but nothing sends on them), so the Shopify email is the only one customers see.

| Shopify notification | File | Subject line |
|---|---|---|
| Order refund | `order-refund.html` | Your refund's on its way |
| Order cancelled | `order-cancelled.html` | Your order {{ order_name }} has been cancelled |
| Return request confirmation | `return-request-received.html` | We've got your return request |
| Return request approved | `return-request-approved.html` | Your return's approved |
| Return request declined | `return-request-declined.html` | An update on your return |
| Store credit issued | `store-credit-issued.html` | You've got store credit to spend |
| Gift card (sent to recipient or buyer) | `gift-card.html` | Your Little Windmill gift card has arrived |
| Out for delivery | `out-for-delivery.html` | Your parcel's out for delivery |
| Delivered | `delivered.html` | Your parcel's been delivered |
| Order confirmation | `order-confirmation-snippets.md` | You're officially part of the fam |

Order confirmation is **snippets, not a full template**, because it contains your itemised receipt and I can't see it
to copy it safely. Wrap the new intro and sign-off around Shopify's existing order summary.

## How to install (per notification)

1. Open the notification in Shopify, paste the subject line, then paste the whole `.html` file into **Email body (HTML)**.
2. Click **Preview**, then **Send test email** to yourself. Check the checklist below.
3. Save. Do one notification at a time.

## Check on every test email

- Greeting shows a real first name (falls back to "Hi there").
- Order number, and the "View my order" link, work.
- **Refund:** the "$ in total" amount appears and is the right dollar figure. If it's missing the email still reads
  fine, it just leaves the amount out. Tell me and I'll adjust.
- **Gift card:** value, last four characters, expiry (only if one is set) and "View my gift card" all show.
- Store credit and return emails: read them once for anything that doesn't match how you actually run it.

Everything is written to fail quietly: if Shopify doesn't supply a value, that sentence is left out rather than
showing blank brackets. I test-rendered every file with sample data and with empty data and found no stray Liquid.
I could not send them through Shopify itself, which is why the test email step matters.

## Policy facts used (from your Refunds & Returns and Shipping policies)

Return address Shop 5, 167 Kelly Street, Scone NSW 2337 · in-store drop-off at Scone or Tamworth · customer pays
return postage, Registered Post recommended · refund or exchange or credit usually 5–7 days after the parcel arrives ·
refunds go to the original payment method · contact us if it hasn't shown after 7 days.

## Not covered

Ready for pickup / Picked up, Draft order invoice, Payment receipt and error, Order edited, Account invite and
password reset, Customer contact. Say the word and I'll do these next.
