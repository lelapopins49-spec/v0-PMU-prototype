"use client"

import { pricingCards } from "@/lib/site-config"

type AnimatedSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
}

export function PricingSection({ isVisible, setSectionRef }: AnimatedSectionProps) {
  return (
    <section id="pricing" ref={(element) => { setSectionRef("pricing", element) }} style={{ background: "radial-gradient(ellipse at 85% 40%, #161616 0%, #111111 60%, #080808 100%)" }} className={`bg-card py-24 transition-[transform,opacity] duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">Pricing</h2>
          <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">All treatments include a complimentary touch-up session 6&ndash;8 weeks after your appointment.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingCards.map((card) => (
            <div key={card.title} className="flex flex-col rounded-sm border border-border bg-card p-8 text-center transition-colors duration-300 hover:border-primary">
              <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">{card.title}</h3>
              <div className="mb-2 font-serif text-4xl font-semibold text-primary">{card.price}</div>
              <p className="mb-6 text-sm text-muted-foreground">{card.note}</p>
              <a href="#contact" className="mt-auto inline-block rounded-sm bg-primary px-8 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90">Book Now</a>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            Not sure which service is right for you?{" "}
            <a href="#contact" className="font-semibold text-primary underline-offset-4 hover:underline">Book a free consultation</a>
          </p>
        </div>
      </div>
    </section>
  )
}
