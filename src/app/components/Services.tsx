import { AnimateIn } from './AnimateIn';

const stages = [
  {
    code: 'Stage 01',
    name: 'Assess Readiness & Align Ambition',
    tree: 'rooting the work',
    question: 'Are we ready for the growth we want?',
    measurement: 'Growth Readiness + Cultural Baseline',
    accent: 'bg-brand-green',
    text: 'text-brand-green',
  },
  {
    code: 'Stage 02',
    name: 'Build Scalable Foundations',
    tree: 'strengthening the trunk',
    question: 'Are we building the capabilities and behaviours required to scale?',
    measurement: 'Capability + Values Practice Tracker',
    accent: 'bg-brand-earth',
    text: 'text-brand-earth',
  },
  {
    code: 'Stage 03',
    name: 'Scale & Integrate',
    tree: 'spreading the branches',
    question: 'Is growth creating organisational or cultural friction?',
    measurement: 'Growth Friction + System Alignment',
    accent: 'bg-brand-gold',
    // Gold is too light for small text on sand; use a deepened tone of it.
    text: 'text-[oklch(0.52_0.10_70)]',
  },
  {
    code: 'Stage 04',
    name: 'Sustain & Evolve',
    tree: 'tending the canopy',
    question: 'Can we sustain growth while continuing to adapt?',
    measurement: 'Scaling Sustainability + Cultural Embeddedness',
    accent: 'bg-brand-clay',
    text: 'text-brand-clay',
  },
];

const lenses = [
  {
    title: 'Leadership & Founder Transition',
    description: 'Founder to leader: delegation, decision rights, leadership depth and succession.',
  },
  {
    title: 'Culture & Identity',
    description: 'Help culture evolve as the organisation grows, while protecting what matters.',
  },
  {
    title: 'Organisational Regrounding',
    description: 'Address trust, ownership, collaboration and performance when growth creates friction.',
  },
  {
    title: 'Adaptive Change & Crisis',
    description: 'Support organisations when disruption or rapid change tests their ability to respond.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Framework intro */}
        <div className="text-center mb-12 lg:mb-16">
          <AnimateIn>
            <p className="text-eyebrow text-brand-clay mb-4 mx-auto">Our Services</p>
            <h2 className="text-4xl lg:text-5xl font-headline text-foreground leading-tight tracking-tight">
              The Baobab Scaling Framework<sup className="text-[0.45em] text-muted-foreground align-super">™</sup>
            </h2>
            <p className="font-serif italic text-brand-clay text-2xl lg:text-3xl mt-3 mx-auto">
              Growth Without Losing Soul
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mt-8 mx-auto" style={{ maxWidth: '56ch' }}>
              A baobab grows from the inside out. Deep roots first, strong trunk second, branches last.
              Sustainable organisational growth follows the same logic: strengthen the conditions that
              allow growth before asking the organisation to carry more.
            </p>
          </AnimateIn>
        </div>

        {/* The growth gap */}
        <AnimateIn>
          <div className="relative bg-brand-sand/60 rounded-2xl px-8 py-8 lg:px-12 lg:py-10 mb-20 lg:mb-28 max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-clay" />
            <p className="text-eyebrow text-brand-clay mb-3">The Growth Gap</p>
            <p className="text-statement text-foreground m-0">
              A business can have a strong market opportunity and a clear growth strategy while the
              organisation behind it is not yet ready to carry that growth.
            </p>
          </div>
        </AnimateIn>

        {/* Four-stage journey */}
        <AnimateIn>
          <h3 className="text-3xl lg:text-4xl font-headline text-foreground tracking-tight text-center mb-10 lg:mb-12">
            A four-stage journey
          </h3>
        </AnimateIn>

        <div className="flex flex-col gap-4 mb-24 lg:mb-32">
          {stages.map((stage, index) => (
            <AnimateIn key={stage.code} delay={index * 0.08}>
              <article className="grid md:grid-cols-[minmax(13rem,1.1fr)_1.4fr_minmax(12rem,1fr)] rounded-xl overflow-hidden border border-border bg-white">
                <div className="relative bg-brand-light px-6 py-5 flex flex-col gap-1">
                  <div className={`absolute inset-y-0 left-0 w-1 ${stage.accent}`} />
                  <span className={`text-eyebrow ${stage.text}`}>{stage.code}</span>
                  <span className="font-headline text-lg font-semibold text-foreground leading-snug">{stage.name}</span>
                  <span className="font-serif italic text-sm text-muted-foreground">{stage.tree}</span>
                </div>
                <div className="px-6 py-5 flex items-center text-muted-foreground leading-snug border-t md:border-t-0 md:border-l border-border">
                  {stage.question}
                </div>
                <div className="px-6 py-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border">
                  <span className="text-[0.65rem] tracking-[0.18em] uppercase font-semibold text-muted-foreground mb-1">
                    Measurement layer
                  </span>
                  <span className="text-sm font-medium text-foreground leading-snug">{stage.measurement}</span>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        {/* Service hierarchy: one master methodology over four specialist lenses */}
        <div className="text-center mb-10 lg:mb-12">
          <AnimateIn>
            <p className="text-eyebrow text-brand-green mb-4 mx-auto">How we work with you</p>
            <h3 className="text-3xl lg:text-4xl font-headline text-foreground tracking-tight mx-auto" style={{ maxWidth: '24ch' }}>
              One master methodology, applied through specialist lenses
            </h3>
          </AnimateIn>
        </div>

        <AnimateIn>
          <div className="bg-brand-sand/70 border-2 border-brand-clay rounded-2xl px-8 py-10 lg:px-14 lg:py-12 text-center">
            <p className="text-eyebrow text-brand-clay mb-3 mx-auto">Master methodology</p>
            <h4 className="font-headline text-2xl lg:text-4xl font-semibold text-foreground tracking-tight mb-4">
              The Baobab Scaling Framework<sup className="text-[0.45em] text-muted-foreground align-super">™</sup>
            </h4>
            <p className="text-lg text-muted-foreground leading-relaxed m-0 mx-auto" style={{ maxWidth: '48ch' }}>
              The primary journey for growth-stage organisations, from assessing readiness to sustaining growth.
            </p>
          </div>
        </AnimateIn>

        <div className="w-px h-10 bg-brand-clay/40 mx-auto" aria-hidden="true" />

        <div className="grid md:grid-cols-2 gap-4 lg:gap-5 md:px-6 lg:px-10">
          {lenses.map((lens, index) => (
            <AnimateIn key={lens.title} delay={index * 0.08} style={{ height: '100%' }}>
              <div className="h-full bg-white border border-border rounded-xl p-6 lg:p-7">
                <p className="text-[0.65rem] tracking-[0.18em] uppercase font-semibold text-brand-green mb-2">
                  Specialist lens
                </p>
                <h5 className="font-headline text-lg lg:text-xl font-semibold text-foreground tracking-tight mb-2">
                  {lens.title}
                </h5>
                <p className="text-muted-foreground leading-relaxed m-0">{lens.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
