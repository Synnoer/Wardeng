import { Mail, Phone } from 'lucide-react'
import { navLinks, siteConfig } from '../data/site'

const copyrightYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-cyan-400 bg-night-950 text-mist-200">
      <span className="watermark -bottom-6 left-0 text-[clamp(5rem,18vw,11rem)]" aria-hidden>
        SYSTEM
      </span>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cobalt-500/20 to-transparent"
        aria-hidden
      />
      <div className="container-narrow section-padding !pb-10 !pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="font-display text-3xl uppercase italic text-white transition hover:text-cyan-400"
            >
              <span className="text-cyan-400">W</span>
              {siteConfig.name.slice(1)}
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-300">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="font-ui text-sm font-bold uppercase italic tracking-[0.2em] text-cyan-400">
              Navigasi
            </h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-ui text-base font-semibold uppercase italic tracking-wide text-mist-200 transition hover:text-hot-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-ui text-sm font-bold uppercase italic tracking-[0.2em] text-cyan-400">
              Kontak
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-mist-300">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-cyan-400" aria-hidden />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-cyan-400" aria-hidden />
                  {siteConfig.contact.email}
                </a>
              </li>
              {siteConfig.address.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cyan-400/20 pt-6 text-center font-ui text-sm font-semibold uppercase tracking-[0.15em] text-mist-400 sm:text-left">
          <p>
            © {copyrightYear} Synnoer. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
