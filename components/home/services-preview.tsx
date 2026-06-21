import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/cards/service-card'
import { StaggerGroup } from '@/components/motion/reveal'
import { CtaButton } from '@/components/cta-button'
import { services } from '@/lib/services'

export function ServicesPreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          eyebrow="Our Services"
          title="Specialist care across every department"
          description="From diagnostics to surgery, our specialists deliver comprehensive care under one roof in Naivasha."
        />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </StaggerGroup>
        <div className="mt-12 flex justify-center">
          <CtaButton href="/services" variant="primary" size="lg">
            View All Services
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
