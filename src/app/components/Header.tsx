import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import logo from '../../assets/logo_full.png';

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
          <motion.button
            onClick={scrollToTop}
            className="flex items-center"
            aria-label="Go to top"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            <img
              src={logo}
              alt="The Baobab Practice"
              className="h-10 w-auto transition-all md:h-20"
              style={{
                transitionTimingFunction: 'var(--ease-out-quart)',
                transitionDuration: 'var(--duration-normal)',
              }}
            />
            <span
              className="ml-2 md:ml-4 text-lg md:text-xl font-semibold transition-colors"
              style={{
                fontFamily: 'var(--font-headline)',
                color: scrolled ? 'var(--foreground)' : 'rgba(255,255,255,0.9)',
                transitionTimingFunction: 'var(--ease-out-quart)',
                transitionDuration: 'var(--duration-normal)',
              }}
            >
              The Baobab Practice
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['about', 'services', 'founder'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="nav-link font-medium capitalize hover:cursor-pointer"
                style={{
                  color: scrolled ? 'var(--foreground)' : 'rgba(255,255,255,0.9)',
                }}
              >
                {section}
              </button>
            ))}
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ y: 1, scale: 0.98 }}
              transition={{ duration: 0.12 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-brand-clay text-white hover:bg-brand-clay/90 shadow-sm"
              >
                Contact Us
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="size-6 hover:cursor-pointer" style={{ color: 'var(--foreground)' }} />
            ) : (
              <Menu
                className="size-6 hover:cursor-pointer"
                style={{ color: scrolled ? 'var(--foreground)' : 'white' }}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation — animated with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="md:hidden py-4 border-t border-border overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="flex flex-col gap-4">
                {['about', 'services', 'founder'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left font-medium py-2 capitalize hover:cursor-pointer"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {section}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-brand-clay text-white hover:bg-brand-clay/90"
                >
                  Contact Us
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}