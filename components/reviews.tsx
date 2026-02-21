import { Quote, Star } from "lucide-react"

const reviews = [
  {
    name: "McKenna C.",
    text: "The service at Elliott is excellent from Jay to Kit to Jeff to all of their employees. There is no hassle to purchase things you do not need. They are honest and real. I have older vehicles and they never gouge me. They are always busy but still make time to take care of customers very well. It is so nice to have that kind of service this day and age. Excellent mechanics!",
  },
  {
    name: "Dakota N.",
    text: "I started taking my Audi S5 here last year and they have taken such great care of it. They are fair and I never have issues with them. They are always busy, so sometimes it is hard to squeeze people in, but they really do the best they can. You have me for life.",
  },
  {
    name: "Vanessa J.",
    text: "Great honest service with a smile and gratitude. Love this shop.",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-white/35 py-24 lg:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Customer Feedback</p>
            <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              100s Of 5 Star Reviews
            </h2>
          </div>
          <div className="surface-card max-w-sm p-5">
            <p className="text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Richmond, Virginia
            </p>
            <div className="mt-2 flex items-end gap-2">
              <p className="font-serif text-4xl font-bold leading-none text-foreground">5.0</p>
              <p className="pb-1 text-sm text-muted-foreground">review-focused customer care</p>
            </div>
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="surface-card group flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <Quote className="mb-4 h-7 w-7 text-primary/35" strokeWidth={1.5} />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{`"${review.text}"`}</p>
              <p className="mt-5 border-t border-border pt-4 font-serif text-lg font-bold tracking-tight text-foreground">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
