import {
  HeartPulse,
  Baby,
  Stethoscope,
  Scissors,
  ScanLine,
  FlaskConical,
  Bone,
  Smile,
  Eye,
  Ear,
  Sparkles,
  Activity,
  Apple,
  Brain,
  Ambulance,
  Wind,
  Droplet,
  Flame,
  Users,
  Microscope,
  Syringe,
  Ribbon,
  Pill,
  Plane,
  Accessibility,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import React, { type SVGProps } from 'react'

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
  </svg>
)

const Twitter = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2h3.3l-7.2 8.26L23.7 22h-6.6l-5.18-6.77L5.99 22H2.69l7.7-8.84L2.3 2h6.77l4.68 6.19L18.9 2zm-1.16 18h1.83L7.34 3.9H5.38L17.74 20z" />
  </svg>
)

const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.07.05-1.8.22-2.43.47a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.53 5.4c-.25.63-.42 1.36-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.07.22 1.8.47 2.43a4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15c.63.25 1.36.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.07-.05 1.8-.22 2.43-.47a5.1 5.1 0 0 0 2.92-2.92c.25-.63.42-1.36.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.07-.22-1.8-.47-2.43a4.9 4.9 0 0 0-1.15-1.77 4.9 4.9 0 0 0-1.77-1.15c-.63-.25-1.36-.42-2.43-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.31.88.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.31-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.35a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.31-.88-.35-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.98.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.31 1.86-.35C9.01 3.81 9.33 3.8 12 3.8zm0 3.06A5.14 5.14 0 1 0 12 17.14 5.14 5.14 0 0 0 12 6.86zm0 8.47A3.33 3.33 0 1 1 12 8.67a3.33 3.33 0 0 1 0 6.66zm6.54-8.67a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
  </svg>
)

const Youtube = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5C0 8.38 0 12 0 12s0 3.62.5 5.5a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14c.5-1.88.5-5.5.5-5.5s0-3.62-.5-5.5zM9.6 15.57V8.43L15.82 12 9.6 15.57z" />
  </svg>
)

export const iconMap: Record<string, LucideIcon> = {
  HeartPulse,
  Baby,
  Stethoscope,
  Scissors,
  ScanLine,
  FlaskConical,
  Bone,
  Smile,
  Eye,
  Ear,
  Sparkles,
  Activity,
  Apple,
  Brain,
  Ambulance,
  Wind,
  Droplet,
  Flame,
  Users,
  Microscope,
  Syringe,
  Ribbon,
  Pill,
  Plane,
  Accessibility,
  ShieldCheck,
}

const socialMap: Record<string, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> =
  {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
  }

export function Icon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Social = socialMap[name]
  if (Social) return <Social className={className} aria-hidden="true" />
  const Cmp = iconMap[name] ?? Sparkles
  return <Cmp className={className} aria-hidden="true" />
}
