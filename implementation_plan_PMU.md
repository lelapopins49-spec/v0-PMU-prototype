# PMU Website Implementation Plan
### Dance Studio → Permanent Makeup (Clean Beauty, US Market)

---

> **⚠️ IMPORTANT NOTE FOR v0 AGENT — READ FIRST**
> If you are running low on credits at any point during this implementation, **stop immediately before you run out**. Do not attempt to rush through a file or produce incomplete output. Instead, tell the user:
> - Which file you just finished
> - Which file you were about to start
> - Any notes or context the next session should know
>
> The user will start a new session and continue from where you left off.

---

## Ground rules

- Change **copy and component purpose only** — no image references, no new components, no file renames
- Keep all existing Tailwind classes, animation logic, and routing intact
- Tone throughout: **clean beauty, warm confidence, conversion-first, American audience**
- Services: **Microblading, Lip Blush, Permanent Eyeliner**
- Primary conversions: **Book a Consultation (free)** and **Book an Appointment (paid)** — let the visitor choose
- Brand name placeholder: `[BRAND NAME]` — replace when confirmed
- Location placeholder: `[CITY, STATE]` — replace when confirmed

---

## Execution order

Work through files in this exact sequence. Each file is a self-contained prompt for v0.

```
1. app/layout.tsx
2. app/globals.css  /  components/theme-provider.tsx
3. site/navigation.tsx
4. sections/hero.tsx
5. sections/classes.tsx
6. sections/schedule-pricing.tsx
7. sections/cta.tsx
8. sections/about.tsx
9. sections/testimonials.tsx
10. sections/gallery.tsx
11. sections/contact.tsx
12. site/footer.tsx
13. site/floating-actions.tsx
```

---

## Phase 1 — Foundation
> Global identity, metadata, and navigation. Do these first — they cascade across every other section.

---

### 1. `app/layout.tsx`

- [ ] Update site `<title>` → `"[BRAND NAME] | Permanent Makeup Studio"`
- [ ] Update meta description → `"[BRAND NAME] is a permanent makeup studio in [CITY, STATE] offering microblading, lip blush, and permanent eyeliner. Book your free consultation today."`
- [ ] Update OG title and OG description to match above
- [ ] Remove any dance-school-specific meta content

---

### 2. `app/globals.css` / `components/theme-provider.tsx`

> Update the color palette to match the chosen direction. Keep all CSS variable names — change values only.

- [ ] Set page background → `#FDF5F7` (soft blush)
- [ ] Set card / section background → `#F5DDE4` (petal)
- [ ] Set border / divider color → `#E4B4C2` (dusty rose)
- [ ] Set primary CTA / accent color → `#9B4A5E` (berry)
- [ ] Set nav and heading color → `#4A4650` (slate)
- [ ] Set body text color → `#1E1C22` (charcoal)
- [ ] Set CTA text (on dark button) → `#FDF5F7`
- [ ] Confirm body font is a clean sans-serif (Inter, DM Sans, or similar) — update if currently set to something sporty or display-heavy

---

### 3. `site/navigation.tsx`

- [ ] Replace nav link labels with: `Services` / `Results` / `About` / `Pricing` / `Contact`
- [ ] Update anchor hrefs to match section IDs (confirm they match the sections below)
- [ ] Sticky CTA button text → `"Book Now"`
- [ ] CTA button links to `#contact` section
- [ ] Remove all dance-specific labels (Classes, Schedule, Enroll, etc.)

---

## Phase 2 — Core sections
> Above-the-fold and conversion-critical. Highest visitor impact — prioritize these.

---

### 4. `sections/hero.tsx`

- [ ] H1 → `"Wake Up to Effortless Beauty"`
- [ ] Subheadline → `"Natural-looking permanent makeup by a certified artist in [CITY, STATE]. Results that last — so your mornings don't have to."`
- [ ] Primary CTA button → `"Book a Free Consultation"` → links to `#contact`
- [ ] Secondary CTA button → `"See Our Work"` → links to `#gallery`
- [ ] Remove all dance/enrollment copy and references
- [ ] Remove any enrollment urgency messaging (limited spots, season starting, etc.)

