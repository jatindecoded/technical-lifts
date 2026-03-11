# Technical Lifts - Copilot Instructions

## Stack
- Next.js 15, React 19, TypeScript, App Router
- Tailwind CSS v4 (tokens in globals.css @theme, no tailwind.config.ts)
- shadcn/ui v4, lucide-react, next/font

## Design tokens available as Tailwind classes
bg-primary, text-primary, bg-dark, bg-surface, bg-muted, bg-border,
text-text-base, text-text-muted, font-heading, font-body, py-section, max-w-container

## Hard rules
- No inline styles
- No hardcoded strings in components - import from @/lib/constants
- No `any` types
- Semantic HTML: section, h2, p, ul, li
- Mobile-first responsive
- Use cn() from @/lib/utils for conditional classes
- Wrap all sections in SectionWrapper from @/components/layout/SectionWrapper
- Dark theme throughout

## Design Identity - Technical Lifts

### Brand personality
This is a serious training gym, not a wellness app.
The design should feel like a premium sports magazine - editorial, bold, confident.
Think less cult.fit lifestyle, more Nike Training or Gymshark editorial.
Dark, high contrast, typography-led. Images support the layout, they don't define it.

### Hero
- Full bleed gym floor or training image, dark overlay gradient from bottom (bg-gradient-to-t from-dark via-dark/60 to-transparent)
- H1 is split across two lines intentionally - first line normal weight, second line text-primary
  Example: "Built for" on line 1, "SERIOUS LIFTERS" on line 2 in text-primary
- Subheadline is short, one line, text-text-muted
- CTA is left-aligned on desktop, not centered - more editorial feel
- Trust signals inline below CTA (not a separate strip): "★★★★★ 100+ Reviews" as plain small text

### Backgrounds and section rhythm
- Alternate between bg-dark (#0A0A0A) and bg-surface (#141414)
- Never use color backgrounds - the gym photos provide all the color
- Sections feel spacious, py-24 md:py-36
- No decorative elements, no gradients as decoration - only as overlays on images

### Typography
- H1: text-5xl md:text-7xl lg:text-8xl font-heading font-800 uppercase tracking-tight leading-none
- H2: text-3xl md:text-5xl font-heading font-700 uppercase tracking-tight
- H3: text-lg md:text-xl font-heading font-700
- Body: text-base font-body font-400 text-text-muted leading-relaxed
- Labels and badges: text-xs font-heading font-700 uppercase tracking-widest text-primary
- Numbers and stats: text-5xl font-heading font-800 text-primary (for social proof numbers)

### Color rules
- text-primary and bg-primary used maximum 2-3 times per section, never more
- Use it on: one word in a headline, badge labels, icon accents, the main CTA only
- Never use it as a section background or card background
- Borders: border-white/[0.08] extremely subtle
- Overlays: bg-black/70 on any image that has text on top

### Cards
- rounded-xl not rounded-full - gym feel, not pill feel
- bg-surface border border-white/[0.08]
- Hover: border-white/20 transition - subtle lift without shadows
- No box shadows - shadows look soft, this brand is not soft
- Image top, text below pattern for trainer and transformation cards

### Layout patterns
- Trainer section: horizontal scroll on mobile (overflow-x-auto), 5 across on desktop
- Pricing: stacked vertically on mobile, horizontal 4-across on desktop, popular plan slightly taller (scale-105)
- Facilities: masonry-style or unequal grid (some cells 2x wide) - not uniform tiles
- Transformations: full bleed before/after with name overlaid on bottom of image (not below)

### CTA buttons
- Primary: bg-primary text-dark font-heading font-700 uppercase tracking-wide px-8 py-3 rounded-full
- Secondary: border border-white/20 text-text-base font-body px-8 py-3 rounded-full hover:border-white/50
- Never use filled dark buttons - only primary yellow or ghost border

### What to avoid
- No gradients as decorative backgrounds
- No icons used as decoration - only functional (check marks, social links)
- No animations or scroll effects at this stage
- No stock photo aesthetic - if image looks generic, use a solid bg-surface card instead
- No centered layouts except CTA sections - everything else left-aligned on desktop
## Component pattern
- One component per section file
- Props typed explicitly, no any
- Data comes from @/lib/constants only
- Export default at bottom of file