import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Users2, Compass, TrendingUp, Scaling, Sprout, TreeDeciduous, Leaf, Flower, ChevronDown, Scale, Flame, HeartHandshake, ChartNoAxesCombined } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimateIn } from './AnimateIn';
import journeyImg from '../../assets/journey.jpeg';

const services = [
  {
    icon: AlertCircle,
    title: 'Crisis Response',
    subtitle: 'Adaptive Change Under Pressure',
    description: 'Rapid transformation when time is compressed, stakes are high, and survival feels uncertain.',
    iconColor: 'text-brand-clay',
  },
  {
    icon: Users2,
    title: 'Leadership Transition',
    subtitle: 'Navigating Change with Wisdom',
    description: 'Guide organizations through planned successions, unexpected departures, or structural changes.',
    iconColor: 'text-brand-green',
  },
  {
    icon: Compass,
    title: 'Cultural Transition',
    subtitle: 'Embodying New Mission & Values',
    description: 'Shift from stated to lived mission and values through collective identity evolution.',
    iconColor: 'text-foreground',
  },
  {
    icon: TrendingUp,
    title: 'Organizational Revival',
    subtitle: 'Rebuilding Trust & Performance',
    description: 'Restore trust, authenticity, and ownership as foundations for sustainable performance.',
    iconColor: 'text-brand-green',
  },
  {
    icon: Scaling,
    title: 'Scaling',
    subtitle: 'Growth Without Losing Soul',
    description: 'Manage rapid growth while preserving culture, quality, and sustainable systems.',
    iconColor: 'text-brand-clay',
  },
];

const phases = [
  {
    icon: Sprout,
    title: 'ROOT',
    subtitle: 'Diagnose & Align',
    duration: '4–6 Weeks',
    purpose: 'Understand the real challenge beneath the symptoms and establish shared purpose.',
    activities: [
      'Organizational immersion through listening sessions and team shadowing',
      'Distinguish between technical and adaptive challenges',
      'Co-create vision of thriving and establish psychological safety',
    ],
    deliverable: 'Adaptive Challenge Map & Shared Commitment Compact',
    phaseColor: 'bg-phase-root-bg border-phase-root-border text-phase-root-text',
  },
  {
    icon: TreeDeciduous,
    title: 'TRUNK',
    subtitle: 'Build Foundation',
    duration: '8–12 Weeks',
    purpose: 'Develop adaptive capacity through safe-to-fail experiments.',
    activities: [
      'Build leadership containers with systemic thinking and feedback rituals',
      'Design small, reversible experiments for new behaviors',
      'Workshops on adaptive leadership and courageous conversations',
    ],
    deliverable: 'Experimental Learning Portfolio & Leadership Practice Blueprint',
    phaseColor: 'bg-phase-trunk-bg border-phase-trunk-border text-phase-trunk-text',
  },
  {
    icon: Leaf,
    title: 'BRANCH',
    subtitle: 'Scale & Integrate',
    duration: '12–24 Weeks',
    purpose: 'Spread successful practices across the organization.',
    activities: [
      'Distill lessons from experiments and create success narratives',
      'Align structures, develop internal coaches, adjust incentives',
      'Build peer learning communities and embed adaptive routines',
    ],
    deliverable: 'Integration Roadmap & Internal Capability Network',
    phaseColor: 'bg-phase-branch-bg border-phase-branch-border text-phase-branch-text',
  },
  {
    icon: Flower,
    title: 'CANOPY',
    subtitle: 'Sustain & Evolve',
    duration: 'Ongoing',
    purpose: "Embed adaptive capacity into the organization's DNA.",
    activities: [
      'Regular health checks, renewal ceremonies, coaching circles',
      'Develop next-gen leaders and document guiding principles',
      'Link to broader learning communities and prepare for future challenges',
    ],
    deliverable: 'Sustainable Practice Playbook & Evolution Readiness Assessment',
    phaseColor: 'bg-phase-canopy-bg border-phase-canopy-border text-phase-canopy-text',
  },
];

