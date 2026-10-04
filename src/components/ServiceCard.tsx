import type { Service } from '../data/services'

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <article className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md">
      <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-3 text-brand-700 transition group-hover:bg-brand-100">
        <Icon className="size-6" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold text-ink-950">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{service.description}</p>
    </article>
  )
}