---

### 5. `sections/classes.tsx` *(concept rename: Services)*

> File stays named `classes.tsx` — only internal copy and data arrays change.

- [ ] Section ID → `id="services"`
- [ ] Section heading → `"Our Services"`
- [ ] Section subheading → `"Each treatment is customized to your features and skin tone for results that look natural — never overdone."`
- [ ] Replace all class/dance card data with 3 service cards:

**Card 1 — Microblading**
- [ ] Title → `"Microblading"`
- [ ] Description → `"Hair-stroke technique that fills and defines your brows with precision. Ideal for sparse, over-plucked, or uneven brows. Heals in 4–6 weeks."`
- [ ] CTA → `"Book Microblading"`

**Card 2 — Lip Blush**
- [ ] Title → `"Lip Blush"`
- [ ] Description → `"A soft wash of pigment that enhances your lip shape, adds color, and gives the illusion of fuller lips — no filler needed. Heals in 4–6 weeks."`
- [ ] CTA → `"Book Lip Blush"`

**Card 3 — Permanent Eyeliner**
- [ ] Title → `"Permanent Eyeliner"`
- [ ] Description → `"Smudge-proof, sweat-proof liner that defines your eyes morning to night. Available in lash-line enhancement or classic liner styles."`
- [ ] CTA → `"Book Eyeliner"`

- [ ] All card CTAs link to `#contact`
- [ ] Remove all class-level indicators (beginner/advanced, age groups, schedule slots, etc.)

---

### 6. `sections/schedule-pricing.tsx`

- [ ] Section ID → `id="pricing"`
- [ ] Section heading → `"Pricing"`
- [ ] Section subheading → `"All treatments include a complimentary touch-up session 6–8 weeks after your appointment."`
- [ ] Remove class schedule table entirely
- [ ] Replace with 3 pricing cards:

**Card 1 — Microblading**
- [ ] Service name → `"Microblading"`
- [ ] Price → `"$[PRICE]"` (placeholder)
- [ ] Note → `"Includes 1 touch-up session"`
- [ ] CTA → `"Book Now"` → links to `#contact`

**Card 2 — Lip Blush**
- [ ] Service name → `"Lip Blush"`
- [ ] Price → `"$[PRICE]"` (placeholder)
- [ ] Note → `"Includes 1 touch-up session"`
- [ ] CTA → `"Book Now"` → links to `#contact`

**Card 3 — Permanent Eyeliner**
- [ ] Service name → `"Permanent Eyeliner"`
- [ ] Price → `"$[PRICE]"` (placeholder)
- [ ] Note → `"Includes 1 touch-up session"`
- [ ] CTA → `"Book Now"` → links to `#contact`

- [ ] Section footer line → `"Not sure which service is right for you?"` with a link → `"Book a free consultation"` → `#contact`

---

### 7. `sections/cta.tsx`

- [ ] Heading → `"Ready to Feel Confident Every Morning?"`
- [ ] Body copy → `"Permanent makeup is safe, long-lasting, and completely personalized to you. Whether you want to wake up with perfect brows, a hint of lip color, or defined eyes — we've got you covered."`
- [ ] Primary CTA button → `"Book Your Free Consultation"` → links to `#contact`
- [ ] Secondary CTA button → `"Book an Appointment"` → links to `#contact`
- [ ] Remove all dance/enrollment urgency copy

---

## Phase 3 — Trust & support sections
> Social proof, artist credibility, and the final conversion point.

---

### 8. `sections/about.tsx`

- [ ] Section ID → `id="about"`
- [ ] Section heading → `"Meet Your Artist"`
- [ ] Replace studio/dance history with PMU artist bio (use placeholder copy):
  - [ ] Artist name → `[ARTIST NAME]`
  - [ ] Bio → `"[ARTIST NAME] is a certified permanent makeup artist with [X] years of experience and [#] procedures completed. Trained at [ACADEMY NAME], she specializes in natural-looking enhancements that complement your unique features."`
