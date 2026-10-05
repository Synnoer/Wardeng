import type { LucideIcon } from 'lucide-react'
import { Cpu, Globe, Smartphone } from 'lucide-react'

export type DigitalService = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  highlights: string[]
}

export const digitalServices: DigitalService[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'Pembuatan website profesional untuk bisnis lokal, brand, dan layanan online Anda.',
    icon: Globe,
    highlights: ['Company profile', 'Sistem Manajemen', 'AI Integrated Systems'],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description:
      'Pengembangan aplikasi mobile yang fokus pada kemudahan penggunaan dan kebutuhan bisnis.',
    icon: Smartphone,
    highlights: ['Aplikasi Android', 'UI yang jelas', 'Integrasi layanan'],
  },
  {
    id: 'iot-development',
    title: 'IoT Development',
    description:
      'Solusi Internet of Things untuk otomasi, monitoring, dan efisiensi operasional.',
    icon: Cpu,
    highlights: ['Sensor & device', 'Dashboard monitoring', 'Otomasi sederhana'],
  },
]
