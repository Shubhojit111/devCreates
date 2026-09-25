import { marqueePhrases } from '../data/content';

function Asterisk() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className="shrink-0 text-coral" fill="none" aria-hidden>
      <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Run() {
  return (
    <div className="flex shrink-0 items-center">
      {marqueePhrases.map((p) => (
        <span key={p} className="flex items-center">
          <span className="px-8 font-display uppercase leading-[0.8] tracking-[-0.04em] text-ink lg:px-12 lg:text-[52px] text-[clamp(2.25rem,4.5vw,3.25rem)]">
            {p}
          </span>
          <Asterisk />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-cream py-10 lg:py-14" aria-hidden>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Run />
        <Run />
      </div>
    </div>
  );
}
