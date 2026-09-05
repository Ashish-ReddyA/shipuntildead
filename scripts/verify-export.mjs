import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist/client');
const routes = ['index.html','projects/give-ai-what-it-needs/index.html','projects/agent-arena/index.html','projects/agnys/index.html','404.html'];
for (const route of routes) {
  const html = await readFile(path.join(root,route),'utf8');
  assert.ok(html.includes('<title>'),`${route}: metadata`);
  assert.ok(!html.includes('localhost:'),`${route}: no local server dependency`);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    let target = decodeURIComponent(match[1]);
    if(target === '/') target='/index.html';
    else if (!path.extname(target)) target=target.replace(/\/$/,'')+'/index.html';
    await access(path.join(root,target));
  }
  console.log(`PASS ${route}: local links and assets exist`);
}
const home = await readFile(path.join(root,'index.html'),'utf8');
const detail = await readFile(path.join(root,routes[1]),'utf8');
assert.ok(home.includes('https://giveai.shipuntildead.com'));
assert.ok(detail.includes('https://giveai.shipuntildead.com'));
assert.ok(detail.indexOf('src="/images/give-ai-before.jpg"') < detail.indexOf('src="/images/give-ai-after.jpg"'));
assert.ok(detail.includes('id="before-and-after"'));
assert.ok(!(await readFile(path.join(root,routes[2]),'utf8')).includes('id="before-and-after"'));
await access(path.join(root,'.htaccess'));
console.log('PASS before/after order, project destination, scoped example and Hostinger configuration');
