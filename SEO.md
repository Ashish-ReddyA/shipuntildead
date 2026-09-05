# Search and sharing setup

Canonical site: https://shipuntildead.com/

The homepage and all three project pages have unique titles and descriptions, canonical links, Open Graph previews, X summary cards, and structured data. Identity data connects Ashish Reddy with his supplied GitHub, LinkedIn, and X profiles. Project pages include breadcrumbs. The ship logo is available as SVG, a 96-pixel search favicon, a 180-pixel Apple touch icon, and a 512-pixel PNG.

`lib/seo.ts` holds search descriptions and identity details. `lib/projects.ts` holds visible project content. When adding a project, add its search description and a 1200 × 630 PNG at `public/images/social-{slug}.png`. The build generates the sitemap from exported project pages and writes an unrestricted robots.txt. The deployment checks validate metadata, social links, canonical URLs, image dimensions, sitemap coverage, and serving of crawler files.

## Google Search Console

1. Add or select the domain property `shipuntildead.com` in https://search.google.com/search-console/.
2. If ownership is not verified, use the exact DNS TXT value Google supplies in Hostinger DNS. Do not invent or reuse a token from another property.
3. Submit `https://shipuntildead.com/sitemap.xml` in Sitemaps.
4. Inspect `https://shipuntildead.com/`, run Test live URL, and request indexing. Repeat for the three project URLs if necessary.
5. Review Page indexing and Crawl stats for actual Googlebot access. A public HTTP check is useful but cannot establish what Google saw during its previous crawl.

Google's “No information is available for this page” message indicates that Google could not crawl its content to create a snippet. During the September 5, 2026 check, the homepage returned HTML with a description and no blocking header; robots.txt and sitemap.xml were missing (404). A missing robots.txt by itself is not a crawl ban. We cannot determine the historical block without Search Console. If the live URL test still encounters a browser challenge, investigate Hostinger's crawler access rather than weakening site protection globally.

Titles, snippets, favicon display, and rankings are selected by search engines. Deployment does not instantly update search results, and indexing is not guaranteed.

References:
- https://support.google.com/webmasters/answer/7489871
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/appearance/favicon-in-search
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
