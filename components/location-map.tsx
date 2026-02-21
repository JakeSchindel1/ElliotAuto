import Image from "next/image"
import { Apple, Clock, ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react"

const address = "4101 Glenside Dr, Richmond, VA 23228"
const mapsQuery = "4101+Glenside+Dr+Richmond+VA+23228"
const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`
const appleDirectionsUrl = `https://maps.apple.com/?daddr=${mapsQuery}&dirflg=d`
const wazeDirectionsUrl = `https://www.waze.com/ul?q=${mapsQuery}&navigate=yes`
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

export function LocationMap() {
  return (
    <section id="location" className="bg-gradient-to-b from-secondary/50 to-transparent py-24 lg:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Visit Us</p>
            <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Elliott Automotive In Richmond
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
            Monday-Friday 7:30 to 6:00. 1st and Last Saturday by appointment
            only. Use the map below for directions.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div className="surface-card p-7 sm:p-8">
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Visit us</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{address}</p>
                </div>
              </div>

              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Hours</h3>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <p>Monday-Friday: 7:30 AM - 6:00 PM</p>
                    <p>1st and Last Saturday: By Appointment Only</p>
                  </div>
                </div>
              </div>

              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Call us</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Schedule an appointment:
                  </p>
                  <a
                    href="tel:+18042640855"
                    className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    (804) 264-0855
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Contact us</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    After hours you can reach out to us at:
                  </p>
                  <a
                    href="mailto:info@elliottauto.com"
                    className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    info@elliottauto.com
                  </a>
                </div>
              </div>
            </div>

            <div className="surface-card bg-gradient-to-br from-secondary to-white p-6">
              <p className="text-sm font-semibold text-foreground">
                Need to schedule now?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Call us during shop hours at (804) 264-0855 for the fastest
                appointment scheduling.
              </p>

              <a
                href="tel:+18042640855"
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-background px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Phone className="h-3.5 w-3.5" />
                Call (804) 264-0855
              </a>
            </div>
          </div>

          <div className="surface-card overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background/80 px-5 py-4">
              <div>
                <p className="font-serif text-xl font-bold text-foreground">Elliott Automotive</p>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Richmond, Virginia
                </p>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Open Full Map
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="relative h-[460px] md:h-[540px]">
              <iframe
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elliott Automotive location on Google Maps"
                className="h-full w-full"
              />
            </div>

            <div className="grid gap-3 border-t border-border bg-background/80 p-5 sm:grid-cols-3">
              <p className="text-center text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:col-span-3">
                Choose Your Maps App
              </p>
              <a
                href={googleDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1a73e8]/25 bg-[#1a73e8]/10 px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#1a73e8] transition-colors hover:bg-[#1a73e8]/15"
              >
                <Navigation className="h-3.5 w-3.5" />
                Google Maps
              </a>
              <a
                href={appleDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/90"
              >
                <Apple className="h-3.5 w-3.5" />
                Apple Maps
              </a>
              <a
                href={wazeDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#32CCFE] bg-[#32CCFE] px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#022531] transition-colors hover:bg-[#24b8e8]"
              >
                <Image
                  src="/waze-icon.svg"
                  alt="Waze"
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5"
                />
                Waze
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
