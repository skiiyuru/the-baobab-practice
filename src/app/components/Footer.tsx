import { HELLO_EMAIL, LOCATION, PHONE, POSTAL_ADDRESS } from "@/constants";
import { AnimateIn } from './AnimateIn';
import logo from "../../assets/logo_full.png";

const quickLinks = [
  { label: 'About Us', target: 'about' },
  { label: 'Services', target: 'services' },
  { label: 'Founder', target: 'founder' },
  { label: 'Contact', target: 'contact' },
];

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <AnimateIn variant="fade-in">
              <img
                src={logo}
                alt="The Baobab Practice"
                className="h-32 w-auto mb-4"
              />
              <p className="text-base text-secondary mt-2" style={{ maxWidth: '28ch', lineHeight: 1.6 }}>
                Human-led transformation rooted in trust, clarity, and resilience.
              </p>
            </AnimateIn>
          </div>

          <div>
            <AnimateIn delay={0.1}>
              <h4
                className="text-eyebrow mb-5"
                style={{ color: 'var(--primary-foreground)' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-secondary">
                {quickLinks.map((link) => (
                  <li key={link.target}>
                    <button
                      onClick={() => scrollTo(link.target)}
                      className="nav-link hover:text-primary-foreground hover:cursor-pointer transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>

          <div>
            <AnimateIn delay={0.2}>
              <h4
                className="text-eyebrow mb-5"
                style={{ color: 'var(--primary-foreground)' }}
              >
                Contact Info
              </h4>
              <ul className="space-y-2.5 text-secondary">
                <li>{PHONE}</li>
                <li>{HELLO_EMAIL}</li>
                <li>{POSTAL_ADDRESS}</li>
                <li>{LOCATION}</li>
              </ul>
            </AnimateIn>
          </div>
        </div>

        <div className="pt-8 text-center text-secondary border-t border-white/20">
          <p>
            &copy; {new Date().getFullYear()} The Baobab Practice. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
