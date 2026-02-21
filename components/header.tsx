"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, Phone, X } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#location" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-b from-foreground/55 via-foreground/24 to-transparent"
            : "bg-gradient-to-b from-foreground/40 via-foreground/14 to-transparent"
        }`}
      />

      <div className="section-shell relative">
        <div
          className={`mt-4 flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 lg:px-6 ${
            scrolled
              ? "border border-white/12 bg-foreground/92 shadow-[0_22px_42px_-34px_rgba(0,0,0,0.85)] backdrop-blur-xl"
              : "border border-white/8 bg-foreground/82 shadow-[0_18px_36px_-32px_rgba(0,0,0,0.75)] backdrop-blur-lg"
          }`}
        >
          <a href="#" className="flex items-center">
            <Image
              src="/ElliotAuto.svg"
              alt="Elliott Automotive"
              width={200}
              height={48}
              className="h-10 w-auto sm:h-11"
              priority
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+18042640855"
            className="hidden items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90 lg:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            Call Shop
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="section-shell relative pb-4 lg:hidden">
          <div className="mt-3 rounded-2xl border border-white/10 bg-foreground/95 p-4 shadow-[0_24px_42px_-34px_rgba(0,0,0,0.75)] backdrop-blur-xl">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="tel:+18042640855"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-3.5 w-3.5" />
              (804) 264-0855
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
