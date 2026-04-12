import { Droplet, Leaf, Flower2, Network } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimateIn } from './AnimateIn';
import logo from '../../assets/og-image.png';
import baobab from '../../assets/bb1.png';

const fourfoldWisdom = [
  {
    icon: Network,
    numeral: '01',
    title: 'The Roots',
    subtitle: 'Grow Deep and Wide',
    description: 'Depth in values, wide in impact. Purposeful growth across your ecosystem.',
    iconColor: 'text-foreground',
  },
  {
    icon: Droplet,
    numeral: '02',
    title: 'The Trunk',
    subtitle: 'Store Your Water',
    description: 'Build strategic resilience through intentional reserve, not bureaucratic bulk.',
    iconColor: 'text-brand-green',
  },
  {
    icon: Leaf,
    numeral: '03',
    title: 'The Leaves',
    subtitle: 'Know When to Let Go',
    description: 'Distinguish between essential identity and expendable tradition.',
    iconColor: 'text-brand-green',
  },
  {
    icon: Flower2,
    numeral: '04',
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
      <div className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="mb-12 text-foreground">
              The Baobab Story
            </h2>
          </AnimateIn>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <AnimateIn variant="fade-scale" duration={0.8}>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={baobab}
                    alt="Ancient Baobab Tree Silhouette"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimateIn>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2 space-y-8">
              <AnimateIn delay={0.1}>
                <p className="text-base leading-relaxed text-muted-foreground" style={{ maxWidth: '48ch' }}>
                  In the heart of Africa grows a tree unlike any other. The Baobab has watched civilizations rise and fall for over 2,000 years. It stores water wisely, sheds leaves strategically, and blooms in perfect timing with its pollinators.
                </p>
              </AnimateIn>
              {/* Pull quote — typographic block, italic serif */}
              <AnimateIn variant="fade-left" delay={0.25}>
                <blockquote
                  style={{
                    paddingLeft: '1.5rem',
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem',
                    position: 'relative',
                  }}
                >
                  {/* Decorative opening mark */}
                  <motion.span
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
                    style={{
                      position: 'absolute',
                      top: '-0.75rem',
                      left: '-0.25rem',
                      fontFamily: 'var(--font-headline)',
                      fontSize: '7rem',
                      lineHeight: 1,
                      color: 'var(--resilience-clay)',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    &ldquo;
                  </motion.span>
                  <p
                    className="text-statement"
                    style={{
                      color: 'var(--foreground)',
                      maxWidth: '34ch',
                    }}
                  >
                    This is not a tree that fights against its environment. It dances with it.
                  </p>
                </blockquote>
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>

      {/* The Modern Parable — single-column statement with dramatic breathing room */}
      <div className="py-24 lg:py-32 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn delay={0.05}>
            <p className="text-base leading-relaxed mb-10 text-muted-foreground">
              Today's organizations face their own droughts, fires, and storms. Most respond like trees that do not know they are Baobabs — bracing against the wind, clinging to every leaf, exhausting themselves fighting conditions instead of adapting to them.
            </p>
          </AnimateIn>
          <AnimateIn>
            <p className="text-display text-foreground" style={{ maxWidth: '24ch' }}>
              What if organizations could learn from the Baobab?
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* The Fourfold Wisdom — numbered list with dividers, staggered entrance, hover interaction */}
      <div className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">
            {/* Sidebar label + logo */}
            <div className="lg:col-span-2 lg:sticky lg:top-32">
              <AnimateIn>
                <h2 className="text-foreground mb-6">The Fourfold Wisdom</h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <p className="text-base leading-relaxed text-muted-foreground mb-10" style={{ maxWidth: '34ch' }}>
                  Four principles drawn from the baobab's ancient intelligence.
                </p>
              </AnimateIn>
              <AnimateIn variant="fade-scale" delay={0.2}>
                <img
                  src={logo}
                  alt="The Baobab Practice"
                  className="size-40 md:size-56 opacity-80"
                />
              </AnimateIn>
            </div>

            {/* Numbered list — with stagger and hover */}
            <div className="lg:col-span-3">
              {fourfoldWisdom.map((wisdom, index) => {
                const Icon = wisdom.icon;
                return (
                  <AnimateIn key={index} delay={index * 0.1} variant="fade-up">
                    <motion.div
                      className="flex items-start gap-6 py-8 px-3 -mx-3 hoverable-row"
                      style={{
                        borderTop: index === 0 ? '1px solid var(--border)' : undefined,
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      {/* Numeral — light, large, positional anchor */}
                      <span
                        style={{
                          fontFamily: 'var(--font-headline)',
                          fontSize: 'clamp(2rem, 3vw, 3rem)',
                          fontWeight: 700,
                          lineHeight: 1,
                          color: 'var(--resilience-clay)',
                          opacity: 0.25,
                          flexShrink: 0,
                          width: '3.5rem',
                          paddingTop: '0.15rem',
                        }}
                      >
                        {wisdom.numeral}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className={`size-5 flex-shrink-0 ${wisdom.iconColor}`} />
                          <h3 className="text-foreground" style={{ fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.3 }}>
                            {wisdom.title}
                            <span
                              className="font-normal text-muted-foreground ml-2"
                              style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
                            >
                              — {wisdom.subtitle}
                            </span>
                          </h3>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground" style={{ maxWidth: '48ch' }}>
                          {wisdom.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimateIn>
                );
              })}

              {/* Closing paragraph below the list */}
              <AnimateIn delay={0.5}>
                <p
                  className="text-base leading-relaxed text-muted-foreground mt-14"
                  style={{ maxWidth: '52ch', fontStyle: 'italic' }}
                >
                  Old Baobabs often become hollow. But they do not die — they become community centers. People gather inside them. Animals find shelter. Life continues differently, not in spite of the emptiness, but because of it.
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>

      {/* The Empty Center — dramatic full-width dark section with extra breathing room */}
      <div className="dark-section py-24 lg:py-36 bg-brand-earth text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p
              className="text-display"
              style={{
                color: 'white',
                marginBottom: '5rem',
                // maxWidth: '28ch',
                fontSize: 'clamp(1.75rem, 3.5vw + 0.5rem, 2.75rem)',
              }}
            >
              The strongest organizations are those who have learned to make their hollows into meeting places.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '3rem' }}>
              <p className="text-base leading-relaxed" style={{ color: 'var(--warm-sand)' }}>
                We chose this name as a living promise. <strong className="text-white font-semibold">Practice</strong> means growth through disciplined, mindful action. <strong className="text-white font-semibold">The Baobab</strong> means wisdom that lasts — deep growth that withstands centuries of change.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Core Values — bold typographic list with hover */}
      <div className="py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h3 className="mb-12 text-foreground">
              What We Practice
            </h3>
          </AnimateIn>
          <dl className="space-y-0">
            {coreValues.map((value, index) => (
              <AnimateIn key={index} delay={index * 0.08} variant="fade-up">
                <motion.div
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-7 px-3 -mx-3 hoverable-row"
                  style={{
                    borderBottom: index < coreValues.length - 1 ? '1px solid var(--border)' : undefined,
                  }}
                >
                  <dt
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: 'clamp(1rem, 1.5vw + 0.25rem, 1.2rem)',
                      fontWeight: 700,
                      color: 'var(--foreground)',
                      whiteSpace: 'nowrap',
                      minWidth: '16rem',
                    }}
                  >
                    {value.name}
                  </dt>
                  <dd className="text-base leading-relaxed text-muted-foreground" style={{ maxWidth: '48ch' }}>
                    {value.description}
                  </dd>
                </motion.div>
              </AnimateIn>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}