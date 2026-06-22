"use client"

import { useEffect, useState } from "react"

type Petal = {
  left: number
  size: number
  duration: number
  delay: number
  drift: number
  spin: number
  opacity: number
  hue: number
}

type Dust = {
  left: number
  top: number
  size: number
  duration: number
  delay: number
}

function PetalShape({ hue }: { hue: number }) {
  // A soft, blossoming flower petal
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
      <defs>
        <radialGradient id={`pg-${hue}`} cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#fdeebf" />
          <stop offset="55%" stopColor="#f4d77a" />
          <stop offset="100%" stopColor="#c79a2a" />
        </radialGradient>
      </defs>
      <path
        d="M12 1C8 6 4 9 4 14a8 8 0 0 0 16 0c0-5-4-8-8-13Z"
        fill={`url(#pg-${hue})`}
        opacity="0.92"
      />
      <path
        d="M12 4c-2 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2-6-4-9Z"
        fill="#fff6d8"
        opacity="0.35"
      />
    </svg>
  )
}

export function PetalBackground() {
  const [petals, setPetals] = useState<Petal[]>([])
  const [dust, setDust] = useState<Dust[]>([])

  // Generate randomized values only on the client after mount to avoid
  // server/client hydration mismatches.
  useEffect(() => {
    setPetals(
      Array.from({ length: 26 }).map((_, i) => ({
        left: Math.random() * 100,
        size: 12 + Math.random() * 22,
        duration: 11 + Math.random() * 14,
        delay: -Math.random() * 20,
        drift: (Math.random() - 0.5) * 220,
        spin: (Math.random() > 0.5 ? 1 : -1) * (240 + Math.random() * 360),
        opacity: 0.45 + Math.random() * 0.5,
        hue: i % 6,
      })),
    )
    setDust(
      Array.from({ length: 40 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 5,
        duration: 2.5 + Math.random() * 4,
        delay: Math.random() * 5,
      })),
    )
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {/* Ambient gold dust */}
      {dust.map((d, i) => (
        <span
          key={`d-${i}`}
          className="dust"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}

      {/* Floating / blossoming petals */}
      {petals.map((p, i) => (
        <span
          key={`p-${i}`}
          className="petal"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--petal-drift": `${p.drift}px`,
              "--petal-spin": `${p.spin}deg`,
              "--petal-opacity": p.opacity,
            } as React.CSSProperties
          }
        >
          <PetalShape hue={p.hue} />
        </span>
      ))}
    </div>
  )
}
