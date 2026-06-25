'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { SectionHeading } from '../section-heading'

export function Directors() {
  return (
    <section className="content-container max-w-7xl bg-secondary/5 px-6 py-20 md:px-12">
      <div className="mx-auto flex flex-col items-center text-center">
        <SectionHeading
          title="Our Directors"
          align="center"
          description="Meet the visionary leaders guiding RiftView Specialist Center's commitment to excellence, innovation, and compassionate healthcare."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 w-full max-w-4xl"
        >
          <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-3xl border-2 border-secondary/50 shadow-2xl">
            <Image
              src="/images/directors-riftview-specialist-center.webp"
              alt="Directors of RiftView Specialist Center"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 900px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h3 className="text-2xl font-bold text-primary md:text-3xl">
              Quality Care and Governance
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our directors bring together decades of medical, business and
              healthcare management experience, ensuring RiftView Specialist
              Center continues to provide world-class medical services,
              advanced diagnostics and patient-centered care to the people of
              Naivasha and beyond.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}