import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variants = {
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  accent: 'bg-accent text-accent-foreground',
  ghost: 'bg-transparent text-primary',
  destructive: 'bg-destructive text-destructive-foreground',
  outline: 'border border-primary text-primary',
}

type CtaProps = {
  href: string
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
} & Omit<ComponentProps<typeof Link>, 'href'>

export function CtaButton({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: CtaProps) {
  return (
    <Link
      href={href}
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  )
}
