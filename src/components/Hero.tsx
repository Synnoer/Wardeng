import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/site'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-night-950"
      aria-labelledby="hero-heading"
    >
      <img
        src={siteConfig.heroImage}
        alt={siteConfig.heroImageAlt}
        className="absolute inset-0 size-full object-cover opacity-45 saturate-50 contrast-125"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/85 to-cobalt-500/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-night-950 via-transparent to-night-950/50"
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 w-[55%] bg-gradient-to-l from-cyan-400/15 via-cobalt-500/10 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 top-24 hidden h-[70%] w-[38%] skew-x-[-12deg] border-l-4 border-cyan-400/40 bg-cobalt-500/10 lg:block"
        aria-hidden
      />

      <span
        className="watermark animate-glow right-[-0.05em] top-[12%] text-[clamp(8rem,28vw,18rem)] text-cyan-400/[0.07]"
        aria-hidden
      >
        W
      </span>

      <div className="relative container-narrow flex min-h-[100svh] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:px-8 lg:pb-24 lg:pt-32">
        <div className="animate-slide-in max-w-3xl">
          <p className="slash-label mb-5">{siteConfig.name}</p>
          <h1
            id="hero-heading"
            className="text-4xl uppercase italic leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-200 sm:text-lg">
            {siteConfig.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#layanan" className="btn-persona">
              Lihat Layanan
              <ArrowRight className="size-5" aria-hidden />
            </a>
            <a href="#kontak" className="btn-persona-ghost">
              <MessageCircle className="size-5" aria-hidden />
              Hubungi Kami
            </a>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-8 right-4 hidden font-ui text-xs font-bold uppercase tracking-[0.3em] text-cyan-300/70 sm:block lg:right-8"
          aria-hidden
        >
          Retail · FnB · Digital
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-hot-500 via-cobalt-500 to-cyan-400"
        aria-hidden
      />
    </section>
  )
}
