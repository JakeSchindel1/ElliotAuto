"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Battery,
  Cog,
  Disc3,
  Droplets,
  Fuel,
  Gauge,
  Monitor,
  Shield,
  Sparkles,
  Thermometer,
  Wrench,
  Wind,
} from "lucide-react"

const services = [
  {
    icon: Gauge,
    title: "Engine and Cylinders",
    description: "Comprehensive diagnostics and repair for internal engine components.",
  },
  {
    icon: Cog,
    title: "Transmission Repairs/Replacements",
    description: "Automatic and manual transmission service and replacement options.",
  },
  {
    icon: Disc3,
    title: "Suspension",
    description: "Ride quality and handling repairs for shocks, struts, and steering parts.",
  },
  {
    icon: Wrench,
    title: "Camshaft",
    description: "Inspection and replacement for worn or failing camshaft systems.",
  },
  {
    icon: Shield,
    title: "Head Gasket",
    description: "Leak testing and head gasket repairs done with precision.",
  },
  {
    icon: Wind,
    title: "Air Conditioner Compressor",
    description: "Compressor troubleshooting and replacement for reliable cabin cooling.",
  },
  {
    icon: Droplets,
    title: "Oil Leaks",
    description: "Source identification and durable sealing repairs for oil leak issues.",
  },
  {
    icon: Wrench,
    title: "Brake Repairs",
    description: "Pads, rotors, calipers, and complete brake system service.",
  },
  {
    icon: Gauge,
    title: "Tire Repairs and Replacements",
    description: "Flat repairs, balancing, and replacement tire recommendations.",
  },
  {
    icon: Battery,
    title: "Battery Replacements",
    description: "Battery testing and replacement to keep starting performance strong.",
  },
  {
    icon: Thermometer,
    title: "Coolant System Flushes",
    description: "Cooling system flushes and service for stable operating temperatures.",
  },
  {
    icon: Wind,
    title: "Air Conditioning Recharges",
    description: "A/C recharge and performance checks for consistent cooling.",
  },
  {
    icon: Fuel,
    title: "Fuel System Repairs",
    description: "Injector, pump, and fuel delivery repairs for smooth performance.",
  },
  {
    icon: Monitor,
    title: "Catalytic Converter",
    description: "Converter inspection and replacement to restore emissions compliance.",
  },
  {
    icon: Sparkles,
    title: "Ignition System Repairs",
    description: "Diagnosis and repair for coils, plugs, and ignition components.",
  },
]

export function Services() {
  const [showAllMobile, setShowAllMobile] = useState(false)

  return (
    <section id="services" className="bg-white/40 py-24 lg:py-32">
      <div className="section-shell">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Specializing In</p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
              Complete Auto Repair And Maintenance
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
            From routine maintenance to major repairs, our ASE certified team
            delivers dependable service and clear communication at every step.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`surface-card group ${
                index >= 8 && !showAllMobile ? "hidden md:flex" : "flex"
              } flex-col p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-6`}
            >
              <div className="mb-3 flex items-center justify-between sm:mb-5">
                <service.icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                <span className="rounded-full bg-secondary px-2.5 py-1 font-serif text-[0.65rem] font-bold text-muted-foreground">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-1 font-serif text-sm font-bold leading-snug tracking-tight text-foreground sm:mb-2 sm:text-lg">
                {service.title}
              </h3>
              <p className="hidden text-sm leading-relaxed text-muted-foreground sm:block">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 md:hidden">
          <button
            type="button"
            onClick={() => setShowAllMobile((prev) => !prev)}
            className="w-full rounded-xl border border-border bg-background/80 px-4 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-secondary"
          >
            {showAllMobile ? "Show Fewer Services" : "Show All Services"}
          </button>
        </div>

        <div className="surface-card mt-16 overflow-hidden">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative h-72 min-h-full md:h-[25rem] lg:h-auto">
              <Image
                src="/images/team-photo.jpg"
                alt="The Elliott Automotive team in the workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/65 to-transparent" />
            </div>

            <div className="bg-gradient-to-b from-white/95 to-secondary p-8 sm:p-10">
              <p className="eyebrow">Our Team</p>
              <h3 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground">
                New Or Vintage,
                <br />
                We Have You Covered.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We have been one of Richmond&apos;s top rated full service garages
                for decades, backed by an experienced team committed to getting
                your car back on the road better than ever.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { label: "Serving Richmond", value: "40+ Years" },
                  { label: "Combined Experience", value: "75+ Years" },
                  { label: "Certified Team", value: "ASE" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border bg-background/80 px-3 py-4 text-center"
                  >
                    <p className="font-serif text-xl font-bold leading-tight text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[0.7rem] leading-tight text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
