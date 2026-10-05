import { menuItems } from '../data/menu'
import { FoodCard } from './FoodCard'
import { SectionHeader } from './SectionHeader'

export function FnB() {
  return (
    <section
      id="fnb"
      className="section-padding shard-bg-alt"
      aria-labelledby="fnb-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-hot-500 via-spark-400 to-cyan-400"
        aria-hidden
      />
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Food & Beverage"
          title="Warkop Deng"
          titleId="fnb-heading"
          description="Murah meriah"
          watermark="MENU"
        />

        <ul className="mt-12 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <li key={item.id} className={item.id === 'teh-manis' ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <FoodCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
