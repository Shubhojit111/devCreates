// Standalone fallback entry. The production application uses Next.js App Router;
// this entry reuses the exact same JSX components for a server-free HTML preview.
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { About } from './views/About';
import { ServicesPage } from './views/ServicesPage';
import { WorkPage } from './views/WorkPage';
import { PricingPage } from './views/PricingPage';
import { Contact } from './views/Contact';

const routes = {
  '/': Home,
  '/about': About,
  '/services': ServicesPage,
  '/work': WorkPage,
  '/pricing': PricingPage,
  '/contact': Contact,
};

function readLocation() {
  const match = /^#!(\/[^#?]*)(?:#(.*))?$/.exec(window.location.hash);
  const route = match?.[1]?.replace(/\/$/, '') || '/';
  return { route: routes[route] ? route : '/', anchor: match?.[2] || '' };
}

class PreviewErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) {
      return (
        <div className="flex min-h-svh flex-col items-start justify-center bg-black px-5 text-cream lg:px-10">
          <p className="font-display text-[clamp(3rem,6vw,6rem)] leading-none">Dev Creates.</p>
          <p className="mt-6 text-[15px] text-cream/70">This preview couldn't finish loading. Please reopen the file.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function PreviewApp() {
  const [location, setLocation] = useState(readLocation);
  const View = routes[location.route];

  useEffect(() => {
    const onHashChange = () => setLocation(readLocation());
    const onClick = (event) => {
      const link = event.target.closest?.('a[href]');
      if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const href = link.getAttribute('href');
      if (href?.startsWith('/')) {
        event.preventDefault();
        const [path, anchor] = href.split('#');
        const hash = `!${path}${anchor ? `#${anchor}` : ''}`;
        if (window.location.hash.slice(1) === hash) {
          if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        } else window.location.hash = hash;
      } else if (href?.startsWith('#')) {
        event.preventDefault();
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      document.removeEventListener('click', onClick);
    };
  }, []);

  useEffect(() => {
    if (location.anchor) {
      const frame = requestAnimationFrame(() => {
        document.getElementById(location.anchor)?.scrollIntoView({ behavior: 'smooth' });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <PreviewErrorBoundary>
      <div className="min-h-screen bg-cream font-sans text-ink antialiased">
        <Navbar />
        <main><View /></main>
        <Footer />
      </div>
    </PreviewErrorBoundary>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><PreviewApp /></React.StrictMode>,
);
