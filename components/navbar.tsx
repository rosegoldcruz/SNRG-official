"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const contactUrl = "/contact"

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07] bg-black/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-base font-semibold tracking-tight font-mono">SNRG Labs</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {[
            { label: "About",    href: "#about"    },
            { label: "Services", href: "#services" },
            { label: "Pricing",  href: "#pricing"  },
            { label: "Contact",  href: "#contact"  },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleSmoothScroll(e, href)}
              className="text-sm text-zinc-400 transition-colors hover:text-foreground cursor-pointer"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href="tel:+14803648205">Call Now</a>
          </Button>
          <Button size="sm" asChild>
            <Link href={contactUrl}>Start a Project</Link>
          </Button>
        </div>

        {/* Mobile: slim CTA only — nav is handled by bottom tab bar */}
        <div className="flex items-center gap-2 md:hidden">
          <Button size="sm" variant="outline" asChild className="h-8 px-3 text-xs rounded-lg">
            <a href="tel:+14803648205">Call Now</a>
          </Button>
          {/* Hamburger for Terms/Privacy overflow only */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="More"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile overflow drawer — Terms/Privacy only */}
      {isOpen && (
        <div className="border-t border-white/[0.07] bg-black/90 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            <Link
              href="/terms"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm text-zinc-400 hover:bg-white/5 hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm text-zinc-400 hover:bg-white/5 hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="/contact"
              className="mt-2 flex items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-black"
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
