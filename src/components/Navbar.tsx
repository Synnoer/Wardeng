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
          ? 'border-b border-cyan-400/20 bg-night-950/90 shadow-[0_8px_32px_rgb(0_229_255_/_0.08)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-narrow flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <a
          href="#home"
          className="font-display text-xl uppercase italic tracking-tight text-white transition hover:text-cyan-400 sm:text-2xl"
          onClick={closeMenu}
        >
          <span className="text-cyan-400">W</span>
          {siteConfig.name.slice(1)}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-chip">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#kontak"
            className="btn-persona hidden !px-5 !py-2 !text-sm sm:inline-flex"
          >
            Hubungi Kami
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center border-2 border-cyan-400/50 bg-night-900 p-2.5 text-cyan-300 transition hover:border-cyan-400 hover:bg-cobalt-500 hover:text-white lg:hidden"
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
        className={`border-t border-cyan-400/20 bg-night-900 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className="container-narrow flex flex-col gap-2 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="list-persona block px-4 py-3 font-ui text-lg font-bold uppercase italic tracking-wide"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <a
              href="#kontak"
              className="btn-persona w-full"
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
