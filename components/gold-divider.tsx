export function GoldDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-1">
      <span className="shimmer-divider h-px w-12 sm:w-20" />
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
          fill="#d4af37"
        />
      </svg>
      {label ? (
        <span className="font-display text-[0.7rem] uppercase tracking-[0.35em] text-gold">
          {label}
        </span>
      ) : null}
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
          fill="#d4af37"
        />
      </svg>
      <span className="shimmer-divider h-px w-12 sm:w-20" />
    </div>
  )
}
