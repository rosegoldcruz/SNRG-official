"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Layers, Info, BadgeDollarSign, Phone } from "lucide-react"

const tabs = [
  { id: "home",     label: "Home",     icon: Home,             scroll: null,      href: null              },
  { id: "services", label: "Services", icon: Layers,           scroll: "services", href: null             },
  { id: "about",    label: "About",    icon: Info,             scroll: "about",   href: null              },
  { id: "pricing",  label: "Pricing",  icon: BadgeDollarSign,  scroll: "pricing", href: null             },
  { id: "call",     label: "Call Now", icon: Phone,            scroll: null,      href: "tel:+14803648205" },
] as const

export function MobileNav() {
  const [active, setActive] = useState<string>("home")

  useEffect(() => {
    const sections = ["services", "about", "pricing", "contact"]
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleTap = (tab: (typeof tabs)[number]) => {
    if (tab.href) {
      window.location.href = tab.href
      return
    }
    setActive(tab.id)
    if (tab.scroll) {
      document.getElementById(tab.scroll)?.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* Separator line */}
      <div className="h-px bg-white/[0.07]" />

      {/* Frosted glass bar */}
      <div className="bg-black/80 backdrop-blur-2xl px-2 pt-2 pb-3">
        <div className="grid grid-cols-5">
          {tabs.map((tab) => {
            const isActive = active === tab.id
            const isCall = tab.id === "call"

            return (
              <motion.button
                key={tab.id}
                onClick={() => handleTap(tab)}
                whileTap={{ scale: 0.82 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                className="flex flex-col items-center gap-[3px] py-1 px-1 relative"
                aria-label={tab.label}
              >
                {/* Active pill background */}
                <AnimatePresence>
                  {isActive && !isCall && (
                    <motion.div
                      key="active-bg"
                      layoutId="tab-pill"
                      className="absolute top-0 inset-x-2 h-8 rounded-xl bg-accent/[0.14]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>

                {/* Call button gets special treatment */}
                {isCall ? (
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-2xl bg-accent shadow-[0_0_14px_rgba(249,130,50,0.45)]">
                    <tab.icon className="h-4 w-4 text-black" strokeWidth={2.4} />
                  </div>
                ) : (
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center">
                    <motion.div
                      animate={{ scale: isActive ? 1.08 : 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <tab.icon
                        className={`h-[19px] w-[19px] transition-colors duration-200 ${
                          isActive ? "text-accent" : "text-zinc-500"
                        }`}
                        strokeWidth={isActive ? 2.2 : 1.7}
                      />
                    </motion.div>
                  </div>
                )}

                <span
                  className={`relative z-10 text-[9.5px] font-medium tracking-wide leading-none transition-colors duration-200 ${
                    isCall ? "text-accent" : isActive ? "text-accent" : "text-zinc-500"
                  }`}
                >
                  {tab.label}
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
