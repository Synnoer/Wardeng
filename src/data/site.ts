export const siteConfig = {
  name: 'Wardeng',
  tagline: 'Kebutuhan Harian, Layanan Digital, dan Kuliner dalam Satu Tempat.',
  description:
    'Wardeng melayani kebutuhan retail harian, kuliner hangat, dan jasa digital — web, mobile, dan IoT — untuk komunitas lokal.',
  heroImage:
    '/Hero.webp',
  heroImageAlt: 'Interior toko modern dengan rak produk dan suasana ramah pelanggan',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773.543249708404!2d107.72798801281728!3d-6.94912343771588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c351c4a626bf%3A0x68d0884329cf662d!2sWARDENG!5e0!3m2!1sid!2sid!4v1791113945955!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
  address: {
    lines: ['Jl. Mitra Lestari XV', 'Cinunuk, Cileunyi', 'Kabupaten Bandung, Jawa Barat 40624, Indonesia'],
  },
  hours: [
    { days: 'Senin – Minggu', time: '08.00 – 22.00' },
  ],
  contact: {
    phone: '+62 851-0238-1011',
    whatsapp: '+62 851-0238-1011',
    email: 'halo@wardeng.id',
  },
  productionUrl: import.meta.env.VITE_SITE_URL as string | undefined,
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Warkop', href: '#fnb' },
  { label: 'Digital', href: '#digital' },
  { label: 'Lokasi', href: '#lokasi' },
  { label: 'Kontak', href: '#kontak' },
] as const
