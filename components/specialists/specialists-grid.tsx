'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { specialists, specialistDepartments } from '@/lib/data'
import { SpecialistCard } from '@/components/cards/specialist-card'
import { cn } from '@/lib/utils'

export function SpecialistsGrid() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All'
      ? specialists
      : specialists.filter((s) => s.department === active)

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {specialistDepartments.map((dept) => (
          <button
            key={dept}
            type="button"
            onClick={() => setActive(dept)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              active === dept
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'
            )}
          >
            {dept}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((specialist) => (
            <motion.div
              key={specialist.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <SpecialistCard specialist={specialist} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No specialists found in this department.
        </p>
      )}
    </div>
  )
}
