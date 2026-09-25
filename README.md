# Dev Creates — Creative Agency Website

A component-based, responsive **Next.js App Router** site written entirely in **JavaScript/JSX** with Tailwind CSS, React, Framer Motion and Lucide icons. The original home-page design system is retained: self-hosted Chillax + Manrope fonts, cream/slate/black/coral palette, compact monogram, motion, full-bleed hero video, services, work, FAQ and the four-step booking preview.

## Pages

| Route | Content |
| --- | --- |
| `/` | Original home composition, rebranded to Dev Creates |
| `/about/` | Studio approach and creative principles |
| `/services/` | Four detailed service sections and the booking flow |
| `/work/` | Selected illustrative concept projects |
| `/contact/` | Contact introduction, booking flow and FAQ |

Project structure:

```text
src/app/            Next.js App Router routes, root layout, global Tailwind CSS
src/components/     Reusable header, footer, sections, booking, UI components
src/views/          JSX page compositions (kept outside `pages/`, which Next reserves)
src/data/           Services, work examples, FAQ and navigation
src/lib/            Availability preview and downloadable ICS calendar event
src/config/site.js  Brand name and contact configuration
public/             Brand marks, hero media, concept covers and local fonts
scripts/            Static-export server and self-contained offline preview builder
```

## Run

Requires Node.js 20+.

```bash
npm ci
npm run dev              # Next.js dev server, http://localhost:5173 (auto-switches to 5174+ if busy; PORT/HOSTNAME envs supported)
npm run build            # Export all five pages into out/
npm run preview          # Serve exported pages on 0.0.0.0:5173 (also auto-switches if busy)
npm run build:offline    # Generate dev-creates-preview.html (run after build)
```

The production build uses `output: 'export'` and `trailingSlash: true`; deploy the generated `out/` directory to any static host. `dev-creates-preview.html` is an optional self-contained, interactive five-page fallback that works when the live server is unavailable. It embeds local images/fonts and shows the poster instead of streaming the hero video. Links within that file switch pages with `#!` hashes; the Next.js site uses normal routes.

## Booking and contact — integration needed before launch

**Book in Four Taps** supports service selection/prefill, dates and preview time slots, responsive details form (one column below desktop width), validation, review, a confirmation *UI state*, reset and a real `.ics` calendar-file download. **It is a front-end preview, not a real appointment system:** availability is synthetic; submitting does **not** reserve a calendar slot or email the visitor. Connect it to your calendar/notification backend and replace preview messaging before publishing it as a live booking system.

The owner selected “I’ll provide my real address” but did not send the address. `src/config/site.js` intentionally leaves `email: null`; email-related CTAs go to `/contact/#book` rather than an invented mailbox. Set a verified address there once provided. The social icons currently lead only to their platform homepages; replace those links with verified agency profiles before launch.

The eight portfolio labels are **illustrative concept examples**, not a claim that Dev Creates completed those client projects. Replace the records in `src/data/content.js` and the generated art in `public/covers/` with approved case studies when available. Confirm you have rights to any hero footage or other reference-site media before deploying under the new brand.

## Visual change scope

The home-page layout, font files, colour tokens, cards, buttons and section order remain as before. Requested changes: a compact custom **DC** mark and Dev Creates naming; aligned final two lines in the “From / To / Concept / Reality” headline; and a narrow-screen-safe booking Tap 03 (no two-column fields until `xl`, bounded inputs, mobile font size that avoids iOS zoom, flexible card actions). New pages use the same existing design language.
