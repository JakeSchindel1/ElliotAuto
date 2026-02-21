"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const photos = [
  { src: "/images/engine-work.jpg", alt: "High-performance engine work" },
  { src: "/images/brake-repair.jpg", alt: "Carbon ceramic brake system" },
  { src: "/images/shop-exterior.jpg", alt: "Elliott Automotive shop exterior" },
  { src: "/images/tools-wall.jpg", alt: "Diagnostic equipment wall" },
  { src: "/images/car-lift.jpg", alt: "Ferrari on hydraulic lift" },
  { src: "/images/oil-change.jpg", alt: "BMW M-series in the garage" },
  { src: "/images/hero-garage.jpg", alt: "Porsche 911 in the bay" },
  { src: "/images/team-photo.jpg", alt: "Our team at work" },
]

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % photos.length)
    }
  }

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)
    }
  }

  return (
    <section id="gallery" className="bg-gradient-to-b from-transparent to-secondary/60 py-24 lg:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Shop Highlights</p>
            <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Inside The Garage
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
            Real projects, real craftsmanship, and a clean workshop built for
            precision from intake to final road test.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              onClick={() => openLightbox(index)}
              className={`surface-card group relative overflow-hidden rounded-2xl border-white/60 ${
                index === 0
                  ? "col-span-2 row-span-2 aspect-square"
                  : "aspect-square"
              }`}
              aria-label={`View ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/80">
                  Tap To Expand
                </p>
                <p className="mt-2 max-w-[18ch] font-serif text-sm font-semibold tracking-wide text-white">
                  {photo.alt}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Photo lightbox"
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className="absolute right-5 top-5 rounded-xl border border-white/20 bg-white/10 p-2 text-white/80 transition-colors hover:bg-white/15"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-3 rounded-xl border border-white/20 bg-white/10 p-2 text-white/80 transition-colors hover:border-white/40 hover:bg-white/20 md:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="relative h-[72vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              fill
              className="bg-black/40 object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-3 rounded-xl border border-white/20 bg-white/10 p-2 text-white/80 transition-colors hover:border-white/40 hover:bg-white/20 md:right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="font-serif text-sm text-white">{photos[lightboxIndex].alt}</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/60">
              {lightboxIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
