# ShipUntilDead — Hostinger edition

Your editable portfolio with the Builds From the Underground design, three project detail pages, and the Give-AI-what-it-needs before/after example.

## What to upload

Use `shipuntildead-hostinger-upload.zip`. It contains the finished website, with index.html at its root. No Node server, database, API key, or ChatGPT/Sites account is required on the host.

1. In Hostinger, select or create a Custom PHP/HTML website for your portfolio domain.
2. Open its File Manager and the domain's `public_html` folder.
3. Back up any existing website before replacing its files.
4. Upload and extract the upload ZIP into that folder. Ensure `index.html`, `.htaccess`, `_next`, `images`, and `projects` are directly inside `public_html`, not inside another ZIP-name folder.
5. Visit the homepage and open all three Details links. The included `.htaccess` supplies the index and 404 settings for Apache/LiteSpeed hosting.

This ZIP is intended for the root of a domain, not a subfolder like `/portfolio`. Hostinger Website Builder is a separate product; use file-based hosting with File Manager access.

Official upload guide: https://www.hostinger.com/support/1583289-how-to-manually-transfer-a-website-to-hostinger/

## Your project subdomain

The Give-AI-what-it-needs Visit project links point to `https://giveai.shipuntildead.com`.

Changing the link does not create the subdomain or deploy that application. Add this custom domain at the host running the Give-AI app, and apply that provider's DNS instructions where your domain's DNS is managed. If you instead host that app on Hostinger, configure the subdomain there for the app's hosting environment. Enable HTTPS once it is connected.

The portfolio ZIP does not include the separate Give-AI application. That app includes a provider proxy endpoint and needs its own compatible deployment; uploading this portfolio will not deploy the app.

Hostinger subdomain guide: https://www.hostinger.com/support/1583405-how-to-create-and-delete-subdomains-in-hostinger/

## Edit and rebuild locally

The source ZIP contains the project, public images, scripts, and dependency lockfile. Extract it into a folder. Install Node.js 22.13 or newer, then run:

```sh
npm ci
npm run dev
```

Create the finished static website:

```sh
npm run build
npm run check:export
npm run preview
```

The preview is at `http://127.0.0.1:4173`. Use the preview server rather than double-clicking HTML files: asset paths are relative to the website root. The exported website is in `dist/client`. Upload the contents of that directory after each rebuild. Fonts are bundled into the export; building initially needs network access to retrieve them and dependencies.

On Windows, create fresh upload and source ZIP files with:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/package-hostinger.ps1
```

## Where to make changes

- `lib/projects.ts`: project names, summaries, destinations, full detail content, and source links.
- `app/page.tsx`: portfolio homepage.
- `app/projects/[slug]/page.tsx`: detail-page template and before/after example.
- `app/globals.css`: typography, cover sizes, colors, layout, mobile rules.
- `public/images`: cover art and the two original user-supplied example JPGs.
- `app/layout.tsx`: site metadata and fonts.

The photographic daylight image is the BEFORE result. The anime-style moonlit image is the AFTER result. The images are included as supplied; no original or final prompt wording was provided or invented. The anime-style JPG is a still image, not a video.

## Validation

`npm run check:export` checks exported pages, internal destinations, referenced assets, the new project URL, and the example's order. The export has real HTML detail pages with directory indexes, so direct links and refreshes work on static hosting. It also includes a standalone 404 page.

The existing private Sites publication is separate and was not updated by preparing this local Hostinger edition.
