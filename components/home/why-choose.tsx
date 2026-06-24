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
    icon: HeartHandshake,
    title: 'Elegant, Patient-Centered Facility',
    text: 'Designed with comfort and calm in mind, every detail of our centre promotes healing and peace of mind.',
  },
  {
    icon: ShieldCheck,
    title: 'Comprehensive Care Under One Roof',
    text: 'From diagnostics to specialized treatment and rehabilitation, we offer a full spectrum of services in one location.',
  },
  {
    icon: Users,
    title: 'Highly Experienced Professionals',
    text: 'Our team of specialists, nurses, and support staff are not only experts in their fields but also compassionate partners in your journey to wellness.',
  },
  {
    icon: Microscope,
    title: 'Cutting-Edge Technology',
    text: 'We invest in advanced medical equipment and modern practices to deliver precision, safety, and outstanding outcomes.',
  },
  {
    icon: Clock,
    title: 'Seamless Patient Journey',
    text: 'From the moment you book your appointment to recovery and follow-up, we ensure your experience is smooth, coordinated, and stress-free.',
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
            <div className="relative mx-auto h-72 w-72 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-2 shadow-2xl md:h-[420px] md:w-[420px]">
  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-white">
    <Image
      src="/images/xray.webp"
      alt="The RiftView medical team"
      fill
      sizes="(max-width: 768px) 288px, 420px"
      className="object-cover"
      priority
    />
  </div>
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
