import type { Service } from '../data/services'

type ServiceCardProps = {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <article className="panel-persona group h-full p-6">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="inline-flex border-2 border-cyan-400/40 bg-night-950 p-3 text-cyan-400 transition group-hover:border-cyan-400 group-hover:bg-cobalt-500 group-hover:text-white">
          <Icon className="size-6" aria-hidden />
        </div>
        <span className="font-ui text-3xl font-bold italic text-white/10 transition group-hover:text-hot-500/80">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="font-ui text-2xl font-bold uppercase italic tracking-wide text-white">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-mist-300">{service.description}</p>
      <div
        className="mt-5 h-1 w-12 bg-cyan-400 transition-all group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-hot-500"
        aria-hidden
      />
    </article>
  )
}
