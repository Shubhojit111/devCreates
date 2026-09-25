import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('out');
const preferredPort = Number(process.env.PORT || 5173);
const MAX_ATTEMPTS = 10;
let port = preferredPort;
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};

const server = createServer(async (request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    response.writeHead(400).end('Bad request');
    return;
  }
  const candidate = path.resolve(root, `.${pathname}`);
  if (candidate !== root && !candidate.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  try {
    let file = candidate;
    let info = await stat(file);
    if (info.isDirectory()) {
      file = path.join(file, 'index.html');
      info = await stat(file);
    }
    if (!info.isFile()) throw new Error('Not a file');
    const headers = {
      'Content-Type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store',
      'Accept-Ranges': 'bytes',
    };
    const range = request.headers.range?.match(/^bytes=(\d*)-(\d*)$/);
    if (range) {
      let start = range[1] ? Number(range[1]) : 0;
      let end = range[2] ? Number(range[2]) : info.size - 1;
      if (!range[1] && range[2]) start = Math.max(0, info.size - Number(range[2]));
      end = Math.min(end, info.size - 1);
      if (start > end || start >= info.size) {
        response.writeHead(416, { 'Content-Range': `bytes */${info.size}` }).end();
        return;
      }
      response.writeHead(206, {
        ...headers,
        'Content-Length': end - start + 1,
        'Content-Range': `bytes ${start}-${end}/${info.size}`,
      });
      if (request.method === 'HEAD') response.end();
      else createReadStream(file, { start, end }).pipe(response);
      return;
    }
    response.writeHead(200, { ...headers, 'Content-Length': info.size });
    if (request.method === 'HEAD') response.end();
    else createReadStream(file).pipe(response);
  } catch {
    try {
      const notFound = path.join(root, '404.html');
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      if (request.method === 'HEAD') response.end();
      else createReadStream(notFound).pipe(response);
    } catch {
      response.writeHead(404).end('Not found');
    }
  }
}).on('error', (error) => {
  // Vite-style fallback: move to the next free port instead of crashing.
  if (error?.code === 'EADDRINUSE' && port - preferredPort < MAX_ATTEMPTS) {
    console.log(`Port ${port} is in use, switching to ${port + 1}.`);
    port += 1;
    server.listen(port, '0.0.0.0');
    return;
  }
  throw error;
}).listen(port, '0.0.0.0', () => {
  console.log(`Dev Creates preview ready on http://0.0.0.0:${port}/`);
});
