export type MenuItem = {
  id: string
  name: string
  description: string
  image: string
  imageAlt: string
}

export const menuItems: MenuItem[] = [
  {
    id: 'mie',
    name: 'Mie',
    description: 'Mie hangat yang cocok untuk makan siang maupun malam.',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Semangkuk mie hangat dengan topping',
  },
  {
    id: 'orak-arik',
    name: 'Orak-Arik',
    description: 'Orak-arik rumahan dengan rasa yang familiar dan mengenyangkan.',
    image:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Hidangan orak-arik telur di piring',
  },
  {
    id: 'josu',
    name: 'Josu',
    description: 'Minuman josu segar untuk menemani aktivitas Anda.',
    image:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Gelas minuman dingin segar',
  },
  {
    id: 'kopi',
    name: 'Kopi',
    description: 'Kopi yang diseduh untuk menemani kerja maupun santai.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Cangkir kopi hangat di atas meja kayu',
  },
  {
    id: 'teh-manis',
    name: 'Teh Manis',
    description: 'Teh manis klasik yang menyegarkan sepanjang hari.',
    image:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Gelas teh manis dengan es',
  },
]
