# Little Windmill — Theme & Checkout Review (September 2026)

**Live theme:** "[CD] - Editing In Progress" — Broadcast v8.1.1 (Presidio Creative)
**Store plan:** Shopify Basic · AUD
**Data window:** last 90 days (ShopifyQL) + last 248 online orders

> I did not change anything on your live store. Everything below is a recommendation.
> Items marked **VERIFY** are things I could read in your theme settings but could not
> see on the live site. This cloud session can't open your website directly, so please
> check those on your phone.

---

## 1. What your numbers say

| Metric (90 days) | Mobile | Desktop |
|---|---|---|
| Sessions | 207,266 (92%) | 16,146 (7%) |
| Added to cart | 6,940 (3.3%) | 478 (3.0%) |
| Reached checkout | 2,540 (37% of carts) | 274 (57% of carts) |
| Completed checkout | 1,584 (62% of checkouts) | 143 (52% of checkouts) |
| Conversion rate | **0.76%** | 0.89% |

- **Online Store AOV:** $104 (mean). **Median order subtotal: $83.** Only about **1 in 13
  orders (7.7%) reach the $250 free-shipping threshold**.
- **How customers pay (last 50 web orders):** card/Shop Pay 56%, **Afterpay 30%**, PayPal 12%, Zip 2%.
- **Traffic:** "direct" is 162k sessions but converts at only 0.5%. Some of that is probably
  bot or in-app browser traffic. Search (3.9%) and email (5.0%) convert best.
- **Benchmark:** the typical Shopify store converts at **1.4–1.8%** (median ~1.7–2.1% in 2026 studies).

**The biggest leak is between cart and checkout on mobile.** 63% of mobile shoppers who add
to cart never click through to checkout. The fixes in section 2 target that step first.

---

## 2. Priority fixes (ranked by likely impact vs. effort)

### 🔴 High impact · quick (theme editor, no apps)

1. **Turn on express checkout buttons in the cart.**
   `Cart drawer → Checkout buttons → "Enable additional buttons"` is **OFF**, and it's also
   off on the Cart page. On a 92%-mobile store, that means no Shop Pay, Apple Pay, Google Pay
   or PayPal buttons in the cart. Shopify cites an external study showing that Shop Pay lifts
   conversion by up to 50% over guest checkout. Just having it present lifts lower-funnel
   conversion by about 5%.
   *(Buy-it-now buttons are already on for product pages.)*

2. **Show the free-shipping message on desktop too, and add more messages.**
   Your announcement bar ("Flat Rate Postage + FREE Over $250") is set to **mobile only**
   (`target_device: mobile`). Rotate 2–3 messages, for example:
   - "Free AU & NZ shipping over $X"
   - "Afterpay & Zip available — pay in 4"
   - "Click & Collect free from Scone & Tamworth"

3. **Add a sticky "Add to cart" bar on product pages.** `Product → Show cart bar` is **OFF**.
   On a long mobile product page, the button scrolls out of view below the icons, 4 accordions
   and "Complete the look". A sticky button is a standard mobile pattern, and Broadcast has it built in.

4. **Show star ratings under the product title.** Judge.me is installed, but only the full
   review widget further down the page is used. Add the **Judge.me "Star rating" (preview
   badge)** app block directly under *Title*, and on collection cards. **VERIFY:** the review
   widget block's *Preview data* is set to "Sample data". Judge.me says this only affects the
   theme-editor preview. Still, open a product on your phone and confirm real reviews show.

5. **Fix the typo in your social-proof banner.** "Loved **my** over 80,000+ customers since
   2019" should read "Loved **by** over 80,000 customers since 2019".

### 🟠 High impact · needs a business decision

