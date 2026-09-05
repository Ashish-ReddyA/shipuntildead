# ShipUntilDead

Ashish’s personal AI project portfolio, built in the **Builds From the Underground** theme: newsprint typography, custom zine covers, and detailed project stories.

Projects: Give-AI-what-it-needs, Agent Arena, and Agnys. The Give-AI detail page includes the original photo-style result and the refined anime-style result, supplied by Ashish.

## Connect to Hostinger

This repository has two branches:

| Branch | Purpose |
| --- | --- |
| `main` | Editable source, images, and build workflow |
| `hostinger` | Finished static website, with `index.html` at the root |

For Hostinger **Custom PHP/HTML** web or cloud hosting:

1. Open your website’s hPanel dashboard → **Advanced → Git**.
2. Select **Continue with GitHub**, then authorize this repository.
3. Choose `Ashish-ReddyA/shipuntildead`.
4. Select the **hostinger** branch and `public_html` as the destination.
5. Deploy. Enable automatic deployment if you want later branch updates to go live automatically.

Use the `hostinger` branch for this flow. `main` is the source and requires a build before it can be served. Back up any existing files in the destination before replacing them.

Official instructions: https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/

Every push to `main` runs the GitHub Actions build, verifies the output, and updates `hostinger` after success. Hostinger must still be connected in your account; uploading this repository does not authorize Hostinger or change your DNS.

## Develop locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Build and verify the portable website:

```sh
npm run build
npm run check:export
npm run preview
```

The static output is `dist/client`. The local static preview is at `http://127.0.0.1:4173`. No Node server or database is required on Hostinger for the finished site.

## Edit the portfolio

- `lib/projects.ts`: project content, links, features, and documentation sources.
- `app/page.tsx`: homepage.
- `app/projects/[slug]/page.tsx`: project detail pages and before/after example.
- `app/globals.css`: typography, layout, colors, and mobile styling.
- `public/images`: all cover artwork and example images.
- `scripts`: export preparation, checks, preview, and ZIP packaging.

The Give-AI Visit project URL is `https://giveai.shipuntildead.com`. Connect that subdomain to the separate Give-AI application at its host; this portfolio does not contain or deploy that app.

See [README-HOSTINGER.md](README-HOSTINGER.md) for manual ZIP upload and local packaging instructions.

## Hostinger app-build setup (including the missing package.json error)

The `hostinger` branch also supports Hostinger's **Deploy Web App** importer. It includes a dependency-free package manifest, a build command, and a small server for this path. GitHub generates these files on every build, so they are not lost when the branch updates.

Use these settings for that importer:

| Setting | Value |
| --- | --- |
| Branch | `hostinger` |
| Framework | **Other** |
| Root directory | Repository root (`.`) |
| Node version | **22** |
| Build command | `npm run build` |
| Output directory | `dist` |
| Start command, if requested | `npm start` |
| Entry file, if requested | `server.cjs` |

Then redeploy the latest commit. The build packages the already-generated website; it does not need to install React or run Vite on Hostinger. The server listens on Hostinger's assigned port and all network interfaces. Static PHP/HTML Git deployment remains supported by the same branch.

