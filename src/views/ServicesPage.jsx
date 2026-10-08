'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { services, projects, buildPromises } from '../data/content';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { PricingTeaser } from '../components/PricingTeaser';
import { BookInFourTaps } from '../components/BookInFourTaps';
import { StickyGallery } from '../components/StickyGallery';

export function ServicesPage() {
  const [prefill, setPrefill] = useState(null);

  const bookService = (id) => {
    setPrefill(id);
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="flex min-h-[68svh] flex-col justify-end bg-black px-5 pb-14 pt-36 text-cream lg:px-10 lg:pb-20">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.14em] text-cream/60">(02) — Services & pricing</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-8 font-display uppercase leading-[0.85] tracking-[-0.04em]">
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">Websites & SaaS</span>
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)] text-coral">for business.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-[480px] text-[15px] leading-[1.6] text-cream/70">
            Five fixed-scope services for growing businesses — each with its own headline below, because a portfolio
            site and a SaaS product are different jobs. SEO-ready builds, launch in weeks.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-6 flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-cream/20 px-3.5 py-1.5 text-[13px] text-cream/80 transition-colors hover:border-cream hover:text-cream"
              >
                {s.title}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {services.map((service) => {
        const gallery = service.gallery.map((id) => {
          const p = projects.find((proj) => proj.id === id);
          return {
            src: p.image,
            alt: `${p.name} — ${p.tagline}`,
            label: p.name,
            href: `/work/#${p.id}`,
            caption: `${p.name} — ${p.tagline}`,
          };
        });
        return (
          <section key={service.id} id={service.id} className="scroll-mt-20 bg-cream px-5 py-14 lg:px-10 lg:py-20">
            <div className="grid gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:gap-14 lg:pt-12">
              <Reveal className="lg:col-span-6">
                <span className="font-display text-[14px] text-fog">({service.num}) — {service.timeline}</span>
                <h2 className="mt-5 max-w-[640px] font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[0.95] tracking-[-0.045em] text-ink">
                  {service.hero}
                </h2>
                <p className="mt-2 font-medium text-coral">{service.price}</p>
                <p className="mt-4 text-[13px] uppercase tracking-[0.1em] text-ash">{service.title} — {service.short}</p>
                <p className="mt-4 max-w-[460px] text-[15px] leading-[1.6] text-ash">{service.desc}</p>
                <ul className="mt-8 max-w-[460px] border-t border-line">
                  {service.deliverables.map((item, itemIndex) => (
                    <li key={item} className="flex items-center justify-between gap-4 border-b border-line py-4 font-display text-[15px] text-ink">
                      <span className="flex items-center gap-3"><Check size={15} className="text-coral" />{item}</span>
                      <span className="text-[13px] text-fog">0{itemIndex + 1}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button onClick={() => bookService(service.id)} variant="dark">Discuss this service</Button>
                </div>
              </Reveal>
              <div className="lg:col-span-6">
                <StickyGallery images={gallery} />
              </div>
            </div>
          </section>
        );
      })}

      <PricingTeaser />

      <section className="border-t border-line bg-cream px-5 py-20 lg:px-10 lg:py-24">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.14em] text-ash">Included in every build</p>
          <h2 className="mt-4 max-w-[680px] font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.04em] text-ink">
            What you get, whatever you pick.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {buildPromises.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="h-full border-t-2 border-ink pt-6">
                <span className="font-display text-[14px] text-coral">(0{i + 1})</span>
                <h3 className="mt-4 font-display text-[20px] tracking-[-0.02em] text-ink">{p.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-ash">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <BookInFourTaps prefillService={prefill} />
    </>
  );
}