6. **Re-think the $250 free-shipping threshold.** Best practice is to set it **15–30% above
   AOV**, where most baskets can reach it. Yours is ~2.4× AOV and 3× the median order.

   | Threshold | Orders already qualifying | Orders within 30% below (the "nudge zone") |
   |---|---|---|
   | $250 (now) | 7.7% | 10.9% |
   | $200 | 13.7% | 14.1% |
   | **$150** | **25.0%** | **15.3%** |
   | $120 | 35.1% | 14.5% |

   Competitors: **Ringers Western $150**, **Purebaby $100**, Titleys $250.
   **Suggestion:** test **$150** for 30 days and watch AOV and margin. The cart progress bar
   already exists and updates automatically. Change it under *Theme settings → Cart →
   Minimum spend for free shipping* **and** in *Settings → Shipping*. Both must match.
   *(Your call. It depends on your postage costs and margins. I haven't changed anything.)*

7. **Soften the returns message.** Your policy is exchange or store credit only, with no
   change-of-mind returns. That's fair for a small business, but it's a barrier for a first
   purchase, and your competitors are more generous:
   - Ringers Western: 20-day returns
   - Purebaby: free returns within 60 days
   - Jamie Kay: store credit for change-of-mind within 21 days
   - Titleys: returns with a $9.15 fee

   Low-cost options that keep your margin:
   - Allow **size exchanges on full-price items within 14–21 days** (customer pays postage).
   - Say it positively on the product page: "Wrong size? Easy exchanges on full-price items."

### 🟡 Medium impact · quick

8. **Afterpay messaging on product pages (VERIFY).** 30% of your online orders use Afterpay,
   but I found **no Afterpay on-site messaging app embed** in the theme. If the product page
   doesn't show "or 4 payments of $X with Afterpay" under the price, install **Afterpay
   On-Site Messaging** (free) and place the block under *Price*.
9. **Show the shipping note under the price.** `Price → Show shipping policy` is OFF. Turn it
   on so customers see "Tax included. Shipping calculated at checkout." It's a small
   reassurance that there are no surprise costs. Per Baymard, unexpected costs cause 48% of
   actionable abandonments.
10. **Move the pickup block up and promote it.** "Pickup available at Scone" already shows
    under the button. Add "Free Click & Collect — Scone & Tamworth" to the announcement bar.
    Titleys advertises same-day collection for orders placed before 11am.
11. **Switch the cart welcome message back on.** The "WELCOME10" cart message is disabled,
    and your actual code is **Welcome10xx**. Either re-enable it with the correct code or
    leave it off. Klaviyo already sends the code, so pick one source so it's never wrong.
12. **Show the order note in the cart for gifting.** You have Gift note on (good). Hampers and
    gifts are a growing range, so "Gift wrap / add a card" should be easy to find in the drawer.

### 🟢 Tidy-ups (credibility)

- FAQ: "ordertake" → "order take", "ect" → "etc", "colorway's" → "colourways",
  "fabrics that holds" → "fabrics that hold".
- FAQ says free postage is for **AU & NZ** over $250, but your shipping settings also give
  **USA & Canada** free shipping over $250. Make them match. FAQ says international takes
  9–18 days, but the checkout rate is named "7–25 Days".
- Footer blurb says "For stylish girls and boys…". Update it to include the adult, home and
  gifting ranges.
- Several homepage/product marquee images are **.heic** files. Re-upload them as JPG/WebP so
  every browser shows them.
- "Shipping & Returns" accordion links to `/pages/faqs`. **VERIFY** the link works (the FAQ
  template is `page.faq`).

---

## 3. How you compare

| Feature | Little Windmill | Ringers Western | Purebaby | Titleys |
|---|---|---|---|---|
| Free shipping from | $250 | **$150** | **$100** | $250 |
| Flat rate under threshold | $13.99 | $10 | — | — |
| Returns | Exchange/credit only | 20 days | **Free, 60 days** | Yes ($9.15 fee) |
| Afterpay | ✅ (30% of orders) | ✅ | ✅ | ✅ |
| Click & Collect | ✅ Scone (not promoted) | — | — | ✅ same-day |
| Express pay in cart | ❌ off | ? | ? | ? |
| Sticky add-to-cart (mobile) | ❌ off | ? | ? | ? |

"?" = couldn't confirm (this session can't load competitor sites directly; figures come from
their published policy pages).

**Where you're already ahead:** size guide (SmartSize), low-stock countdown, "Complete the
look" upsells, trust icons (Australian owned / ethical / limited edition), Shopify Inbox chat,
gift notes, a wholesale portal and an in-store pickup option. The foundations are strong.
It's mostly settings that are switched off.

---

## 4. Apps, buttons & badges — shortlist

| Add / enable | Why | Cost |
|---|---|---|
| Express buttons in cart (theme setting) | Shop Pay / Apple Pay / PayPal one-tap | Free |
| Sticky add-to-cart (theme setting) | Keeps the buy button on screen on mobile | Free |
| Judge.me star badge under title + on collection cards | Social proof at the decision point | Free (already installed) |
| Afterpay On-Site Messaging | "4 × $X" under the price, used by 30% of buyers | Free |
| Shop Pay Installments / Shop Pay | Check it's enabled in *Settings → Payments* | Free |
| Payment icons in footer | Already on ✅ | — |
| Trust row under Add to Cart: "Easy exchanges · Afterpay · Ships from Scone NSW" | Answers the three biggest first-order worries | Free (Icon blocks) |
| Klaviyo abandoned-checkout + browse-abandonment flows | Recover part of the 38% who start but don't finish checkout | Already installed — check flows are live |

**Not recommended:** fake "X people are viewing" pop-ups or countdown timers. They clash with
your genuine, family-run brand, and the ACCC has warned that false urgency or scarcity claims can be misleading.

---

## 5. Suggested order of work

1. **This week (30 min in the theme editor):** items 1, 2, 3, 4, 5, 9, then check the VERIFY items on your phone.
2. **Next:** install Afterpay messaging (8) and add the trust row under the button.
3. **Decide:** free-shipping threshold test (6) and exchange wording (7).
4. **After 30 days:** re-run the numbers in section 1 and compare mobile cart → checkout
   (currently 37%) and conversion (currently 0.76%).

**Tip:** make these changes on a **duplicate of the live theme** first (you already have
"Copy of [CD] - Editing In Progress"), preview it on your phone, then publish.

---

### Sources
- [Baymard — cart abandonment reasons (70.22% avg; 48% extra costs)](https://baymard.com/blog/ecommerce-checkout-usability-report-and-benchmark)
- [Shopify — Shop Pay converts up to 50% more than guest checkout](https://www.shopify.com/blog/shop-pay-checkout)
- [Shopify conversion benchmarks 2026 (1.4–1.8% average)](https://www.growthsuite.net/resources/shopify-conversion-rate/complete-guide/benchmarks-by-industry)
- [Free-shipping threshold: 15–30% above AOV](https://resources.rework.com/libraries/ecommerce-growth/free-shipping-thresholds)
- [Ringers Western — shipping info](https://www.ringerswestern.com/en-us/pages/delivery-terms) · [returns](https://www.ringerswestern.com/en-us/pages/returns-exchanges)
- [Purebaby — delivery & returns](https://purebaby.com.au/pages/delivery-returns)
- [Jamie Kay — FAQ](https://jamiekay.com/pages/faq)
- [Titleys — click & collect](https://titleys.co/pages/click-and-collect-1)
- [Judge.me — review widget preview data](https://judge.me/help/en/articles/12460582-customizing-the-review-widget-new-version)
