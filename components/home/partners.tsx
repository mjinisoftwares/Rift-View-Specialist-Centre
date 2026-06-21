"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [

  {
    name: "SHA",
    logo: "/sha-logo.webp",
    url: "https://sha.go.ke",
  },
 {
    name: "SHA",
    logo: "/sha-logo.webp",
    url: "https://sha.go.ke",
  },
   {
    name: "SHA",
    logo: "/sha-logo.webp",
    url: "https://sha.go.ke",
  },
  {
    name: "SHA",
    logo: "/sha-logo.webp",
    url: "https://sha.go.ke",
  },
  {
    name: "SHA",
    logo: "/sha-logo.webp",
    url: "https://sha.go.ke",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-accent/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-secondary font-semibold uppercase tracking-wider">
            Trusted Partnerships
          </span>



          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary">
            Our <span className="text-accent">Healthcare</span> Partners
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            RiftView Specialist Center works with leading healthcare,
            insurance, laboratory, and medical organizations to provide
            exceptional patient care.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Fade Left */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />

          {/* Fade Right */}
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />

          <motion.div
            className="flex gap-10"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-55 items-center justify-center rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative h-16 w-40">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain "
                  />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}