import type { MenuItem } from '../data/menu'

type FoodCardProps = {
  item: MenuItem
}

export function FoodCard({ item }: FoodCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-spice-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="size-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink-950">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
      </div>
    </article>
  )
}
