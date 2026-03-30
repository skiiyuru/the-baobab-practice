import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import logo from '../../assets/logo_symbol.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all"
      style={{
        backgroundColor: scrolled || mobileMenuOpen ? 'var(--clarity-light)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transitionTimingFunction: 'var(--ease-out-quart)',
        transitionDuration: 'var(--duration-normal)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={scrollToTop} className="flex items-center" aria-label="Go to top">
            <img
              src={logo}
              alt="The Baobab Practice"
              className="h-20 w-auto transition-all"
              style={{
                // filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                transitionTimingFunction: 'var(--ease-out-quart)',
                transitionDuration: 'var(--duration-normal)',
              }}
            />
            <span className="hidden md:block ml-4 text-xl font-[family-name:var(--font-headline)] font-semibold"
              style={{color: scrolled ? 'var(--foreground)' : 'rgba(255,255,255,0.9)',}}
            >The Baobab Practice</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['about', 'services', 'founder'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="font-medium capitalize transition-colors hover:cursor-pointer"
                style={{
                  color: scrolled ? 'var(--foreground)' : 'rgba(255,255,255,0.9)',
                  transitionTimingFunction: 'var(--ease-out-quart)',
                  transitionDuration: 'var(--duration-fast)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--warm-sand)'}
                onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? 'var(--foreground)' : 'rgba(255,255,255,0.9)'}
              >
                {section}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contact')} className="bg-brand-clay text-white hover:bg-brand-clay/90">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="size-6 hover:cursor-pointer" style={{ color: mobileMenuOpen ? 'var(--foreground)' : 'white' }} />
            ) : (
              <Menu className="size-6 hover:cursor-pointer" style={{ color: mobileMenuOpen || scrolled ? 'var(--foreground)' : 'white' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation — slide down */}
        <div
          className="md:hidden overflow-hidden transition-all"
          style={{
            maxHeight: mobileMenuOpen ? '300px' : '0',
            opacity: mobileMenuOpen ? 1 : 0,
            transitionTimingFunction: 'var(--ease-out-quart)',
            transitionDuration: 'var(--duration-slow)',
          }}
        >
          <nav className="py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {['about', 'services', 'founder'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left font-medium text-background py-2 capitalize hover:cursor-pointer"
                  style={{
                    color: mobileMenuOpen ? 'var(--foreground)' : 'rgba(255,255,255,0.9)',
                  }}
                >
                  {section}
                </button>
              ))}
              <Button onClick={() => scrollToSection('contact')} className="w-full bg-brand-clay text-white hover:bg-brand-clay/90">
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}