- [ ] Add trust signal block with 3 items:
  - [ ] `"Certified & insured"`
  - [ ] `"[#]+ happy clients"`
  - [ ] `"Strict hygiene & safety standards"`
- [ ] Tone: warm, personal, approachable expert — not clinical
- [ ] Remove all references to dance instructors, classes, or studio history

---

### 9. `sections/testimonials.tsx`

- [ ] Section heading → `"What Our Clients Say"`
- [ ] Replace all dance/student testimonial quotes with PMU-context quotes. Suggested placeholders:

  - [ ] Quote 1 → `"I was nervous at first, but the results are so natural. I get compliments on my brows every single day."` — Jessica M., *Microblading client*
  - [ ] Quote 2 → `"The healing process was easier than I expected and the color came out perfect. I'm obsessed with my lip blush."` — Lauren T., *Lip Blush client*
  - [ ] Quote 3 → `"I've tried eyeliner tattoos before and they always looked harsh. This time it's exactly what I wanted — subtle and clean."` — Amber R., *Permanent Eyeliner client*

- [ ] Add service label under each reviewer name (e.g. *Microblading client*)
- [ ] Keep existing star/rating UI if present
- [ ] Remove any references to dance classes, performances, or studios

---

### 10. `sections/gallery.tsx`

- [ ] Section ID → `id="results"`
- [ ] Section heading → `"Real Results"`
- [ ] Section subheading → `"Natural-looking enhancements, built to last."`
- [ ] Update filter/tab labels (if present) → `"All"` / `"Microblading"` / `"Lip Blush"` / `"Eyeliner"`
- [ ] Do **not** change any images — placeholders remain as-is
- [ ] Remove any dance performance or recital gallery labels

---

### 11. `sections/contact.tsx`

- [ ] Section ID → `id="contact"`
- [ ] Section heading → `"Book Your Appointment"`
- [ ] Section subheading → `"Fill out the form below and we'll get back to you within 24 hours to confirm your booking."`
- [ ] Update form fields:
  - [ ] Full Name (text input)
  - [ ] Email Address (email input)
  - [ ] Phone Number (tel input)
  - [ ] Service of Interest (dropdown): `Microblading` / `Lip Blush` / `Permanent Eyeliner` / `Not sure yet — I'd like a consultation`
  - [ ] Message / Notes (textarea, optional)
- [ ] Submit button → `"Request Appointment"`
- [ ] Below form → small note: `"We'll get back to you within 24 hours. Your information is never shared."`
- [ ] Keep map/address block if present — update placeholder address if needed
- [ ] Remove class inquiry, enrollment, or audition form fields

---

## Phase 4 — Footer & floating UI
> Low risk. Do these last.

---

### 12. `site/footer.tsx`

- [ ] Nav links → `Services` / `Results` / `About` / `Pricing` / `Contact`
- [ ] Tagline → `"Premium permanent makeup. Natural results."`
- [ ] Copyright line → `"© [YEAR] [BRAND NAME] — Permanent Makeup Studio. All rights reserved."`
- [ ] Keep social media icon placeholders as-is
- [ ] Remove dance school nav links, class schedules, and enrollment CTAs

---

### 13. `site/floating-actions.tsx`

- [ ] Primary floating button → `"Book Now"` → links to `#contact`
- [ ] Secondary action (if slot exists) → `"Free Consult"` → links to `#contact`
- [ ] Remove enrollment or class-booking floating action

---

## Post-implementation checklist

Once all files are complete, do a final pass:

- [ ] Read every section top to bottom — confirm zero dance/studio references remain
- [ ] Check all internal anchor links work (`#services`, `#pricing`, `#results`, `#about`, `#contact`)
- [ ] Confirm all CTA buttons point to `#contact`
- [ ] Confirm color palette is consistent across all sections
- [ ] Replace all `[BRAND NAME]`, `[CITY, STATE]`, `[ARTIST NAME]`, `[PRICE]`, and `[YEAR]` placeholders before going live

---

*Plan version 1.0 — images to be updated in a separate phase.*
