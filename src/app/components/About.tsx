import { AnimateIn } from "./AnimateIn";

const coreValues = [
  {
    name: "Human First",
    description:
      "Dignity, relationships, and the human experience at the center of every transformation.",
  },
  {
    name: "Practice Over Prescription",
    description:
      "Habits and shared learning, not just plans or recommendations.",
  },
  {
    name: "Courageous Truth",
    description:
      "Safe spaces for difficult conversations and surfacing what is unseen.",
  },
  {
    name: "Shared Ownership",
    description: "Leaders and teams taking responsibility for their future.",
  },
  {
    name: "Growth With Integrity",
    description: "Scaling that strengthens, not dilutes, purpose and culture.",
  },
];

// 3 + 2 layout on a 6-column grid: the last row is centred under the first.
const valueGridClass = (index: number) =>
  index === 3 ? "md:col-span-2 lg:col-start-2" : "md:col-span-2";

export function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <AnimateIn>
          <p className="text-eyebrow text-brand-clay mb-4">About Us</p>
          <h2 className="text-4xl lg:text-5xl font-headline text-foreground leading-tight tracking-tight mb-14 lg:mb-20">
            Vision, Mission{" "}
            <span className="font-serif italic font-normal text-brand-green">
              &amp; Values
            </span>
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-24">
          <AnimateIn delay={0.1}>
            <div className="border-t-2 border-brand-green pt-6">
              <p className="text-eyebrow text-brand-green mb-4">Vision</p>
              <p className="text-statement text-foreground m-0">
                A world where people and organisations grow stronger by leading
                their own change.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="border-t-2 border-brand-clay pt-6">
              <p className="text-eyebrow text-brand-clay mb-4">Mission</p>
              <p className="text-lg leading-relaxed text-muted-foreground m-0">
                The Baobab Practice helps growth-stage entrepreneurs and
                leadership teams build organisations capable of sustainable
                growth, strengthening the leadership, culture, capabilities,
                systems and ways of working required to scale.
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* Core question callout */}
        <AnimateIn>
          <div className="relative bg-brand-sand/60 rounded-2xl px-8 py-10 lg:px-14 lg:py-12 mb-24 lg:mb-32 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-clay" />
            <p className="text-eyebrow text-brand-clay mb-3">Core Question</p>
            <p className="text-display text-foreground m-0" style={{ maxWidth: "30ch" }}>
              Can your organisation carry its next stage of growth?
            </p>
          </div>
        </AnimateIn>

        {/* Core values */}
        <AnimateIn>
          <h3 className="text-3xl lg:text-4xl font-headline text-foreground tracking-tight mb-10 lg:mb-14 text-center">
            What we{" "}
            <span className="font-serif italic font-normal text-brand-green">
              Practice
            </span>
          </h3>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 lg:gap-6">
          {coreValues.map((value, index) => (
            <AnimateIn
              key={value.name}
              delay={index * 0.08}
              className={valueGridClass(index)}
              style={{ height: "100%" }}
            >
              <div className="h-full bg-brand-light border border-border rounded-2xl p-7 lg:p-8 transition-shadow duration-300 hover:shadow-md">
                <div className="h-1 w-8 bg-brand-clay/40 rounded-full mb-5" />
                <h4 className="font-headline text-xl lg:text-2xl font-semibold text-foreground tracking-tight mb-3">
                  {value.name}
                </h4>
                <p className="text-muted-foreground leading-relaxed m-0">
                  {value.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
