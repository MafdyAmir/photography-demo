# Setup & Launch Guide (one-time, ~1 hour)

Everything in the code is done. These are the steps only you can do, because they need accounts.
Do them in this order. Cost: **0** except the domain.

---

## 1. Put the code on GitHub (10 min)

1. Create a free account at https://github.com (if you don't have one).
2. Click **New repository** → name it (e.g. `studio-site`) → choose **Private** → **Create repository**.
   Don't add a README.
3. In this project folder, run:

   ```bash
   git init -b main
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR-USER/studio-site.git
   git push -u origin main
   ```

## 2. Deploy on Netlify (10 min)

1. Go to https://app.netlify.com → **Sign up with GitHub**.
2. **Add new project → Import an existing project → GitHub** → pick `studio-site`.
3. The build settings are read from `netlify.toml` automatically (command `npm run build`, folder `dist`).
   Click **Deploy**.
4. After ~2 minutes you get an address like `https://something.netlify.app`. Open it — that's the site.
5. Optional: **Project configuration → General → Change project name** to get a nicer `.netlify.app` address.

## 3. Turn on the inquiry form emails (5 min)

1. Netlify → your project → **Forms** → **Enable form detection** → then **Deploys → Trigger deploy → Deploy project**
   (the form is detected during a deploy).
2. **Forms** should now list a form called **inquiry**.
3. **Project configuration → Notifications → Emails and webhooks → Form submission notifications →
   Add notification → Email notification** → form: `inquiry` → email: the photographer's address.
4. Test it: open `/contact` on the live site, send a test inquiry, check that:
   - you land on `/thank-you`
   - the email arrives (usually within a minute; check spam the first time)
   - the submission appears under **Forms → inquiry**
5. Spam: the hidden honeypot field is already in the form, and Netlify's spam filter is on by default.

> **Auto-reply to the client:** Netlify Forms can't send a confirmation email to the person who filled the form.
> The thank-you page tells them what happens next. If you want an auto-reply later, connect Netlify Forms to
> a free Zapier/Make account, or switch the form to Web3Forms/Formspree (paid plans).

## 4. Get emailed if a publish fails (2 min)

When the photographer publishes from the CMS, Netlify rebuilds the site. If something is wrong (e.g. an image is
missing), the build stops and **the live site stays on the previous version** — nothing breaks, but the change
doesn't appear. Get told about it:

**Project configuration → Notifications → Emails and webhooks → Deploy notifications → Add notification →
Email notification → Event: Deploy failed** → your email.

## 5. CMS login for the photographer — DecapBridge (15 min)

The photographer logs in at `/admin` with email + password. No GitHub account needed.

1. On GitHub: **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
   - Repository access: **Only select repositories** → `studio-site`
   - Permissions → Repository permissions → **Contents: Read and write**
   - Generate and copy the token.
2. Go to https://decapbridge.com → sign up → **Add site**:
   - GitHub repo: `YOUR-USER/studio-site`
   - Token: the one you just made
   - Decap CMS login URL: `https://YOUR-SITE.netlify.app/admin/`
3. DecapBridge shows a **`backend:` config block**. Open `public/admin/config.yml` and **replace the whole
   `backend:` block** with it. Keep the `commit_messages` part if you like.
4. In the same file, set `site_url` and `display_url` to your site address.
5. Commit and push:
   ```bash
   git add public/admin/config.yml
   git commit -m "Connect CMS login"
   git push
   ```
6. In DecapBridge, **invite** the photographer's email. They get an email to set a password.
7. Test it yourself first: open `https://YOUR-SITE/admin/`, log in, change one word in **Site Settings**, publish,
   and check the live site after ~2 minutes. Then change it back.

Give the photographer `docs/ADMIN-GUIDE.md` (in Arabic).

## 6. Google Analytics 4 (15 min)

1. Go to https://analytics.google.com → **Start measuring** → create an **Account** and a **Property**
   (time zone Egypt, currency EGP).
