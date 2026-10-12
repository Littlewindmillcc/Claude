# Order confirmation — add warmth around Shopify's existing receipt

Don't replace the whole template: the itemised order summary, totals and addresses come from Shopify and work as is.
Open **Settings > Notifications > Customer notifications > Order confirmation** and make these two changes.

## 1. Subject line

```
You're officially part of the fam, {{ customer.first_name | default: 'friend' }} — order {{ order_name }}
```

## 2. Replace the opening heading and intro (above the order summary)

Delete the existing "Thank you for your purchase!" heading and its intro paragraph, and paste:

```html
{% assign first_name = customer.first_name | default: shipping_address.first_name | default: billing_address.first_name | default: 'there' %}
<h2 style="margin:0 0 12px; font-size:26px; line-height:1.3; color:#2A2528;">Thank you, {{ first_name }} &mdash; your order's in!</h2>
<p style="margin:0 0 14px; font-size:16px; line-height:1.65; color:#4A4347;">
  We've got order <strong>{{ order_name }}</strong> and we're so happy you chose Little Windmill.
  Every order is packed by hand here in the Hunter Valley, with the same care we'd want for our own kids' wardrobes.
</p>
<p style="margin:0 0 14px; font-size:16px; line-height:1.65; color:#4A4347;">
  <strong>What happens next:</strong> we'll pack it up and email you tracking as soon as your parcel's on its way.
</p>
```

## 3. Add a sign-off (below the order summary, above the footer)

```html
<p style="margin:24px 0 0; font-size:16px; line-height:1.65; color:#4A4347;">
  Questions? Just reply to this email &mdash; it comes straight to us.<br><br>
  Warmly,<br><strong style="color:#2A2528;">Katie &amp; the Little Windmill team</strong>
</p>
```

Then Preview and Send test email before saving.
