type CtaBannerProps = {
  heading: string
  text: string
  primaryLabel: string
  secondaryLabel: string
}

export function CtaBanner({ heading, text, primaryLabel, secondaryLabel }: CtaBannerProps) {
  return (
    <section className="animate-gradient-shift border-t border-b border-primary/20 py-10 sm:py-14" style={{ background: "linear-gradient(135deg, #8B0E1E 0%, #C0152A 30%, #A93226 50%, #C0152A 70%, #8B0E1E 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-3 font-serif text-2xl font-bold text-white text-balance sm:text-3xl">{heading}</h2>
        <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-white/90 text-pretty sm:text-lg">{text}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="animate-pulse-glow-white inline-block rounded-full border-2 border-white px-10 py-3 font-semibold text-white transition-all hover:bg-white hover:text-[#C0152A]" style={{ background: "transparent" }}>
            {primaryLabel}
          </a>
          <a href="#contact" className="inline-block rounded-full bg-white px-10 py-3 font-semibold text-[#C0152A] transition-all hover:bg-white/90">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
