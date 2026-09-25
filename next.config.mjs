/** @type {import('next').NextConfig} */
const nextConfig = {
  // No server dependency for the public pages: deploy out/ to any static host.
  // Booking remains a client-side demo until a calendar/notification backend is connected.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Pin tracing to this project so a stray lockfile higher up the tree
  // (e.g. C:\Users\User\package-lock.json) doesn't hijack the workspace root.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
