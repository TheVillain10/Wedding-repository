"use client"

import { motion } from "framer-motion"
import { ArchFrame } from "../arch-frame"
import { GoldButton } from "../gold-button"
import { GoldDivider } from "../gold-divider"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export function InvitationMessage({ onNext }: { onNext: () => void }) {
  return (
    <div className="mx-auto flex min-h-[100svh] w-full max-w-md flex-col justify-center px-5 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArchFrame>
          <motion.div variants={container} initial="hidden" animate="show" className="text-center">
            <motion.p
              variants={item}
              className="font-display text-[0.68rem] uppercase tracking-[0.4em] text-gold/80"
            >
              With the blessings of the Almighty
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 font-serif text-sm italic leading-relaxed text-cream/75"
            >
              Seeking the heavenly blessings of our beloved ancestors and the
              cherished elders of our family, whose grace lights our path
            </motion.p>

            <motion.div variants={item} className="my-5">
              <GoldDivider label="Invitation" />
            </motion.div>

            <motion.p variants={item} className="font-serif text-sm text-cream/70">
              Together with their families,
            </motion.p>
            <motion.h2
              variants={item}
              className="mt-1 font-script text-4xl leading-tight text-gold-gradient"
            >
              Mr. &amp; Mrs. Jain
            </motion.h2>
            <motion.p variants={item} className="mt-2 font-serif text-sm text-cream/70">
              warmly welcome you to share in their joy
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 font-serif text-[0.95rem] leading-relaxed text-cream/85"
            >
              It is with hearts full of love and gratitude that we invite you,
              our dear family and treasured friends — from near and from far —
              to grace the auspicious wedding celebrations of our beloved
              children. Your presence will be the truest blessing as two souls,
              and two families, are joined together in a bond of eternal love.
              We humbly request the honour of your company to make these sacred
              moments forever radiant.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 font-script text-2xl text-gold-gradient"
            >
              With love &amp; warm regards
            </motion.p>
            <motion.p variants={item} className="font-serif text-xs tracking-wide text-cream/60">
              The Jain Family
            </motion.p>

            <motion.div variants={item} className="mt-8 flex justify-center">
              <GoldButton onClick={onNext} icon={<ArrowIcon />}>
                Next&nbsp;&middot;&nbsp;Itinerary
              </GoldButton>
            </motion.div>
          </motion.div>
        </ArchFrame>
      </motion.div>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
