import { AlertCircle, Users2, Compass, TrendingUp, Scaling, Sprout, TreeDeciduous, Leaf, Flower } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: AlertCircle,
    title: 'Crisis Response Framework',
    subtitle: 'Adaptive Change Under Pressure',
    description: 'A rapid adaptation of the Baobab Framework for leading transformation during crisis, when time is compressed, stakes are high, and survival feels uncertain. This version keeps adaptive principles intact while emphasizing psychological safety, rapid learning, and decisive action.',
    color: 'rgba(196, 106, 58, 0.15)',
    iconColor: '#C46A3A',
  },
  {
    icon: Users2,
    title: 'Leadership Transition Framework',
    subtitle: 'Navigating Change with Wisdom & Intention',
    description: 'Guide organizations through leadership transitions, whether planned successions, unexpected departures, or structural changes, with psychological safety, clear processes, and preserved organizational wisdom. This framework addresses both the technical and adaptive challenges of leadership change.',
    color: 'rgba(111, 138, 109, 0.15)',
    iconColor: '#6F8A6D',
  },
  {
    icon: Compass,
    title: 'Cultural Transition Framework',
    subtitle: 'Embodying New Mission, Vision & Values',
    description: 'Guide organizations through the adaptive work of shifting from stated to lived mission, vision, and values. This framework recognizes that cultural transition is not about communication or compliance, but about collective identity evolution, requiring changes in behavior, systems, and underlying assumptions.',
    color: 'rgba(74, 55, 40, 0.12)',
    iconColor: '#4A3728',
  },
  {
    icon: TrendingUp,
    title: 'Organizational Revival Framework',
    subtitle: 'Rebuilding Trust, Ownership & Performance',
    description: 'Guide midsized organizations through the integrated work of restoring trust, authenticity, ownership, collaboration, and motivation as interconnected foundations for sustainable performance revival. This unified framework recognizes that trust, ownership, and performance are expressions of the same organizational ecosystem.',
    color: 'rgba(111, 138, 109, 0.15)',
    iconColor: '#6F8A6D',
  },
  {
    icon: Scaling,
    title: 'Scaling Framework',
    subtitle: 'Growth Without Losing Soul',
    description: 'Guide midsized organizations through the complex adaptive challenges of scaling, managing rapid growth while preserving culture, maintaining quality, and building sustainable systems. Scaling requires coordinated evolution across people, processes, culture, and leadership.',
    color: 'rgba(196, 106, 58, 0.15)',
    iconColor: '#C46A3A',
  },
];

