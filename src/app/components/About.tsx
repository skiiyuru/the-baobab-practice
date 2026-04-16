import { Droplet, Leaf, Flower2, Network } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
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
      {/* The Unified Baobab Story Narrative: The Ancient Witness + Parable + Fourfold Wisdom */}
      <div className="relative bg-white py-20 lg:py-32 overflow-clip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Visual Anchor: Sticky Image Panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 h-auto flex flex-col gap-8 pb-12 lg:pb-0 z-10 w-full bg-white lg:bg-transparent">
              <AnimateIn variant="fade-scale" duration={0.8}>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl relative group">
                  <ImageWithFallback
                    src={baobab}
                    alt="Ancient Baobab Tree Silhouette"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none mix-blend-multiply rounded-2xl"></div>
                </div>
              </AnimateIn>
            </div>

            {/* Scrolling Narrative Column */}
            <div className="lg:col-span-7 space-y-12 lg:space-y-20 pb-8">
              
              {/* The Baobab Story */}
              <div className="space-y-12">
                <div className="space-y-6">
                  {/* <AnimateIn>
                    <span className="text-sm font-semibold tracking-widest text-brand-green uppercase">Chapter 01</span>
                  </AnimateIn> */}
                  <AnimateIn delay={0.1}>
                    <h2 className="text-4xl lg:text-5xl font-headline text-foreground leading-tight tracking-tight">
                      The Baobab Story
                    </h2>
                  </AnimateIn>
                  <AnimateIn delay={0.2}>
                    <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground" style={{ maxWidth: '48ch' }}>
                      In the heart of Africa grows a tree unlike any other. The Baobab has watched civilizations rise and fall for over 2,000 years. It stores water wisely, sheds leaves strategically, and blooms in perfect timing with its pollinators.
                    </p>
                  </AnimateIn>
                </div>

                <AnimateIn variant="fade-left" delay={0.3}>
                  <blockquote className="relative pl-8 py-2 border-l-2 border-brand-clay">
                    <p className="text-2xl text-foreground font-serif italic" style={{ maxWidth: '30ch' }}>
                      "This is not a tree that fights against its environment. It dances with it."
                    </p>
                  </blockquote>
                </AnimateIn>

                <AnimateIn delay={0.2}>
                  <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground" style={{ maxWidth: '52ch' }}>
                    Today's organizations face their own droughts, fires, and storms. Most respond like trees that do not know they are Baobabs — bracing against the wind, clinging to every leaf, exhausting themselves fighting conditions instead of adapting to them.
                  </p>
                </AnimateIn>

                 <AnimateIn delay={0.3}>
                  <div className="relative bg-brand-light p-8 lg:p-10 rounded-2xl border border-border mt-8 overflow-hidden group">
                    <div className="absolute -right-4 -bottom-10 text-[10rem] font-headline text-brand-clay opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none select-none">
                      ?
                    </div>
                    <p className="text-xl lg:text-2xl font-headline text-foreground leading-snug relative z-10" style={{ maxWidth: '24ch' }}>
                      What if organizations could learn from the Baobab?
                    </p>
                  </div>
                </AnimateIn>
              </div>

              {/* The Fourfold Wisdom */}
              <div className="relative w-full pt-8">
                <div className="mb-16">
                  <AnimateIn delay={0.1}>
                    <h2 className="text-4xl lg:text-5xl font-headline text-foreground leading-tight tracking-tight">
                      The Fourfold Wisdom
                    </h2>
                  </AnimateIn>
                  <AnimateIn delay={0.2}>
                    <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground" style={{ maxWidth: '48ch' }}>
                      Four principles drawn from the baobab's ancient intelligence, mapped to the structure of the tree itself.
                    </p>
                  </AnimateIn>
                </div>

                {/* Vertical Timeline/Tree structure for the items */}
                <div className="relative">
                  {/* The central "trunk" line connecting the parts */}
                  <div className="absolute left-[1.375rem] top-8 bottom-12 w-[1px] bg-gradient-to-b from-brand-earth/80 via-brand-green/50 to-transparent hidden md:block opacity-30"></div>

                  <div className="space-y-12 lg:space-y-16 relative z-10">
                    {fourfoldWisdom.map((wisdom, index) => {
                      const Icon = wisdom.icon;

                      return (
                        <AnimateIn key={index} delay={index * 0.1} variant="fade-up">
                          <motion.div 
                            className="flex flex-col md:flex-row items-start gap-6 md:gap-8 group"
                            whileHover={{ x: 8 }}
                            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                          >
                            {/* Icon / Node */}
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-border shadow-sm group-hover:border-brand-clay/50 group-hover:shadow-md transition-all duration-300 relative z-10">
                              <Icon className={`size-5 ${wisdom.iconColor} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-1 md:pt-1.5">
                              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                                <span className="text-sm font-headline tracking-widest text-muted-foreground/50">
                                  {wisdom.numeral}
                                </span>
                                <h3 className="text-xl lg:text-2xl font-headline font-semibold text-foreground m-0 tracking-tight">
                                  {wisdom.title}
                                </h3>
                                <span className="font-serif italic text-muted-foreground text-lg">
                                  — {wisdom.subtitle}
                                </span>
                              </div>
                              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground" style={{ maxWidth: '44ch' }}>
                                {wisdom.description}
                              </p>
                            </div>
                          </motion.div>
                        </AnimateIn>
                      );
                    })}
                  </div>
                </div>
                
                 <AnimateIn variant="fade-left" delay={0.3}>
                  <blockquote className="relative pl-8 mt-16 border-l-2 border-brand-clay">
                    <p className="text-2xl text-foreground font-serif italic" style={{ maxWidth: '40ch' }}>
                      "Old Baobabs often become hollow. But they do not die — they become community centers. People gather inside them. Animals find shelter. Life continues differently, not in spite of the emptiness, but because of it."
                    </p>
                  </blockquote>
                </AnimateIn>
              </div>   
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
                marginBottom: '3rem',
                fontSize: 'clamp(1.75rem, 3.5vw + 0.5rem, 2.75rem)',
              }}
            >
              The strongest organizations are those who have learned to make their hollows into meeting places.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '3rem' }}>
              <p className="max-w-none text-lg" style={{ color: 'var(--warm-sand)' }}>
                We chose this name as a living promise. <strong className="text-white font-semibold">Practice</strong> means growth through disciplined, mindful action. <strong className="text-white font-semibold">The Baobab</strong> means wisdom that lasts — deep growth that withstands centuries of change.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Core Values — Asymmetric Bento Box Grid */}
      <div className="py-20 lg:py-32 bg-brand-light relative overflow-hidden">
        {/* Adds a soft glowing orb in background for delight */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-clay/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <AnimateIn variant="fade-up">
             <h2 className="text-4xl lg:text-5xl font-headline text-foreground leading-tight tracking-tight  mb-16 lg:mb-20 text-center">
                What we <span className="font-serif italic font-normal text-brand-green">Practice</span>
            </h2> 
          </AnimateIn>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-[2.5rem] overflow-hidden shadow-sm border border-border"
            style={{ backgroundColor: 'var(--border)' }}
          >
            {coreValues.map((value, index) => {
              // Bento Box Layout Mapping to solve 5-item monotony
              const getGridClass = (i: number) => {
                switch (i) {
                  case 0: return "md:col-span-2 md:row-span-1";
                  case 1: return "md:col-span-1 md:row-span-2";
                  case 2: return "md:col-span-1 md:row-span-1";
                  case 3: return "md:col-span-1 md:row-span-1";
                  case 4: return "md:col-span-3 md:row-span-1";
                  default: return "col-span-1";
                }
              };
              
              const isLargeText = index === 0 || index === 4;

              return (
                <div key={index} className={getGridClass(index)}>
                  <AnimateIn delay={index * 0.08} variant="fade-in" style={{ height: '100%' }}>
                    <motion.div
                      className="p-8 lg:p-12 bg-white h-full relative group cursor-default flex flex-col overflow-hidden"
                      initial="initial"
                      whileHover="hover"
                      animate="initial"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Morphing background layer */}
                      <motion.div 
                        className="absolute inset-0 bg-[oklch(0.97_0.01_65)] opacity-0 pointer-events-none mix-blend-multiply"
                        variants={{ hover: { opacity: 0.8 } }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Accent pattern (abstract shapes) fading in */}
                      {index === 0 && (
                        <motion.div 
                          className="absolute -left-12 -top-12 w-48 h-48 bg-brand-clay/5 rounded-full pointer-events-none"
                          variants={{ hover: { scale: 1.5, opacity: 0.6 } }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      )}
                      
                      {index === 4 && (
                        <motion.div 
                          className="absolute right-0 bottom-0 w-64 h-64 bg-brand-green/5 rounded-tl-[100px] pointer-events-none"
                          variants={{ hover: { scale: 1.2, opacity: 0.8 } }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      )}

                      {/* Delight: Soft numeric watermark */}
                      <motion.div 
                        className="absolute top-6 right-6 lg:top-8 lg:right-10 text-[5rem] lg:text-[7rem] font-headline font-light leading-none select-none pointer-events-none opacity-5 group-hover:opacity-10 text-brand-clay group-hover:text-brand-green transition-colors duration-500"
                        variants={{ 
                          initial: { x: 0, y: 0, scale: 1 },
                          hover: { x: -8, y: 8, scale: 1.05 }
                        }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      >
                        0{index + 1}
                      </motion.div>

                      <div className="relative z-10 flex flex-col h-full justify-between gap-8 lg:gap-12">
                        <div>
                          {/* Animated line decorator */}
                          <motion.div
                            className="h-1 w-8 bg-brand-clay/30 rounded-full mb-6"
                            variants={{ hover: { width: 48, backgroundColor: 'var(--brand-green)' } }}
                            transition={{ duration: 0.4 }}
                          />
                          <motion.h4 
                            className={`font-headline font-semibold text-foreground tracking-tight m-0 ${isLargeText ? 'text-3xl lg:text-4xl pr-12 lg:pr-24' : 'text-2xl lg:text-3xl pr-12'}`}
                            variants={{ hover: { x: 4 } }}
                            transition={{ duration: 0.4 }}
                          >
                            {value.name}
                          </motion.h4>
                        </div>
                        
                        <div className="flex items-end justify-between gap-4">
                          <p className={`text-muted-foreground leading-relaxed m-0 ${isLargeText ? 'text-lg lg:text-xl max-w-2xl' : 'text-base lg:text-lg'}`}>
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimateIn>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}