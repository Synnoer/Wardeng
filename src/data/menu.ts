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
    name: 'Indomie',
    description: 'Rp.6.000',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Indomie',
  },
  {
    id: 'orak-arik',
    name: 'Nasi Orak-Arik',
    description: 'Rp.12.000',
    image:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Hidangan orak-arik telur di piring',
  },
  {
    id: 'josu',
    name: 'Josu',
    description: 'Rp.3.500',
    image:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Josu',
  },
  {
    id: 'kopi',
    name: 'Kopi',
    description: 'Rp.4.000',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Kopi',
  },
  {
    id: 'teh-manis',
    name: 'Teh Manis',
    description: 'Rp.5.000',
    image:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Gelas teh manis dengan es',
  },
]
