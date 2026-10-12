import { AnimateIn } from './AnimateIn';
import founderImage from "../../assets/founder_2.png";

export function Founder() {
  return (
    <section id="founder" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <div className="mb-14 lg:mb-20">
            <p className="text-eyebrow text-brand-clay mb-4">Founder’s Story</p>
            <h2 className="text-4xl lg:text-5xl font-headline text-foreground leading-tight tracking-tight">
              Growth that <span className="font-serif italic font-normal text-brand-green">endures</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Portrait beside the opening line */}
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center mb-14 lg:mb-20">
          <div className="md:col-span-5">
            <AnimateIn variant="fade-scale" duration={0.8}>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto md:max-w-none">
                <img
                  src={founderImage}
                  alt="Watau Gaita, founder of The Baobab Practice"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimateIn>
          </div>

          <div className="md:col-span-7">
            <AnimateIn delay={0.1}>
              <p className="font-headline text-2xl lg:text-3xl font-semibold text-foreground tracking-tight m-0">
                Watau Gaita
              </p>
              <p className="text-brand-green font-medium mt-1 mb-8">
                Organizational Development Coach · Founder, The Baobab Practice
              </p>
              <p className="text-statement text-foreground m-0" style={{ maxWidth: '36ch' }}>
                For over two decades I have worked with organizations across Africa in moments of
                change, when the path forward is not clear and what worked before no longer works.
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* Full-width prose */}
        <div className="max-w-3xl space-y-6 lg:space-y-8">
          <AnimateIn>
            <p className="text-lg leading-relaxed text-muted-foreground m-0">
              What I have seen is this: most organizations do not lack strategy or talent. They lack the
              space and capability to work through change in a way that truly lasts. That realization is
              what led me to create The Baobab Practice.
            </p>
          </AnimateIn>
          <AnimateIn>
            <p className="text-lg leading-relaxed text-muted-foreground m-0">
              The baobab does not rush. It grows strong by developing deep roots, storing what it needs,
              and adapting to its environment. I chose it as our symbol because it reflects something I
              believe deeply about growth.
            </p>
          </AnimateIn>

          {/* Feature quote */}
          <AnimateIn variant="fade-left">
            <blockquote className="relative my-4 lg:my-8 pl-8 py-2 border-l-2 border-brand-clay">
              <p className="text-2xl lg:text-3xl text-foreground font-serif italic leading-snug m-0" style={{ maxWidth: '34ch' }}>
                It endures not because it resists change, but because it knows how to grow through it.
                That is the kind of growth I help organizations build.
              </p>
            </blockquote>
          </AnimateIn>

          <AnimateIn>
            <p className="text-lg leading-relaxed text-muted-foreground m-0">
              As an Organizational Development Coach, I work alongside leaders and teams to help them
              make sense of complexity, strengthen how they lead and work together, and build practices
              that sustain growth.
            </p>
          </AnimateIn>
          <AnimateIn>
            <p className="text-lg leading-relaxed text-muted-foreground m-0">
              My experience spans global technology and international development, including leadership
              roles at Microsoft and BroadReach Group. Across all of it, what has mattered most to me is
              not just the outcomes, but how people and institutions move through change with greater
              clarity, confidence and connection.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
