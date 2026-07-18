# Gourav Maharshi — Website + Blog Setup Guide

This project is a static website with a self-service blog. You write posts through
a simple login page at `/admin` — no coding required after setup.

**Cost: $0/month** (Netlify free tier + free CMS). Only a domain name costs money later (~$12/year, optional).

---

## Part 1 — Put this project on GitHub (10 min, one-time)

1. Go to [github.com](https://github.com) and create a free account if you don't have one.
2. Click **New repository**. Name it e.g. `gourav-maharshi-website`. Keep it Public or Private — either works. Don't add a README (we already have one).
3. On your computer, unzip the folder you downloaded from this chat.
4. On the new repo's page, click **uploading an existing file**, then drag in *all* the files and folders from the unzipped project (keep the folder structure intact: `admin/`, `_includes/`, `content/`, `assets/`, `index.html`, `.eleventy.js`, `package.json`, `netlify.toml`, `.gitignore`).
5. Click **Commit changes**.

*(If you're comfortable with Git/terminal, this is just `git init`, `git add .`, `git commit`, `git remote add origin ...`, `git push` — same result.)*

---

## Part 2 — Connect to Netlify (5 min)

1. Go to [app.netlify.com](https://app.netlify.com) and sign up (use "Sign up with GitHub" — simplest).
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub**, authorize it, then select your `gourav-maharshi-website` repo.
4. Netlify will auto-detect the build settings from `netlify.toml` (build command `npx @11ty/eleventy`, publish folder `_site`). Just click **Deploy**.
5. Wait ~1-2 minutes. You'll get a live URL like `random-name-123.netlify.app`.

Visit it — your homepage and blog should both be live.

---

## Part 3 — Turn on the Content Manager (5 min)

This lets you log in at `/admin` and write blog posts yourself.

1. In your Netlify site dashboard, go to **Site configuration → Identity** (or search "Identity" in settings) and click **Enable Identity**.
2. Scroll to **Registration** → set it to **Invite only** (so random people can't sign up).
3. Scroll to **Services → Git Gateway** → click **Enable Git Gateway**. This lets the CMS save posts to your GitHub repo on your behalf, without you ever touching GitHub directly.
4. Go to the **Identity** tab (top level, not settings) → **Invite users** → enter your own email.
5. Check your email, click the invite link — it'll ask you to set a password on your site's domain.
6. Now go to `https://YOURSITE.netlify.app/admin` and log in with that email + password.

You'll see a **Content Manager** with a "Blog Posts" section. Click **New Blog Post**, fill in Title / Date / Excerpt / Body, hit **Publish** — the site automatically rebuilds and your post goes live within a minute or two.

---

## Part 4 — Add your custom domain (optional, ~$12/year)

1. Buy a domain (e.g. `gouravmaharshi.com`) from Namecheap or GoDaddy.
2. In Netlify: **Site configuration → Domain management → Add a domain**.
3. Netlify will show you 1-2 DNS records to paste into your domain registrar's DNS settings.
4. Takes 10 min to set up, up to 24-48 hrs to fully go live.

---

## Writing your next blog post — the short version

1. Go to `yoursite.com/admin`
2. Log in
3. Click **New Blog Post**
4. Fill in Title, Date, Excerpt, Body (Markdown editor — just write normally, use the toolbar for bold/links/images)
5. Click **Publish**
6. Done — live in ~1-2 minutes

---

## What's already built vs. what comes next

**Built now:** Homepage, About, Programs, Experience timeline, Media, Contact — plus this full blog system.

**Next (on request):** EMI / SIP / YTM calculators as new pages, a working contact form (Netlify Forms — no extra setup needed, just tell me and I'll wire it into the existing contact section), and a link to your YouTube Courses tab once that's live.
