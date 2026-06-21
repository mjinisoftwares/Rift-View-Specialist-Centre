import {
  Heart,
  ShieldCheck,
  Star,
  Users,
  Lightbulb,
  Handshake,
  Target,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AboutProps {
  className?: string;
}

const coreValues = [
  {
    title: "Care",
    description:
      "We prioritize the holistic needs of every patient, ensuring personalized and attentive support throughout their journey.",
    icon: Heart,
  },
  {
    title: "Compassion",
    description: "We treat every patient with empathy, respect, and dignity.",
    icon: Handshake,
  },
  {
    title: "Commitment",
    description:
      "We dedicate ourselves to upholding the highest standards in clinical care, safety, and service.",
    icon: ShieldCheck,
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and ethical responsibility.",
    icon: Star,
  },
  {
    title: "Innovation",
    description:
      "We embrace new technologies and practices to improve patient care and outcomes.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description:
      "We work together as a team and with our patients to achieve optimal health.",
    icon: Users,
  },
];

const About3 = ({ className }: AboutProps) => {
  return (
    <section className={cn("py-20 ", className)}>
      <div className="container px-6 md:px-12 mx-auto">
        {/* Commitment to Excellence Header */}
        <div className="mb-16 flex flex-col gap-6 lg:w-3/4 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl text-primary">
            Our <span className="text-accent">Commitment</span> to Excellence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Rift View Specialist Centre is dedicated to transforming lives through
            a multidisciplinary approach that integrates medical expertise, patient
            education, and compassionate care. By combining cutting-edge treatments
            with personalized support, we strive to deliver exceptional outcomes,
            management and overall health.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid gap-8 md:grid-cols-2 mb-24">
          <div className="group flex flex-col gap-4 rounded-2xl bg-primary/5 p-8 md:p-12 border border-primary/10 hover:shadow-lg transition-all duration-300">
            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To deliver compassionate, comprehensive, and patient-centered
              healthcare with a commitment to clinical excellence, innovation,
              and community health.
            </p>
          </div>

          <div className="group flex flex-col gap-4 rounded-2xl bg-primary/5 p-8 md:p-12 border border-primary/10 hover:shadow-lg transition-all duration-300">
            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the trusted leader in healthcare, recognized for our innovative
              treatments, outstanding patient outcomes, and unwavering dedication
              to the well-being of our community.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="relative rounded-3xl bg-muted/50 p-8 md:p-16 border overflow-hidden">
          {/* Background decorative blob */}
          <div className="absolute top-0 right-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>

          <div className="relative z-10 flex flex-col gap-4 text-center mb-16">
            <h2 className="text-3xl font-bold md:text-5xl tracking-tight">
              Our Core Values
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              The principles that guide our everyday actions and shape the future
              of our healthcare delivery.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  className="group flex flex-col gap-4 rounded-xl bg-background p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border hover:border-primary/30"
                  key={idx}
                >
                  <div className="h-14 w-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { About3 };
export default About3;
