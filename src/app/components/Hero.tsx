import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimateIn } from './AnimateIn';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image — full bleed */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760199078320-18976d421338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW9iYWIlMjB0cmVlJTIwZ29sZGVuJTIwc3Vuc2V0JTIwd2FybSUyMGxpZ2h0JTIwcm9vdHN8ZW58MXx8fHwxNzc0MzU4NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="The Resilient Baobab - Grounded wisdom and timeless strength"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-earth/90 via-brand-earth/70 to-brand-earth/30" />
      </div>

      {/* Content — staggered entrance */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-2xl space-y-8">
          <AnimateIn variant="fade-up" delay={100} duration={800}>
            <h1 className='text-xl lg:text-3xl text-white'>  
              Human.Led Change
            </h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={300} duration={800}>
            <p className="text-xl lg:text-3xl leading-relaxed text-white font-[family-name:var(--font-headline)]" style={{ fontWeight: 500 }}>
              A world where people and organizations thrive through change.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={500} duration={800}>
            <p className="text-base lg:text-lg leading-relaxed text-white max-w-lg" style={{ fontWeight: 500 }}>
              We partner with leaders and teams to navigate complex change through human-led, practice-based coaching.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={700} duration={800}>
            <div className="pt-4">
              <Button size="lg" onClick={scrollToContact} className="bg-brand-clay text-white hover:bg-brand-clay/90 text-base px-8 py-6">
                Start a Conversation
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}