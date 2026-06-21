'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { Button } from '@base-ui/react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

const slides = [
  {
    image: '/images/hero-doctor-xray.png',
    alt: 'Doctor examining a chest X-ray',
    titleLead: 'Specialist',
    titleAccent: 'Healthcare',
    titleTail: 'in Naivasha, Nakuru County',
    text: "At Rift View Specialist Centre, we deliver comprehensive and compassionate care for cancer patients. Our multidisciplinary team creates personalized, holistic treatment plans to meet each patient&rsquo;s unique needs.",
  },
  {
    image: '/images/consultation.png',
    alt: 'Doctor consulting a patient',
    titleLead: 'Compassionate',
    titleAccent: 'Care',
    titleTail: 'for the whole family',
    text: 'From paediatrics to chronic disease management, our experienced consultants put your wellbeing at the heart of everything we do.',
  },
  {
    image: '/images/medical-team.png',
    alt: 'Team of medical professionals',
    titleLead: 'Expert',
    titleAccent: 'Specialists',
    titleTail: 'you can trust',
    text: 'A multidisciplinary team of over 40 specialists working together to provide world-class healthcare close to home.',
  },
  {
    image: '/images/lab-equipment.png',
    alt: 'Modern laboratory equipment',
    titleLead: 'Advanced',
    titleAccent: 'Diagnostics',
    titleTail: 'for accurate results',
    text: 'Modern laboratory and imaging facilities deliver fast, reliable results to guide effective treatment decisions.',
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
    <section className="relative overflow-hidden bg-background min-h-[80vh]">
      <div
        className="pointer-events-none absolute right-0 top-0 size-[34rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-[--color-brand-sky]/10"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:px-12 py-12 lg:grid-cols-2 text-center lg:text-left">
        <div className="relative min-h-80 flex flex-col items-center lg:items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center lg:items-start"
            >
              <h1 className="text-balance font-heading text-4xl font-bold leading-[1.2] tracking-tight text-primary sm:text-5xl">
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

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">          
            <CtaButton href="/services" size="md" variant="primary">
              Our Services
            </CtaButton>
            <CtaButton href="/about" size="md" variant="accent">
              Learn More
            </CtaButton>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-2">
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
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl border-4 border-secondary">
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
