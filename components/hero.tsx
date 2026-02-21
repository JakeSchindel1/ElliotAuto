import Image from "next/image"
import { Facebook, Gauge, Instagram, ShieldCheck, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-28">
      <Image
        src="/images/hero-garage.jpg"
        alt="Elliott Automotive service bay"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/87 to-background/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.65),transparent_48%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-4.5rem)] items-end pb-14 sm:pb-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow animate-rise">Welcome to Elliott Automotive</p>
            <h1 className="animate-rise animate-rise-delay-1 mt-6 max-w-3xl font-serif text-5xl font-bold leading-[0.95] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
              Full Service Auto Care
              <br />
              In Richmond, VA.
            </h1>
            <p className="animate-rise animate-rise-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-foreground/75">
              We are a full service auto care facility dedicated to providing the
              best customer experience possible. From routine repair and maintenance
              to customer education and vehicle buying assistance, we pride
              ourselves in ensuring you are happy and satisfied with your Elliott
              Automotive experience.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-foreground px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/90"
              >
                Schedule Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-foreground/20 bg-white/70 px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-white"
              >
                View Services
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <p className="text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Follow Us
              </p>
              <a
                href="https://www.instagram.com/elliottautomotive"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5 text-[0.63rem] font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-white"
              >
                <Instagram className="h-3.5 w-3.5" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/ElliottAutomotiveRVA"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5 text-[0.63rem] font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-white"
              >
                <Facebook className="h-3.5 w-3.5" />
                Facebook
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Routine Repair & Maintenance",
                "Customer Education",
                "Vehicle Buying Assistance",
                "New & Vintage Vehicles",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-white/75 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="surface-card animate-rise animate-rise-delay-2 p-6 backdrop-blur-sm sm:p-7 lg:p-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-2xl border border-border bg-white p-2.5 shadow-sm">
                <Image
                  src="/ase-certified-1.svg"
                  alt="ASE Certified badge"
                  width={68}
                  height={68}
                  className="h-16 w-16"
                />
              </div>
              <div>
                <p className="font-serif text-lg font-semibold tracking-tight text-foreground">
                  ASE Certified Service Team
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Professional Automotive Standards
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              New or vintage, we have you covered with dependable diagnostics,
              repairs, and maintenance focused on long-term vehicle health.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Certified Technicians",
                  text: "Trusted diagnostics and repairs performed to professional standards.",
                },
                {
                  icon: Gauge,
                  title: "Full Service Auto Care",
                  text: "From routine maintenance to major repairs, all in one facility.",
                },
                {
                  icon: Star,
                  title: "Customer-First Experience",
                  text: "Clear communication, education, and support through every visit.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-background/75 p-4"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
