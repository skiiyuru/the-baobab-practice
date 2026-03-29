// import founderImage from "../../assets/founder.png";
import founderImage from "../../assets/founder_2.png";
import { AnimateIn } from './AnimateIn';

export function Founder() {
  return (
    <section id="founder" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="mb-20 text-foreground">
            Founder's Story
          </h2>
        </AnimateIn>

        {/* Asymmetric layout: 40% photo / 60% text (reversed from About's 60/40) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-32">
              <img
                src={founderImage}
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-base leading-relaxed text-muted-foreground" style={{ fontWeight: 300 }}>
              I have spent over two decades working with organizations across
              Africa in moments of change when the path forward is not clear and
              what worked before no longer works.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground" style={{ fontWeight: 300 }}>
              What I have seen is this: most organizations do not lack strategy
              or talent. They lack the space and capability to work through
              change in a way that truly lasts.
            </p>

            {/* Pull quote */}
            <AnimateIn variant="fade-left" delay={200}>
              <blockquote className="border-l-4 border-brand-green pl-6 py-2 my-10">
                <p className="text-2xl lg:text-3xl font-[family-name:var(--font-headline)] leading-snug text-foreground" style={{ fontWeight: 700 }}>
                  When people lead their own change, they do not just get through it — they grow stronger because of it.
                </p>
              </blockquote>
            </AnimateIn>

            <p className="text-base leading-relaxed text-muted-foreground" style={{ fontWeight: 300 }}>
              As a coach, I work alongside leaders and teams to help them make
              sense of complexity, strengthen how they lead and work together,
              and build practices that sustain growth. My experience spans
              global technology and international development, including
              leadership roles at Microsoft and BroadReach Group.
            </p>

            {/* Experience grid with weight contrast */}
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h4 className="text-lg font-bold mb-3 text-foreground font-[family-name:var(--font-headline)]">
                  Global Technology
                </h4>
                <p className="text-base leading-relaxed text-muted-foreground" style={{ fontWeight: 300 }}>
                  Microsoft taught me how organizations navigate rapid
                  transformation at scale, and how human-centered leadership makes
                  the difference.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3 text-foreground font-[family-name:var(--font-headline)]">
                  International Development
                </h4>
                <p className="text-base leading-relaxed text-muted-foreground" style={{ fontWeight: 300 }}>
                  BroadReach Group across Africa showed me the power
                  of adaptive systems and the resilience
                  that emerges when people lead their own transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
