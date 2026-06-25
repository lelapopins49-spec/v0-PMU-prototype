"use client"

import Image from "next/image"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  return (
    <section
      id="about"
      ref={(element) => setSectionRef("about", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #161616 0%, #111111 60%, #0A0A0A 100%)" }}
      className={`bg-card py-20 transition-[transform,opacity] duration-500 sm:py-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-sm border border-border bg-secondary">
              <Image src="/centro danza/chisiamo.jpg" alt="[ARTIST NAME], permanent makeup artist" fill quality={68} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="mx-auto flex max-w-xl flex-col justify-center self-center lg:mx-0 lg:py-6">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">MEET YOUR ARTIST</p>
            <h2 className="mb-5 font-serif text-4xl font-bold text-foreground sm:text-5xl">Meet Your Artist</h2>
            <p className="mb-5 text-lg leading-relaxed text-pretty text-foreground">[ARTIST NAME] is a certified permanent makeup artist with [X] years of experience and [#] procedures completed. Trained at [ACADEMY NAME], she specializes in natural-looking enhancements that complement your unique features.</p>
            <div className="space-y-4 text-lg leading-relaxed text-pretty text-foreground">
              <p>Every treatment starts with a one-on-one consultation to understand your goals, map your features, and design a shape and shade that feels effortlessly you — never one-size-fits-all.</p>
              <p>Comfort and safety come first. From single-use needles to medical-grade sterilization, every detail is handled with the care you deserve.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-sm border border-border bg-secondary/40 p-4 text-center">
                <div className="font-semibold text-foreground">Certified &amp; insured</div>
              </div>
              <div className="rounded-sm border border-border bg-secondary/40 p-4 text-center">
                <div className="font-semibold text-foreground">[#]+ happy clients</div>
              </div>
              <div className="rounded-sm border border-border bg-secondary/40 p-4 text-center">
                <div className="font-semibold text-foreground">Strict hygiene &amp; safety standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
