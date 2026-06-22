"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function GaneshaMandala({ size = 240 }: { size?: number }) {
  const petals = Array.from({ length: 24 })
  const outerRays = Array.from({ length: 48 })
  const dots = Array.from({ length: 16 })

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
        </defs>

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

        {/* lotus petals ring */}
        {petals.map((_, i) => (
          <path
            key={`petal-${i}`}
            d="M100 18 C108 34 108 50 100 64 C92 50 92 34 100 18 Z"
            fill="none"
            stroke="url(#goldStroke)"
            strokeWidth="1"
            transform={`rotate(${(360 / petals.length) * i} 100 100)`}
          />
        ))}

        <circle cx="100" cy="100" r="58" fill="none" stroke="url(#goldStroke)" strokeWidth="1.2" />

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
