import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { CtaButton } from "./cta-button";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="bg-secondary/5 py-16 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:px-12 md:space-y-12">
     

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div className="">
            <h2 className="text-3xl font-bold leading-tight text-primary mb-8">
            Specialized Healthcare with Compassion, Commitment &
            Clinical Excellence.
          </h2>
             <Image
          className="rounded-lg shadow-md border-2 border-accent "
          src="/riftview-hospital.webp"
          alt="Rift View Specialist Centre Building"
          width={640}
          height={480}
          loading="lazy"
        />
          </div>

          <div className="space-y-6 text-md text-muted-foreground">

          <h1 className="text-2xl font-bold leading-tight text-accent mb-6">Who We Are?</h1>  
            < p className="text-muted-foreground text-md">
              At Rift View Specialist Centre, we are committed to providing
              comprehensive, patient-centered healthcare through a team of
              highly qualified specialists and advanced medical technology. Our
              multidisciplinary approach combines expertise, compassion, and
              innovation to ensure exceptional patient outcomes.
            </p>

            <p>
              From advanced diagnostics and specialist consultations to
              ophthalmology, orthopaedics, ENT, pediatrics, surgical services,
              women’s health, cancer care, diabetes management, and pharmacy
              services, we offer integrated healthcare solutions designed to
              support every stage of life.
            </p>

            <p>
              Guided by our mission to deliver compassionate and comprehensive
              healthcare, we continuously invest in modern medical practices,
              state-of-the-art equipment, and personalized treatment plans that
              prioritize the health, comfort, and well-being of every patient we
              serve.
            </p>

           <CtaButton href="/services" className="mt-4">Explore Our Services</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}