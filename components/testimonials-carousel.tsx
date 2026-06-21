'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/data'

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    [],
  )
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [next])

  const t = testimonials[index]

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <div className="relative rounded-3xl border border-border bg-card p-8 shadow-lg sm:p-12">
        <Quote className="absolute right-8 top-8 size-12 text-[--color-brand-green]/20" />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-[--color-brand-green] text-[--color-brand-green]"
                />
              ))}
            </div>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-heading text-base font-bold text-primary">
                {t.name}
              </p>
              <p className="text-sm text-muted-foreground">{t.location}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-8 bg-[--color-brand-green]'
                  : 'w-2 bg-border'
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
