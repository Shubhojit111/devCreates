import { build } from 'esbuild';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

// A single HTML file, including the same components, images, fonts and styles
// as the Next.js site. The 7.7 MB hero video is replaced by its poster here.
// This preview survives ephemeral servers and can be viewed without network.
const root = process.cwd();
const publicDir = path.join(root, 'public');
const cssDir = path.join(root, 'out', '_next', 'static', 'css');

function mime(name) {
  if (name.endsWith('.svg')) return 'image/svg+xml';
  if (name.endsWith('.woff2')) return 'font/woff2';
  if (name.endsWith('.png')) return 'image/png';
  if (name.endsWith('.jpg') || name.endsWith('.jpeg')) return 'image/jpeg';
  throw new Error(`Unknown asset type: ${name}`);
}

async function uri(relative) {
  const content = await readFile(path.join(publicDir, relative.replace(/^\//, '')));
  return `data:${mime(relative)};base64,${content.toString('base64')}`;
}

async function replaceAsset(code, filename) {
  const original = `/${filename}`;
  if (!code.includes(original)) throw new Error(`Missing ${original} in bundle`);
  return code.replaceAll(original, await uri(filename));
}

const result = await build({
  entryPoints: [path.join(root, 'src', 'preview.jsx')],
  bundle: true,
  write: false,
  platform: 'browser',
  format: 'iife',
  target: ['es2020'],
  jsx: 'automatic',
  minify: true,
  define: { 'process.env.NODE_ENV': '"production"' },
});
let js = result.outputFiles[0].text;
let css = '';
for (const filename of await readdir(cssDir)) {
  if (filename.endsWith('.css')) css += await readFile(path.join(cssDir, filename), 'utf8');
}
if (!css) throw new Error('No exported CSS found. Run npm run build first.');

for (const file of await readdir(path.join(publicDir, 'covers'))) {
  if (file.endsWith('.jpg')) js = await replaceAsset(js, `covers/${file}`);
}
for (const file of ['brand/logo.svg', 'brand/logo-dark.svg', 'hero-poster.png']) {
  js = await replaceAsset(js, file);
}
for (const file of ['chillax-300', 'chillax-400', 'chillax-700', 'manrope-400']) {
  css = await replaceAsset(css, `fonts/${file}.woff2`);
}
const videoLiteral = 'src:"/hero.mp4"';
if (!js.includes(videoLiteral)) throw new Error('Hero video source changed: update standalone builder.');
js = js.replace(videoLiteral, 'src:void 0').replace('preload:"auto"', 'preload:"none"');
if (js.includes('/hero.mp4') || js.includes('/covers/') || js.includes('/brand/') || css.includes('/fonts/')) {
  throw new Error('One or more assets were not embedded.');
}
if (js.toLowerCase().includes('</script') || css.toLowerCase().includes('</style')) {
  throw new Error('Unsafe inline closing tag in bundle');
}

const poster = await uri('hero-poster.png');
const mark = await uri('brand/logo.svg');
const favicon = await uri('favicon.svg');
const fallback = `<div style="min-height:100svh;background:#151513;color:#f7f7f2;position:relative;overflow:hidden">
  <div aria-hidden="true" style="position:absolute;inset:0;background:url(${poster}) center/cover"></div>
  <div aria-hidden="true" style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.65),transparent 80%)"></div>
  <header style="position:relative;padding:24px 40px"><img src="${mark}" alt="Dev Creates" style="height:38px"></header>
  <div style="position:relative;min-height:70svh;display:flex;flex-direction:column;justify-content:flex-end;padding:40px">
    <h1 style="font:400 clamp(48px,6vw,88px)/.8 Chillax,sans-serif;letter-spacing:-.04em;text-transform:uppercase;margin:0">Dev<br><span style="color:#ea4f53">Creates.</span></h1>
    <p style="max-width:260px;margin-top:36px;font:14px/1.5 Manrope,sans-serif">Every brand touchpoint, owned with intent.</p>
  </div>
</div>`;
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Dev Creates | Creative Studio</title><link rel="icon" href="${favicon}"><style>${css}\nvideo{background:url(${poster}) center/cover}</style></head>
<body><div id="root">${fallback}</div><script>${js}</script></body></html>`;
const target = path.join(root, 'dev-creates-preview.html');
await writeFile(target, html);
console.log(`Wrote ${target} (${(Buffer.byteLength(html) / 1024 / 1024).toFixed(2)} MB) — five pages, no server required.`);
