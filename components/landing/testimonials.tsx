import { Star } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Memely 10×-ed our TikTok reach overnight. It pays for itself in a single post.",
    author: "Avery L.",
    role: "Solo founder",
  },
  {
    quote: "Our agency pushes 300 short-form videos a week — Memely handles the heavy lift.",
    author: "Dana K.",
    role: "Creative Director",
  },
  {
    quote: "The GIF matching is eerily accurate. Engagement is up 62 % in 2 weeks.",
    author: "Marcelo P.",
    role: "Growth Marketer",
  },
]

export const Testimonials = () => (
  <section id="testimonials" className="w-full py-24 bg-muted/40">
    <div className="container px-4 md:px-8 text-center space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold">Loved by creators & teams</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {TESTIMONIALS.map(({ quote, author, role }) => (
          <figure key={author} className="space-y-4">
            <div className="flex justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-sm italic \32 text-muted-foreground max-w-sm mx-auto">
              “{quote}”
            </blockquote>
            <figcaption className="text-sm font-medium">
              {author} <span className="text-muted-foreground">— {role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
)
