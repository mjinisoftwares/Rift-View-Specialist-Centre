'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

import { Icon } from '@/lib/icons'
import { staggerItem } from '@/components/motion/reveal'
import type { Service } from '@/lib/services'

interface ServiceCardProps {
  service: Service
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      custom={index}
      className="h-full "
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className={`
          group relative flex h-full flex-col
          rounded-2xl
          border-2 border-accent/70
          bg-gradient-to-br from-card to-card/80
          p-6
          transition-all duration-300 ease-out
          hover:border-primary/20
          hover:shadow-xl hover:shadow-primary/5
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        `}
        aria-label={`Learn more about ${service.title}`}
      >
        {/* Background Glow */}
        <div
          className={`
            absolute -inset-px -z-10 rounded-2xl
            bg-accent/20
            opacity-0 transition-opacity duration-500
            group-hover:opacity-100
          `}
          aria-hidden="true"
        />

        {/* Image */}
        {service.images?.[0] && (
          <div className="relative -mx-6 -mt-6 mb-5 h-48 overflow-hidden rounded-t-2xl">
            <Image
              src={service.images[0].src}
              alt={service.images[0].alt || service.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={index < 3}
            />
           
          </div>
        )}

        {/* Header: Icon + Title in Flex Row */}
        <div
          className="relative mb-4 flex items-center gap-4"
          aria-hidden="true"
        >
          <div
            className={`
              flex h-14 w-14 shrink-0 items-center justify-center
              rounded-xl
              bg-primary/10
              text-primary
              transition-all duration-300
              group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground
            `}
          >
            <Icon
              name={service.icon}
              className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <h3 className="text-xl font-semibold tracking-tight transition-colors text-primary group-hover:text-secondary">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
          <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
            Learn More
          </span>

          <motion.span
            className={`
              flex h-8 w-8 items-center justify-center
              rounded-full
              border border-border
              bg-background
              text-muted-foreground
              transition-all duration-300
              group-hover:border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-hidden="true"
            tabIndex={-1}
          >
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.span>
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute right-0 top-0 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  )
}