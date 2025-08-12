import { Check, Zap, Bot, Shield } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const FEATURES: Feature[] = [
  {
    title: "AI-powered captions",
    description: "OpenAI crafts punch-line hooks that stop the scroll.",
    icon: Zap,
  },
  {
    title: "GIF match",
    description: "Auto-selects the perfect GIPHY clip for every joke.",
    icon: Bot,
  },
  {
    title: "One-click posting",
    description: "Schedule to TikTok, Reels & Shorts via Buffer.",
    icon: Check,
  },
  {
    title: "Brand-safe",
    description: "Profanity filters & unique-hash guardrails prevent duplicates.",
    icon: Shield,
  },
]

export const Features = () => (
  <section id="features" className="w-full py-24 bg-muted/40">
    <div className="container px-4 md:px-8">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Features</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {FEATURES.map(({ title, description, icon: Icon }) => (
          <div key={title} className="text-center space-y-4">
            <Icon className="mx-auto h-8 w-8 text-primary" />
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
