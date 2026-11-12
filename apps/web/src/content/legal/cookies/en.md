---
title: Cookies and local storage
description: "The cookies and browser storage SOTF Mods uses: strictly necessary session cookies, a few preferences and advertising."
anchors: [summary, necessary, preferences, ads, statistics, control]
---

# In short

SOTF Mods uses as few cookies as possible. Signing in needs one cookie; a few preferences are remembered in your browser; the ad networks that show ads may set their own cookies. Our own statistics use no cookies at all.

# Strictly necessary

These make the site work and can't be turned off. They don't need consent.

| Name | Type | Purpose | Duration |
|---|---|---|---|
| `__Host-sotf_sid` | Cookie (HttpOnly, Secure) | Keeps you signed in. Only a hash of it is stored on our side. | 30 days, renewed while you use the site (90 days at most) |
| `sotf_li` | Cookie | Tells the page you are signed in, so it doesn't ask the server needlessly. Contains no personal data. | Same as the session |

# Preferences

Stored in your browser (local storage), never sent to us:

| Name | Purpose |
|---|---|
| `sotf-theme` | Night, Day or System theme |
| `sotf-dismissed` | Banners you closed |
| `sotf-lang-declined` | You declined the suggestion to switch language |

# Advertising

Pages may show ads from **Adsterra** (a social bar and pop-under windows). Adsterra and its partners may set cookies or use similar storage to show ads, limit how often you see them and measure them; see the [Adsterra privacy policy](https://adsterra.com/privacy-policy/). Pages with private links (password reset, email verification, unsubscribe) never load ads.

# Statistics

Our own statistics use no cookies or similar identifiers; see the [privacy policy](/privacy#analytics).

# How to control cookies

You can delete cookies and site data in your browser settings; you will be signed out and your preferences reset. Blocking the necessary cookies prevents signing in, but you can still browse and download without an account.
