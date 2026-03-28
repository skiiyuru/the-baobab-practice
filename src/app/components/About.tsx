import { Droplet, Leaf, Flower2, Network } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimateIn } from './AnimateIn';

const fourfoldWisdom = [
  {
    icon: Network,
    title: 'The Roots',
    subtitle: 'Grow Deep and Wide',
    description: 'Depth in values, wide in impact. Purposeful growth across your ecosystem.',
    iconColor: 'text-foreground',
  },
  {
    icon: Droplet,
    title: 'The Trunk',
    subtitle: 'Store Your Water',
    description: 'Build strategic resilience through intentional reserve, not bureaucratic bulk.',
    iconColor: 'text-brand-green',
  },
  {
    icon: Leaf,
    title: 'The Leaves',
    subtitle: 'Know When to Let Go',
    description: 'Distinguish between essential identity and expendable tradition.',
    iconColor: 'text-brand-green',
  },
  {
    icon: Flower2,
    title: 'The Flowers',
    subtitle: 'Bloom in Your Season',
    description: 'Find your natural timing and unique rhythm for authentic innovation.',
    iconColor: 'text-brand-clay',
  },
];

const coreValues = [
  { name: 'Human First', description: 'Dignity, relationships, and the human experience at the center of every transformation.' },
  { name: 'Practice Over Prescription', description: 'Habits and shared learning, not just plans or recommendations.' },
  { name: 'Courageous Truth', description: 'Safe spaces for difficult conversations and surfacing what is unseen.' },
  { name: 'Shared Ownership', description: 'Leaders and teams taking responsibility for their future.' },
  { name: 'Growth With Integrity', description: 'Scaling that strengthens — not dilutes — purpose and culture.' },
];

export function About() {
  return (
    <section id="about">
      {/* The Ancient Witness — editorial spread with pull quote */}
      <div className="py-28 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="mb-20 text-foreground">
              The Baobab Story
            </h2>
          </AnimateIn>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1619203921846-ba381b842a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW9iYWIlMjB0cmVlJTIwc2lsaG91ZXR0ZSUyMHN1bnNldCUyMEFmcmljYXxlbnwxfHx8fDE3NzQzNTY4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ancient Baobab Tree Silhouette"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                In the heart of Africa grows a tree unlike any other. The Baobab has watched civilizations rise and fall for over 2,000 years. It stores water wisely, sheds leaves strategically, and blooms in perfect timing with its pollinators.
              </p>
              {/* Pull quote — statement typography */}
              <AnimateIn variant="fade-left" delay={200}>
                <blockquote className="border-l-4 border-brand-clay pl-6 py-2">
                  <p className="text-2xl lg:text-3xl font-[family-name:var(--font-headline)] leading-snug text-foreground" style={{ fontWeight: 700 }}>
                    This is not a tree that fights against its environment. It dances with it.
                  </p>
                </blockquote>
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>

      {/* The Modern Parable — single-column statement */}
      <div className="py-20 lg:py-28 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed mb-8 text-muted-foreground">
            Today's organizations face their own droughts, fires, and storms. Most respond like trees that do not know they are Baobabs — bracing against the wind, clinging to every leaf, exhausting themselves fighting conditions instead of adapting to them.
          </p>
          <AnimateIn>
            <p className="text-2xl lg:text-3xl font-[family-name:var(--font-headline)] leading-snug text-foreground" style={{ fontWeight: 600 }}>
              What if organizations could learn from the Baobab?
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* The Fourfold Wisdom — asymmetric layout */}
      <div className="py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="mb-16 text-foreground">
            The Fourfold Wisdom
          </h3>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Featured item — large */}
            <div className="lg:col-span-2 bg-brand-light rounded-2xl p-10 lg:p-12 flex flex-col justify-center">
              <Network className="size-12 text-foreground mb-8" />
              <h4 className="text-2xl font-bold mb-2 text-foreground font-[family-name:var(--font-headline)]">{fourfoldWisdom[0].title}</h4>
              <p className="text-sm font-medium text-brand-green mb-6">{fourfoldWisdom[0].subtitle}</p>
              <p className="text-base leading-relaxed text-muted-foreground">{fourfoldWisdom[0].description}</p>
            </div>

            {/* Three smaller items */}
            <div className="lg:col-span-3 space-y-6">
              {fourfoldWisdom.slice(1).map((wisdom, index) => {
                const Icon = wisdom.icon;
                return (
                  <div key={index} className="flex items-start gap-6 p-6 rounded-xl border border-border bg-white">
                    <Icon className={`size-8 flex-shrink-0 mt-1 ${wisdom.iconColor}`} />
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {wisdom.title} <span className="font-light text-muted-foreground">— {wisdom.subtitle}</span>
                      </h4>
                      <p className="text-base leading-relaxed text-muted-foreground mt-2">{wisdom.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* The Empty Center — dramatic full-width dark section */}
      <div className="py-24 lg:py-36 bg-brand-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed mb-10 text-brand-sand">
            Old Baobabs often become hollow. But they do not die — they become community centers. People gather inside them. Animals find shelter. Life continues differently, not in spite of the emptiness, but because of it.
          </p>
          {/* Statement moment */}
          <AnimateIn>
            <p className="text-3xl lg:text-4xl font-[family-name:var(--font-headline)] leading-tight text-white mb-16" style={{ fontWeight: 700 }}>
              The strongest organizations are those who have learned to make their hollows into meeting places.
            </p>
          </AnimateIn>

          <div className="border-t border-white/20 pt-12">
            <p className="text-base leading-relaxed text-brand-sand" style={{ fontWeight: 300 }}>
              We chose this name as a living promise. <strong className="text-white font-semibold">Practice</strong> means growth through disciplined, mindful action. <strong className="text-white font-semibold">The Baobab</strong> means wisdom that lasts — deep growth that withstands centuries of change.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values — bold typographic list */}
      <div className="py-24 lg:py-32 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="mb-14 text-foreground text-xl">
            What We Stand For
          </h3>
          <dl className="space-y-8">
            {coreValues.map((value, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <dt className="text-lg font-bold text-foreground whitespace-nowrap font-[family-name:var(--font-headline)]">{value.name}</dt>
                <dd className="text-base leading-relaxed text-muted-foreground" style={{ fontWeight: 300 }}>{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Invitation — centered statement */}
      <div className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base leading-relaxed text-muted-foreground mb-6" style={{ fontWeight: 300 }}>
            We do not offer blueprints. Blueprints are for buildings — and you are not building, you are growing.
          </p>
          <p className="text-2xl lg:text-3xl font-[family-name:var(--font-headline)] leading-snug text-foreground" style={{ fontWeight: 700 }}>
            Will you merely withstand the seasons, or will you learn their rhythms and grow through them?
          </p>
        </div>
      </div>
    </section>
  );
}