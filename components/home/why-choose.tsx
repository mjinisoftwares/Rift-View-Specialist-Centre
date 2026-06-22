'use client'

import Image from 'next/image'
import {
  ShieldCheck,
  Clock,
  Users,
  Microscope,
  HeartHandshake,
  BadgeCheck,
} from 'lucide-react'
import { Reveal, StaggerGroup, staggerItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { motion } from 'motion/react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Trusted Expertise',
    text: 'Board-certified specialists with years of experience across disciplines.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Care',
    text: 'Round-the-clock emergency response and critical care services.',
  },
  {
    icon: Microscope,
    title: 'Advanced Technology',
    text: 'Modern diagnostic and treatment equipment for accurate care.',
  },
  {
    icon: Users,
    title: 'Patient-Centred',
    text: 'Personalised treatment plans built around your individual needs.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassionate Team',
    text: 'Caring staff who treat every patient with dignity and respect.',
  },
  {
    icon: BadgeCheck,
    title: 'Affordable Care',
    text: 'Quality healthcare with transparent, fair pricing for all.',
  },
]

export function WhyChoose() {
  return (
    <section className="bg-secondary/10 py-20">
      <SectionHeading
            align="center"
            eyebrow="Why Choose Us"
            title="Healthcare built on care, compassion & commitment"
            description="We are dedicated to making world-class specialist healthcare accessible to the people of Naivasha and Nakuru County."
          />
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 md:px-12 lg:grid-cols-2 mt-12">
        <Reveal direction="right">
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/xray.webp"
                alt="The RiftView medical team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover border-accent border-2 "
              />
            </div>
            {/* <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-accent px-6 py-5 text-white shadow-lg sm:block">
              <p className="font-heading text-5xl font-extrabold text-center">15+</p>
              <p className="text-sm font-medium text-white/90 text-center">
                Years of trusted care
              </p>
            </div> */}
          </div>
        </Reveal>

        <div>

          <hr className="w-full border-accent border-t-2" />
          
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <FeatureItem key={r.title} {...r} />
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ShieldCheck
  title: string
  text: string
}) {
  return (
    <motion.div variants={staggerItem} className="flex gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
        <Icon className="size-5" />
      </span>
      <div>
        <h3 className="font-heading text-base font-bold text-primary">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {text}
        </p>
      </div>
    </motion.div>
  )
}
