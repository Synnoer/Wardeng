type SectionHeaderProps = {
  eyebrow: string
  title: string
  titleId: string
  description: string
  watermark: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  watermark,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={`relative ${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      <span
        className={`watermark text-[clamp(4rem,16vw,9rem)] ${
          align === 'center' ? 'left-1/2 top-[-1.5rem] -translate-x-1/2' : 'left-[-0.2em] top-[-1.2rem]'
        }`}
        aria-hidden
      >
        {watermark}
      </span>
      <p className={`slash-label ${align === 'center' ? 'mx-auto' : ''}`}>{eyebrow}</p>
      <h2
        id={titleId}
        className="mt-4 text-3xl uppercase italic leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-relaxed text-mist-200 sm:text-lg ${
          align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl'
        }`}
      >
        {description}
      </p>
      <div
        className={`mt-5 h-1.5 w-28 bg-gradient-to-r from-cyan-400 via-cobalt-400 to-hot-500 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
        aria-hidden
      />
    </div>
  )
}
