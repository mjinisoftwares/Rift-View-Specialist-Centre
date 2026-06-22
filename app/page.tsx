import { HeroCarousel } from '@/components/home/hero-carousel'
import { StatsSection } from '@/components/home/stats-section'
import { ServicesPreview } from '@/components/home/services-preview'
import { WhyChoose } from '@/components/home/why-choose'
import { SpecialistsPreview } from '@/components/home/specialists-preview'
import { SectionHeading } from '@/components/section-heading'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { CtaBand } from '@/components/cta-band'
import Partners from '@/components/home/partners'
import CEOSetion from '@/components/ceo'

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Partners />
      <CEOSetion />
      <ServicesPreview />
       <CtaBand />
      <WhyChoose />
      <SpecialistsPreview />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our patients say"
            description="Real stories from the families and individuals we are proud to serve across Nakuru County."
          />
          <TestimonialsCarousel />
        </div>
      </section>
      <CtaBand />
      
    </>
  )
}
