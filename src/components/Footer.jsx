'use client';

import { ArrowUp, Dribbble, Instagram, Linkedin } from 'lucide-react';
import { site } from '../config/site';
import { services } from '../data/content';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: Linkedin },
  { label: 'Dribbble', href: 'https://dribbble.com', Icon: Dribbble },
];

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="text-[14px] text-cream/40">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="font-display text-[16px] text-cream/80 transition-colors hover:text-cream">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-cream">
      <div className="px-5 pt-20 lg:px-10 lg:pt-28">
        <Reveal>
          <p className="text-[14px] leading-[1.4] text-cream/50">Websites & SaaS for growing businesses</p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <h2 className="max-w-[680px] font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-cream">
              Get a website or SaaS product that brings enquiries, not just likes.
            </h2>
            <div className="flex flex-col items-start gap-4">
              <Button href={site.email ? `mailto:${site.email}` : site.contactHref} variant="white">
                Contact Us
              </Button>
              <a
                href={site.email ? `mailto:${site.email}` : site.contactHref}
                className="text-[14px] text-cream/60 underline-offset-4 transition-colors hover:text-cream hover:underline"
              >
                {site.email || "Start a conversation"}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-cream/15 pt-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          <div>
            <img src="/brand/logo.svg" alt="Dev Creates" className="h-[30px] w-auto" />
            <p className="mt-5 max-w-[260px] text-[14px] leading-[1.5] text-cream/50">
              SEO-ready websites, online stores and SaaS products — designed, built and launched for growing businesses.
            </p>
            <p className="mt-5 text-[14px] text-cream/40">Based in Kolkata, India — serving businesses across India</p>
          </div>
          <FooterCol title="Services" links={services.map((s) => ({ label: s.title, href: `/services/#${s.id}` }))} />
          <FooterCol
            title="Work"
            links={[
              { label: 'All work + pricing', href: '/work/' },
              { label: 'Creamy — live site', href: 'https://creamy-five.vercel.app/' },
              { label: 'Hostzuno SaaS', href: '/work/#hostzuno' },
              { label: 'Dune Store', href: '/work/#dune' },
            ]}
          />
          <div>
            <p className="text-[14px] text-cream/40">More</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="/about/" className="font-display text-[16px] text-cream/80 transition-colors hover:text-cream">
                  About us
                </a>
              </li>
              <li>
                <a href="/contact/" className="font-display text-[16px] text-cream/80 transition-colors hover:text-cream">
                  Contact
                </a>
              </li>
              <li>
                <a href="/pricing/" className="font-display text-[16px] text-cream/80 transition-colors hover:text-cream">
                  Pricing
                </a>
              </li>
            </ul>
            <div className="mt-7 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors hover:border-cream hover:text-cream"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-cream/15 py-6 text-[14px] text-cream/40 sm:flex-row">
          <span>© 2026 Dev Creates</span>
          <span>From concept to reality</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 transition-colors hover:text-cream"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Giant wordmark, bottom-clipped like the reference */}
      <div className="overflow-hidden px-5 lg:px-10" aria-hidden>
        <div className="-mb-[0.14em] whitespace-nowrap text-center font-display text-[clamp(4.5rem,15vw,15rem)] leading-[0.8] tracking-[-0.03em] text-cream/[0.16]">
          Dev Creates
        </div>
      </div>
    </footer>
  );
}
