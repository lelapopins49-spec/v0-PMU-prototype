"use client"

import { Star } from "lucide-react"

const reviews = [
  { name: "Jessica M.", service: "Microblading client", text: "I was nervous at first, but the results are so natural. I get compliments on my brows every single day." },
  { name: "Lauren T.", service: "Lip Blush client", text: "The healing process was easier than I expected and the color came out perfect. I'm obsessed with my lip blush." },
  { name: "Amber R.", service: "Permanent Eyeliner client", text: "I've tried eyeliner tattoos before and they always looked harsh. This time it's exactly what I wanted — subtle and clean." },
]

export function TestimonialsSection() {
  return (
    <section className="bg-[#050505] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 px-4 text-left lg:px-0 lg:text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">Verified client reviews</p>
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">What Our Clients Say</h2>
          <p className="max-w-none text-lg text-pretty text-muted-foreground lg:mx-auto lg:max-w-2xl">Real results and honest words from clients who trusted us with their look.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-xl border border-[rgba(212,175,55,0.25)] bg-[#0A0A0A] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex gap-1 text-[#D4AF37]" aria-label="5 stars">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={17} fill="currentColor" />))}</div>
                <span className="rounded-full border border-[rgba(212,175,55,0.25)] px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#D4AF37] uppercase">Verified Review</span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/88">{review.text}</p>
              <div className="mt-6 border-t border-[rgba(212,175,55,0.15)] pt-4">
                <div className="font-serif text-xl font-semibold text-white">{review.name}</div>
                <div className="mt-1 text-xs font-medium tracking-[0.14em] text-white/45 uppercase">{review.service}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex rounded-full border-2 border-[#D4AF37]/70 px-8 py-3 font-semibold text-white transition-all hover:bg-[#D4AF37] hover:text-[#050505]">Book Your Appointment</a>
        </div>
      </div>
    </section>
  )
}