const distinctivePractices = [
  {
    icon: Scale,
    numeral: '01',
    title: 'The "Both/And" Method',
    description: 'Balance competing values — stability & agility, performance & well-being, individual & collective success, legacy & innovation.',
    iconColor: 'text-brand-clay',
  },
  {
    icon: Flame,
    numeral: '02',
    title: 'Heat Regulation',
    description: 'Manage the "productive heat" of change — avoid complacency and burnout, foster engagement and creativity.',
    iconColor: 'text-brand-green',
  },
  {
    icon: HeartHandshake,
    numeral: '03',
    title: 'Loss Acknowledgement Rituals',
    description: 'Honor what is being left behind, grieve endings, and create psychological safety for new beginnings.',
    iconColor: 'text-brand-clay',
  },
  {
    icon: ChartNoAxesCombined,
    numeral: '04',
    title: 'Good Enough for Now, Safe Enough to Try',
    description: 'Encourage rapid prototyping, value learning over perfection, and treat failure as data.',
    iconColor: 'text-brand-green',
  },
];

function PhaseAccordion({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = phase.icon;

  return (
    <AnimateIn delay={index * 0.08} variant="fade-up">
      <div className={`rounded-xl border-2 overflow-hidden ${phase.phaseColor}`}>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
          aria-expanded={isOpen}
          whileHover={{ backgroundColor: 'rgba(0,0,0,0.03)' }}
          transition={{ duration: 0.15 }}
        >
          <Icon className="size-7 flex-shrink-0" />
          <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <span className="text-lg font-bold">{phase.title}</span>
            <span className="text-sm font-medium opacity-75">{phase.subtitle}</span>
          </div>
          <span className="text-sm font-medium opacity-75 hidden sm:block tabular-nums">{phase.duration}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >
            <ChevronDown className="size-5 flex-shrink-0" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 lg:px-6 pb-6 pt-2 border-t border-current/10">
                <p className="text-sm font-medium mb-4 sm:hidden">{phase.duration}</p>
                <p className="font-medium text-foreground mb-4" style={{ maxWidth: '58ch' }}>{phase.purpose}</p>
                <ul className="space-y-2 mb-4">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 opacity-50">•</span>
                      <span className="text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-foreground">
                  Deliverable: <span className="font-medium">{phase.deliverable}</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimateIn>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-brand-light">
      {/* Our Promise — left-aligned editorial statement */}
      <div className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.5rem)',
                fontWeight: 700,
                lineHeight: 1.25,
                color: 'var(--foreground)',
                maxWidth: '26ch',
              }}
            >
              We will not just help you solve today's problem.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p
              className="mt-5"
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.5rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.25,
                color: 'var(--growth-green)',
                maxWidth: '32ch',
              }}
            >
              We will help you build the capacity to solve tomorrow's unknown challenges.
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* Service Frameworks — numbered list with stag­ger and hover */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="mb-12 text-foreground">
              Our Frameworks
            </h2>
          </AnimateIn>

          <div className="space-y-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimateIn key={index} delay={index * 0.08} variant="fade-up">
                  <motion.div
                    className="flex items-start gap-6 py-8 px-3 -mx-3 hoverable-row"
                    style={{
                      borderTop: index === 0 ? '1px solid var(--border)' : undefined,
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
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
                        paddingTop: '0.1rem',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <Icon className={`size-5 flex-shrink-0 ${service.iconColor}`} />
                        <h3 className="text-foreground" style={{ fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.3 }}>
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-brand-green mb-2">{service.subtitle}</p>
                      <p className="text-base leading-relaxed text-muted-foreground" style={{ maxWidth: '52ch' }}>{service.description}</p>
                    </div>
                  </motion.div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual Break */}
      <div className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fade-scale" duration={0.8}>
            <div className="grid lg:grid-cols-2 gap-0 items-center rounded-2xl overflow-hidden bg-white">
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={journeyImg}
                  alt="The Gathering Canopy - Collective strength through connection"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-8 lg:p-14">
                <h3 className="mb-5 text-foreground">Your Journey. Our Commitment.</h3>
                <p className="text-base font-medium leading-relaxed text-foreground" style={{ maxWidth: '42ch' }}>
                  We walk alongside you, every step. Your organization knows its own terrain. We bring the tools, presence, and partnership to navigate it with clarity and confidence. No blueprints. No presets. Your path, your pace. Your change. Made to last.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* The Baobab Growth Cycle — accordion timeline with animated expand */}
      <div className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <AnimateIn>
              <h3 className="text-foreground mb-3">
                The Baobab Growth Cycle™
              </h3>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-base text-muted-foreground" style={{ maxWidth: '44ch' }}>
                Cyclical, not linear — authentic growth requires continuous learning.
              </p>
            </AnimateIn>
          </div>

          <div className="space-y-4">
            {phases.map((phase, index) => (
              <PhaseAccordion key={index} phase={phase} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* What Makes Us Different — comparison table with hover */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h3 className="mb-12 text-center text-foreground">
              What Makes Us Different
            </h3>
          </AnimateIn>

          <AnimateIn variant="fade-scale" delay={0.1}>
            <div className="rounded-2xl overflow-hidden border-2 border-brand-green">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-brand-earth">
                      <th className="py-5 px-6 text-left text-white font-bold text-lg">Traditional Approach</th>
                      <th className="py-5 px-6 text-left text-white font-bold text-lg">The Baobab Framework</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Plans then implements', 'Experiments then learns'],
                      ['Manages resistance', 'Engages resistance as data'],
                      ['Focuses on adoption', 'Focuses on adaptation'],
                      ['Creates dependency on experts', 'Builds internal capability'],
                      ['Measures compliance', 'Measures learning and growth'],
                      ['Linear, project-based', 'Cyclical, practice-based'],
                    ].map(([traditional, baobab], index) => (
                      <tr
                        key={index}
                        className={`transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-brand-light'}`}
                        style={{ transitionDuration: 'var(--duration-fast)' }}
                      >
                        <td className="py-4 px-6 border-b border-brand-sand text-muted-foreground">{traditional}</td>
                        <td className="py-4 px-6 border-b border-brand-sand font-semibold text-brand-green">{baobab}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Baobab Distinctive Practices — asymmetric numbered layout */}
      <div className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h3 className="mb-12 text-foreground">
              Baobab Distinctive Practices
            </h3>
          </AnimateIn>

          <div className="space-y-0">
            {distinctivePractices.map((practice, index) => {
              const Icon = practice.icon;
              const isEven = index % 2 !== 0;
              return (
                <AnimateIn key={index} delay={index * 0.1} variant="fade-up">
                  <motion.div
                    className="flex items-start gap-6 py-10 px-3 -mx-3 hoverable-row"
                    style={{
                      borderBottom: '1px solid var(--border)',
                      borderTop: index === 0 ? '1px solid var(--border)' : undefined,
                      paddingLeft: isEven ? 'clamp(12px, 10vw, 6rem)' : undefined,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-headline)',
                        fontSize: 'clamp(2rem, 3vw, 3.5rem)',
                        fontWeight: 700,
                        lineHeight: 1,
                        color: 'var(--resilience-clay)',
                        opacity: 0.25,
                        flexShrink: 0,
                        width: '3.5rem',
                        paddingTop: '0.1rem',
                      }}
                    >
                      {practice.numeral}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className={`size-6 flex-shrink-0 ${practice.iconColor}`} />
                        <h3
                          className="text-foreground"
                          style={{ fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.3 }}
                        >
                          {practice.title}
                        </h3>
                      </div>
                      <p className="text-base leading-relaxed text-muted-foreground" style={{ maxWidth: '52ch' }}>
                        {practice.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p
              className="text-display"
              style={{
                color: 'var(--foreground)',
                maxWidth: '28ch',
                marginBottom: '2.5rem',
              }}
            >
              Ready for Human.Led Change?
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15} variant="fade-scale">
            <motion.div
              className="inline-block rounded-lg"
              whileHover={{ y: -2, boxShadow: '0 8px 24px oklch(0.58 0.14 45 / 0.3)' }}
              whileTap={{ y: 1, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.25, 1, 0.5, 1] }}
            >
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-brand-clay text-white hover:bg-brand-clay/90 shadow-lg"
              >
                Start a Conversation
              </Button>
            </motion.div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}