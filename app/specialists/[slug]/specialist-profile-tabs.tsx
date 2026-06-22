'use client'

import {
  GraduationCap,
  Star,
  Briefcase,
  Globe,
  BookOpen,
  Languages,
  CheckCircle2,
  Award,
  Stethoscope,
  Heart,
  Users,
} from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Reveal } from '@/components/motion/reveal'
import type { Specialist } from '@/lib/data'
import { motion } from 'motion/react'

export function SpecialistProfileTabs({
  specialist,
}: {
  specialist: Specialist
}) {
  return (
    <Tabs defaultValue={0}>
      <TabsList
        variant="line"
        className="mx-auto mb-10 flex w-full max-w-2xl justify-center gap-0 border-b border-border"
      >
        <TabsTrigger
          value={0}
          className="flex items-center gap-2 px-5 py-3 text-sm font-semibold sm:text-base"
        >
          <Briefcase className="h-4 w-4" />
          Overview
        </TabsTrigger>
        <TabsTrigger
          value={1}
          className="flex items-center gap-2 px-5 py-3 text-sm font-semibold sm:text-base"
        >
          <GraduationCap className="h-4 w-4" />
          Education
        </TabsTrigger>
        <TabsTrigger
          value={2}
          className="flex items-center gap-2 px-5 py-3 text-sm font-semibold sm:text-base"
        >
          <Star className="h-4 w-4" />
          Specialties
        </TabsTrigger>
        <TabsTrigger
          value={3}
          className="flex items-center gap-2 px-5 py-3 text-sm font-semibold sm:text-base"
        >
          <Globe className="h-4 w-4" />
          Languages
        </TabsTrigger>
      </TabsList>

      {/* ── Overview Tab ── */}
      <TabsContent value={0}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid gap-8 lg:grid-cols-2">
            {/* About Card */}
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    About {specialist.name.split(' ').pop()}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {specialist.title}
                  </p>
                </div>
              </div>

              <p className="leading-relaxed text-muted-foreground">
                {specialist.bio}
              </p>

              <Separator className="my-6" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl bg-secondary/10 p-4">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Experience</p>
                    <p className="font-semibold text-foreground">
                      {specialist.experience}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-secondary/10 p-4">
                  <Stethoscope className="h-5 w-5 text-[--color-brand-sky]" />
                  <div>
                    <p className="text-xs text-muted-foreground">Department</p>
                    <p className="font-semibold text-foreground">
                      {specialist.department}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-secondary/10 p-4">
                  <Languages className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Languages</p>
                    <p className="font-semibold text-foreground">
                      {specialist.languages.join(', ')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-secondary/10 p-4">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Specialties</p>
                    <p className="font-semibold text-foreground">
                      {specialist.specialties.length} areas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise at a Glance */}
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Areas of Expertise
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Core clinical specialties
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {specialist.specialties.map((specialty, i) => (
                  <div
                    key={specialty}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {specialty}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Expert-level care and treatment
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="rounded-2xl bg-primary/5 p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {specialist.name}
                  </span>{' '}
                  brings {specialist.experience} of dedicated clinical
                  experience to every patient interaction, ensuring
                  compassionate and evidence-based care.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </TabsContent>

      {/* ── Education Tab ── */}
      <TabsContent value={1}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Education &amp; Training
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Academic background and qualifications
                  </p>
                </div>
              </div>

              <div className="relative space-y-0">
                {/* Timeline line */}
                <div className="absolute left-6 top-3 bottom-3 w-px bg-border" />

                {specialist.education.map((edu, i) => (
                  <div key={edu} className="relative flex gap-5 pb-8 last:pb-0">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-card">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>

                    <div className="flex-1 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-md">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {edu}
                          </h4>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {i === 0
                              ? 'Primary Medical Degree'
                              : i === 1
                                ? 'Specialist Training'
                                : 'Advanced Fellowship/Certification'}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="shrink-0 rounded-full text-xs"
                        >
                          {i === 0 ? 'Degree' : i === 1 ? 'Masters' : 'Fellowship'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-8" />

              <div className="rounded-2xl bg-accent/5 p-5">
                <div className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    All our specialists maintain their credentials through
                    continuous professional development and are registered with
                    the Kenya Medical Practitioners and Dentists Council.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </TabsContent>

      {/* ── Specialties Tab ── */}
      <TabsContent value={2}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[--color-brand-sky]/10">
                  <Star className="h-6 w-6 text-[--color-brand-sky]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Clinical Specialties
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Key areas of medical expertise
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-1">
                {specialist.specialties.map((specialty, i) => (
                  <div
                    key={specialty}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-[--color-brand-sky]/30 hover:shadow-lg"
                  >
                    {/* Decorative gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[--color-brand-sky]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-[--color-brand-sky]/10 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-[--color-brand-sky] group-hover:text-white">
                        <span className="text-lg font-bold">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
                          {specialty}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Comprehensive diagnosis, management and treatment
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-8" />

              <div className="rounded-2xl bg-primary/5 p-6">
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Patient-Centred Approach
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {specialist.name} works as part of our multidisciplinary
                      team to provide holistic, personalised treatment plans for
                      every patient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </TabsContent>

      {/* ── Languages Tab ── */}
      <TabsContent value={3}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Languages Spoken
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Communicating with care in your language
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-1">
                {specialist.languages.map((lang, i) => (
                  <div
                    key={lang}
                    className="group flex items-center gap-5 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/10 to-[--color-brand-green]/20 text-accent transition-all duration-300 group-hover:from-accent group-hover:to-[--color-brand-green] group-hover:text-white">
                      <Languages className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">
                        {lang}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {i === 0
                          ? 'Professional proficiency'
                          : i === 1
                            ? 'Native / bilingual proficiency'
                            : 'Conversational proficiency'}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="rounded-full text-xs capitalize"
                    >
                      {i === 0
                        ? 'Fluent'
                        : i === 1
                          ? 'Native'
                          : 'Conversational'}
                    </Badge>
                  </div>
                ))}
              </div>

              <Separator className="my-8" />

              <div className="rounded-2xl bg-accent/5 p-5">
                <div className="flex items-start gap-3">
                  <Heart className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    At RiftView Specialist Centre, we believe clear
                    communication is central to excellent care. Our specialists
                    speak multiple languages to ensure every patient feels
                    understood and at ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </TabsContent>
    </Tabs>
  )
}
