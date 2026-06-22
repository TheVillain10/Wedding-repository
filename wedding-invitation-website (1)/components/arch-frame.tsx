"use client"

import type { ReactNode } from "react"
import { MarqueeLights } from "./marquee-lights"

export function ArchFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full">
      {/* Glowing marquee lights along the arch */}
      <div className="absolute -top-1 left-0 right-0 z-20">
        <MarqueeLights count={18} />
      </div>

      <div
        className="relative overflow-hidden px-6 pb-8 pt-12 sm:px-10 sm:pt-14"
        style={{
          borderTopLeftRadius: "48% 90px",
          borderTopRightRadius: "48% 90px",
          borderBottomLeftRadius: "1.25rem",
          borderBottomRightRadius: "1.25rem",
          background:
            "linear-gradient(180deg, rgba(28,63,150,0.55) 0%, rgba(7,16,58,0.85) 100%)",
          border: "1.5px solid rgba(212,175,55,0.6)",
          boxShadow:
            "0 0 0 1px rgba(212,175,55,0.18), inset 0 0 50px rgba(212,175,55,0.10), 0 20px 60px rgba(0,0,0,0.45)",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Inner thin arch outline */}
        <div
          className="pointer-events-none absolute inset-3 sm:inset-4"
          style={{
            borderTopLeftRadius: "46% 80px",
            borderTopRightRadius: "46% 80px",
            borderRadius: "0.9rem",
            borderTopLeftRadius: "46% 78px",
            border: "1px solid rgba(212,175,55,0.35)",
          }}
        />
        {/* Corner flourishes */}
        <CornerFlourish className="left-2 top-2" />
        <CornerFlourish className="right-2 top-2 -scale-x-100" />
        <CornerFlourish className="bottom-2 left-2 -scale-y-100" />
        <CornerFlourish className="bottom-2 right-2 -scale-100" />

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}

function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width="34"
      height="34"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 2 C2 16 8 28 24 30 M2 2 C16 2 28 8 30 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="2" cy="2" r="2" fill="#f4d77a" />
    </svg>
  )
}
