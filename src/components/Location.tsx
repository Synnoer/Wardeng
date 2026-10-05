import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '../data/site'
import { SectionHeader } from './SectionHeader'

export function Location() {
  const { address, hours, contact, mapEmbedUrl } = siteConfig

  return (
    <section
      id="lokasi"
      className="section-padding shard-bg-alt"
      aria-labelledby="location-heading"
    >
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Lokasi"
          title="Kunjungi Wardeng"
          titleId="location-heading"
          description="Datang langsung ke lokasi kami atau hubungi untuk informasi lebih lanjut."
          watermark="MAP"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="relative overflow-hidden border-4 border-white shadow-[8px_8px_0_0_rgb(11_87_255)]">
            <div
              className="pointer-events-none absolute left-0 top-0 z-10 bg-cobalt-500 px-4 py-1 font-ui text-xs font-bold uppercase italic tracking-[0.2em] text-white"
              aria-hidden
            >
              Town Map
            </div>
            <iframe
              title="Peta lokasi Wardeng"
              src={mapEmbedUrl}
              className="aspect-[4/3] w-full border-0 grayscale contrast-125 lg:aspect-auto lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center gap-6 border-2 border-cyan-400/30 bg-panel/90 p-6 sm:p-8">
            <div className="list-persona p-4">
              <div className="mb-3 inline-flex items-center gap-2 text-cyan-400">
                <MapPin className="size-5" aria-hidden />
                <h3 className="font-ui text-xl font-bold uppercase italic text-inherit">Alamat</h3>
              </div>
              <address className="not-italic text-base leading-relaxed text-inherit opacity-90">
                {address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="list-persona p-4">
              <div className="mb-3 inline-flex items-center gap-2 text-cyan-400">
                <Clock3 className="size-5" aria-hidden />
                <h3 className="font-ui text-xl font-bold uppercase italic text-inherit">
                  Jam Operasional
                </h3>
              </div>
              <ul className="space-y-2">
                {hours.map((entry) => (
                  <li
                    key={entry.days}
                    className="flex flex-wrap items-baseline justify-between gap-2 border-b border-current/15 pb-2 font-ui text-base font-semibold uppercase tracking-wide last:border-0 last:pb-0"
                  >
                    <span>{entry.days}</span>
                    <span className="text-spark-400">{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="list-persona p-4">
              <div className="mb-3 inline-flex items-center gap-2 text-cyan-400">
                <Phone className="size-5" aria-hidden />
                <h3 className="font-ui text-xl font-bold uppercase italic text-inherit">Kontak</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 font-ui text-lg font-semibold uppercase tracking-wide transition hover:text-hot-500"
                  >
                    <Phone className="size-4 shrink-0" aria-hidden />
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 font-ui text-lg font-semibold uppercase tracking-wide transition hover:text-hot-500"
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
