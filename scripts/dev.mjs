// Dev server entry with Vite-style port fallback: start at PORT (default 5173)
// and automatically move to the next free port when it is occupied,
// instead of crashing with EADDRINUSE.
import { createServer } from 'node:net';
import { spawn } from 'node:child_process';
import path from 'node:path';

const preferred = Number(process.env.PORT || 5173);
const hostname = process.env.HOSTNAME || '0.0.0.0';
const extraArgs = process.argv.slice(2);
const MAX_ATTEMPTS = 10;

function isFree(port) {
  return new Promise((resolve) => {
    const tester = createServer();
    tester.once('error', () => resolve(false));
    tester.once('listening', () => tester.close(() => resolve(true)));
    tester.listen(port, hostname);
  });
}

let port = preferred;
let attempts = 0;
while (!(await isFree(port))) {
  attempts += 1;
  if (attempts > MAX_ATTEMPTS) {
    console.error(`No free port found from ${preferred} to ${port}.`);
    process.exit(1);
  }
  port += 1;
}

if (port !== preferred) {
  console.log(`Port ${preferred} is in use, switching to ${port}.`);
}

// Run Next's CLI directly with node: no shell needed, no deprecation warning,
// and no reliance on npx resolution.
const nextBin = path.join(process.cwd(), 'node_modules', 'next', 'dist', 'bin', 'next');
const child = spawn(
  process.execPath,
  [nextBin, 'dev', '--hostname', hostname, '--port', String(port), ...extraArgs],
  { stdio: 'inherit' },
);
child.on('exit', (code) => process.exit(code ?? 1));
