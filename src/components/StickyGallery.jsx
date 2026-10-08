'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

// Sticky image panel: swaps through `images` as the parent segment scrolls.
// The measuring box is a plain tall div; only the inner panel is sticky,
// so scroll progress stays stable while the panel holds its place.
export function StickyGallery({ images }) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const i = Math.min(images.length - 1, Math.max(0, Math.floor(v * images.length)));
    setIndex((prev) => (prev === i ? prev : i));
  });

  const current = images[index];

  return (
    <div ref={ref} className="h-full min-h-[280px]">
      <div className="sticky top-28">
        <div className="relative aspect-[21/10] overflow-hidden rounded-2xl border border-line bg-line shadow-[0_24px_60px_-30px_rgba(21,21,19,0.35)]">
          {images.map((img, i) => (
            <motion.img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              initial={false}
              animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.05 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          ))}
          <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 text-[13px] font-medium text-cream backdrop-blur-sm">
            {current.label}
          </span>
          <span className="absolute bottom-4 right-4 flex gap-2" aria-hidden>
            {images.map((img, i) => (
              <span
                key={img.src}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-7 bg-cream' : 'w-2 bg-cream/40'}`}
              />
            ))}
          </span>
        </div>
        <p className="mt-3 text-[13px] text-ash">
          Real build:{' '}
          <a className="underline underline-offset-4 hover:text-ink" href={current.href}>
            {current.caption}
          </a>
        </p>
      </div>
    </div>
  );
}
