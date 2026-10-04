import type { DigitalService } from '../data/digital-services'

type DigitalServiceCardProps = {
  service: DigitalService
}

export function DigitalServiceCard({ service }: DigitalServiceCardProps) {
  const Icon = service.icon

  return (
    <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ink-200 hover:shadow-md">
      <div className="mb-4 inline-flex w-fit rounded-xl bg-ink-50 p-3 text-ink-700">
        <Icon className="size-6" aria-hidden />
      </div>
      <h3 className="text-xl font-semibold text-ink-950">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{service.description}</p>
      <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5">
        {service.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm text-ink-700">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  )
}
