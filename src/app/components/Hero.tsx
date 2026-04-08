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
              The Baobab Practice - Human.Led Change
            </h1>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={300} duration={800}>
            <p className="text-xl lg:text-2xl text-white">
              The Baobab Practice is a living promise. Practice means growth through disciplined, mindful action.
            </p>
          </AnimateIn>  
          <AnimateIn variant="fade-up" delay={600} duration={800}>
            <p className="text-xl lg:text-2xl text-white leading-relaxed pb-5">
              The Baobab stands for wisdom that endures, deep roots, patient strength, and the ability to withstand generations of change.
            </p>
            <p className="text-xl lg:text-2xl text-white leading-relaxed pb-5">
              The Baobab Practice helps organizations move through transitions with care, clarity, and confidence, by trusting people to shape the change they will carry forward.
            </p>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Stronger teams. Healthier organizations. Change that lasts.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={800} duration={800}>
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