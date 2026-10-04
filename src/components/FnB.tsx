import { menuItems } from '../data/menu'
import { FoodCard } from './FoodCard'

export function FnB() {
  return (
    <section
      id="fnb"
      className="section-padding bg-surface-warm"
      aria-labelledby="fnb-heading"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-spice-600">
            Warkop
          </p>
          <h2 id="fnb-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Kuliner Hangat untuk Setiap Saat
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
            Menu sederhana dan familiar — siap menemani aktivitas harian Anda.
          </p>
        </div>

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
