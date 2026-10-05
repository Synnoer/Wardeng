import type { DigitalService } from '../data/digital-services'

type DigitalServiceCardProps = {
  service: DigitalService
  index: number
}

export function DigitalServiceCard({ service, index }: DigitalServiceCardProps) {
  const Icon = service.icon

  return (
    <article className="relative flex h-full flex-col overflow-hidden border-2 border-cyan-400/30 bg-night-900/80 p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_36px_rgb(0_229_255_/_0.22)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)',
          backgroundSize: '18px 18px',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-2 top-2 font-display text-6xl italic text-cyan-400/15"
        aria-hidden
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative mb-4 inline-flex w-fit border-2 border-cyan-400 bg-cobalt-500 p-3 text-white shadow-[0_0_18px_rgb(0_229_255_/_0.35)]">
        <Icon className="size-6" aria-hidden />
      </div>
      <h3 className="relative font-ui text-2xl font-bold uppercase italic tracking-wide text-white">
        {service.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-mist-300">
        {service.description}
      </p>
      <ul className="relative mt-5 space-y-2 border-t border-cyan-400/20 pt-5">
        {service.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 font-ui text-sm font-semibold uppercase tracking-wide text-mist-100">
            <span className="mt-1 size-2 shrink-0 rotate-45 bg-hot-500" aria-hidden />
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  )
}
