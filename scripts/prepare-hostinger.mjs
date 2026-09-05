import { copyFile, mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist/client');
const urls = ['https://shipuntildead.com/'];
// Directory indexes keep detail URLs working on ordinary static web hosting.
for (const file of await readdir(path.join(root, 'projects'))) {
  if (!file.endsWith('.html')) continue;
  const directory = path.join(root, 'projects', file.slice(0, -5));
  await mkdir(directory, { recursive: true });
  await copyFile(path.join(root, 'projects', file), path.join(directory, 'index.html'));
  urls.push(`https://shipuntildead.com/projects/${file.slice(0, -5)}/`);
}
await writeFile(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile(path.join(root, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: https://shipuntildead.com/sitemap.xml\n');
await writeFile(path.join(root, '.htaccess'), 'DirectoryIndex index.html\nOptions -Indexes -MultiViews\nErrorDocument 404 /404.html\n');
console.log('Hostinger files ready in dist/client.');

// Hostinger's app importer expects a package even for prebuilt pages.
for (const file of ['package.json','package-lock.json','build.cjs','server.cjs']) {
  await copyFile(path.resolve('scripts/hostinger-app', file), path.join(root, file));
}
