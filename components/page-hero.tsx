'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ChevronRight, Calendar, Phone } from 'lucide-react'
import { CtaBand } from './cta-band'
import { CtaButton } from './cta-button'

export function PageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string
  subtitle?: string
  breadcrumb: { label: string; href?: string }[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/10">
      {/* Background Decorations */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[--color-brand-sky]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[--color-brand-green]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 ">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
            >
              {breadcrumb.map((b, i) => (
                <span key={b.label} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight className="size-3" />}

                  {b.href ? (
                    <Link
                      href={b.href}
                      className="transition-colors hover:text-primary"
                    >
                      {b.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-primary">
                      {b.label}
                    </span>
                  )}
                </span>
              ))}
            </motion.nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
              >
                {subtitle}
              </motion.p>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-4"
            >
                 
            <CtaButton href="/services" size="md" variant="primary">
              Our Services
            </CtaButton>
            <CtaButton href="/about" size="md" variant="accent">
              Learn More
            </CtaButton>
      
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/riftview-hero.jpg"
                alt="Rift View Specialist Centre"
                width={600}
                height={400}
                priority
                className="h-75 w-full object-cover md:h-112.5"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-6 rounded-2xl border bg-background p-5 shadow-xl">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">
                Specialized Departments
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}