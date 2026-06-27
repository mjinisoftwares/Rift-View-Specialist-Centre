import { Reveal } from '@/components/motion/reveal'
import { CtaButton } from '@/components/cta-button'
import { Phone } from 'lucide-react'
import { site } from '@/lib/data'

export function CtaBand() {
  return (
    <section className="bg-primary ">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 border-b-2 border-accent/30">
        <div className="flex flex-col items-start gap-8 text-left lg:flex-row lg:items-center lg:justify-between">
          <Reveal direction="right" className="max-w-2xl">
            <h2 className="text-balance font-heading text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Ready to prioritise your health?
            </h2>
            <p className="mt-3 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Book an appointment with our specialists today, or call our 24-hour
              line for urgent care.
            </p>
          </Reveal>
          <Reveal direction="left" className="flex flex-wrap items-center justify-start gap-4">
            <CtaButton href="/appointments" size="md" variant="accent">
              Book Appointment
            </CtaButton>
            <CtaButton
              href={`tel:${site.emergencyPhone.replace(/\s/g, '')}`}
              size="md"
              variant="secondary"
            >
              <Phone className="size-4" />
              Call Now
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
