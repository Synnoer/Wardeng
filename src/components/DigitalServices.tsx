import { digitalServices } from '../data/digital-services'
import { DigitalServiceCard } from './DigitalServiceCard'

export function DigitalServices() {
  return (
    <section
      id="digital"
      className="section-padding bg-surface-cool"
      aria-labelledby="digital-heading"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
            Digital Services
          </p>
          <h2 id="digital-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Solusi Digital untuk Bisnis Anda
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
            Dari website hingga IoT — kami bantu wujudkan kebutuhan digital yang tepat sasaran.
          </p>
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {digitalServices.map((service) => (
            <li key={service.id}>
              <DigitalServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
