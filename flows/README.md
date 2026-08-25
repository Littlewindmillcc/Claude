# Email flows — assets and testing

This README documents the image placeholders used in the welcome flow templates and provides a short testing checklist for importing these templates into Klaviyo (or another ESP).

Required template variables

- `ASSET_BASE_URL` — base URL where email images are hosted. Example usage in templates: `{{ ASSET_BASE_URL }}/email/header-logo.png`.
- `organization.unsubscribe_link` — unsubscribe link placeholder used in the templates. Confirm this matches your Klaviyo variable (or replace with the correct Klaviyo variable).
- `organization.manage_preferences` — manage preferences link placeholder. Confirm or replace to match your ESP.

Placeholder → original image mapping

These placeholder filenames map to the original embedded images in the templates. Upload the appropriate image files to your CDN or asset host and set `ASSET_BASE_URL` to the host root (for example: `https://cdn.yourdomain.com`).

- `email/header-bg.png` — decorative header background used in the top section (CSS background-image).
- `email/header-logo.png` — the logo image shown in the header.
- `email/hero-welcome.png` — hero/feature image used in the welcome email.
- `email/hero-bestsellers.png` — hero/feature image used in the bestsellers email (if you choose to use a separate image).
- `email/footer-decor.png` — decorative image in the footer.
- `email/product-1.png`, `email/product-2.png`, `email/product-3.png` — product imagery used in the bestsellers layout (if you want product thumbnails; the templates use colored blocks but you can swap images here).

How to set `ASSET_BASE_URL` in Klaviyo

In Klaviyo templates you can set a variable near the top of the template (or use your account-level variable substitution):

```
{% assign ASSET_BASE_URL = "https://cdn.yourdomain.com" %}
```

Then use `{{ ASSET_BASE_URL }}/email/header-logo.png` in `src` attributes.

Testing checklist (before sending to customers)

1. Asset availability
   - Upload images to your CDN and confirm each placeholder URL returns 200 and serves over HTTPS.
2. Seed tests
   - Send test emails to seed inboxes: Gmail (web & Android), Apple Mail (iOS & macOS), Outlook (desktop & web).
3. Size & deliverability
   - Check total HTML size (aim for <150 KB; avoid >250 KB). Run a deliverability/spam test (Mail-Tester, GlockApps, or your ESP’s built-in checks).
4. Links and tracking
   - Verify CTA links, unsubscribe & manage preferences links. Add UTM campaign parameters if desired.
5. Accessibility
   - Confirm meaningful `alt` text for images and check color contrast (WCAG) for key CTA buttons and text.
6. Client-specific checks
   - Verify background images and rounded buttons in Outlook desktop (mso), and dark-mode rendering on iOS/Gmail.
7. Linting
   - Run the HTML through a pre-send linter (Premailer, Juice) to inline critical styles and confirm compatibility.

How to replace placeholders with real URLs

- Option A (templated variable): keep `{{ ASSET_BASE_URL }}` and set that variable in the Klaviyo template (recommended).
- Option B (absolute URLs): replace `{{ ASSET_BASE_URL }}/email/header-logo.png` with `https://cdn.yourdomain.com/email/header-logo.png` directly in the HTML.

Notes & recommendations

- Prefer a reliable CDN (S3 + CloudFront, Cloudflare, Imgix) and serve assets over HTTPS.
- Do not include tracking pixels as image files — use your ESP's built-in open/click tracking.
- Keep images optimized for web (use compressed PNG/JPEG/WebP where supported) and set sensible dimensions so email clients can render properly.
