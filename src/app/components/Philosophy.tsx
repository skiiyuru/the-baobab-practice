import { motion } from 'motion/react';
import { AnimateIn } from './AnimateIn';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import baobab from '../../assets/bb1.png';

const principles = [
  {
    numeral: '01',
    part: 'The Roots',
    title: 'Grow Deep and Wide',
    description: 'Depth in values, wide in impact. Purposeful growth across your ecosystem.',
    accent: 'bg-brand-green',
    text: 'text-brand-green',
  },
  {
    numeral: '02',
    part: 'The Trunk',
    title: 'Store Your Water',
    description: 'Build strategic resilience through intentional reserve, not bureaucratic bulk.',
    accent: 'bg-brand-earth',
    text: 'text-brand-earth',
  },
  {
    numeral: '03',
    part: 'The Branches',
    title: 'Reach Without Overreaching',
    description: 'Spread wisely. Distinguish between essential identity and expendable tradition.',
    accent: 'bg-brand-gold',
    // Gold is too light for text on white; use a deepened tone of it.
    text: 'text-[oklch(0.52_0.10_70)]',
  },
  {
    numeral: '04',
    part: 'The Canopy',
    title: 'Endure Through the Seasons',
    description: 'Sustain what you have built, and keep adapting without losing who you are.',
    accent: 'bg-brand-clay',
    text: 'text-brand-clay',
  },
];

export function Philosophy() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="philosophy" className="bg-brand-light py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-eyebrow text-brand-clay mb-4">Our Philosophy</p>
        </AnimateIn>

        {/* Opening story */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          <div className="lg:col-span-6">
            <AnimateIn variant="fade-scale" duration={0.8}>
              <div className="aspect-[16/11] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={baobab}
                  alt="A baobab tree at sunrise on the savannah"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimateIn>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <AnimateIn delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground m-0" style={{ maxWidth: '48ch' }}>
                In the heart of Africa grows a tree unlike any other. For over 2,000 years the Baobab
                has outlived empires, storing water, shedding leaves, and blooming in time with its
                pollinators.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-left" delay={0.2}>
              <blockquote className="pl-8 py-1 border-l-2 border-brand-clay">
                <p className="text-2xl lg:text-3xl text-brand-clay font-serif italic m-0" style={{ maxWidth: '22ch' }}>
                  “It does not fight its environment. It dances with it.”
                </p>
              </blockquote>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="text-lg leading-relaxed text-foreground font-medium m-0" style={{ maxWidth: '48ch' }}>
                Most organizations brace against every drought, fire and storm, clinging to each leaf
                until they exhaust themselves. What if yours grew like a Baobab instead?
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* A living promise */}
        <AnimateIn>
          <div className="text-center mb-24 lg:mb-32">
            <h2 className="text-4xl lg:text-6xl font-headline text-foreground leading-tight tracking-tight">
              A <span className="font-serif italic font-normal text-brand-clay">living</span> promise
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mt-6 mx-auto" style={{ maxWidth: '44ch' }}>
              The Baobab stands for wisdom that endures: deep roots, patient strength, and the ability
              to withstand generations of change. Practice means growth through disciplined, mindful
              action.
            </p>
            <div className="w-16 h-0.5 bg-brand-clay mx-auto mt-8" aria-hidden="true" />
          </div>
        </AnimateIn>

        {/* The fourfold wisdom */}
        <div className="text-center mb-10 lg:mb-14">
          <AnimateIn>
            <p className="text-eyebrow text-brand-green mb-4 mx-auto">The Fourfold Wisdom</p>
            <h3 className="text-3xl lg:text-4xl font-headline text-foreground tracking-tight mb-5">
              Four principles, drawn from the Baobab tree
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mx-auto" style={{ maxWidth: '56ch' }}>
              Four beliefs about growth, each mapped to a part of the baobab. They are the thinking
              beneath everything we do.{' '}
              <strong className="text-foreground font-semibold">Growth is cyclical, not linear</strong>, and
              it lasts when it is built from the inside out.
            </p>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <AnimateIn key={principle.part} delay={index * 0.08} style={{ height: '100%' }}>
              <article className="relative h-full bg-white border border-border rounded-2xl p-7 lg:p-9 overflow-hidden transition-shadow duration-300 hover:shadow-md">
                <div className={`absolute inset-y-0 left-0 w-1 ${principle.accent}`} />
                <div className="flex items-baseline gap-4 mb-5">
                  <span className={`font-headline text-4xl lg:text-5xl font-semibold leading-none tabular-nums ${principle.text}`}>
                    {principle.numeral}
                  </span>
                  <span className="font-serif italic text-lg text-muted-foreground">{principle.part}</span>
                </div>
                <h4 className="font-headline text-xl lg:text-2xl font-semibold text-foreground tracking-tight mb-2">
                  {principle.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed m-0">{principle.description}</p>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn>
          <p className="text-statement text-foreground text-center mx-auto mt-14 lg:mt-20" style={{ maxWidth: '40ch' }}>
            This is how we think.{' '}
            <button
              onClick={() => scrollTo('services')}
              className="italic underline decoration-brand-clay/40 underline-offset-4 hover:decoration-brand-clay transition-colors"
              style={{ font: 'inherit' }}
            >
              The Baobab Scaling Framework
            </button>{' '}
            is how we put it to work.
          </p>
        </AnimateIn>

        {/* Closing call to action */}
        <AnimateIn>
          <div className="mt-20 lg:mt-28 bg-brand-sand/60 rounded-2xl px-8 py-12 lg:px-16 lg:py-16 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div>
              <h3 className="text-3xl lg:text-5xl font-headline text-foreground tracking-tight leading-[1.1] mb-4">
                Ready for{' '}
                <span className="font-serif italic font-normal text-brand-green">human.led</span> change?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed m-0" style={{ maxWidth: '44ch' }}>
                Let’s move from traditional consulting to sustainable, living adaptation for your
                organization.
              </p>
            </div>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ y: 1, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="shrink-0"
            >
              <Button
                size="lg"
                onClick={() => scrollTo('contact')}
                className="bg-brand-clay text-white hover:bg-brand-clay/90 text-base px-8 py-6 shadow-sm"
              >
                Start a Conversation
              </Button>
            </motion.div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
