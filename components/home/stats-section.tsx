'use client'

import { motion } from 'motion/react'
import { AnimatedCounter } from '@/components/animated-counter'
import { staggerContainer, staggerItem } from '@/components/motion/reveal'
import { stats } from '@/lib/data'

export function StatsSection() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-6 rounded-3xl bg-primary px-6 py-10 sm:px-10 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <p className="font-heading text-4xl font-extrabold text-[--color-brand-green] sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-primary-foreground/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
