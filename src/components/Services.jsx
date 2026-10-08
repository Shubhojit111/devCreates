'use client';

import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/content';
import { Reveal } from './ui/Reveal';

export function Services({ onSelect }) {
  const select = (id) => {
    if (typeof onSelect === 'function') onSelect(id);
    else document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="services" className="bg-cream px-5 pt-20 lg:px-10 lg:pt-28">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <p className="text-[13px] uppercase tracking-[0.14em] text-ash">What we do for businesses</p>
          <h2 className="mt-4 font-display uppercase leading-[0.85] tracking-[-0.04em] text-ink">
            <span className="block text-[clamp(2.4rem,5vw,4rem)]">Services with</span>
            <span className="block text-[clamp(2.4rem,5vw,4rem)] text-coral">fixed pricing.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-4">
          <p className="text-[14px] leading-[1.55] text-ash lg:ml-auto lg:max-w-[280px] lg:text-right">
            No vague "design packages". Pick the outcome you need — website, store, SaaS or ongoing growth — and get
            a launch date in writing.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 lg:mt-16">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.04}>
            <button
              onClick={() => select(s.id)}
              className="group relative block w-full border-t border-line py-7 text-left lg:py-8"
              aria-label={`${s.title} ${s.price} — book this service`}
            >
              <span className="grid grid-cols-12 items-start gap-x-4 gap-y-3">
                <span className="col-span-1 hidden text-[14px] text-fog lg:block">{s.num}</span>
                <span className="col-span-12 lg:col-span-5">
                  <span className="block font-display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-none tracking-[-0.04em] text-black transition-colors duration-300 group-hover:text-coral">
                    {s.title}
                  </span>
                  <span className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-ink px-3 py-1 text-[12px] font-semibold text-cream">{s.price}</span>
                    <span className="rounded-full border border-line px-3 py-1 text-[12px] text-ash">{s.timeline}</span>
                  </span>
                </span>
                <span className="col-span-10 text-[14px] leading-[1.55] text-slate/[0.72] lg:col-span-5">
                  <span className="block font-medium text-ink/80">{s.short}</span>
                  <span className="mt-1 block">{s.desc}</span>
                </span>
                <span className="col-span-2 flex justify-end lg:col-span-1">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-coral group-hover:bg-coral group-hover:text-cream">
                    <ArrowUpRight size={18} />
                  </span>
                </span>
              </span>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-slate transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </button>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>

      <Reveal className="mt-8">
        <p className="text-center text-[13px] text-ash">
          Tap any service to pre-fill the booking form below ↓ · Full price menu on{' '}
          <a href="/pricing/" className="font-medium text-ink underline underline-offset-4 hover:text-coral">
            Pricing
          </a>
        </p>
      </Reveal>
    </section>
  );
}
