"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"

import { stats } from "@/lib/site-config"
import { useCounter } from "@/hooks/use-counter"

function StatCounter({ stat }: { stat: typeof stats[number] }) {
  const numericMatch = stat.number.match(/^(\d+)/)
  const numericPart = numericMatch ? parseInt(numericMatch[1], 10) : 0
  const suffix = stat.number.replace(/^(\d+)/, "")
  const { count, ref } = useCounter(numericPart, 1400)

  if (numericMatch) {
    return (
      <div ref={ref} className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 shadow-sm">
        <div className="mb-1 font-serif text-3xl font-semibold text-[#C0152A] sm:text-4xl">
          {count}{suffix}
        </div>
        <div className="text-xs font-medium tracking-[0.18em] text-white/50 uppercase sm:text-sm">{stat.label}</div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 shadow-sm">
      <div className="mb-1 font-serif text-3xl font-semibold text-[#C0152A] sm:text-4xl">{stat.number}</div>
      <div className="text-xs font-medium tracking-[0.18em] text-white/50 uppercase sm:text-sm">{stat.label}</div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 70% 30%, #5C1535 0%, #3D0D26 50%, #250818 100%)" }}
    >
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at 75% 25%, rgba(192,21,42,0.18) 0%, rgba(139,14,30,0.08) 40%, transparent 65%), linear-gradient(135deg, rgba(15,15,15,0.98) 0%, rgba(22,22,22,0.95) 100%)" }} />
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(circle at 15% 80%, rgba(192,21,42,0.05) 0%, transparent 28%), radial-gradient(circle at 90% 15%, rgba(139,14,30,0.06) 0%, transparent 30%)" }} />
      <div className="absolute inset-y-0 right-0 z-0 w-full overflow-hidden sm:[background-position:center_15%] lg:w-[62%]">
        <Image
          src="/centro danza/hero.jpg"
          alt="Sala danza Centro Danza"
          fill
          priority
          quality={64}
          sizes="(max-width: 767px) 100vw, (max-width: 1024px) 100vw, 62vw"
          className="object-cover [object-position:center_15%]"
        />
        <div className="pointer-events-none absolute inset-0 z-[2]" style={{ background: ["linear-gradient(to right, #0F0F0F 0%, #0F0F0F 2%, rgba(15,15,15,0.95) 15%, rgba(15,15,15,0.6) 35%, rgba(15,15,15,0.0) 55%)", "linear-gradient(to left, #0F0F0F 0%, rgba(15,15,15,0.95) 8%, rgba(15,15,15,0.4) 22%, transparent 40%)", "linear-gradient(to bottom, #0F0F0F 0%, rgba(15,15,15,0.8) 8%, transparent 25%)", "linear-gradient(to top, #0F0F0F 0%, rgba(15,15,15,0.9) 12%, rgba(15,15,15,0.3) 28%, transparent 45%)"].join(", ") }} />
      </div>
      <div className="relative z-10 w-full pt-40 pb-24 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-[34rem] text-left">
            <div className="animate-clip-reveal mb-6 inline-flex items-center rounded-full border border-[#F5F5F5]/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[#F5F5F5]/85 uppercase" style={{ animationDelay: "0.05s" }}>
              DI MARCO PROTANO E MARTINA LIBRO
            </div>
            <h1 className="mb-6 text-left font-serif text-4xl leading-[1.02] font-bold text-balance text-[#F5F5F5] italic sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              <span className="animate-clip-reveal inline-block">Dove passione, tecnica ed espressione si incontrano.</span>
            </h1>
            <p className="animate-clip-reveal mb-10 max-w-none text-lg leading-relaxed font-light text-pretty text-[#B8B8B8] sm:text-xl lg:max-w-xl lg:text-2xl" style={{ animationDelay: "0.55s" }}>
              Un percorso dedicato a bambini, ragazzi e adulti che desiderano crescere attraverso la danza in un ambiente professionale, accogliente e stimolante.
            </p>
            <p className="animate-clip-reveal mb-10 max-w-none text-sm leading-relaxed font-medium tracking-[0.08em] text-[#F5F5F5] uppercase sm:text-base lg:max-w-xl" style={{ animationDelay: "0.68s" }}>
              LEZIONI DI PROVA DISPONIBILI SU PRENOTAZIONE.
            </p>
            <div className="animate-clip-reveal flex flex-col justify-start gap-4 sm:flex-row" style={{ animationDelay: "0.7s" }}>
              <a href="#corsi" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5F5F5]/60 bg-transparent px-8 py-4 text-lg font-semibold text-[#F5F5F5] shadow-sm transition-colors hover:bg-[#FFFFFF]/10">
                Scopri i Corsi <ChevronRight size={20} />
              </a>
              <a href="#contatti" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5F5F5]/60 bg-card/70 px-8 py-4 text-lg font-semibold text-[#F5F5F5] shadow-sm transition-colors hover:bg-[#FFFFFF]/10">
                Prenota una Prova <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-foreground/50 pt-2">
          <div className="h-2 w-1 rounded-full bg-foreground/70 animate-scroll-dot" />
        </div>
      </div>
    </section>
  )
}

export function StatsStrip() {
  return (
    <section className="border-y border-[#D8B978]/18 py-10 sm:py-14" style={{ background: "linear-gradient(135deg, #141414 0%, #1A1A1A 50%, #141414 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 text-center min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (<StatCounter key={stat.label} stat={stat} />))}
        </div>
      </div>
    </section>
  )
}
