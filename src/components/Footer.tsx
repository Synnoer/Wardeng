import { Mail, Phone } from 'lucide-react'
import { navLinks, siteConfig } from '../data/site'

const copyrightYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-brand-900/20 bg-brand-950 text-brand-100">
      <div className="container-narrow section-padding !pb-10 !pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="font-display text-2xl font-bold text-white transition hover:text-spice-300"
            >
              {siteConfig.name}
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-200">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Navigasi
            </h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-200 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Kontak
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-brand-200">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Phone className="size-4 shrink-0" aria-hidden />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Mail className="size-4 shrink-0" aria-hidden />
                  {siteConfig.contact.email}
                </a>
              </li>
              {siteConfig.address.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-brand-300 sm:text-left">
          <p>
            © {copyrightYear} Synnoer. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
