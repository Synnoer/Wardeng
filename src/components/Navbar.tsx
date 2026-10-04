import { Menu, X } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { navLinks, siteConfig } from '../data/site'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'border-b border-brand-100/80 bg-surface/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-narrow flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight text-brand-800 transition-colors hover:text-brand-600"
          onClick={closeMenu}
        >
          {siteConfig.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#kontak"
            className="hidden rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 focus-visible:outline-brand-700 sm:inline-flex"
          >
            Hubungi Kami
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-brand-200 bg-white p-2.5 text-brand-800 transition hover:bg-brand-50 lg:hidden"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <div
        id={menuId}
        className={`border-t border-brand-100 bg-surface lg:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className="container-narrow flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-ink-800 transition hover:bg-brand-50 hover:text-brand-700"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <a
              href="#kontak"
              className="block rounded-xl bg-brand-700 px-4 py-3 text-center text-base font-semibold text-white transition hover:bg-brand-600"
              onClick={closeMenu}
            >
              Hubungi Kami
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
