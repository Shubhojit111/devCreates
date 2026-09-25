'use client';

import { useState } from 'react';
import { services, projects } from '../data/content';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { BookInFourTaps } from '../components/BookInFourTaps';

const deliverables = {
  branding: ['Positioning & brand voice', 'Visual identity system', 'Guidelines & applications'],
  web: ['Experience & interface design', 'Responsive websites and apps', 'Launch-ready assets'],
  social: ['Content direction', 'Social-first design system', 'Ongoing creative support'],
  consulting: ['Brand & experience audit', 'Practical creative direction', 'A plan you can put to work'],
};

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
          <p className="text-[14px] leading-[1.4] text-cream/55">(02) — What we do</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-10 font-display uppercase leading-[0.8] tracking-[-0.04em]">
            <span className="block text-[clamp(3.25rem,8vw,7.75rem)]">Creative</span>
            <span className="block text-[clamp(3.25rem,8vw,7.75rem)] text-coral">Services.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-10 max-w-[360px] text-[14px] leading-[1.5] text-cream/65">
            The right kind of creative thinking, from a first idea to the details your audience actually sees.
          </p>
        </Reveal>
      </section>

      <div className="bg-cream px-5 pt-10 lg:px-10 lg:pt-16">
        <Reveal className="ml-auto max-w-[300px]">
          <p className="text-right text-[14px] leading-[1.4] text-ink">
            Tailored solutions designed<br />to elevate your brand<br />and drive results
          </p>
        </Reveal>
      </div>

      {services.map((service, index) => (
        <section key={service.id} id={service.id} className="scroll-mt-20 bg-cream px-5 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:gap-14 lg:pt-12">
            <Reveal className="lg:col-span-6">
              <span className="font-display text-[14px] text-fog">({service.num}) — Service</span>
              <h2 className="mt-6 max-w-[640px] font-display text-[clamp(2.6rem,5vw,5rem)] leading-[0.95] tracking-[-0.045em] text-ink">
                {service.title}
              </h2>
              <p className="mt-7 max-w-[430px] text-[15px] leading-[1.55] text-slate/[0.68]">{service.desc}</p>
              <ul className="mt-10 max-w-[430px] border-t border-line">
                {deliverables[service.id].map((item, itemIndex) => (
                  <li key={item} className="flex items-center justify-between gap-4 border-b border-line py-4 font-display text-[15px] text-ink">
                    {item}<span className="text-[13px] text-fog">0{itemIndex + 1}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Button onClick={() => bookService(service.id)} variant="dark">Book a call</Button>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden bg-line">
                <img
                  src={projects[index].image}
                  alt={`Visual study for ${service.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <BookInFourTaps prefillService={prefill} />
    </>
  );
}
