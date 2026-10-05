import { digitalServices } from '../data/digital-services'
import { DigitalServiceCard } from './DigitalServiceCard'
import { SectionHeader } from './SectionHeader'

export function DigitalServices() {
  return (
    <section
      id="digital"
      className="section-padding shard-bg overflow-hidden"
      aria-labelledby="digital-heading"
    >
      <div className="section-edge" aria-hidden />
      <span
        className="watermark bottom-4 right-0 text-[clamp(5rem,20vw,12rem)] text-cyan-400/[0.05]"
        aria-hidden
      >
        DIGITAL
      </span>
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Digital Services"
          title="Solusi Digital untuk Bisnis Anda"
          titleId="digital-heading"
          description="Dari website hingga IoT — kami bantu wujudkan kebutuhan digital yang tepat sasaran."
          watermark="TECH"
        />

        <ul className="mt-12 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {digitalServices.map((service, index) => (
            <li key={service.id}>
              <DigitalServiceCard service={service} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
