import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/site'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-brand-950"
      aria-labelledby="hero-heading"
    >
      <img
        src={siteConfig.heroImage}
        alt={siteConfig.heroImageAlt}
        className="absolute inset-0 size-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/75 to-brand-950/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-brand-950/30"
        aria-hidden
      />

      <div className="relative container-narrow flex min-h-[100svh] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:px-8 lg:pb-24 lg:pt-32">
        <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-spice-300 sm:text-base">
          {siteConfig.name}
        </p>
        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl"
        >
          {siteConfig.tagline}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-black sm:text-lg">
          {siteConfig.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#layanan"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-spice-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-spice-900/30 transition hover:bg-spice-400"
          >
            Lihat Layanan
            <ArrowRight className="size-5" aria-hidden />
          </a>
          <a
            href="#kontak"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <MessageCircle className="size-5" aria-hidden />
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  )
}
