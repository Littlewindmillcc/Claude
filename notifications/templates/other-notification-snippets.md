# Other notifications — warm wording around Shopify's own content

These emails contain an itemised order, an invoice or a payment link that Shopify fills in. I can't see yours, so
don't replace the whole template. Replace **only the opening heading and intro paragraph**, keep everything below it,
and Send test email before saving.

All of them start with this greeting line (paste it once at the very top of the body):

```html
{% assign first_name = customer.first_name | default: shipping_address.first_name | default: billing_address.first_name | default: 'there' %}
```

Every paragraph below uses the same style: `style="margin:0 0 14px; font-size:16px; line-height:1.65; color:#4A4347;"`
and every heading uses `style="margin:0 0 12px; font-size:26px; line-height:1.3; color:#2A2528;"`.

---

## Draft order invoice
Used when you invoice customers, for example return postage on an exchange.

**Subject:** `Your Little Windmill invoice — {{ order_name }}`

```html
<h2 style="margin:0 0 12px; font-size:26px; line-height:1.3; color:#2A2528;">Hi {{ first_name }}, here's your invoice</h2>
<p style="margin:0 0 14px; font-size:16px; line-height:1.65; color:#4A4347;">
  Thank you! Here's the invoice for <strong>{{ order_name }}</strong>. You can pay securely using the button below,
  and we'll get everything moving as soon as it's through.
</p>
<p style="margin:0 0 14px; font-size:16px; line-height:1.65; color:#4A4347;">
  Not sure what this is for, or something doesn't look right? Just reply to this email and we'll sort it out.
</p>
```

## Order edited
**Subject:** `We've updated your order {{ order_name }}`

```html
<h2 style="margin:0 0 12px; font-size:26px; line-height:1.3; color:#2A2528;">Your order's been updated</h2>
<p style="margin:0 0 14px; font-size:16px; line-height:1.65; color:#4A4347;">
  Hi {{ first_name }}, we've made some changes to order <strong>{{ order_name }}</strong> &mdash; the updated
  details are below. If this isn't what you were expecting, just reply to this email and we'll help.
</p>
```

## Payment error (card didn't go through)
**Subject:** `A quick hiccup with your payment — {{ order_name }}`

```html
<h2 style="margin:0 0 12px; font-size:26px; line-height:1.3; color:#2A2528;">A quick hiccup with your payment</h2>
<p style="margin:0 0 14px; font-size:16px; line-height:1.65; color:#4A4347;">
  Hi {{ first_name }}, we couldn't take payment for order <strong>{{ order_name }}</strong> &mdash; it happens
  to the best of us! Please use the link below to try again or use a different card.
</p>
```

## Pending payment
**Subject:** `We're just waiting on your payment — {{ order_name }}`

```html
<h2 style="margin:0 0 12px; font-size:26px; line-height:1.3; color:#2A2528;">We're just waiting on your payment</h2>
<p style="margin:0 0 14px; font-size:16px; line-height:1.65; color:#4A4347;">
  Hi {{ first_name }}, we've got order <strong>{{ order_name }}</strong> but the payment hasn't come through yet.
  Once it does, we'll get it packed. Any questions, just reply to this email.
</p>
```

---

## Deliberately left alone

- **Account invite, welcome, password reset, account verification codes:** these carry security links and codes.
  Changing them risks breaking customer logins, so the default Shopify wording stays.
- **Abandoned checkout:** Klaviyo's Abandoned Cart flow already covers it. Make sure Shopify's own abandoned
  checkout email is switched off (Settings > Checkout > Abandoned checkout) so customers don't get both.
- **Shipping confirmation:** Klaviyo's "Your parcel's left the station" covers it, and you've confirmed Shopify's is off.
