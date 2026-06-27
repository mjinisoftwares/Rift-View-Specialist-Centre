'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'motion/react'
import { Eye, ZoomIn, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

export interface FacilityImage {
  src: string
  alt: string
}

// For backward compatibility if referenced elsewhere
export type FacilityItem = FacilityImage

const facilitiesImages: FacilityImage[] = [
  {
    src: '/images/rift-view-reception.webp',
    alt: 'Warm and welcoming reception and registration area at Rift View Specialist Center',
  },
  {
    src: '/images/waiting-bay.webp',
    alt: 'Spacious and comfortable patient waiting lounge with modern seating',
  },
  {
    src: '/images/consultation-room.webp',
    alt: 'Private and confidential specialist doctor consultation room',
  },
  {
    src: '/images/examination-room-with-medical-equipments.webp',
    alt: 'Modern patient examination room equipped with advanced diagnostics',
  },
  {
    src: '/images/riftview-mri-equipment.webp',
    alt: 'Advanced high-resolution MRI scanning suite',
  },

  {
    src: '/images/lab-rift-view-specialist-center.webp',
    alt: 'Accredited clinical laboratory with automated high-precision analyzers',
  },
  {
    src: '/images/pharmacy-rift-view-specialist-center.webp',
    alt: 'Fully stocked in-house pharmacy providing genuine medications',
  },
  {
    src: '/images/ENT-office-rift-view-specialist-center.webp',
    alt: 'Specialized Ear, Nose, and Throat (ENT) diagnostic suite',
  },
  {
    src: '/images/dental-staff-rift-view.webp',
    alt: 'Modern dental clinic suite with ergonomic treatment chairs',
  },
  {
    src: '/images/paeditrician-office-rift-view-specialist-center.webp',
    alt: 'Child-friendly pediatrician and child health clinic office',
  },
  {
    src: '/images/eye-glasses-rift-view-specialist-center.webp',
    alt: 'Optical center displaying a wide range of prescription glasses and frames',
  },
]

export function Facilities() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : facilitiesImages.length - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev !== null && prev < facilitiesImages.length - 1 ? prev + 1 : 0))
  }

  useEffect(() => {
    if (selectedIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'Escape') setSelectedIndex(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  const selectedImage = selectedIndex !== null ? facilitiesImages[selectedIndex] : null

  return (
    <section className="bg-background py-20 border-t border-muted/50">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="Our Facilities"
          title="Our Modern Medical Facilities"
          description="Explore high-quality, professional photographs of our modern diagnostic units, comfortable waiting spaces, private consultation rooms, and specialized clinics."
        />

        {/* Facilities Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilitiesImages.map((image, index) => (
            <Reveal
              key={index}
              delay={index * 0.05}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-muted/60 bg-muted/10 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md aspect-[4/3]"
            >
              <div 
                onClick={() => setSelectedIndex(index)}
                className="h-full w-full"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle visual overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
             
                  <div className="flex items-center gap-1 text-[11px] text-secondary font-semibold">
                    <ZoomIn className="size-3.5" />
                    <span>Click to expand</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Dialog */}
      <AnimatePresence>
        {selectedImage && (
          <MotionConfig transition={{ type: 'spring', stiffness: 350, damping: 30 }}>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 select-none">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedIndex(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Lightbox container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative z-10 flex flex-col items-center max-w-5xl w-full max-h-[85vh]"
              >
                {/* Image Wrap */}
                <div className="relative w-full overflow-hidden rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center max-h-[70vh]">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-h-[70vh] w-auto max-w-full object-contain pointer-events-none"
                  />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-black/55 text-white/80 hover:bg-black/85 hover:text-white transition-all duration-300 cursor-pointer"
                    aria-label="Close dialog"
                  >
                    <X className="size-5" />
                  </button>

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePrev()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-black/55 text-white/80 hover:bg-black/85 hover:text-white transition-all duration-300 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-6" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNext()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-black/55 text-white/80 hover:bg-black/85 hover:text-white transition-all duration-300 cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-6" />
                  </button>
                </div>

                {/* Caption / Alt Text */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 px-4 text-center max-w-3xl"
                >
                  <p className="text-xs text-white/50 leading-relaxed">
                    {selectedImage.alt}
                  </p>
                  <p className="text-xs text-white/50 mt-1 font-mono">
                    Image {selectedIndex !== null ? selectedIndex + 1 : 0} of {facilitiesImages.length}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </section>
  )
}

// Aliasing ImageGallery for compatibility
export { Facilities as ImageGallery }
export default Facilities