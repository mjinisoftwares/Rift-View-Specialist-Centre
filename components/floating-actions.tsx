'use client'

import { motion } from 'motion/react'
import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'

import { site } from '@/lib/data'

const whatsappNumber = site.phone.replace(/\D/g, '')
const emergencyNumber = site.emergencyPhone.replace(/\D/g, '')

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.3,
          type: 'spring',
          stiffness: 300,
          damping: 18,
        }}
        whileHover={{
          scale: 1.1,
          y: -2,
        }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-shadow hover:shadow-2xl"
      >
        <FaWhatsapp className="h-7 w-7" />
      </motion.a>

      {/* Emergency Call */}
      <motion.a
        href={`tel:${emergencyNumber}`}
        aria-label="Call our emergency line"
        title="Emergency Call"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.45,
          type: 'spring',
          stiffness: 300,
          damping: 18,
        }}
        whileHover={{
          scale: 1.1,
          y: -2,
        }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-shadow hover:shadow-2xl"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/30 animate-ping" />
        <Phone className="relative z-10 h-6 w-6" />
      </motion.a>
    </div>
  )
}