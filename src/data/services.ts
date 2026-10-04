import type { LucideIcon } from 'lucide-react'
import {
  Banknote,
  Droplets,
  Flame,
  Receipt,
  Smartphone,
  Zap,
} from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'tarik-tunai',
    title: 'Tarik Tunai',
    description: 'Layanan tarik tunai praktis untuk kebutuhan harian Anda.',
    icon: Banknote,
  },
  {
    id: 'top-up-ewallet',
    title: 'Top Up E-Wallet',
    description: 'Isi saldo e-wallet dengan cepat dan aman.',
    icon: Smartphone,
  },
  {
    id: 'bayar-tagihan',
    title: 'Bayar Tagihan',
    description: 'Bayar berbagai tagihan rutin tanpa antre panjang.',
    icon: Receipt,
  },
  {
    id: 'isi-token',
    title: 'Isi Token',
    description: 'Isi token listrik dengan proses yang mudah dan cepat.',
    icon: Zap,
  },
  {
    id: 'galon',
    title: 'Galon',
    description: 'Ketersediaan galon air untuk kebutuhan rumah tangga.',
    icon: Droplets,
  },
  {
    id: 'gas',
    title: 'Gas',
    description: 'Layanan gas untuk kebutuhan memasak sehari-hari.',
    icon: Flame,
  },
]
