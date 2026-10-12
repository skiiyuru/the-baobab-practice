import { ArrowRight } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

const shifts = [
  ['Planning, then implementing', 'Experimenting, then learning'],
  ['Managing resistance', 'Engaging resistance as data'],
  ['Focusing on adoption', 'Focusing on adaptation'],
  ['Creating dependency', 'Building internal capability'],
  ['Measuring compliance', 'Measuring learning and growth'],
  ['Linear project timelines', 'Cyclical, ongoing practice'],
];

const distinctivePractices = [
  {
    title: 'The “Both/And” Method',
    description:
      'Balance competing values: stability and agility, performance and well-being, individual and collective success, legacy and innovation.',
    accent: 'bg-brand-green',
  },
  {
    title: 'Heat Regulation',
    description:
      'Manage the “productive heat” of change. Avoid complacency and burnout, and keep engagement and creativity alive.',
    accent: 'bg-brand-clay',
  },
  {
    title: 'Loss Acknowledgement Rituals',
    description:
      'Honor what is being left behind. Grieve endings, and create psychological safety for new beginnings.',
    accent: 'bg-brand-gold',
  },
  {
    title: 'Good Enough for Now, Safe Enough to Try',
    description:
      'Encourage rapid prototyping, value learning over perfection, and treat failure as data.',
    accent: 'bg-brand-earth',
  },
];

export function Approach() {
  return (
    <section id="approach" className="bg-brand-light py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-20">
          <AnimateIn>
            <p className="text-eyebrow text-brand-clay mb-4 mx-auto">Our Approach</p>
            <h2 className="text-4xl lg:text-5xl font-headline text-foreground leading-tight tracking-tight mb-6">
              What makes us{' '}
              <span className="font-serif italic font-normal text-brand-clay">different</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mx-auto" style={{ maxWidth: '46ch' }}>
              Traditional consulting focuses on static adoption. We focus on{' '}
              <strong className="text-foreground font-semibold">sustainable, living adaptation.</strong>
            </p>
          </AnimateIn>
        </div>

        {/* Paired contrast rows */}
        <div className="mb-24 lg:mb-32">
          <div className="hidden md:grid grid-cols-[1fr_3.5rem_1fr] mb-3">
            <span className="text-eyebrow text-muted-foreground px-6">Instead of</span>
            <span />
            <span className="text-eyebrow text-brand-green px-6">We believe in</span>
          </div>

          <div className="flex flex-col gap-3">
            {shifts.map(([traditional, baobab], index) => (
              <AnimateIn key={traditional} delay={index * 0.06} variant="fade-in">
                <div className="grid md:grid-cols-[1fr_3.5rem_1fr] rounded-xl overflow-hidden border border-border bg-white">
                  <div className="bg-neutral-100/70 text-muted-foreground px-6 pt-4 pb-3 md:py-5 md:flex md:items-center">
                    <span className="md:hidden block text-eyebrow text-muted-foreground/70 mb-1.5">Instead of</span>
                    {traditional}
                  </div>
                  <div className="hidden md:flex items-center justify-center bg-neutral-100/70 text-brand-clay">
                    <ArrowRight className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="px-6 pt-3 pb-4 md:py-5 flex items-center gap-3 font-headline text-lg font-semibold text-foreground">
                    <span className="size-2 rounded-full bg-brand-green shrink-0" aria-hidden="true" />
                    {baobab}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Distinctive practices */}
        <div className="text-center mb-10 lg:mb-14">
          <AnimateIn>
            <p className="text-eyebrow text-brand-green mb-4 mx-auto">Baobab Distinctive Practices</p>
            <h3 className="text-3xl lg:text-4xl font-headline text-foreground tracking-tight">
              Four practices that set the work apart
            </h3>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {distinctivePractices.map((practice, index) => (
            <AnimateIn key={practice.title} delay={index * 0.08} style={{ height: '100%' }}>
              <div className="relative h-full bg-white border border-border rounded-2xl p-7 lg:p-9 overflow-hidden transition-shadow duration-300 hover:shadow-md">
                <div className={`absolute inset-y-0 left-0 w-1 ${practice.accent}`} />
                <h4 className="font-headline text-xl lg:text-2xl font-semibold text-foreground tracking-tight mb-3">
                  {practice.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed m-0">{practice.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
