"use client"

export function MarqueeLights({ count = 14 }: { count?: number }) {
  return (
    <div className="flex items-center justify-between px-3" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="bulb"
          style={{ animationDelay: `${(i % 5) * 0.22}s` }}
        />
      ))}
    </div>
  )
}
