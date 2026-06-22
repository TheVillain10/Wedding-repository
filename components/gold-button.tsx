"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function GoldButton({
  children,
  onClick,
  icon,
}: {
  children: ReactNode
  onClick?: () => void
  icon?: ReactNode
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="pulse-gold group relative inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-display text-sm uppercase tracking-[0.22em] text-royal-deep"
      style={{
        background: "linear-gradient(180deg,#fbeaa8 0%,#f0cf6e 40%,#d4af37 70%,#a67c1a 100%)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
      }}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{ border: "1px solid rgba(125,87,19,0.5)" }}
      />
      <span className="relative font-semibold">{children}</span>
      {icon ? <span className="relative">{icon}</span> : null}
    </motion.button>
  )
}
