import { SectionHeading } from '@/components/section-heading'
import { SpecialistCard } from '@/components/cards/specialist-card'
import { StaggerGroup } from '@/components/motion/reveal'
import { CtaButton } from '@/components/cta-button'
import { specialists } from '@/lib/data'

export function SpecialistsPreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="Experienced specialists who care"
          description="Our consultants bring deep expertise and genuine compassion to every patient they treat."
        />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialists.slice(0, 4).map((s) => (
            <SpecialistCard key={s.slug} specialist={s} />
          ))}
        </StaggerGroup>
        <div className="mt-12 flex justify-center">
          <CtaButton href="/specialists" variant="secondary" size="lg">
            Meet All Specialists
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
