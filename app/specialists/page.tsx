import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { SpecialistsGrid } from '@/components/specialists/specialists-grid'

export const metadata: Metadata = {
  title: 'Our Specialists & Doctors in Naivasha | Rift View Specialist Centre',
  description:
    'Meet the experienced consultant doctors and specialists at Rift View Specialist Centre in Naivasha, Nakuru County. Filter by department to find the right specialist for your care.',
  alternates: { canonical: '/specialists' },
}

export default function SpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Specialists"
        title="Meet Our Expert Doctors"
        subtitle="Our consultants bring years of experience and a genuine commitment to compassionate, patient-centred care across every department."
        breadcrumb={[{ label: 'Specialists' }]}
        imageSrc='/images/dr-daniel-somba-chairman.webp'
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SpecialistsGrid />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
