"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Check, Mail, Phone } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const makes = [
    "Alfa Romeo",
    "Aston Martin",
    "Acura",
    "Audi",
    "Bentley",
    "BMW",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Dodge",
    "Ferrari",
    "Ford",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Lexus",
    "Lotus",
    "Maserati",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "Nissan",
    "Porsche",
    "Rolls-Royce",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
    "Other",
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"

  return (
    <section id="contact" className="bg-white/45 py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Schedule An Appointment</p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
              Call Or Send A Request Today
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              We&apos;re committed to a great customer experience from your first
              call to final pickup. Send your details below and our team will
              follow up to schedule your visit.
            </p>

            <div className="surface-card mt-8 space-y-4 p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Call us</p>
                  <p className="text-sm text-muted-foreground">Schedule an appointment:</p>
                  <a href="tel:+18042640855" className="text-sm font-semibold text-foreground hover:text-primary">
                    (804) 264-0855
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">After hours</p>
                  <p className="text-sm text-muted-foreground">Reach out anytime at:</p>
                  <a href="mailto:info@elliottauto.com" className="text-sm font-semibold text-foreground hover:text-primary">
                    info@elliottauto.com
                  </a>
                </div>
              </div>
            </div>

            <div className="surface-card relative mt-8 h-56 overflow-hidden sm:h-64">
              <Image
                src="/images/shop-exterior.jpg"
                alt="Elliott Automotive shop exterior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/35 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-[0.66rem] uppercase tracking-[0.18em] text-white/75">Facility</p>
                <p className="mt-1 font-serif text-2xl font-bold">4101 Glenside Dr, Richmond VA</p>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="surface-card flex min-h-[620px] flex-col items-center justify-center px-8 py-12 text-center sm:px-12">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                  Request Received
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Thank you for contacting Elliott Automotive. Our team will
                  follow up as soon as possible to schedule your appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-xl border border-border bg-background px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-foreground transition-colors hover:bg-secondary"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="surface-card flex flex-col gap-5 p-7 sm:p-9"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="firstName"
                      className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className={inputClasses}
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="lastName"
                      className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className={inputClasses}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputClasses}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={inputClasses}
                      placeholder="(804) 264-0855"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="year"
                      className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Year
                    </label>
                    <input
                      id="year"
                      name="year"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]{4}"
                      maxLength={4}
                      className={inputClasses}
                      placeholder="2018"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="make"
                      className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Make
                    </label>
                    <select
                      id="make"
                      name="make"
                      className={inputClasses}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select make
                      </option>
                      {makes.map((make) => (
                        <option key={make} value={make.toLowerCase()}>
                          {make}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="model"
                      className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Model
                    </label>
                    <input
                      id="model"
                      name="model"
                      type="text"
                      className={inputClasses}
                      placeholder="Camry / F-150 / Civic"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="service"
                    className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className={inputClasses}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select service
                    </option>
                    <option value="engine">Engine and Cylinders</option>
                    <option value="transmission">Transmission Repairs/Replacements</option>
                    <option value="suspension">Suspension</option>
                    <option value="camshaft">Camshaft</option>
                    <option value="head-gasket">Head Gasket</option>
                    <option value="ac-compressor">Air Conditioner Compressor</option>
                    <option value="oil-leak">Oil Leaks</option>
                    <option value="brakes">Brake Repairs</option>
                    <option value="tires">Tire Repairs and Replacements</option>
                    <option value="battery">Battery Replacements</option>
                    <option value="coolant">Coolant System Flushes</option>
                    <option value="ac-recharge">Air Conditioning Recharges</option>
                    <option value="fuel">Fuel System Repairs</option>
                    <option value="catalytic">Catalytic Converter</option>
                    <option value="ignition">Ignition System Repairs</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your vehicle and what service you need."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/90"
                >
                  Send Request
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
