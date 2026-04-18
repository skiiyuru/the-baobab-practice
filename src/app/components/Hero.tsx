import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center">
      {/* Background image — full bleed */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760199078320-18976d421338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW9iYWIlMjB0cmVlJTIwZ29sZGVuJTIwc3Vuc2V0JTIwd2FybSUyMGxpZ2h0JTIwcm9vdHN8ZW58MXx8fHwxNzc0MzU4NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="The Resilient Baobab - Grounded wisdom and timeless strength"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-earth/92 via-brand-earth/72 to-brand-earth/25" />
      </div>

      {/* Content — staggered entrance orchestration */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28 lg:pt-48 lg:pb-36 w-full"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          {/* h1 — fluid scale from base styles */}
          <motion.h1
            variants={fadeUp}
            className="text-white mb-12"
            style={{
              maxWidth: '18ch',
              textShadow: '0 2px 20px oklch(0.15 0.04 55 / 0.3)',
            }}
          >
            The Baobab Practice <br /> Human&thinsp;·&thinsp;Led Change
          </motion.h1>

          {/* Body — main descriptive paragraph */}
          <motion.p
            variants={fadeUp}
            className="text-white mb-5"
            style={{
              fontSize: 'clamp(1.1rem, 1.5vw + 0.5rem, 1.35rem)',
              lineHeight: 1.6,
              fontWeight: 400,
              maxWidth: '52ch',
            }}
          >
            We help organizations move through transitions with care, clarity and confidence
            by trusting people to shape the change they will carry forward.
          </motion.p>

          {/* Closing statement — typographically distinct */}
          <motion.p
            variants={fadeUp}
            className="text-white mb-5"
           style={{
              fontSize: 'clamp(1.1rem, 1.5vw + 0.5rem, 1.35rem)',
              lineHeight: 1.6,
              fontWeight: 400,
              maxWidth: '52ch',
            }}
          >
            Stronger teams. Healthier organizations. Change that lasts.
          </motion.p>

          {/* CTA cluster */}
          <motion.div variants={fadeScale} className="flex items-center gap-6 flex-wrap">
            <motion.div
              whileHover={{ y: -2, boxShadow: '0 8px 24px oklch(0.58 0.14 45 / 0.3)' }}
              whileTap={{ y: 1, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.25, 1, 0.5, 1] }}
              className="rounded-lg"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-brand-clay text-white hover:bg-brand-clay/90 text-base px-10 py-6 shadow-lg"
              >
                Start a Conversation
              </Button>
            </motion.div>
            <button
              onClick={scrollToAbout}
              className="text-white/80 hover:text-white font-medium transition-colors flex items-center gap-1.5"
              style={{ transitionDuration: 'var(--duration-fast)' }}
            >
              Learn about our approach
              <span className="inline-block" aria-hidden="true">→</span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint — anchored to bottom */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-label="Scroll down"
      >
        <ChevronDown className="size-6 text-white/60" />
      </motion.button>
    </section>
  );
}