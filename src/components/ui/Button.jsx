'use client';

import { ArrowUpRight } from 'lucide-react';

const variants = {
  // pill: 14px radius, 1px #E2E1DF border — matches the reference button
  white: 'border border-line bg-white/[0.93] text-ink hover:bg-ink hover:text-cream hover:border-ink',
  dark: 'border border-transparent bg-ink text-cream hover:bg-coral hover:border-coral',
  coral: 'border border-transparent bg-coral text-cream hover:bg-ink hover:border-ink',
  'outline-light': 'border border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-ink hover:border-cream',
  'outline-dark': 'border border-ink bg-transparent text-ink hover:bg-ink hover:text-cream',
};

export function Button({
  children,
  href,
  onClick,
  variant = 'white',
  size = 'md',
  className = '',
  type = 'button',
  disabled,
}) {
  const classes = `group/btn inline-flex items-center justify-center gap-2 rounded-[14px] font-display font-feature-settings-normal transition-colors duration-300 ${
    size === 'sm' ? 'h-11 px-5 text-[15px]' : 'h-12 px-7 text-[16px]'
  } ${variants[variant]} ${disabled ? 'pointer-events-none opacity-40' : ''} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
      />
    </>
  );
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {inner}
    </button>
  );
}
