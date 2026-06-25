'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { staggerItem } from '@/components/motion/reveal'
import type { Specialist } from '@/lib/data'

export function SpecialistCard({ specialist }: { specialist: Specialist }) {
  return (
    <motion.div variants={staggerItem}>
      <Link
        href={`/specialists/${specialist.slug}`}
        className="group block overflow-hidden rounded-2xl  border-2 border-accent/70  bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
      >
        <div className="relative aspect-4/5 overflow-hidden bg-secondary">
          <Image
            src={specialist.image || '/placeholder.svg'}
            alt={`Portrait of ${specialist.name}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute border border-accent/20 left-3 bottom-3 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white backdrop-blur">
            {specialist.department}
          </span>
          <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-[--color-brand-green] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-heading text-lg font-bold text-primary">
            {specialist.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-[--color-brand-sky]">
            {specialist.title}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
