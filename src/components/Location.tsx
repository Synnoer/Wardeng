import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '../data/site'

export function Location() {
  const { address, hours, contact, mapEmbedUrl } = siteConfig

  return (
    <section
      id="lokasi"
      className="section-padding bg-white"
      aria-labelledby="location-heading"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Lokasi
          </p>
          <h2 id="location-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Kunjungi Wardeng
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
            Datang langsung ke lokasi kami atau hubungi untuk informasi lebih lanjut.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-sm">
            <iframe
              title="Peta lokasi Wardeng"
              src={mapEmbedUrl}
              className="aspect-[4/3] w-full border-0 lg:aspect-auto lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center gap-8 rounded-2xl border border-brand-100 bg-brand-50/50 p-6 sm:p-8">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-brand-700">
                <MapPin className="size-5" aria-hidden />
                <h3 className="text-lg font-semibold text-ink-950">Alamat</h3>
              </div>
              <address className="not-italic text-base leading-relaxed text-ink-700">
                {address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-brand-700">
                <Clock3 className="size-5" aria-hidden />
                <h3 className="text-lg font-semibold text-ink-950">Jam Operasional</h3>
              </div>
              <ul className="space-y-2">
                {hours.map((entry) => (
                  <li
                    key={entry.days}
                    className="flex flex-wrap items-baseline justify-between gap-2 border-b border-brand-100 pb-2 text-ink-700 last:border-0 last:pb-0"
                  >
                    <span className="font-medium">{entry.days}</span>
                    <span>{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-brand-700">
                <Phone className="size-5" aria-hidden />
                <h3 className="text-lg font-semibold text-ink-950">Kontak</h3>
              </div>
              <ul className="space-y-3 text-ink-700">
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 transition hover:text-brand-700"
                  >
                    <Phone className="size-4 shrink-0" aria-hidden />
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 transition hover:text-brand-700"
                  >
                    <Mail className="size-4 shrink-0" aria-hidden />
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
