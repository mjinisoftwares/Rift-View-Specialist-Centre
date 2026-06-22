'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'
import { CtaButton } from './cta-button'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  imageSrc?: string
  imageAlt?: string
  breadcrumb: {
    label: string
    href?: string
  }[]
}

export function PageHero({
  title,
  subtitle,
  breadcrumb,
  imageSrc = '/images/riftview-hero.jpg',
  imageAlt = 'RiftView Specialist Centre',
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/10">
      {/* Background Effects */}
      <div
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
            >
              <Link href="/" className="hover:text-primary">
                Home
              </Link>

              {breadcrumb.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                  <ChevronRight className="size-3" />

                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-primary">
                      {item.label}
                    </span>
                  )}
                </span>
              ))}
            </motion.nav>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-balance text-4xl font-bold text-primary md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <CtaButton href="/appointments" size="md" variant='secondary'>
                Book Appointment
              </CtaButton>

              <CtaButton
                href="/about"
                size="md"
                variant="accent"
              >
                Learn About Us
              </CtaButton>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Decorative Ring */}
            <div className="absolute inset-0 scale-110 rounded-full bg-primary/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border-4 border-secondary/70 shadow-2xl md:h-[420px] md:w-full ">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  )
}