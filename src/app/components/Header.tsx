import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import logo from '../../assets/logo_full.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ backgroundColor: '#F7F4EF', borderColor: 'rgba(74, 55, 40, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="The Baobab Practice" className="h-20 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="transition-colors"
              style={{ color: '#4A3728', fontWeight: 500 }}
              onMouseOver={(e) => e.currentTarget.style.color = '#6F8A6D'}
              onMouseOut={(e) => e.currentTarget.style.color = '#4A3728'}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="transition-colors"
              style={{ color: '#4A3728', fontWeight: 500 }}
              onMouseOver={(e) => e.currentTarget.style.color = '#6F8A6D'}
              onMouseOut={(e) => e.currentTarget.style.color = '#4A3728'}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="transition-colors"
              style={{ color: '#4A3728', fontWeight: 500 }}
              onMouseOver={(e) => e.currentTarget.style.color = '#6F8A6D'}
              onMouseOut={(e) => e.currentTarget.style.color = '#4A3728'}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('founder')}
              className="transition-colors"
              style={{ color: '#4A3728', fontWeight: 500 }}
              onMouseOver={(e) => e.currentTarget.style.color = '#6F8A6D'}
              onMouseOut={(e) => e.currentTarget.style.color = '#4A3728'}
            >
              Founder
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="transition-colors"
              style={{ color: '#4A3728', fontWeight: 500 }}
              onMouseOver={(e) => e.currentTarget.style.color = '#6F8A6D'}
              onMouseOut={(e) => e.currentTarget.style.color = '#4A3728'}
            >
              Team
            </button>
            <Button onClick={() => scrollToSection('contact')} style={{ backgroundColor: '#C46A3A', color: '#ffffff' }}>
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-6" style={{ color: '#4A3728' }} />
            ) : (
              <Menu className="size-6" style={{ color: '#4A3728' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t" style={{ borderColor: 'rgba(74, 55, 40, 0.15)' }}>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left transition-colors py-2"
                style={{ color: '#4A3728', fontWeight: 500 }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left transition-colors py-2"
                style={{ color: '#4A3728', fontWeight: 500 }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left transition-colors py-2"
                style={{ color: '#4A3728', fontWeight: 500 }}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('founder')}
                className="text-left transition-colors py-2"
                style={{ color: '#4A3728', fontWeight: 500 }}
              >
                Founder
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-left transition-colors py-2"
                style={{ color: '#4A3728', fontWeight: 500 }}
              >
                Team
              </button>
              <Button onClick={() => scrollToSection('contact')} className="w-full" style={{ backgroundColor: '#C46A3A', color: '#ffffff' }}>
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}