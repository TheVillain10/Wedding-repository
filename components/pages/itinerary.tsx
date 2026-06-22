"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArchFrame } from "../arch-frame"
import { GoldDivider } from "../gold-divider"

type EventDef = {
  name: string
  day: string
  date: string
  venue: string
  venueLine: string
  slots: { label: string; time: string }[]
}

const EVENTS: EventDef[] = [
  {
    name: "Shagun & Tilak",
    day: "Thursday",
    date: "12 February 2026",
    venue: "Jain Niwas",
    venueLine: "21 Heritage Lane, Jaipur",
    slots: [
      { label: "Tilak Ceremony", time: "11:00 AM" },
      { label: "Blessings & Lunch", time: "1:00 PM" },
    ],
  },
  {
    name: "Mehndi & Sangeet",
    day: "Friday",
    date: "13 February 2026",
    venue: "The Grand Ballroom",
    venueLine: "Rambagh Resort, Jaipur",
    slots: [
      { label: "Mehndi", time: "4:00 PM" },
      { label: "Sangeet Night", time: "7:00 PM" },
      { label: "Dinner", time: "9:00 PM" },
    ],
  },
  {
    name: "Wedding Ceremony",
    day: "Saturday",
    date: "14 February 2026",
    venue: "Royal Palace Gardens",
    venueLine: "Amber Fort Road, Jaipur",
    slots: [
      { label: "Sehrabandi", time: "5:00 PM" },
      { label: "Ghudchadi", time: "6:00 PM" },
      { label: "Baraat", time: "7:00 PM" },
      { label: "Dinner", time: "8:00 PM" },
      { label: "Pheras", time: "9:30 PM" },
    ],
  },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function Itinerary({ onBack }: { onBack: () => void }) {
  return (
    <div className="mx-auto flex min-h-[100svh] w-full max-w-md flex-col justify-start px-5 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArchFrame>
          <div className="text-center">
            <p className="font-display text-[0.68rem] uppercase tracking-[0.4em] text-gold/80">
              Save the Dates
            </p>
            <h2 className="mt-2 font-script text-4xl leading-tight text-gold-gradient">
              Wedding Itinerary
            </h2>
            <p className="mt-2 font-serif text-xs leading-relaxed text-cream/65">
              For our loved ones travelling from afar &mdash; plan your journey
              with ease
            </p>
            <div className="mt-4">
              <GoldDivider />
            </div>
          </div>

          <motion.div
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            animate="show"
            className="mt-6 flex flex-col gap-5"
          >
            {EVENTS.map((ev) => (
              <motion.article
                key={ev.name}
                variants={item}
                className="gold-border rounded-2xl bg-royal-deep/50 p-4 text-left"
              >
                <header className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg uppercase tracking-[0.12em] text-gold-gradient">
                      {ev.name}
                    </h3>
                    <p className="mt-0.5 font-serif text-xs tracking-wide text-cream/65">
                      {ev.day} &middot; {ev.date}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 rounded-full border border-gold/40 px-2.5 py-0.5 font-display text-[0.6rem] uppercase tracking-[0.2em] text-gold">
                    {ev.day.slice(0, 3)}
                  </span>
                </header>

                {/* Time slots */}
                <ul className="mt-3 divide-y divide-gold/15">
                  {ev.slots.map((s) => (
                    <li
                      key={s.label}
                      className="flex items-center justify-between py-1.5"
                    >
                      <span className="flex items-center gap-2 font-serif text-sm text-cream/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {s.label}
                      </span>
                      <span className="font-display text-sm tracking-wide text-gold-bright">
                        {s.time}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Venue card */}
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-gold/25 bg-royal/40 px-3 py-2">
                  <PinIcon />
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.15em] text-gold">
                      {ev.venue}
                    </p>
                    <p className="font-serif text-[0.72rem] text-cream/60">
                      {ev.venueLine}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Couple illustration placeholder */}
          <div className="mt-8">
            <GoldDivider label="With Love" />
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="mx-auto mt-4 flex max-w-[280px] flex-col items-center"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-gold/30 bg-royal-deep/40">
                <Image
                  src="/images/royal-couple.png"
                  alt="Illustration of the royal wedding couple in traditional Indian attire"
                  fill
                  sizes="280px"
                  className="object-contain"
                  priority
                />
              </div>
              <p className="mt-3 text-center font-script text-3xl text-gold-gradient">
                See you there!
              </p>
            </motion.div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-2.5 font-display text-xs uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold/10"
            >
              <BackIcon /> Back to Invite
            </button>
          </div>
        </ArchFrame>
      </motion.div>
    </div>
  )
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
        stroke="#d4af37"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="10" r="2.4" stroke="#f4d77a" strokeWidth="1.4" />
    </svg>
  )
}

function BackIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 12H5M11 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
