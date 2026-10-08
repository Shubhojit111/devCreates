'use client';

import { Check } from 'lucide-react';
import { pricing } from '../data/content';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export function PricingTeaser({ bare = false }) {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-line bg-cream px-5 py-24 lg:px-10 lg:py-32">
      {!bare && (
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <p className="text-[13px] uppercase tracking-[0.14em] text-ash">Simple starting points</p>
          <h2 className="mt-4 max-w-[700px] font-display text-[clamp(2.2rem,4.8vw,4rem)] leading-[1.0] tracking-[-0.04em] text-ink">
            Honest pricing, fixed before we start.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-4">
          <p className="text-[14px] leading-[1.55] text-ash lg:ml-auto lg:max-w-[280px] lg:text-right">
            Pick a starting point. Your exact fixed quote lands after one free discovery call.
          </p>
        </Reveal>
      </div>
      )}

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 xl:grid-cols-4">
        {pricing.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.07}>
            <div className={`flex h-full flex-col rounded-2xl border p-7 lg:p-8 ${t.featured ? 'border-ink bg-ink text-cream shadow-[0_24px_60px_-30px_rgba(21,21,19,0.5)]' : 'border-line bg-white text-ink shadow-[0_2px_12px_-6px_rgba(21,21,19,0.12)]'}`}>
              {t.featured && (
                <span className="mb-4 w-fit rounded-full bg-coral px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-cream">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-[22px]">{t.name}</h3>
              <p className={`mt-2 font-display text-[36px] tracking-[-0.03em] ${t.featured ? 'text-cream' : 'text-ink'}`}>
                {t.price}{' '}
                <span className={`font-sans text-[14px] ${t.featured ? 'text-cream/60' : 'text-ash'}`}>{t.unit}</span>
              </p>
              <p className={`mt-2 text-[14px] leading-[1.55] ${t.featured ? 'text-cream/70' : 'text-ash'}`}>{t.blurb}</p>
              <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 text-[14px] ${t.featured ? 'border-cream/15' : 'border-line'}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={15} className="mt-0.5 shrink-0 text-coral" />{f}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href="/contact/#book" variant={t.featured ? 'white' : 'dark'} className="w-full">{t.cta}</Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <p className="mx-auto max-w-[640px] text-center text-[13px] leading-[1.6] text-ash">
          {bare ? (
            <>Something custom — multi-branch sites, SaaS scope or monthly care? It's quoted fixed after one free
            call. No hourly billing, no lock-in — you own the code & domain. Book below ↓</>
          ) : (
            <>Need something custom — multi-branch sites, SaaS scope or monthly care? It's quoted fixed after one free
            call. No hourly billing, no lock-in — you own the code & domain. Full breakdown on our{' '}
            <a href="/pricing/" className="font-medium text-ink underline underline-offset-4 hover:text-coral">
              Pricing page
            </a>
            .</>
          )}
        </p>
      </Reveal>
    </section>
  );
}
