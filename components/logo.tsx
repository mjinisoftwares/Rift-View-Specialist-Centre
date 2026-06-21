import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  light = false,
}: {
  className?: string
  light?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2.5', className)}
      aria-label="RiftView Specialist Centre home"
    >

      <Image src="/riftview-logo-final.webp" alt="Logo" width={200} height={60} /> 
    </Link>
  )
}