const phases = [
  {
    icon: Sprout,
    phase: 'Phase 1',
    title: 'ROOT',
    subtitle: 'Diagnose & Align',
    duration: '4–6 Weeks',
    purpose: 'Understand the real challenge beneath the symptoms and establish shared purpose.',
    activities: [
      'Organizational Immersion: Listening sessions, team shadowing, review of structures and narratives',
      'Adaptive vs. Technical Diagnosis: Distinguish between technical and adaptive challenges, map stakeholder impacts, identify resistance',
      'Purpose & Values Clarification: Co-create vision of thriving, align on values, establish psychological safety',
    ],
    deliverable: 'Adaptive Challenge Map & Shared Commitment Compact',
    color: 'bg-amber-100 text-amber-700 border-amber-200',
  },
  {
    icon: TreeDeciduous,
    phase: 'Phase 2',
    title: 'TRUNK',
    subtitle: 'Build Foundation & Experiment',
    duration: '8–12 Weeks',
    purpose: 'Develop adaptive capacity through safe-to-fail experiments and new leadership practices.',
    activities: [
      'Leadership Container Building: Develop systemic thinking, create learning environments, establish feedback rituals',
      'Prototype Experiments: Design small, reversible tests of new behaviors/processes',
      'Skill & Mindset Development: Workshops on adaptive leadership, courageous conversations, systems thinking',
    ],
    deliverable: 'Experimental Learning Portfolio & Leadership Practice Blueprint',
    color: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  {
    icon: Leaf,
    phase: 'Phase 3',
    title: 'BRANCH',
    subtitle: 'Scale & Integrate',
    duration: '12–24 Weeks',
    purpose: 'Spread successful practices and integrate new capabilities into the organization.',
    activities: [
      'Learning Harvest & Sense-Making: Distill lessons from experiments, create new success narratives',
      'Systemic Integration: Align structures/processes, develop internal coaches, adjust metrics/incentives',
      'Cross-Pollination: Build peer learning communities, embed adaptive routines, celebrate growth',
    ],
    deliverable: 'Integration Roadmap & Internal Capability Network',
    color: 'bg-green-100 text-green-700 border-green-200',
  },
  {
    icon: Flower,
    phase: 'Phase 4',
    title: 'CANOPY',
    subtitle: 'Sustain & Evolve',
    duration: 'Ongoing',
    purpose: 'Embed adaptive capacity into the organization\'s DNA for continuous evolution.',
    activities: [
      'Ritual & Rhythm Establishment: Regular health checks, renewal ceremonies, ongoing coaching circles',
      'Legacy & Succession Planning: Develop next-gen leaders, document principles, create transition rituals',
      'Ecosystem Connection: Link to broader learning communities, contribute to field knowledge, prepare for future challenges',
    ],
    deliverable: 'Sustainable Practice Playbook & Evolution Readiness Assessment',
    color: 'bg-purple-100 text-purple-700 border-purple-200',
  },
];

const distinctivePractices = [
  {
    title: 'The "Both/And" Method',
    description: 'Balance competing values: stability & agility, performance & well-being, individual & collective success, legacy & innovation.',
  },
  {
    title: 'Heat Regulation',
    description: 'Manage the "productive heat" of change to avoid complacency and burnout, while fostering engagement and creativity.',
  },
  {
    title: 'Loss Acknowledgement Rituals',
    description: 'Honor what\'s being left behind, grieve endings, and create psychological safety for new beginnings.',
  },
  {
    title: '"Good Enough for Now, Safe Enough to Try"',
    description: 'Encourage rapid prototyping, value learning over perfection, treat failure as data.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32" style={{ backgroundColor: '#F7F4EF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>
            Our Services
          </h2>
          <p className="text-base max-w-3xl mx-auto" style={{ color: '#6B5D4F' }}>
            We offer specialized frameworks designed to support your organization through adaptive transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(74, 55, 40, 0.1)' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: service.color }}>
                    <Icon className="size-6" style={{ color: service.iconColor }} />
                  </div>
                  <CardTitle className="mb-1" style={{ color: '#4A3728' }}>{service.title}</CardTitle>
                  <CardDescription className="text-sm font-medium" style={{ color: '#6B5D4F' }}>
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed" style={{ color: '#6B5D4F' }}>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Visual Break - Team Collaboration */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center rounded-2xl overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
            <div className="aspect-[4/3] relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707557741615-b9f4c8a61192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldHdvcmslMjBjb25uZWN0aW9ucyUyMGxpZ2h0JTIwZG90cyUyMGNvbGxlY3RpdmV8ZW58MXx8fHwxNzc0MzU4NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="The Gathering Canopy - Collective strength through connection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 space-y-6">
              <h3 className="text-2xl font-bold" style={{ color: '#6F8A6D', fontFamily: 'var(--font-headline)' }}>
                Working Together Towards Transformation
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#6B5D4F' }}>
                Our approach brings teams together to co-create solutions, build shared understanding, and develop the collective capacity needed for sustainable change. Through facilitated workshops, coaching sessions, and collaborative learning experiences, we help organizations transform challenges into opportunities for growth.
              </p>
              <div className="pt-4">
                <p className="text-base font-semibold" style={{ color: '#4A3728' }}>
                  Every transformation journey is unique, and we walk alongside you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Baobab Framework */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>
              The Baobab Framework
            </h3>
            <p className="text-base max-w-3xl mx-auto mb-8" style={{ color: '#6B5D4F' }}>
              Our Process for Adaptive Transformation
            </p>
            <div className="rounded-2xl p-8 max-w-4xl mx-auto" style={{ background: 'linear-gradient(to bottom right, #E6D8C9, rgba(111, 138, 109, 0.2))' }}>
              <h4 className="text-lg font-bold mb-3" style={{ color: '#4A3728' }}>Our Operating Philosophy</h4>
              <p className="text-base leading-relaxed" style={{ color: '#4A3728' }}>
                We do not deliver solutions, we build capacity. Our framework is cyclical, not linear, because authentic growth and adaptive change require continuous learning, not one-time fixes.
              </p>
            </div>
          </div>

          {/* The Baobab Growth Cycle */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-center mb-12" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>
              The Baobab Growth Cycle™
            </h4>

            <div className="space-y-8">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <div key={index} className={`rounded-2xl border-2 ${phase.color} p-8 lg:p-10`}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`w-16 h-16 rounded-full ${phase.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="size-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                          <h5 className="text-xl font-bold text-gray-900">
                            {phase.title}
                          </h5>
                          <span className="text-sm font-medium text-gray-600">
                            {phase.phase}
                          </span>
                        </div>
                        <p className="text-base font-semibold text-gray-700 mb-1">{phase.subtitle}</p>
                        <p className="text-sm text-gray-600 font-medium">{phase.duration}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Purpose:</p>
                        <p className="text-gray-700 leading-relaxed">{phase.purpose}</p>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 mb-3">Core Activities:</p>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-3">
                              <span className="text-gray-500 mt-1">•</span>
                              <span className="text-gray-700 leading-relaxed">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-300">
                        <p className="font-semibold text-gray-900 mb-1">Deliverable:</p>
                        <p className="text-gray-800 font-medium">{phase.deliverable}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Distinctive Practices */}
          <div className="text-white rounded-2xl p-8 lg:p-12" style={{ backgroundColor: '#4A3728' }}>
            <h4 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-headline)' }}>Distinctive Practices</h4>
            <div className="grid md:grid-cols-2 gap-8">
              {distinctivePractices.map((practice, index) => (
                <div key={index} className="space-y-2">
                  <h5 className="text-lg font-bold text-white">{practice.title}</h5>
                  <p className="leading-relaxed" style={{ color: '#E6D8C9' }}>{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Engagement Models */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>
              Client Engagement Models
            </h3>
            <p className="text-base max-w-3xl mx-auto" style={{ color: '#6B5D4F' }}>
              Flexible approaches tailored to your organizational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-xl p-6 border-2" style={{ backgroundColor: '#ffffff', borderColor: '#6F8A6D' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(111, 138, 109, 0.15)' }}>
                <TreeDeciduous className="size-6" style={{ color: '#6F8A6D' }} />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#4A3728' }}>Full Transformation Journey</h4>
              <p className="text-sm mb-3" style={{ color: '#C46A3A', fontWeight: 600 }}>All four phases, 12–18 months</p>
              <p className="leading-relaxed" style={{ color: '#6B5D4F' }}>Deep cultural evolution</p>
            </div>

            <div className="rounded-xl p-6 border-2" style={{ backgroundColor: '#ffffff', borderColor: '#6F8A6D' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(111, 138, 109, 0.15)' }}>
                <Sprout className="size-6" style={{ color: '#6F8A6D' }} />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#4A3728' }}>Adaptive Challenge Sprint</h4>
              <p className="text-sm mb-3" style={{ color: '#C46A3A', fontWeight: 600 }}>Phases 1–2, 4–6 months</p>
              <p className="leading-relaxed" style={{ color: '#6B5D4F' }}>Specific challenge</p>
            </div>

            <div className="rounded-xl p-6 border-2" style={{ backgroundColor: '#ffffff', borderColor: '#6F8A6D' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(111, 138, 109, 0.15)' }}>
                <Users2 className="size-6" style={{ color: '#6F8A6D' }} />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#4A3728' }}>Leadership Container Development</h4>
              <p className="text-sm mb-3" style={{ color: '#C46A3A', fontWeight: 600 }}>Custom focus on Phase 2</p>
              <p className="leading-relaxed" style={{ color: '#6B5D4F' }}>Executive teams</p>
            </div>

            <div className="rounded-xl p-6 border-2" style={{ backgroundColor: '#ffffff', borderColor: '#6F8A6D' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(111, 138, 109, 0.15)' }}>
                <Flower className="size-6" style={{ color: '#6F8A6D' }} />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#4A3728' }}>Sustaining Partnership</h4>
              <p className="text-sm mb-3" style={{ color: '#C46A3A', fontWeight: 600 }}>Ongoing Phase 4 support</p>
              <p className="leading-relaxed" style={{ color: '#6B5D4F' }}>Maintaining adaptive capacity</p>
            </div>
          </div>
        </div>

        {/* What Makes Our Process Different */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>
              What Makes Our Process Different
            </h3>
          </div>

          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border-2" style={{ borderColor: '#6F8A6D' }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: '#4A3728' }}>
                    <th className="py-4 px-6 text-left text-white font-bold">Traditional Change Management</th>
                    <th className="py-4 px-6 text-left text-white font-bold">The Baobab Framework</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: '#ffffff' }}>
                    <td className="py-4 px-6 border-b" style={{ borderColor: '#E6D8C9', color: '#6B5D4F' }}>Plans then implements</td>
                    <td className="py-4 px-6 border-b font-semibold" style={{ borderColor: '#E6D8C9', color: '#6F8A6D' }}>Experiments then learns</td>
                  </tr>
                  <tr style={{ backgroundColor: '#F7F4EF' }}>
                    <td className="py-4 px-6 border-b" style={{ borderColor: '#E6D8C9', color: '#6B5D4F' }}>Manages resistance</td>
                    <td className="py-4 px-6 border-b font-semibold" style={{ borderColor: '#E6D8C9', color: '#6F8A6D' }}>Engages resistance as data</td>
                  </tr>
                  <tr style={{ backgroundColor: '#ffffff' }}>
                    <td className="py-4 px-6 border-b" style={{ borderColor: '#E6D8C9', color: '#6B5D4F' }}>Focuses on adoption</td>
                    <td className="py-4 px-6 border-b font-semibold" style={{ borderColor: '#E6D8C9', color: '#6F8A6D' }}>Focuses on adaptation</td>
                  </tr>
                  <tr style={{ backgroundColor: '#F7F4EF' }}>
                    <td className="py-4 px-6 border-b" style={{ borderColor: '#E6D8C9', color: '#6B5D4F' }}>Creates dependency on experts</td>
                    <td className="py-4 px-6 border-b font-semibold" style={{ borderColor: '#E6D8C9', color: '#6F8A6D' }}>Builds internal capability</td>
                  </tr>
                  <tr style={{ backgroundColor: '#ffffff' }}>
                    <td className="py-4 px-6 border-b" style={{ borderColor: '#E6D8C9', color: '#6B5D4F' }}>Measures compliance</td>
                    <td className="py-4 px-6 border-b font-semibold" style={{ borderColor: '#E6D8C9', color: '#6F8A6D' }}>Measures learning and growth</td>
                  </tr>
                  <tr style={{ backgroundColor: '#F7F4EF' }}>
                    <td className="py-4 px-6" style={{ color: '#6B5D4F' }}>Linear, project-based</td>
                    <td className="py-4 px-6 font-semibold" style={{ color: '#6F8A6D' }}>Cyclical, practice-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 lg:p-12" style={{ backgroundColor: '#6F8A6D' }}>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-headline)' }}>
              Our Promise
            </h3>
            <p className="text-base lg:text-lg leading-relaxed mb-8 text-white">
              We will not just help you solve today's problem. We will help you build the capacity to solve tomorrow's unknown challenges, with authenticity, resilience, and collective wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <h4 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-headline)' }}>
                Ready to plant your Baobab?
              </h4>
              <Button 
                size="lg" 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ backgroundColor: '#C46A3A', color: '#ffffff' }}
                className="hover:opacity-90 transition-opacity"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}