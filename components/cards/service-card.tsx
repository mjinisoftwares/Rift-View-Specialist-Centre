'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Icon } from '@/lib/icons'
import { staggerItem } from '@/components/motion/reveal'
import type { Service } from '@/lib/services'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div variants={staggerItem}>
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-border bg-secondary/5 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[--color-brand-green]/50 hover:shadow-xl"
      >
        <span className="flex size-14 items-center justify-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-[--color-brand-green] group-hover:text-white">
          <Icon name={service.icon} className="size-7" />
        </span>
        <h3 className="mt-5 font-heading text-lg font-bold text-primary">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.excerpt}
        </p>
        <span className="mt-4 w-1/2 inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 px-6 py-3 text-sm border border-primary text-primary">
          Learn more
        </span>
      </Link>
    </motion.div>
  )
}
