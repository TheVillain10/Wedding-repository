"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { PetalBackground } from "@/components/petal-background"
import { WelcomeScreen } from "@/components/pages/welcome-screen"
import { InvitationMessage } from "@/components/pages/invitation-message"
import { Itinerary } from "@/components/pages/itinerary"

type Page = "welcome" | "message" | "itinerary"

const pageTransition = {
  initial: { opacity: 0, scale: 1.04, filter: "blur(6px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
}

export default function Page() {
  const [page, setPage] = useState<Page>("welcome")

  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden">
      <PetalBackground />

      {/* Vignette for depth */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, transparent 55%, rgba(58,10,16,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {page === "welcome" && (
            <motion.div
              key="welcome"
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <WelcomeScreen onOpen={() => setPage("message")} />
            </motion.div>
          )}

          {page === "message" && (
            <motion.div
              key="message"
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <InvitationMessage onNext={() => setPage("itinerary")} />
            </motion.div>
          )}

          {page === "itinerary" && (
            <motion.div
              key="itinerary"
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Itinerary onBack={() => setPage("message")} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
