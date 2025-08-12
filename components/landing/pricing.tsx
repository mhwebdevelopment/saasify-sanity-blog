import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const TIERS = [
  {
    name: "Creator",
    price: "$29",
    period: "/mo",
    quota: "30 videos / mo",
    cta: "Start",
  },
  {
    name: "Professional",
    price: "$79",
    period: "/mo",
    quota: "120 videos / mo",
    cta: "Upgrade",
  },
  {
    name: "Business",
    price: "$149",
    period: "/mo",
    quota: "400 videos / mo",
    cta: "Contact sales",
    featured: true,
  },
]

export const Pricing = () => (
  <section id="pricing" className="w-full py-24">
    <div className="container px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Pricing</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {TIERS.map(({ name, price, period, quota, cta, featured }) => (
          <Card
            key={name}
            className={featured ? "border-primary shadow-lg" : ""}
          >
            <CardContent className="p-6 space-y-6 text-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-4xl font-bold">
                {price}
                <span className="text-base font-medium text-muted-foreground">{period}</span>
              </p>
              <p className="text-muted-foreground">{quota}</p>
              <Button asChild size="lg" className="w-full">
                <Link href="/signup">{cta}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)
