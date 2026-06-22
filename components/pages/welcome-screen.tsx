"use client"

import { motion } from "framer-motion"
import { GaneshaMandala } from "../ganesha-mandala"
import { GoldButton } from "../gold-button"
import { GoldDivider } from "../gold-divider"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function WelcomeScreen({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto flex min-h-[100svh] w-full max-w-md flex-col items-center justify-center px-6 py-12 text-center"
    >
      <motion.p
        variants={item}
        className="mb-6 font-display text-[0.7rem] uppercase tracking-[0.42em] text-gold/80"
      >
        Shubh Vivah
      </motion.p>

      <motion.div variants={item}>
        <GaneshaMandala size={252} />
      </motion.div>

      <motion.p
        variants={item}
        className="mt-5 font-display text-xs uppercase tracking-[0.3em] text-gold/70"
      >
        Vakratunda Mahakaya
      </motion.p>

      <motion.div variants={item} className="mt-6 w-full">
        <GoldDivider />
      </motion.div>

      <motion.div variants={item} className="mt-4">
        <p className="font-serif text-base leading-relaxed text-cream/85">
          Mr. &amp; Mrs. Jain
        </p>
        <p className="mt-2 font-serif text-sm leading-relaxed text-cream/70">
          cordially invite you to the celebration of the
        </p>
        <h1 className="mt-3 font-script text-5xl leading-tight text-gold-gradient sm:text-6xl">
          Royal Wedding
        </h1>
      </motion.div>

      <motion.div variants={item} className="mt-10">
        <GoldButton onClick={onOpen} icon={<OpenIcon />}>
          Open Invite
        </GoldButton>
      </motion.div>

      <motion.p
        variants={item}
        className="mt-5 font-serif text-[0.7rem] italic tracking-wide text-cream/45"
      >
        Tap to unseal the invitation
      </motion.p>
    </motion.div>
  )
}

function OpenIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 19V8l7-4 7 4v11M5 19h14M5 19l7-5 7 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
