import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/cards/service-card'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/motion/reveal'
import { services } from '@/lib/services'
import { section } from 'motion/react-client'

export const metadata: Metadata = {
  title: 'Medical Services in Naivasha | Rift View Specialist Centre',
  description:
    'Explore the full range of specialist medical services at Rift View Specialist Centre in Naivasha, Nakuru County — cardiology, maternity, surgery, diagnostics, pediatrics and more.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Comprehensive Specialist Care"
        subtitle="From everyday consultations to advanced specialist treatment, our multidisciplinary team delivers complete medical care under one roof in Naivasha."
        breadcrumb={[{ label: 'Services' }]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Medical Departments & Services"
            description="Each department is led by experienced specialists and supported by modern diagnostic technology."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.05}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
