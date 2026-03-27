import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20" style={{ background: 'linear-gradient(to bottom, #F7F4EF, #ffffff)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>
                The Baobab Practice
              </h2>
              <div className="inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#E6D8C9', color: '#6F8A6D', fontWeight: 600 }}>
                Human.Led Change
              </div>
            </div>
            <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#6B5D4F' }}>
              We partner with leaders and teams to navigate complex change through human-led, practice-based coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact} style={{ backgroundColor: '#C46A3A', color: '#ffffff' }}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }} style={{ borderColor: '#6F8A6D', color: '#6F8A6D' }}>
                Our Approach
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760199078320-18976d421338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW9iYWIlMjB0cmVlJTIwZ29sZGVuJTIwc3Vuc2V0JTIwd2FybSUyMGxpZ2h0JTIwcm9vdHN8ZW58MXx8fHwxNzc0MzU4NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="The Resilient Baobab - Grounded wisdom and timeless strength"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}