import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Icon } from '@/lib/icons'
import { site  } from '@/lib/data'
import { services } from '@/lib/services'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="rounded-xl bg-white/95 px-3 py-2.5 w-fit">
            <Logo />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            Comprehensive specialist healthcare in Naivasha, Nakuru County —
            combining advanced technology with compassionate care.
          </p>
          <div className="mt-5 flex gap-2">
            {site.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[--color-brand-green]"
              >
                <Icon name={s.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Our Specialists', href: '/specialists' },
              { label: 'Testimonials', href: '/testimonials' },
              { label: 'Blog', href: '/blog' },
              { label: 'Emergency Care', href: '/emergency' },
              { label: 'Book Appointment', href: '/appointments' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-[--color-brand-green]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold">Our Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="transition-colors hover:text-[--color-brand-green]"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[--color-brand-green]" />
              {site.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-[--color-brand-green]" />
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-[--color-brand-green]" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-[--color-brand-green]" />
              <span>Emergency: Open 24 Hours</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-primary-foreground/70 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
