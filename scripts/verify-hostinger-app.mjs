import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
const root=path.resolve('dist/client');
const pkg=JSON.parse(await readFile(path.join(root,'package.json'),'utf8'));
assert.equal(pkg.scripts.build,'node build.cjs');
assert.equal(pkg.scripts.start,'node server.cjs');
const build=spawn(process.execPath,['build.cjs'],{cwd:root,stdio:'inherit'});
assert.equal(await new Promise((resolve,reject)=>{build.on('error',reject);build.on('exit',resolve);}),0);
await access(path.join(root,'dist','index.html'));
await access(path.join(root,'dist','projects','give-ai-what-it-needs','index.html'));
for(const cwd of [root,path.join(root,'dist')]) {
 const server=spawn(process.execPath,['server.cjs'],{cwd,env:{...process.env,PORT:'0'},stdio:['ignore','pipe','pipe']});
 try {
  const port=await new Promise((resolve,reject)=>{
   const timeout=setTimeout(()=>reject(new Error('Server did not start')),10000);
   server.on('error',reject);server.once('exit',()=>reject(new Error('Server exited')));
   server.stdout.on('data',(data)=>{const match=String(data).match(/Listening on port (\d+)/);if(match){clearTimeout(timeout);resolve(match[1]);}});
  });
  const base=`http://127.0.0.1:${port}`;
  for(const route of ['/','/projects/give-ai-what-it-needs/','/projects/agent-arena/','/projects/agnys/','/images/give-ai-before.jpg','/images/give-ai-after.jpg']) assert.equal((await fetch(base+route)).status,200,route);
  for(const route of ['/package.json','/server.cjs','/missing','/%2e%2e%2fpackage.json']) assert.equal((await fetch(base+route)).status,404,route);
  assert.equal((await fetch(base+'/',{method:'HEAD'})).status,200);
  for (const [route, type] of [['/robots.txt','text/plain'],['/sitemap.xml','application/xml'],['/favicon-96.png','image/png'],['/apple-touch-icon.png','image/png'],['/images/social-home.png','image/png']]) {
   const response=await fetch(base+route);
   assert.equal(response.status,200,route);
   assert.ok(response.headers.get('content-type').startsWith(type),route);
  }
  assert.equal((await fetch(base+'/',{method:'POST'})).status,405);
  console.log('PASS package build, public routes, blocked source files and assigned port: '+cwd);
 } finally { const exited=new Promise(resolve=>server.once('exit',resolve));server.kill();await exited; }
}
