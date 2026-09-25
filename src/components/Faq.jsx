'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs } from '../data/content';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

const EASE = [0.22, 1, 0.36, 1];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-cream px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-[14px] leading-[1.4] text-ink/60">Clear answers</p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 border-b border-line">
              {faqs.map((f, i) => (
                <div key={f.q} className="border-t border-line">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-[17px] tracking-[-0.01em] text-ink lg:text-[18px]">
                      {f.q}
                    </span>
                    <Plus
                      size={18}
                      className={`shrink-0 text-slate transition-transform duration-300 ${
                        open === i ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[560px] pb-7 text-[15px] leading-[1.35] text-slate/[0.68]">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.12} className="lg:sticky lg:top-32 lg:ml-auto lg:max-w-[300px] lg:text-right">
            <h2 className="font-display uppercase leading-[0.8] tracking-[-0.04em] text-ink">
              <span className="block text-[clamp(2.25rem,3.6vw,3.25rem)]">Can't spot</span>
              <span className="block text-[clamp(2.25rem,3.6vw,3.25rem)]">your query?</span>
            </h2>
            <div className="mt-8 lg:ml-auto">
              <Button href="/contact/" variant="dark">
                Contact us
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
