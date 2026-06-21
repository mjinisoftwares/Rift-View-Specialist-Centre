'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Mail, Phone, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { CtaButton } from '@/components/cta-button'
import { Icon } from '@/lib/icons'
import { site } from '@/lib/data'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Specialists', href: '/specialists' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 py-1 text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition-colors hover:text-[--color-brand-green]"
            >
              <Mail className="size-4 text-[--color-brand-green]" />
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 transition-colors hover:text-[--color-brand-green]"
            >
              <Phone className="size-4 text-[--color-brand-green]" />
              {site.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            {site.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="flex size-5 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-accent"
              >
                <Icon name={s.icon} className="size-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          'border-b border-border/60 bg-background/95 backdrop-blur transition-shadow',
          scrolled && 'shadow-md',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 py-1.5">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary',
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[--color-brand-green]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <CtaButton href="/appointments" className="hidden sm:inline-flex" variant="accent">
              Book Appointment
            </CtaButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex size-8 items-center justify-center rounded-full bg-accent text-white lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-lg px-4 py-3 text-base font-semibold transition-colors',
                    isActive(link.href)
                      ? 'bg-secondary text-primary'
                      : 'text-foreground/80 hover:bg-muted',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <CtaButton href="/appointments" className="mt-2 w-full">
                Book Appointment
              </CtaButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
