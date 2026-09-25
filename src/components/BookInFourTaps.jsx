'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CalendarPlus, Check } from 'lucide-react';
import { services } from '../data/content';
import { buildIcs, isSlotFree, nextDays, timeSlots } from '../lib/booking';
import { Reveal } from './ui/Reveal';

const EASE = [0.22, 1, 0.36, 1];

const stepMeta = [
  { title: 'Service', hint: 'What do you need?' },
  { title: 'Date & time', hint: 'Pick a 30-min slot' },
  { title: 'Your details', hint: 'Who are we talking to?' },
  { title: 'Confirm', hint: 'One last look' },
];

const emptyBooking = { service: '', day: '', time: '', name: '', email: '', company: '', notes: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function StepHeading({ title, sub }) {
  return (
    <div>
      <h3 className="font-display text-[22px] tracking-[-0.02em] text-ink lg:text-[26px]">{title}</h3>
      <p className="mt-1 text-[14px] text-ash">{sub}</p>
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-3.5">
      <dt className="shrink-0 text-[13px] text-fog">{k}</dt>
      <dd className="min-w-0 break-words text-right font-display text-[15px] text-ink [overflow-wrap:anywhere]">{v}</dd>
    </div>
  );
}

function Field({
  label,
  optional,
  error,
  children,
}) {
  return (
    <label className="block min-w-0">
      <span className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-2 text-[13px] text-ash">
        {label}
        {optional && <span className="text-[12px] text-fog">optional</span>}
      </span>
      <div className="mt-1">{children}</div>
      {error && <span className="mt-1.5 block text-[12px] text-coral">{error}</span>}
    </label>
  );
}

const inputCls =
  'block min-w-0 w-full max-w-full border-b border-line bg-transparent py-3 text-[16px] sm:text-[15px] text-ink transition-colors placeholder:text-fog focus:border-ink focus:outline-none';

export function BookInFourTaps({ prefillService }) {
  const [days, setDays] = useState([]);
  useEffect(() => setDays(nextDays(14)), []);
  const [step, setStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const [b, setB] = useState(emptyBooking);
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const advanceTimer = useRef(null);

  useEffect(() => {
    if (prefillService) {
      setB((s) => ({ ...s, service: prefillService }));
      setConfirmed(false);
      setStep(1);
      setMaxStep((m) => Math.max(m, 1));
    }
  }, [prefillService]);

  useEffect(
    () => () => {
      if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    },
    [],
  );

  const go = (to) => {
    if (to >= 1 && !b.service) return;
    if (to >= 2 && (!b.day || !b.time)) return;
    if (to >= 3 && (b.name.trim().length < 2 || !EMAIL_RE.test(b.email))) return;
    setStep(to);
    setMaxStep((m) => Math.max(m, to));
  };

  const scheduleAdvance = (to) => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    advanceTimer.current = window.setTimeout(() => {
      setStep(to);
      setMaxStep((m) => Math.max(m, to));
    }, 420);
  };

  const detailsValid = b.name.trim().length >= 2 && EMAIL_RE.test(b.email);
  const slotValid = !!b.day && !!b.time;

  const validFor = (s) => {
    if (s === 0) return !!b.service;
    if (s === 1) return slotValid;
    if (s === 2) return detailsValid;
    return true;
  };

  const tryNext = () => {
    if (step === 2 && !detailsValid) {
      setErrors({
        name: b.name.trim().length < 2 ? 'Please tell us your name' : undefined,
        email: !EMAIL_RE.test(b.email) ? 'Enter a valid email so we can send the invite' : undefined,
      });
      return;
    }
    if (!validFor(step)) return;
    if (step < 3) go(step + 1);
  };

  const confirm = () => {
    if (!b.service) {
      go(0);
      return;
    }
    if (!slotValid) {
      go(1);
      return;
    }
    if (!detailsValid) {
      setErrors({
        name: b.name.trim().length < 2 ? 'Please tell us your name' : undefined,
        email: !EMAIL_RE.test(b.email) ? 'Enter a valid email so we can send the invite' : undefined,
      });
      go(2);
      return;
    }
    setConfirmed(true);
  };

  const reset = () => {
    setB(emptyBooking);
    setStep(0);
    setMaxStep(0);
    setConfirmed(false);
    setErrors({});
  };

  const service = services.find((s) => s.id === b.service);
  const day = days.find((d) => d.key === b.day);
  const dateLabel = day
    ? day.date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
    : '';
  const dayShort = day
    ? `${day.label} ${day.date.getDate()} ${day.date.toLocaleDateString('en-GB', { month: 'short' })}`
    : '';

  const addCalendar = () => {
    if (!day || !b.time || !service) return;
    const blob = buildIcs({ service: service.title, date: day.date, time: b.time, name: b.name });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dev-creates-call.ics';
    a.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <section id="book" className="bg-black px-5 py-24 text-cream lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[14px] leading-[1.4] text-cream/50">(03) — Book a call</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display uppercase leading-[0.8] tracking-[-0.04em]">
              <span className="block text-[clamp(2.75rem,5.5vw,4.5rem)] text-cream">Book in</span>
              <span className="block text-[clamp(2.75rem,5.5vw,4.5rem)] text-cream">
                four taps<span className="text-coral">.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-[300px] text-[14px] leading-[1.4] text-cream/60">
              No forms longer than a coffee. Pick a service, pick a slot, tell us who you are — done. Thirty
              minutes, no pitch, no pressure.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ol className="mt-10">
              {stepMeta.map((m, i) => {
                const state = confirmed || i < step ? 'done' : i === step && !confirmed ? 'active' : 'todo';
                const reachable = confirmed || (i <= maxStep && (
                  i === 0 || (i === 1 && !!b.service) || (i === 2 && slotValid) ||
                  (i === 3 && slotValid && detailsValid)
                ));
                return (
                  <li key={m.title}>
                    <button
                      disabled={!reachable}
                      onClick={() => {
                        if (!confirmed) go(i);
                      }}
                      aria-current={state === 'active' ? 'step' : undefined}
                      className={`flex w-full items-center gap-4 border-l py-4 pl-5 text-left transition-colors duration-300 ${
                        state === 'active' ? 'border-coral' : 'border-cream/15'
                      } ${confirmed ? 'cursor-default' : reachable ? 'cursor-pointer hover:border-cream/40' : 'cursor-not-allowed opacity-50'}`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-display text-[13px] transition-colors duration-300 ${
                          state === 'done'
                            ? 'border-coral bg-coral text-ink'
                            : state === 'active'
                              ? 'border-cream text-cream'
                              : 'border-cream/25 text-cream/50'
                        }`}
                      >
                        {state === 'done' ? <Check size={14} /> : `0${i + 1}`}
                      </span>
                      <span>
                        <span
                          className={`block font-display text-[16px] ${
                            state === 'active' ? 'text-cream' : state === 'done' ? 'text-cream/80' : 'text-cream/50'
                          }`}
                        >
                          {m.title}
                        </span>
                        <span className="mt-0.5 block text-[13px] text-cream/40">
                          {i === 0 && b.service
                            ? service?.title
                            : i === 1 && b.day && b.time
                              ? `${dayShort} · ${b.time}`
                              : m.hint}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="h-px w-full bg-cream/15">
              <motion.div
                className="h-px bg-coral"
                animate={{ width: `${((confirmed ? 4 : step + 1) / 4) * 100}%` }}
                transition={{ duration: 0.5, ease: EASE }}
              />
            </div>

            <div className="mt-8 min-w-0 overflow-hidden rounded-[14px] border border-cream/15 bg-cream text-ink">
              <div className="flex items-center justify-between border-b border-line px-6 py-4 lg:px-8">
                <span className="font-display text-[15px] text-ash">
                  {confirmed ? 'Confirmed' : `Tap 0${step + 1} — ${stepMeta[step].title}`}
                </span>
                <span className="text-[14px] text-fog">{confirmed ? '4 / 4' : `${step + 1} / 4`}</span>
              </div>

              <div className="relative min-h-[440px] px-6 py-6 lg:px-8 lg:py-8">
                <AnimatePresence mode="wait">
                  {confirmed ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="flex min-h-[400px] flex-col items-center justify-center py-10 text-center"
                    >
                      <motion.span
                        initial={{ scale: 0.4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-coral text-cream"
                      >
                        <Check size={26} />
                      </motion.span>
                      <h3 className="mt-6 font-display text-[26px] tracking-[-0.02em] text-ink">
                        You're booked, {b.name.trim().split(' ')[0]}.
                      </h3>
                      <p className="mt-2 max-w-[340px] text-[14px] leading-[1.4] text-ash">
                        {service?.title} · {dateLabel} · {b.time}. A confirmation is on its way to{' '}
                        <span className="font-medium text-ink">{b.email}</span>.
                      </p>
                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button
                          onClick={addCalendar}
                          className="flex items-center justify-center gap-2 rounded-[14px] border border-line bg-ink px-6 py-3 font-display text-[15px] text-cream transition-colors hover:bg-coral hover:border-coral"
                        >
                          <CalendarPlus size={16} /> Add to calendar
                        </button>
                        <button
                          onClick={reset}
                          className="rounded-[14px] px-6 py-3 font-display text-[15px] text-ash transition-colors hover:text-ink"
                        >
                          Book another
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 28 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -28 }}
                      transition={{ duration: 0.32, ease: EASE }}
                    >
                      {step === 0 && (
                        <div>
                          <StepHeading
                            title="What do you need?"
                            sub="Pick the service that fits — we'll shape the call around it."
                          />
                          <div className="mt-6 space-y-3">
                            {services.map((s) => {
                              const active = b.service === s.id;
                              return (
                                <button
                                  key={s.id}
                                  onClick={() => {
                                    setB((p) => ({ ...p, service: s.id }));
                                    scheduleAdvance(1);
                                  }}
                                  aria-pressed={active}
                                  className={`flex w-full items-center justify-between gap-4 rounded-[14px] border px-5 py-4 text-left transition-colors duration-200 ${
                                    active ? 'border-ink bg-ink text-cream' : 'border-line text-ink hover:border-ink'
                                  }`}
                                >
                                  <span>
                                    <span className="block font-display text-[17px] tracking-[-0.02em]">
                                      {s.title}
                                    </span>
                                    <span className={`mt-0.5 block text-[13px] ${active ? 'text-cream/70' : 'text-ash'}`}>
                                      {s.short}
                                    </span>
                                  </span>
                                  <span
                                    className={`flex shrink-0 items-center gap-3 font-display text-[14px] ${
                                      active ? 'text-coral' : 'text-fog'
                                    }`}
                                  >
                                    30 min
                                    <span
                                      className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
                                        active ? 'border-coral bg-coral text-ink' : 'border-line'
                                      }`}
                                    >
                                      {active && <Check size={12} />}
                                    </span>
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {step === 1 && (
                        <div>
                          <StepHeading
                            title="When suits you?"
                            sub="30-minute video call. Pick a day, then a time."
                          />
                          <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1">
                            {days.map((d) => {
                              const active = b.day === d.key;
                              return (
                                <button
                                  key={d.key}
                                  onClick={() => {
                                    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
                                    setB((p) => ({ ...p, day: d.key, time: undefined }));
                                  }}
                                  aria-pressed={active}
                                  className={`min-w-[58px] shrink-0 rounded-[14px] border px-3 py-2.5 text-center transition-colors ${
                                    active ? 'border-ink bg-ink text-cream' : 'border-line text-ink hover:border-ink'
                                  }`}
                                >
                                  <span className={`block text-[11px] ${active ? 'text-cream/70' : 'text-ash'}`}>
                                    {d.label}
                                  </span>
                                  <span className="mt-1 block font-display text-[17px]">{d.date.getDate()}</span>
                                  <span className={`block text-[11px] ${active ? 'text-cream/70' : 'text-ash'}`}>
                                    {d.date.toLocaleDateString('en-GB', { month: 'short' })}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                          <div className="mt-6">
                            <p className="text-[14px] text-ash">
                              {b.day ? `Times for ${dayShort}` : 'Pick a day to see times'}
                            </p>
                            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                              {(b.day ? timeSlots : []).map((t) => {
                                const free = isSlotFree(b.day, t);
                                const active = b.time === t;
                                return (
                                  <button
                                    key={t}
                                    disabled={!free}
                                    onClick={() => {
                                      setB((p) => ({ ...p, time: t }));
                                      scheduleAdvance(2);
                                    }}
                                    aria-pressed={active}
                                    className={`rounded-[14px] border px-2 py-3 font-display text-[14px] transition-colors ${
                                      !free
                                        ? 'cursor-not-allowed border-line text-fog/60 line-through'
                                        : active
                                          ? 'border-ink bg-ink text-cream'
                                          : 'border-line text-ink hover:border-ink'
                                    }`}
                                  >
                                    {t}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div>
                          <StepHeading
                            title="Who are we talking to?"
                            sub="Just the basics — we'll do the rest on the call."
                          />
                          <div className="mt-6 grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-2">
                            <Field label="Your name *" error={errors.name}>
                              <input
                                value={b.name}
                                onChange={(e) => {
                                  setB((p) => ({ ...p, name: e.target.value }));
                                  if (errors.name) setErrors((er) => ({ ...er, name: undefined }));
                                }}
                                placeholder="Alex Rivera"
                                autoComplete="name"
                                className={inputCls}
                              />
                            </Field>
                            <Field label="Email *" error={errors.email}>
                              <input
                                type="email"
                                value={b.email}
                                onChange={(e) => {
                                  setB((p) => ({ ...p, email: e.target.value }));
                                  if (errors.email) setErrors((er) => ({ ...er, email: undefined }));
                                }}
                                placeholder="alex@company.com"
                                autoComplete="email"
                                className={inputCls}
                              />
                            </Field>
                            <Field label="Company / project" optional>
                              <input
                                value={b.company}
                                onChange={(e) => setB((p) => ({ ...p, company: e.target.value }))}
                                placeholder="Company or project name"
                                autoComplete="organization"
                                className={inputCls}
                              />
                            </Field>
                            <Field label="Anything we should know?" optional>
                              <input
                                value={b.notes}
                                onChange={(e) => setB((p) => ({ ...p, notes: e.target.value }))}
                                placeholder="One line about where things stand"
                                className={inputCls}
                              />
                            </Field>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div>
                          <StepHeading title="One last look" sub="Confirm the details and the slot is yours." />
                          <dl className="mt-6 divide-y divide-line border-y border-line">
                            <Row k="Service" v={service?.title} />
                            <Row k="Date" v={dateLabel} />
                            <Row k="Time" v={`${b.time} — 30 min`} />
                            <Row k="Name" v={b.name} />
                            <Row k="Email" v={b.email} />
                            {b.company && <Row k="Company" v={b.company} />}
                          </dl>
                          <p className="mt-4 text-[13px] leading-[1.4] text-ash">
                            We'll send a calendar invite and a short intake form to {b.email} right after you
                            confirm.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {!confirmed && (
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-6 py-4 sm:flex-nowrap lg:px-8">
                  <button
                    onClick={() => go(Math.max(0, step - 1))}
                    disabled={step === 0}
                    className="flex items-center gap-2 font-display text-[15px] text-ash transition-colors hover:text-ink disabled:opacity-30"
                  >
                    <ArrowLeft size={15} /> Back
                  </button>
                  {step < 3 ? (
                    <button
                      onClick={tryNext}
                      disabled={!validFor(step)}
                      className="flex items-center gap-2 rounded-[14px] bg-ink px-7 py-3 font-display text-[15px] text-cream transition-colors enabled:hover:bg-coral disabled:opacity-30"
                    >
                      Continue <ArrowRight size={15} />
                    </button>
                  ) : (
                    <button
                      onClick={confirm}
                      className="flex items-center gap-2 rounded-[14px] bg-coral px-7 py-3 font-display text-[15px] text-cream transition-colors hover:bg-ink"
                    >
                      Confirm booking <Check size={15} />
                    </button>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
