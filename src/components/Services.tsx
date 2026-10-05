import { services } from '../data/services'
import { SectionHeader } from './SectionHeader'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <section
      id="layanan"
      className="section-padding shard-bg"
      aria-labelledby="services-heading"
    >
      <div className="section-edge" aria-hidden />
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Retail Services"
          title="Layanan Harian yang Siap Membantu"
          titleId="services-heading"
          description="Dari tarik tunai hingga kebutuhan rumah tangga — semua tersedia di Wardeng."
          watermark="SERVICE"
        />

        <ul className="mt-12 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.id}>
              <ServiceCard service={service} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
