import Image from 'next/image'
import { SectionHeading } from './section-heading'

export default function CEOSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          eyebrow="What Defines RiftView Specialist Centre"
          title="A Message from Our Chairman"
          description="Leadership rooted in excellence, compassion, and a commitment to delivering exceptional specialist healthcare."
          align="center"
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[420px_1fr] lg:gap-20">
          {/* Chairman Image */}
          <div className="flex justify-center">
            <div className="relative aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-xl" />

              <div className="relative h-full w-full rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-2 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-secondary/30 bg-background">
                  <Image
                    src="/images/dr-daniel-somba-chairman.webp"
                    alt="Dr. Daniel Somba - Chairman, RiftView Specialist Centre"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Chairman Message */}
          <div>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
              <blockquote className="border-l-4 border-accent pl-6 md:pl-8">
                <p className="text-lg leading-8 text-muted-foreground">
                  "Dear Community Members and Patients,
                </p>

                <p className="mt-5 leading-8 text-muted-foreground">
                  Welcome to <strong>RiftView Specialist Centre</strong>. Our
                  mission is simple: to provide compassionate, high-quality,
                  patient-centred healthcare that places your wellbeing at the
                  heart of everything we do.
                </p>

                <p className="mt-5 leading-8 text-muted-foreground">
                  We have created a healing environment founded on trust,
                  clinical excellence, innovation, and empathy. Our dedicated
                  team of specialist doctors, nurses, and healthcare
                  professionals continually embraces modern medical technology
                  and evidence-based practices to ensure every patient receives
                  exceptional care.
                </p>

                <p className="mt-5 leading-8 text-muted-foreground">
                  Thank you for placing your trust in us. We look forward to
                  serving you and your family with professionalism, dignity, and
                  excellence for many years to come."
                </p>

                <footer className="mt-10">
                  <cite className="not-italic">
                    <span className="block text-2xl font-bold text-foreground">
                      Dr. Daniel Somba
                    </span>

                    <span className="mt-1 block text-lg font-semibold text-secondary">
                      Chairman
                    </span>

                    <span className="mt-2 block text-sm italic text-muted-foreground">
                      RiftView Specialist Centre • Naivasha, Kenya
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}