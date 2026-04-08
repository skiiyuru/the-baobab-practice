import { useState } from 'react';
import { AlertCircle, Users2, Compass, TrendingUp, Scaling, Sprout, TreeDeciduous, Leaf, Flower, ChevronDown, Scale, Flame, HeartHandshake, DatabaseZap, ChartNoAxesCombined } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
    purpose: 'Embed adaptive capacity into the organization\'s DNA.',
    activities: [
      'Regular health checks, renewal ceremonies, coaching circles',
      'Develop next-gen leaders and document guiding principles',
      'Link to broader learning communities and prepare for future challenges',
    ],
    deliverable: 'Sustainable Practice Playbook & Evolution Readiness Assessment',
    phaseColor: 'bg-phase-canopy-bg border-phase-canopy-border text-phase-canopy-text',
  },
];

function PhaseAccordion({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = phase.icon;

  return (
    <div className={`rounded-xl border-2 overflow-hidden ${phase.phaseColor}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
        aria-expanded={isOpen}
      >
        <Icon className="size-7 flex-shrink-0" />
        <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
          <span className="text-lg font-bold">{phase.title}</span>
          <span className="text-sm font-medium opacity-75">{phase.subtitle}</span>
        </div>
        <span className="text-sm font-medium opacity-75 hidden sm:block">{phase.duration}</span>
        <ChevronDown
          className={`size-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          style={{ transitionTimingFunction: 'var(--ease-out-quart)', transitionDuration: 'var(--duration-normal)' }}
        />
      </button>

      {isOpen && (
        <div className="px-5 lg:px-6 pb-6 pt-2 border-t border-current/10">
          <p className="text-sm font-medium mb-4 sm:hidden">{phase.duration}</p>
          <p className="font-medium text-foreground mb-4">{phase.purpose}</p>
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
      )}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-brand-light">
      {/* Our Promise — leading hook */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl p-8 lg:p-12 bg-brand-green">
            <p className="text-xl lg:text-2xl leading-relaxed text-white font-[family-name:var(--font-headline)]">
              We will not just help you solve today's problem. We will help you build the capacity to solve tomorrow's unknown challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Service Frameworks — clean numbered list */}
      <div className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-foreground font-[family-name:var(--font-headline)]">
            Our Frameworks
          </h2>

          <div className="space-y-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex items-start gap-6 py-8 border-b border-border last:border-b-0">
                  <span className="text-3xl lg:text-4xl font-light text-neutral-300 font-[family-name:var(--font-headline)] leading-none pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{service.title}</h3>
                    <p className="text-sm font-medium text-brand-green mb-2">{service.subtitle}</p>
                    <p className="text-base leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual Break */}
      <div className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-center rounded-2xl overflow-hidden bg-white">
            <div className="aspect-[4/3] relative">
              <ImageWithFallback
                src={journeyImg}
                alt="The Gathering Canopy - Collective strength through connection"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-8 lg:p-12">
              <h4 className="text-2xl font-bold mb-2 text-foreground font-[family-name:var(--font-headline)]">Your Journey. Our Commitment.</h4>

              <p className="font-medium leading-relaxed text-foreground">
                We walk alongside you, every step. Your organization knows its own terrain. We bring the tools, presence, and partnership to navigate it with clarity and confidence. No blueprints. No presets. Your path, your pace. Your change. Made to last.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Baobab Growth Cycle — accordion timeline */}
      <div className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground font-[family-name:var(--font-headline)]">
              The Baobab Growth Cycle™
            </h3>
            <p className="text-base text-muted-foreground">
              Cyclical, not linear — authentic growth requires continuous learning.
            </p>
          </div>

          <div className="space-y-4">
            {phases.map((phase, index) => (
              <PhaseAccordion key={index} phase={phase} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* What Makes Us Different — comparison table */}
      <div className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl lg:text-3xl font-bold mb-10 text-center text-foreground font-[family-name:var(--font-headline)]">
            What Makes Us Different
          </h3>

          <div className="rounded-2xl overflow-hidden border-2 border-brand-green">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-earth">
                    <th className="py-4 px-6 text-left text-white font-bold">Traditional Approach</th>
                    <th className="py-4 px-6 text-left text-white font-bold">The Baobab Framework</th>
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
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-brand-light'}>
                      <td className="py-4 px-6 border-b border-brand-sand text-muted-foreground">{traditional}</td>
                      <td className="py-4 px-6 border-b border-brand-sand font-semibold text-brand-green">{baobab}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Baobab Distinctive Practices */}
      <div className="py-16 lg:py-24 bg-white/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl lg:text-3xl font-bold mb-12 text-center text-foreground font-[family-name:var(--font-headline)]">
            Baobab Distinctive Practices
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* The Both/And Method */}
            <div className="bg-white p-8 rounded-2xl border-2 border-brand-sand flex flex-col h-full hover:border-brand-green/50 transition-colors duration-300">
              <Scale className="size-8 text-brand-clay mb-6" />
              <h4 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-headline)]">The "Both/And" Method</h4>
              <p className="text-base leading-relaxed text-muted-foreground">Balance competing values (stability & agility, performance & well-being, individual & collective success, legacy & innovation).</p>
            </div>

            {/* Heat Regulation */}
            <div className="bg-white p-8 rounded-2xl border-2 border-brand-sand flex flex-col h-full hover:border-brand-green/50 transition-colors duration-300">
              <Flame className="size-8 text-brand-green mb-6" />
              <h4 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-headline)]">Heat Regulation</h4>
              <p className="text-base leading-relaxed text-muted-foreground">Manage the “productive heat” of change, avoid complacency and burnout, foster engagement and creativity.</p>
            </div>

            {/* Loss Acknowledgement Rituals */}
            <div className="bg-white p-8 rounded-2xl border-2 border-brand-sand flex flex-col h-full hover:border-brand-green/50 transition-colors duration-300">
              <HeartHandshake className="size-8 text-brand-clay mb-6" />
              <h4 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-headline)]">Loss Acknowledgement Rituals</h4>
              <p className="text-base leading-relaxed text-muted-foreground">Honor what’s being left behind, grieve endings, and create psychological safety for new beginnings.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-brand-sand flex flex-col h-full hover:border-brand-green/50 transition-colors duration-300">
              <ChartNoAxesCombined className="size-8 text-brand-clay mb-6" />
              <h4 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-headline)]">Good Enough for Now, Safe Enough to Try</h4>
              <p className="text-base leading-relaxed text-muted-foreground">Encourage rapid prototyping, value learning over perfection, and treat failure as data.</p>
            </div>
          </div>

         


        </div>
      </div>

      {/* CTA */}
      <div className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl lg:text-2xl font-semibold mb-8 text-foreground font-[family-name:var(--font-headline)]">
            Ready for Human.Led Change?
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-clay text-white hover:bg-brand-clay/90"
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}