const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const output = path.join(root, 'dist');
fs.mkdirSync(output, { recursive: true });
for (const name of ['index.html','404.html','index.rsc','favicon.svg','.htaccess','images','projects','_next','vinext-client-entry-manifest.json','server.cjs']) {
  fs.cpSync(path.join(root, name), path.join(output, name), { recursive: true });
}
console.log('Hostinger build complete: dist');
