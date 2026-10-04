import { services } from '../data/services'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <section
      id="layanan"
      className="section-padding bg-brand-50/60"
      aria-labelledby="services-heading"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Retail Services
          </p>
          <h2 id="services-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Layanan Harian yang Siap Membantu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
            Dari tarik tunai hingga kebutuhan rumah tangga — semua tersedia di Wardeng.
          </p>
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
