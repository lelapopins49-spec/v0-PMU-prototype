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
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #161616 0%, #111111 60%, #0A0A0A 100%)" }}
      className={`bg-card py-20 transition-[transform,opacity] duration-500 sm:py-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-sm border border-border bg-secondary">
              <Image src="/centro danza/chisiamo.jpg" alt="Centro Danza chi siamo" fill quality={68} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="mx-auto flex max-w-xl flex-col justify-center self-center lg:mx-0 lg:py-6">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">CHI SIAMO</p>
            <h2 className="mb-5 font-serif text-4xl font-bold text-foreground sm:text-5xl">Un luogo dove la danza diventa crescita, espressione e passione.</h2>
            <p className="mb-5 text-lg leading-relaxed text-pretty text-foreground">Centro Danza nasce con l&apos;obiettivo di offrire un ambiente accogliente e professionale in cui bambini, ragazzi e adulti possano scoprire e coltivare il proprio talento attraverso la danza.</p>
            <div className="space-y-4 text-lg leading-relaxed text-pretty text-foreground">
              <p>Guidata da Marco Protano e Martina Libro, la scuola accompagna ogni allievo in un percorso fatto di tecnica, disciplina, creativit&agrave; e crescita personale.</p>
              <p>Crediamo che la danza sia molto pi&ugrave; di un&apos;attivit&agrave; fisica: &egrave; espressione, condivisione e fiducia in s&eacute; stessi. Per questo valorizziamo ogni allievo rispettandone tempi, obiettivi e potenzialit&agrave;.</p>
              <p>Attraverso lezioni, spettacoli ed eventi, Centro Danza crea un ambiente stimolante e familiare dove ogni persona pu&ograve; sentirsi parte di una vera comunit&agrave;.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
