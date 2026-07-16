import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Globe,
  Star,
  Calendar,
  Phone,
  Clock,
  MapPin,
  Stethoscope,
  Award,
  BookOpen,
  Languages,
  CheckCircle2,
} from 'lucide-react'

// Brand icons removed from lucide-react v1.0 — using inline SVGs instead
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
)
import { specialists, site } from '@/lib/data'
import { Reveal } from '@/components/motion/reveal'
import { CtaButton } from '@/components/cta-button'
import { CtaBand } from '@/components/cta-band'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { SpecialistProfileTabs } from './specialist-profile-tabs'

export function generateStaticParams() {
  return specialists.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const specialist = specialists.find((s) => s.slug === slug)
  if (!specialist) return {}
  return {
    title: `${specialist.name} — ${specialist.title} | Rift View Specialist Centre`,
    description: specialist.bio,
    alternates: { canonical: `/specialists/${specialist.slug}` },
    openGraph: {
      type: 'profile',
      title: `${specialist.name} — ${specialist.title}`,
      description: specialist.bio,
      url: `https://www.riftviewspecialistcentre.co.ke/specialists/${specialist.slug}`,
      siteName: 'Rift View Specialist Centre',
      images: [
        {
          url: `https://www.riftviewspecialistcentre.co.ke${specialist.image}`,
          width: 800,
          height: 800,
          alt: specialist.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${specialist.name} — ${specialist.title}`,
      description: specialist.bio,
      images: [`https://www.riftviewspecialistcentre.co.ke${specialist.image}`],
    },
  }
}

export default async function SpecialistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const specialist = specialists.find((s) => s.slug === slug)
  if (!specialist) notFound()

  const related = specialists
    .filter(
      (s) =>
        s.slug !== specialist.slug && s.department === specialist.department
    )
    .slice(0, 3)
  const fallbackRelated = specialists
    .filter((s) => s.slug !== specialist.slug)
    .slice(0, 3)
  const relatedSpecialists = related.length ? related : fallbackRelated

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: specialist.name,
    image: `https://www.riftviewspecialistcentre.co.ke${specialist.image}`,
    description: specialist.bio,
    medicalSpecialty: specialist.specialties.map((s) => ({
      '@type': 'MedicalSpecialty',
      name: s,
    })),
    url: `https://www.riftviewspecialistcentre.co.ke/specialists/${specialist.slug}`,
    hospitalAffiliation: {
      '@type': 'Hospital',
      name: 'Rift View Specialist Centre',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/[0.06] via-secondary/10 to-accent/[0.06]">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 md:py-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/specialists"
              className="hover:text-primary transition-colors"
            >
              Specialists
            </Link>
            <span>/</span>
            <span className="text-foreground">{specialist.name}</span>
          </nav>

          <div className="grid items-center gap-10 md:gap-16 lg:gap-24 lg:grid-cols-[auto_1fr]">
            {/* Profile Image */}
            <Reveal>
              <div className="relative mx-auto lg:mx-0">
                {/* Outer ring */}
                <div className="relative h-64 w-64 sm:h-80 sm:w-80">
                  <div className="absolute inset-0 rounded-full bg-accent p-1">
                    <div className="h-full w-full rounded-full bg-background p-1">
                      <div className="relative h-full w-full overflow-hidden rounded-full">
                        <Image
                          src={specialist.image || '/placeholder.svg'}
                          alt={`Portrait of ${specialist.name}`}
                          fill
                          className="object-cover"
                          sizes="320px"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  {/* Experience badge floating */}
                  <div className="absolute -right-2 bottom-6 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold text-foreground">
                      {specialist.experience}
                    </span>
                  </div>
              
                </div>
              </div>
            </Reveal>

            {/* Info */}
            <Reveal delay={0.1}>
              <div className="text-center lg:text-left">
                <Badge
                  variant="secondary"
                  className="mb-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                >
                  {specialist.department}
                </Badge>
                <h1 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                  {specialist.name}
                </h1>
                <p className="mt-2 text-lg font-medium text-[--color-brand-sky]">
                  {specialist.title}
                </p>
                <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {specialist.bio}
                </p>

                {/* Quick stats */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <div className="flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm text-foreground">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>{specialist.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm text-foreground">
                    <Languages className="h-4 w-4 text-primary" />
                    <span>
                      {specialist.languages.length} language
                      {specialist.languages.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm text-foreground">
                    <Award className="h-4 w-4 text-primary" />
                    <span>
                      {specialist.specialties.length} specialties
                    </span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <CtaButton href="/appointments">
                    <Calendar className="h-4 w-4" />
                    Book Appointment
                  </CtaButton>
                  <CtaButton
                    href={`tel:${site.phone.replace(/\s/g, '')}`}
                    variant="outline"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </CtaButton>
                </div>

                {/* Social links */}
                {specialist.socials && specialist.socials.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Connect
                    </span>
                    {specialist.socials.map((social) => {
                      const iconMap: Record<string, React.ReactNode> = {
                        LinkedIn: <Globe className="h-4 w-4" />,
                        Twitter: <TwitterIcon className="h-4 w-4" />,
                        YouTube: <YoutubeIcon className="h-4 w-4" />,
                        Facebook: <FacebookIcon className="h-4 w-4" />,
                      }
                      const icon = iconMap[social.name] ?? <Globe className="h-4 w-4" />
                      return (
                        <a
                          key={social.name}
                          href={social.href.trim()}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={social.name}
                          className="group flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
                        >
                          <span className="text-primary transition-transform duration-200 group-hover:scale-110">
                            {icon}
                          </span>
                          {social.name}
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Tabs Section ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SpecialistProfileTabs specialist={specialist} />
        </div>
      </section>

      {/* ── Contact Card ── */}
      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-sm md:p-12">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Schedule a Consultation
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Book an appointment with {specialist.name} at RiftView
                  Specialist Centre. We are located at {site.address}.
                </p>

                <Separator className="my-8" />

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-secondary/10 p-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-xs text-muted-foreground">Phone</span>
                    <span className="text-sm font-semibold text-foreground">
                      {site.phone}
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-secondary/10 p-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      Naivasha, Kenya
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-secondary/10 p-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-xs text-muted-foreground">Hours</span>
                    <span className="text-sm font-semibold text-foreground">
                      Mon – Fri, 7:30–8 PM
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <CtaButton href="/appointments">Book Appointment</CtaButton>
                  <CtaButton href="/contact" variant="outline">
                    Contact Us
                  </CtaButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Related Specialists ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Other Specialists
            </h2>
            <Link
              href="/specialists"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSpecialists.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/specialists/${s.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative aspect-4/5 overflow-hidden bg-secondary">
                    <Image
                      src={s.image || '/placeholder.svg'}
                      alt={`Portrait of ${s.name}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                      {s.department}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-primary">
                      {s.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[--color-brand-sky]">
                      {s.title}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/specialists"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all specialists
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
