'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ServiceImage {
  src: string
  alt: string
}

interface ServiceImageCarouselProps {
  images: ServiceImage[]
  alt: string
}

export function ServiceImageCarousel({ images, alt }: ServiceImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  const count = images.length

  const next = useCallback(() => {
    setDirection(1)
    setIndex((i) => (i + 1) % count)
  }, [count])

  const prev = useCallback(() => {
    setDirection(-1)
    setIndex((i) => (i - 1 + count) % count)
  }, [count])

  useEffect(() => {
    if (count <= 1) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, count])

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-lg bg-secondary/30 flex items-center justify-center">
        <span className="text-muted-foreground text-sm">No image available</span>
      </div>
    )
  }

  const current = images[index]

  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-lg border-4 border-secondary">
      {/* Slides */}
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={{
            enter: (d: number) => ({ opacity: 0, x: d * 48, scale: 1.04 }),
            center: { opacity: 1, x: 0, scale: 1 },
            exit: (d: number) => ({ opacity: 0, x: d * -48, scale: 0.97 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={current.src || '/placeholder.svg'}
            alt={current.alt || alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* subtle bottom gradient so dots stay legible */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next – only when there are multiple images */}
      {count > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex size-9 items-center justify-center rounded-full bg-white/80 text-primary shadow-md backdrop-blur transition hover:bg-white hover:scale-105"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex size-9 items-center justify-center rounded-full bg-white/80 text-primary shadow-md backdrop-blur transition hover:bg-white hover:scale-105"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                aria-label={`Go to image ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-6 h-2 bg-white'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Counter badge */}
          <div className="absolute top-3 right-3 z-10 rounded-full bg-black/40 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur">
            {index + 1} / {count}
          </div>
        </>
      )}
    </div>
  )
}
