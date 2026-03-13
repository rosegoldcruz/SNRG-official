"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const SERVICES = [
  { name: "GoHighLevel CRM Systems", href: "/services#crm-infrastructure" },
  { name: "Lead Pipelines & Automation", href: "/services#lead-capture-systems" },
  { name: "Call Tracking & SMS Response", href: "/services#revenue-infrastructure" },
  { name: "GBP Optimization", href: "/services#local-visibility" },
  { name: "Local SEO", href: "/services#local-visibility" },
]

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const defaultTextColor = "text-gray-300"
  const hoverTextColor = "text-white"
  const textSizeClass = "text-sm"

  return (
    <a href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}>
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </a>
  )
}

const ServicesDropdown = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([])

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const openDropdown = () => {
    clearCloseTimeout()
    setIsServicesOpen(true)
  }

  const closeDropdown = () => {
    clearCloseTimeout()
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 120)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        clearCloseTimeout()
        setIsServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      clearCloseTimeout()
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault()
      openDropdown()
      itemRefs.current[0]?.focus()
    }

    if (event.key === "Escape") {
      event.preventDefault()
      clearCloseTimeout()
      setIsServicesOpen(false)
    }
  }

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
        aria-label="Open services menu"
        aria-expanded={isServicesOpen}
        aria-haspopup="menu"
        onClick={() => {
          if (isServicesOpen) {
            clearCloseTimeout()
            setIsServicesOpen(false)
            return
          }

          openDropdown()
        }}
        onKeyDown={handleTriggerKeyDown}
      >
        <span>Services</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute left-0 top-full w-72 pt-3 z-50 transition-all duration-200 ${
          isServicesOpen
            ? "visible opacity-100 translate-y-0 pointer-events-auto"
            : "invisible opacity-0 translate-y-1 pointer-events-none"
        }`}
      >
        <div className="rounded-lg border border-white/10 bg-[#0a0a0a] p-2 shadow-2xl">
          {SERVICES.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              ref={(element) => {
                itemRefs.current[index] = element
              }}
              className="block rounded-md px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setIsServicesOpen(false)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  event.preventDefault()
                  clearCloseTimeout()
                  setIsServicesOpen(false)
                }
              }}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full")
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current)
    }

    if (isOpen) {
      setHeaderShapeClass("rounded-xl")
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full")
      }, 300)
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current)
      }
    }
  }, [isOpen])

  const logoElement = (
    <div className="relative h-12 w-12 flex items-center justify-center">
      <Image src="/snrg.svg" alt="SNRG Labs" width={44} height={44} className="h-11 w-11 object-contain" priority />
    </div>
  )

  const navLinksData = [
    { label: "How It Works", href: "/#revenue-engine" },
    { label: "Revenue Tracking", href: "/#services" },
  ]

  const loginButtonElement = (
    <a
      href="tel:+14803648205"
      className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full sm:w-auto text-center"
    >
      Call Now
    </a>
  )

  const signupButtonElement = (
    <div className="relative group w-full sm:w-auto">
      <div
        className="absolute inset-0 -m-2 rounded-full
                     hidden sm:block
                     bg-blue-400
                     opacity-40 filter blur-lg pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"
      ></div>
      <Link
        href="/contact"
        className="relative z-10 block px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-br from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 w-full sm:w-auto text-center"
      >
        Book System Review
      </Link>
    </div>
  )

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-20
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-sm
                       ${headerShapeClass}
                       border border-[#333] bg-[#1f1f1f57]
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-[border-radius] duration-0 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <div className="flex items-center">{logoElement}</div>

        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
          <ServicesDropdown />
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          {loginButtonElement}
          {signupButtonElement}
        </div>

        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12M6 12h12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      <div
        className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          <div className="w-full text-center text-gray-300">Services</div>
          {SERVICES.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="text-gray-300 hover:text-white transition-colors w-full text-center"
            >
              {service.name}
            </a>
          ))}
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors w-full text-center"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 mt-4 w-full">
          {loginButtonElement}
          {signupButtonElement}
        </div>
      </div>
    </header>
  )
}
