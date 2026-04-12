import { AnimateIn } from './AnimateIn';
import founderImage from "../../assets/founder_2.png";

export function Founder() {
  return (
    <section id="founder" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="mb-14 text-foreground">
            Founder's Story
          </h2>
        </AnimateIn>

        {/* Asymmetric layout: 40% photo / 60% text */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <AnimateIn variant="fade-scale" duration={0.8}>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-32">
                <img
                  src={founderImage}
                  alt="Founder of The Baobab Practice"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimateIn>
            {/* Founder credit below photo */}
            <AnimateIn delay={0.2}>
              <div className="mt-5 px-1">
                <p className="text-eyebrow text-foreground">
                  Founder
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">The Baobab Practice</p>
              </div>
            </AnimateIn>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <AnimateIn delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground" style={{ maxWidth: '58ch' }}>
                I have spent over two decades working with organizations across Africa in moments of change
                when the path forward is not clear and what worked before no longer works.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-base leading-relaxed text-muted-foreground" style={{ maxWidth: '58ch' }}>
                What I have seen is this: most organizations do not lack strategy or talent. They lack the space and capability to work through change in a way that truly lasts.
                This realization is what led me to create The Baobab Practice.
              </p>
            </AnimateIn>

            {/* Pull quote — inline typographic emphasis */}
            <AnimateIn variant="fade-left" delay={0.3}>
              <p
                className="text-statement"
                style={{
                  color: 'var(--foreground)',
                  maxWidth: '42ch',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                }}
              >
                The baobab does not rush. It grows strong by developing deep roots, storing what it needs,
                and adapting to its environment.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.35}>
              <p className="text-base leading-relaxed text-muted-foreground" style={{ maxWidth: '58ch' }}>
                I chose the baobab as our symbol because it reflects something I believe deeply about growth.
                It endures not because it resists change, but because it knows how to grow through it.
                That is the kind of growth I help organizations build.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.4}>
              <p className="text-base leading-relaxed text-muted-foreground" style={{ maxWidth: '58ch' }}>
                As an Organizational Development Coach, I work alongside leaders and teams to help them make sense of complexity, strengthen how they lead and work together, and build practices that sustain growth.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.45}>
              <p className="text-base leading-relaxed text-muted-foreground" style={{ maxWidth: '58ch' }}>
                My experience spans global technology and international development, including leadership roles at Microsoft and BroadReach Group.
                Across these experiences, what has mattered most to me is not just the outcomes, but how people and institutions move through change — with greater clarity, confidence, and connection.
              </p>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
