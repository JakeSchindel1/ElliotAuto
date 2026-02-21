import Image from "next/image"
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-white/60 py-16 backdrop-blur-sm">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <p className="font-serif text-3xl font-bold tracking-tight text-foreground">
              Elliott Automotive
            </p>
            <p className="mt-1 text-[0.64rem] uppercase tracking-[0.24em] text-muted-foreground">
              Full Service Auto Care
            </p>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Dedicated to providing the best customer experience possible,
              from routine repair and maintenance to customer education and
              vehicle buying assistance.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Engine & Cylinder Service",
                "Transmission Repair",
                "Suspension & Brakes",
                "A/C & Cooling Systems",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1 text-[0.63rem] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Reviews", href: "#reviews" },
                { label: "Location", href: "#location" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                4101 Glenside Dr, Richmond, VA 23228
              </p>
              <a
                href="tel:+18042640855"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                (804) 264-0855
              </a>
              <a
                href="mailto:info@elliottauto.com"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                info@elliottauto.com
              </a>
              <a
                href="https://www.instagram.com/elliottautomotive"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
                @elliottautomotive
              </a>
              <a
                href="https://www.facebook.com/ElliottAutomotiveRVA"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-current text-[0.58rem] font-bold leading-none">
                  f
                </span>
                ElliottAutomotiveRVA
              </a>
              <p>Monday-Friday: 7:30 AM - 6:00 PM</p>
              <p>1st and Last Saturday: By Appointment Only</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between gap-4 border-t border-border/80 pt-6 text-xs text-muted-foreground">
          <p>Elliott Automotive. All rights reserved.</p>
          <Image
            src="/Keystone%20Digital.svg"
            alt="Keystone Digital"
            width={132}
            height={40}
            className="h-5 w-auto opacity-55"
          />
        </div>
      </div>
    </footer>
  )
}
