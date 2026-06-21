import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight, ArrowLeft } from 'lucide-react'
import { services } from '@/lib/services'
import { iconMap } from '@/lib/icons'
import { Reveal } from '@/components/motion/reveal'
import { CtaButton } from '@/components/cta-button'
import { CtaBand } from '@/components/cta-band'
import { ServiceCard } from '@/components/cards/service-card'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} in Naivasha | Rift View Specialist Centre`,
    description: service.excerpt,
    alternates: { canonical: `/services/${service.slug}` },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const Icon = iconMap[service.icon]
  const related = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 3)
  const fallbackRelated = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3)
  const relatedServices = related.length ? related : fallbackRelated

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {Icon ? <Icon className="h-7 w-7" /> : null}
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {service.category}
                </p>
                <h1 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CtaButton href="/appointments">Book Appointment</CtaButton>
                  <CtaButton href="/contact" variant="outline">
                    Contact Us
                  </CtaButton>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={`${service.title} at Rift View Specialist Centre`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>



    <section className="py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
      
      {/* Highlights */}
      <Reveal>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div className="mb-8">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Service Highlights
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              What We Offer
            </h2>

            <p className="mt-3 text-muted-foreground">
              Our {service.title.toLowerCase()} department provides
              comprehensive, patient-centered care supported by modern
              technology, experienced specialists, and evidence-based medical
              practices.
            </p>
          </div>

          <div className="grid gap-5">
            {service.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="group rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      {highlight.title}
                    </h3>

                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {highlight.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Conditions */}
      <Reveal delay={0.1}>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div className="mb-8">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Conditions Treated
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Conditions We Treat
            </h2>

            <p className="mt-3 text-muted-foreground">
              Our specialists diagnose, manage, and treat a wide range of
              conditions using personalized treatment plans tailored to each
              patient's needs.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {service.conditions.map((condition) => (
              <div
                key={condition}
                className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
              >
                {condition}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-secondary/50 p-5">
            <p className="leading-relaxed text-muted-foreground">
              Every patient receives a personalized treatment plan developed by
              our multidisciplinary healthcare team. We focus on accurate
              diagnosis, effective treatment, and long-term wellness outcomes.
            </p>
          </div>

          <div className="mt-6">
            <CtaButton href="/appointments" className="w-full">
              Book a Consultation
            </CtaButton>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Related Services
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all services
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
