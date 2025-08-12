const BENEFITS = [
  "Save 10+ design hours per week",
  "Skip expensive video tools",
  "Keep API keys & data private",
  "Self-serve in under 2 minutes",
]

export const Benefits = () => (
  <section className="w-full py-24">
    <div className="container px-4 md:px-8 space-y-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Why Memely?</h2>
      <ul className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
        {BENEFITS.map((b) => (
          <li
            key={b}
            className="rounded-md bg-muted p-6 font-medium shadow-sm"
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  </section>
)
