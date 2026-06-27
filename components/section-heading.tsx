import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <Reveal
      className={cn(
        'max-w-4xl',
        align === 'center' ? 'md:mx-auto md:text-center text-left' : 'text-left',
      )}
    >
      {eyebrow && (
        <span className="inline-block rounded-full px-0 md:px-4 py-1 text-md font-medium uppercase tracking-wider text-secondary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-balance text-3xl md:text-5xl font-bold text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}
