'use client';

import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/content';
import { Reveal } from './ui/Reveal';

export function Work({ limit }) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="work" className="bg-slate px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-9">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.14em] text-cream/50">Live client-style builds</p>
            <h2 className="mt-4 font-display uppercase leading-[0.85] tracking-[-0.03em] text-cream/[0.58]">
              <span className="block text-[clamp(2.5rem,6.5vw,5rem)]">Websites & SaaS</span>
              <span className="block text-[clamp(2.5rem,6.5vw,5rem)] text-cream">we've shipped</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-3">
          <p className="text-[14px] leading-[1.5] text-cream/60 lg:ml-auto lg:max-w-[250px] lg:text-right">
            Real websites, stores and SaaS flows from our portfolio — open the live ones, and ask for a walkthrough
            of the rest on a call.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-x-6 gap-y-14 lg:mt-20 md:grid-cols-2">
        {list.map((p, i) => {
          const Card = (
            <>
              <div className="relative overflow-hidden border border-cream/10 bg-black/20">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.tagline}`}
                  loading="lazy"
                  className="aspect-[21/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1.5 text-[12px] font-medium text-cream backdrop-blur-sm">
                  {p.year} · {p.category}
                </span>
                {p.liveUrl && (
                  <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                )}
                {!p.liveUrl && (
                  <span className="absolute bottom-3 left-3 rounded-full bg-cream px-3 py-1.5 text-[12px] font-medium text-ink">
                    Case walkthrough on call
                  </span>
                )}
              </div>
              <div className="mt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[26px] leading-[1.1] tracking-[-0.02em] text-cream">{p.name}</h3>
                    <p className="mt-1.5 max-w-[420px] text-[14px] leading-[1.5] text-cream/60">{p.tagline}</p>
                  </div>
                  <span className="shrink-0 text-[14px] text-cream/40">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border border-cream/15 px-2.5 py-1 text-[12px] text-cream/70">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-cream/15 pt-4">
                  <p className="text-[13px] text-emerald-300/90">✓ {p.result}</p>
                  {p.liveUrl ? (
                    <span className="font-display text-[13px] text-cream/70">Live site ↗</span>
                  ) : (
                    <span className="font-display text-[13px] text-cream/70">Walkthrough on call →</span>
                  )}
                </div>
              </div>
            </>
          );

          return (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <article id={p.id} className="group scroll-mt-28">
                {p.liveUrl ? (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} — open live site`}>
                    {Card}
                  </a>
                ) : (
                  <a href="/contact/#book" aria-label={`${p.name} — ask for a walkthrough`}>
                    {Card}
                  </a>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-cream/15 bg-black/25 p-7 lg:flex-row lg:items-center lg:p-9">
          <p className="max-w-[560px] text-[15px] leading-[1.55] text-cream/70">
            <span className="font-display text-[18px] text-cream">Like what you see? </span>
            Tell us about your business on a free 30-min call — you'll leave with a fixed scope, a fixed quote and
            a launch date in writing.
          </p>
          <div className="flex flex-wrap gap-3">
            {limit && (
              <a
                href="/work/"
                className="rounded-full border border-cream/25 px-6 py-3 font-display text-[15px] text-cream transition-colors hover:bg-cream hover:text-ink"
              >
                View all work
              </a>
            )}
            <a
              href="/pricing/"
              className="rounded-full border border-cream/25 px-6 py-3 font-display text-[15px] text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              See pricing
            </a>
            <a
              href="/contact/#book"
              className="rounded-full bg-coral px-6 py-3 font-display text-[15px] text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              Get my quote →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
