'use client';

import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/content';
import { Reveal } from './ui/Reveal';

export function Services({ onSelect }) {
  return (
    <section id="services" className="bg-cream px-5 pt-24 lg:px-10 lg:pt-32">
      {/* Small right-aligned label, as on the reference */}
      <Reveal className="ml-auto max-w-[300px]">
        <p className="text-right text-[14px] leading-[1.4] text-ink">
          Tailored solutions designed
          <br />
          to elevate your brand
          <br />
          and drive results
        </p>
      </Reveal>

      {/* Big centred display line */}
      <div className="mt-10 flex justify-center lg:mt-14">
        <Reveal>
          <h2 className="text-center font-display uppercase leading-[0.8] tracking-[-0.04em] text-ink">
            <span className="block text-[clamp(2.75rem,5.5vw,4rem)]">Creative Services</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 lg:mt-24">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.05}>
            <button
              onClick={() => onSelect(s.id)}
              className="group relative block w-full border-t border-line py-7 text-left lg:py-9"
              aria-label={`${s.title} — book this service`}
            >
              <span className="grid grid-cols-12 items-baseline gap-x-4 gap-y-3">
                <span className="col-span-1 hidden text-[14px] text-fog lg:block">{s.num}</span>
                <span className="col-span-11 font-display text-[clamp(1.75rem,2.4vw,2rem)] leading-none tracking-[-0.06em] text-black transition-colors duration-300 group-hover:text-coral lg:col-span-6">
                  {s.title}
                </span>
                <span className="col-span-11 col-start-2 text-[15px] leading-[1.35] text-slate/[0.68] lg:col-span-4 lg:col-start-8 lg:row-start-1 lg:text-right">
                  {s.desc}
                </span>
                <span className="col-span-12 mt-1 flex justify-end lg:col-span-1 lg:col-start-12 lg:mt-0 lg:row-start-1">
                  <ArrowUpRight
                    size={20}
                    className="text-fog transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-coral"
                  />
                </span>
              </span>
              {/* underline sweep */}
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-slate transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </button>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
