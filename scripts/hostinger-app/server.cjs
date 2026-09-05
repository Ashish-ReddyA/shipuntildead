const http = require('node:http');
const { readFile, stat } = require('node:fs/promises');
const { existsSync } = require('node:fs');
const path = require('node:path');
const output = path.join(__dirname, 'dist');
const root = existsSync(path.join(output, 'index.html')) ? output : __dirname;
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.json':'application/json', '.rsc':'text/x-component', '.jpg':'image/jpeg', '.webp':'image/webp', '.png':'image/png', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.ico':'image/x-icon' };
const allowed = new Set(['index.html','404.html','index.rsc','favicon.svg','vinext-client-entry-manifest.json','images','projects','_next']);
const server = http.createServer(async (req,res) => {
  if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405, {Allow:'GET, HEAD'}); return res.end(); }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const first = pathname.split('/').filter(Boolean)[0];
    if (first && !allowed.has(first)) throw new Error('Not a public asset');
    let file = path.resolve(root, '.' + pathname);
    if (file !== root && !file.startsWith(root + path.sep)) throw new Error('Outside public root');
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const data = await readFile(file);
    res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream'});
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch {
    const fallback = await readFile(path.join(root,'404.html')).catch(()=>'Not found');
    res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
    res.end(req.method === 'HEAD' ? undefined : fallback);
  }
});
server.listen(Number(process.env.PORT ?? 3000), '0.0.0.0', () => console.log(`Listening on port ${server.address().port}`));
