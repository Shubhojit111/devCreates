'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../data/content';
import { Button } from './ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  const dark = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !open ? 'bg-cream/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="flex h-20 items-center justify-between px-5 lg:px-10">
          <a href="/" className="flex items-center" onClick={close} aria-label="Dev Creates — home">
            <img
              src={dark ? '/brand/logo-dark.svg' : '/brand/logo.svg'}
              alt="Dev Creates"
              className="h-[30px] w-auto lg:h-[38px]"
            />
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`font-display text-[16px] transition-colors duration-300 ${
                  dark ? 'text-ink hover:text-coral' : 'text-cream/90 hover:text-cream'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/#book" size="sm" variant={dark ? 'dark' : 'white'}>
              Book a call
            </Button>
          </div>

          <button
            className={`relative flex h-11 w-11 items-center justify-center lg:hidden ${
              dark ? 'text-ink' : 'text-cream'
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span
              className={`absolute h-[2px] w-6 transition-all duration-300 ${
                open ? 'rotate-45 bg-current' : '-translate-y-[5px] bg-current'
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 transition-all duration-300 ${
                open ? '-rotate-45 bg-current' : 'translate-y-[5px] bg-current'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer — slides in like the reference (#E2E1DF panel) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-black/40" onClick={close} aria-hidden />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 flex w-[85%] max-w-[360px] flex-col bg-line pt-28 px-6"
            >
              <nav className="flex-1 overflow-y-auto" aria-label="Mobile">
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
                >
                  {navLinks.map((l) => (
                    <motion.li
                      key={l.label}
                      variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <a
                        href={l.href}
                        onClick={close}
                        className="flex items-baseline justify-between border-b border-ink/10 py-4 font-display text-[24px] text-ink"
                      >
                        {l.label}
                        <span className="text-[12px] text-fog">↗</span>
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="mt-8 flex flex-col gap-4"
                >
                  <Button href="/#book" onClick={close} variant="dark" className="w-full">
                    Book a call
                  </Button>
                  <a href="/contact/" className="text-center text-[14px] text-ash hover:text-ink">
                    Contact Dev Creates
                  </a>
                </motion.div>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
