import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { LocationMap } from "@/components/location-map"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <LocationMap />
      <ContactForm />
      <Footer />
    </main>
  )
}
