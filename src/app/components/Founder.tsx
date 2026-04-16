import { AnimateIn } from './AnimateIn';
import { motion } from 'motion/react';
import founderImage from "../../assets/founder_2.png";

export function Founder() {
  return (
    <section id="founder" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background delight elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-clay/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <div className="mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-headline text-foreground leading-tight tracking-tight">
              Founder's <span className="font-serif italic font-normal text-brand-green">Story</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Asymmetric layout: 5 cols photo / 7 cols text */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5 h-auto flex flex-col pb-8 lg:pb-0 z-10">
            <AnimateIn variant="fade-scale" duration={0.8}>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-32 relative group">
                <img
                  src={founderImage}
                  alt="Founder of The Baobab Practice"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-earth/40 via-transparent to-transparent pointer-events-none mix-blend-multiply rounded-2xl"></div>
              </div>
            </AnimateIn>
            
            {/* Founder credit below photo */}
            <AnimateIn delay={0.2} variant="fade-up">
              <div className="mt-6 px-2">
                <p className="font-headline font-semibold text-foreground tracking-tight">
                  Founder
                </p>
                <p className="text-lg font-medium tracking-wide text-muted-foreground mt-1 text-brand-green/80">
                 Watau Gaita
                </p>
              </div>
            </AnimateIn>
          </div>

          <div className="lg:col-span-7 space-y-4 lg:space-y-8 md:pl-4 lg:pl-8">
            
            {/* Chapter 1 — Background & realization */}
              <AnimateIn delay={0.1}>
                <p className=" lg:text-md leading-relaxed text-muted-foreground" style={{ maxWidth: '54ch' }}>
                  I have spent over two decades working with organizations across Africa in moments of change — when the path forward is not clear and what worked before no longer works.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className=" lg:text-md leading-relaxed text-muted-foreground" style={{ maxWidth: '54ch' }}>
                  What I have seen is this: most organizations do not lack strategy or talent. They lack the space and capability to work through change in a way that truly lasts. 
                  This realization is what led me to create The Baobab Practice.
                </p>
              </AnimateIn>

            {/* Pull quote — inline typographic emphasis + Delight */}
            <AnimateIn variant="fade-up" delay={0.3}>
                <blockquote className="relative pl-8 py-2 border-l-2 border-brand-clay">
                  <p className="text-lg lg:text-xl text-foreground font-serif italic" style={{ maxWidth: '30ch' }}>
                    The baobab does not rush. It grows strong by developing deep roots, storing what it needs, and adapting to its environment.
                  </p>
                </blockquote>
            </AnimateIn>

              <AnimateIn delay={0.35}>
                <p className=" lg:text-md leading-relaxed text-muted-foreground" style={{ maxWidth: '54ch' }}>
                  I chose the baobab as our symbol because it reflects something I believe deeply about growth.
                  It endures not because it resists change, but because it knows how to grow through it.
                  That is the kind of growth I help organizations build.
                </p>
              </AnimateIn>

                <AnimateIn delay={0.4}>
                <p className=" lg:text-md leading-relaxed text-muted-foreground" style={{ maxWidth: '54ch' }}>
                  As an Organizational Development Coach, I work alongside leaders and teams to help them make sense of complexity, strengthen how they lead and work together, and build practices that sustain growth.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.45}>
                <p className=" lg:text-md leading-relaxed text-muted-foreground" style={{ maxWidth: '54ch' }}>
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
