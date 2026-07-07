'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'

const slides = [
  {
    image: '/images/cake-cutting-riftview-grand-opening.webp',
    alt: 'Rift View Specialist Center Building in Naivasha',
    titleLead: 'Specialist',
    titleAccent: 'Healthcare',
    titleTail: 'in Naivasha',
   text: 'We provide quality, accessible and patient-centred specialist healthcare services to the people of Naivasha, delivering compassionate care through experienced specialists, modern technology, and evidence-based treatment.'  },
  {
    image: '/images/medicl-staff-treating-patient-in-community-o.webp',
    alt: 'Outreach Program treating community members in Naivasha',
    titleLead: 'Compassionate',
    titleAccent: 'Care',
    titleTail: 'for the community',
    text: 'From paediatrics to chronic disease management, our specialist consultants deliver patient-centred care tailored to every community member.',
  },
  {
    image: '/images/two-medical-staff.webp  ',
    alt: 'Rift View Specialist Center - Reception',
    titleLead: 'Medical',
    titleAccent: 'Specialists',
    titleTail: 'you can trust',
    text: 'Over 40 medical specialists collaborate across disciplines to deliver consistent, high-quality healthcare conveniently close to home in Naivasha.',
  },
 {
  image: '/images/riftview-mri-equipment.webp',
  alt: 'Doctor standing beside a modern MRI scanner at Rift View Specialist Centre, Naivasha',
  titleLead: 'Modern MRI & CT ',
  titleAccent: 'Imaging',
  titleTail: 'Services',
  text: 'We provide high-quality MRI & CT imaging using modern technology that helps our specialists diagnose conditions early and develop effective, personalized treatment plans.',
},

{
  image: '/images/lab-equipments-rift-view-specialist-center-2.webp',
  alt: 'Modern laboratory equipment at Rift View Specialist Centre, Naivasha',
  titleLead: 'Comprehensive',
  titleAccent: 'Laboratory',
  titleTail: 'Diagnostics',
  text: 'Using advanced laboratory technology and rigorous quality standards, we provide precise diagnostic testing with timely results to help our specialists deliver exceptional patient care.',
},


  {
    image: '/images/examination-room-with-medical-equipments.webp',
    alt: 'Medical Equipment in examination room at Rift View Specialist Center Naivasha',
    titleLead: 'Quality & Affordable',
    titleAccent: 'Healthcare',
    titleTail: 'for all',
    text: 'We provide comprehensive, affordable specialist medical services designed to meet the diverse healthcare needs of every patient in our community.',
  },
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const slide = slides[index]

  return (
    <section className="mt-12 md:mt-0 relative overflow-hidden bg-background min-h-[95vh]">
      <div
        className="pointer-events-none absolute right-0 top-0 size-136 translate-x-1/3 -translate-y-1/3 rounded-full bg-[--color-brand-sky]/10"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:px-12 py-12 lg:grid-cols-2 text-left">
        <div className="relative flex flex-col items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <h1 className="text-balance font-heading text-4xl font-bold leading-[1.2] tracking-tight text-primary md:text-5xl  lg:mt-12">
                {slide.titleLead}{' '}
                <span className="text-accent">
                  {slide.titleAccent}
                </span>{' '}
                {slide.titleTail}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {slide.text}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex flex-wrap justify-start gap-4">
            <CtaButton href="/services" size="md" variant="primary" className='hover:bg-secondary'>
              Our Services
            </CtaButton>
            <CtaButton href="/specialists" size="md" variant="outline" className='hover:bg-primary/80 hover:text-white'>
           Our Specialists
            </CtaButton>
          </div>

          <div className="mt-8 flex items-center justify-start gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-8 bg-[--color-brand-green]'
                    : 'w-2 bg-border hover:bg-muted-foreground/40'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl border-2 border-secondary/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image || '/placeholder.svg'}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-primary shadow-md backdrop-blur transition-colors hover:bg-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-primary shadow-md backdrop-blur transition-colors hover:bg-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
