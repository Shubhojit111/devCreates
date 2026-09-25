'use client';

import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/content';
import { Reveal } from './ui/Reveal';

export function Work() {
  return (
    <section id="work" className="bg-slate px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-9">
          <Reveal>
            <h2 className="font-display uppercase leading-[0.8] tracking-[-0.03em] text-cream/[0.58]">
              <span className="block text-[clamp(3.25rem,8.5vw,6.25rem)]">From</span>
              <span className="block pl-[clamp(1.5rem,6vw,6rem)] text-[clamp(3.25rem,8.5vw,6.25rem)]">To</span>
              <span className="block pl-[clamp(3rem,10vw,10rem)] text-[clamp(3.25rem,8.5vw,6.25rem)] text-cream">Concept</span>
              <span className="block pl-[clamp(3rem,10vw,10rem)] text-[clamp(3.25rem,8.5vw,6.25rem)] text-cream">Reality</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-3">
          <p className="text-[14px] leading-[1.4] text-cream/60 lg:ml-auto lg:max-w-[220px] lg:text-right">
            We stand beside companies that understand a brand is not decoration — it shapes growth, sales and the
            trust a business earns.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-x-6 gap-y-14 lg:mt-24 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.08}>
            <article id={p.id} className="group scroll-mt-28">
              <div className="relative overflow-hidden border border-cream/10 bg-black/20">
                <img
                  src={p.image}
                  alt={`${p.name} — cover art`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-cream">{p.name}</h3>
                  <p className="mt-1 text-[14px] leading-[1.4] text-cream/50">{p.category}</p>
                </div>
                <span className="text-[14px] text-cream/40">{String(i + 1).padStart(2, '0')}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