2. Choose platform **Web** → enter the site address → **Create stream**.
3. Copy the **Measurement ID** (looks like `G-AB12CD34EF`).
4. Netlify → **Project configuration → Environment variables → Add a variable**:
   `PUBLIC_GA4_ID` = `G-AB12CD34EF` → **Deploys → Trigger deploy**.
5. Test: open the site on your phone, click the WhatsApp button and send a test inquiry. In GA4 →
   **Reports → Realtime** you should see `whatsapp_click`, `start_project_click`, `inquiry_submit`
   (can take a few minutes).
6. After the events show up (up to 24 h): **Admin → Data display → Events** → turn on **Mark as key event** for
   `inquiry_submit` and `whatsapp_click`. These are your conversions.

Every form submission also includes the lead source (`utm_source`, `utm_medium`, `utm_campaign`, `landing_page`)
in the email, so you can see where each lead came from even without GA4.

**Use UTM links everywhere you share the site**, e.g.:

| Where | Link |
| --- | --- |
| Instagram bio | `https://YOUR-DOMAIN/?utm_source=instagram&utm_medium=bio` |
| WhatsApp outreach | `https://YOUR-DOMAIN/work?utm_source=whatsapp&utm_medium=outreach&utm_campaign=oct-brands` |
| LinkedIn message | `https://YOUR-DOMAIN/?utm_source=linkedin&utm_medium=outreach` |

## 7. Domain + professional email (when ready)

1. Buy the domain (Namecheap, Cloudflare, GoDaddy…).
2. Netlify → **Domain management → Add a domain** → follow the steps (easiest: use Netlify DNS — it gives you
   4 nameservers to paste at your domain registrar). HTTPS is set up automatically.
3. Netlify → **Environment variables** → add `SITE_URL` = `https://your-domain.com` → redeploy.
   (Used for Google, the sitemap and WhatsApp/LinkedIn link previews.)
4. Update `site_url` / `display_url` in `public/admin/config.yml`, and the login URL in DecapBridge.
5. Email on the domain: Zoho Mail (free plan) or Google Workspace. They give you MX records to add in
   Netlify DNS. Then update the email in **Site Settings** in the CMS.

## 8. Google Search Console (10 min, on launch day)

1. https://search.google.com/search-console → **Add property → URL prefix** → your domain.
2. Verify with **HTML tag**: copy only the `content="…"` value → Netlify env var
   `PUBLIC_GSC_VERIFICATION` = that value → redeploy → click **Verify**.
   (Or use the **Domain** property with a DNS record — also works with Netlify DNS.)
3. **Sitemaps** → submit `sitemap-index.xml`.
4. Optional: create a **Google Business Profile** if the studio qualifies (PRD §8).

---

## Before launch — content checklist

The site now carries Shotix's real work (16 projects imported from their Facebook page, Oct 2026).
Check these with the client before launch:

- [ ] Confirm the WhatsApp number (201201706333) and email. Instagram, TikTok, Facebook and LinkedIn are set
      from their Linktree (X and Threads left out on purpose; empty links are hidden).
- [ ] Review the drafted service texts, project summaries and "Why Shotix" points with the team.
- [ ] Confirm the event/client names on each project (they were read from the photos and captions).
- [ ] Ask for an SVG version of the logo (the site uses the supplied PNGs).
- [ ] Videos live in `public/videos/` (~74 MB, compressed). Keep new uploads under ~15 MB each.
- [ ] Testimonials only real ones.
- [ ] Send a test inquiry from a phone and confirm the email arrives.
- [ ] Test the WhatsApp button on Android and iPhone.

## Environment variables (summary)

| Name | Needed? | Value |
| --- | --- | --- |
| `PUBLIC_GA4_ID` | For analytics | GA4 Measurement ID, `G-…` |
| `SITE_URL` | After the domain is connected | `https://your-domain.com` |
| `PUBLIC_GSC_VERIFICATION` | Only for HTML-tag verification | Search Console code |
