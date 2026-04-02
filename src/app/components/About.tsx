import { Droplet, Leaf, Flower2, Network, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimateIn } from './AnimateIn';
import logo from '../../assets/og-image.png';
import baobab from '../../assets/bb1.png';

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
                  src={baobab}
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
                  <p className="text-xl lg:text-2xl font-[family-name:var(--font-headline)] leading-snug text-foreground" style={{ fontWeight: 700 }}>
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
            <p className="text-xl lg:text-2xl font-[family-name:var(--font-headline)] leading-snug text-foreground" style={{ fontWeight: 700 }}>
              What if organizations could learn from the Baobab?
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* The Fourfold Wisdom — asymmetric layout */}
      <div className="py-28 lg:py-36 bg-white space-y-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Featured item — large */}
            <div className="lg:col-span-2 bg-brand-light rounded-2xl p-10 lg:p-12 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-2 text-foreground font-[family-name:var(--font-headline)]">The Fourfold Wisdom</h4>
               <img
                src={logo}
                alt="The Baobab Practice"
                className="size-50 md:size-75"
               />
            </div>

            {/* Three smaller items */}
            <div className="lg:col-span-3 space-y-6">
              {fourfoldWisdom.map((wisdom, index) => {
                const Icon = wisdom.icon
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

        <p className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8 text-base leading-relaxed text-muted-foreground mt-2">
              Old Baobabs often become hollow. But they do not die, they become community centers. People gather inside them. Animals find shelter. Life continues differently, not in spite of the emptiness, but because of it.
            </p>
      </div>

      {/* The Empty Center — dramatic full-width dark section */}
      <div className="py-24 lg:py-36 bg-brand-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <div className="py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="mb-14 text-foreground text-xl">
            What We Practice
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
    </section>
  );
}