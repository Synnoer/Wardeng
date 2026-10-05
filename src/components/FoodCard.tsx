import type { MenuItem } from '../data/menu'

type FoodCardProps = {
  item: MenuItem
}

export function FoodCard({ item }: FoodCardProps) {
  return (
    <article className="group relative overflow-hidden border-2 border-white/10 bg-night-900 transition duration-200 hover:border-hot-500 hover:shadow-[0_0_30px_rgb(255_45_120_/_0.25)]">
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-night-950/40 via-transparent to-cyan-400/10 opacity-80 mix-blend-multiply"
        aria-hidden
      />
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="size-full object-cover contrast-110 saturate-75 transition duration-500 group-hover:scale-110 group-hover:saturate-100"
          loading="lazy"
        />
      </div>
      <div className="relative border-t-2 border-cyan-400/30 bg-panel p-5">
        <div
          className="absolute -top-3 left-4 bg-hot-500 px-3 py-0.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-white"
          aria-hidden
        >
          Menu
        </div>
        <h3 className="font-ui text-2xl font-bold uppercase italic tracking-wide text-white">
          {item.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-mist-300">{item.description}</p>
      </div>
    </article>
  )
}
