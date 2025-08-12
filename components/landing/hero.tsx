import Link from "next/link"
import { Button } from "@/components/ui/button"

export const Hero = () => (
  <section className="w-full py-24 text-center space-y-6">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
      Generate viral meme videos in seconds
    </h1>
    <p className="max-w-2xl mx-auto text-muted-foreground">
      Memely turns your product into share-worthy meme reels that boost reach and revenue — no
      editing skills required.
    </p>
    <div className="flex justify-center gap-4">
      <Button asChild size="lg">
        <Link href="/signup">Start free trial</Link>
      </Button>
      <Button variant="outline" asChild size="lg">
        <Link href="#pricing">See pricing</Link>
      </Button>
    </div>
  </section>
)
