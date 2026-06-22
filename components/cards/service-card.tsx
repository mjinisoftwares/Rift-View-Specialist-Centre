'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

import { Icon } from '@/lib/icons'
import { staggerItem } from '@/components/motion/reveal'
import type { Service } from '@/lib/services'

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className="
          group relative flex h-full flex-col
          rounded-3xl border border-border/50
          bg-gradient-to-b from-background to-background/50
          p-8 backdrop-blur-sm
          transition-all duration-500 ease-out
          hover:-translate-y-2
          hover:border-secondary/50
          hover:shadow-2xl hover:shadow-secondary/5
          hover:bg-gradient-to-b hover:from-background hover:to-secondary/5
        "
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top Accent Bar */}
        <motion.div
          className="absolute left-0 top-0 h-1 w-full rounded-t-3xl bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] opacity-0 transition-all duration-500 group-hover:opacity-100"
          initial={{ backgroundPosition: '0% 0%' }}
          whileHover={{ backgroundPosition: '100% 0%' }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Icon Container */}
        <div
          className="
            relative flex h-16 w-16 items-center justify-center
            rounded-2xl
            bg-secondary/10
            text-secondary
            transition-all duration-500
            group-hover:scale-110
            group-hover:bg-secondary
            group-hover:text-white
            group-hover:shadow-lg group-hover:shadow-secondary/30
          "
        >
          <Icon
            name={service.icon}
            className="h-8 w-8 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"
          />
          {/* Icon background glow */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-secondary/20 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="mt-7 flex flex-1 flex-col">
          <h3
            className="
              font-heading text-2xl font-bold
              text-primary
              transition-all duration-300
              group-hover:text-secondary
              group-hover:translate-x-0.5
            "
          >
            {service.title}
          </h3>

          <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
            {service.excerpt}
          </p>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-6">
            <span className="relative text-sm font-semibold uppercase tracking-wider text-primary transition-colors duration-300 group-hover:text-secondary">
              Learn More
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
            </span>

            <motion.span
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                border border-border/50
                bg-background
                text-primary
                transition-all duration-500
                group-hover:border-secondary
                group-hover:bg-secondary
                group-hover:text-white
                group-hover:shadow-lg group-hover:shadow-secondary/30
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.span>
          </div>

        
        </div>

        {/* Hover glow effect */}
        <div className="pointer-events-none absolute -inset-px -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 via-transparent to-accent/10 blur-2xl" />
        </div>
      </Link>
    </motion.div>
  )
}