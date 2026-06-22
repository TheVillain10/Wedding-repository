"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function GaneshaMandala({ size = 240 }: { size?: number }) {
  const petals = Array.from({ length: 28 })
  const innerPetals = Array.from({ length: 28 })
  const outerRays = Array.from({ length: 48 })
  const dots = Array.from({ length: 24 })

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size }}
      role="img"
      aria-label="Golden mandala with Lord Ganesha"
    >
      {/* Glow halo */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(244,215,122,0.30) 0%, rgba(212,175,55,0.10) 45%, transparent 70%)",
          filter: "blur(4px)",
        }}
      />

      {/* Rotating outer mandala */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f9e9b0" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#a67c1a" />
          </linearGradient>
          {/* radial fill so each flower petal looks solid and dimensional */}
          <radialGradient id="petalFill" cx="50%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#fff3c4" />
            <stop offset="45%" stopColor="#e7c45c" />
            <stop offset="100%" stopColor="#b5862a" />
          </radialGradient>
          <radialGradient id="petalFillInner" cx="50%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#f9e6a8" />
            <stop offset="55%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#9b6f1f" />
          </radialGradient>
        </defs>

        {/* solid filled garland band behind the flowers */}
        <circle cx="100" cy="100" r="79" fill="none" stroke="url(#petalFill)" strokeWidth="26" opacity="0.32" />

        {/* fine outer rays */}
        {outerRays.map((_, i) => (
          <line
            key={`ray-${i}`}
            x1="100"
            y1="6"
            x2="100"
            y2="14"
            stroke="url(#goldStroke)"
            strokeWidth="1"
            transform={`rotate(${(360 / outerRays.length) * i} 100 100)`}
          />
        ))}

        <circle cx="100" cy="100" r="92" fill="none" stroke="url(#goldStroke)" strokeWidth="1.2" />
        <circle cx="100" cy="100" r="84" fill="none" stroke="url(#goldStroke)" strokeWidth="0.8" />

        {/* outer flower garland (filled, larger blossoms) */}
        {petals.map((_, i) => (
          <path
            key={`petal-${i}`}
            d="M100 16 C111 32 111 54 100 70 C89 54 89 32 100 16 Z"
            fill="url(#petalFill)"
            stroke="#8a6418"
            strokeWidth="0.6"
            transform={`rotate(${(360 / petals.length) * i} 100 100)`}
          />
        ))}

        {/* inner flower garland, offset to fill the gaps for a dense look */}
        {innerPetals.map((_, i) => (
          <path
            key={`petal-in-${i}`}
            d="M100 30 C108 44 108 60 100 72 C92 60 92 44 100 30 Z"
            fill="url(#petalFillInner)"
            stroke="#8a6418"
            strokeWidth="0.5"
            transform={`rotate(${(360 / innerPetals.length) * i + 360 / innerPetals.length / 2} 100 100)`}
          />
        ))}

        {/* small bead at each flower tip */}
        {petals.map((_, i) => (
          <circle
            key={`bead-${i}`}
            cx="100"
            cy="16"
            r="2.2"
            fill="#fff3c4"
            transform={`rotate(${(360 / petals.length) * i} 100 100)`}
          />
        ))}

        <circle cx="100" cy="100" r="58" fill="none" stroke="url(#goldStroke)" strokeWidth="2.4" />

        {/* dotted ring */}
        {dots.map((_, i) => {
          const angle = (Math.PI * 2 * i) / dots.length
          const cx = 100 + Math.cos(angle) * 50
          const cy = 100 + Math.sin(angle) * 50
          return <circle key={`dot-${i}`} cx={cx} cy={cy} r="1.6" fill="#f4d77a" />
        })}
      </motion.svg>

      {/* Counter-rotating inner ring for depth */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 48, ease: "linear", repeat: Infinity }}
      >
        <circle cx="100" cy="100" r="46" fill="none" stroke="url(#goldStroke)" strokeWidth="0.8" strokeDasharray="2 5" />
      </motion.svg>

      {/* Royal Ganesha emblem in the center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative overflow-hidden rounded-full border border-gold/30"
          style={{ width: "56%", height: "56%" }}
        >
          <Image
            src="/images/ganesha.png"
            alt="Lord Ganesha"
            fill
            sizes="200px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
