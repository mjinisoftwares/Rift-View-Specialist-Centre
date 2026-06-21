'use client'

import { motion } from 'motion/react'
import { Phone, MessageCircle } from 'lucide-react'
import { site } from '@/lib/data'

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/${site.phone.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex size-12 items-center justify-center rounded-full bg-[--color-brand-green] text-white shadow-lg"
      >
        <MessageCircle className="size-6" />
      </motion.a>
      <motion.a
        href={`tel:${site.emergencyPhone.replace(/\s/g, '')}`}
        aria-label="Call emergency line"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 260 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-lg"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
        <Phone className="relative size-5" />
      </motion.a>
    </div>
  )
}
