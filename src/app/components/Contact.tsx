import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { AnimateIn } from './AnimateIn';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { HELLO_EMAIL, HOURS, LOCATION, PHONE } from '@/constants';

const contactDetails = [
  { icon: Phone, label: 'Phone', text: PHONE, href: `tel:${PHONE.replace(/\s/g, '')}`, color: 'text-brand-green' },
  { icon: Mail, label: 'Email', text: HELLO_EMAIL, href: `mailto:${HELLO_EMAIL}`, color: 'text-brand-clay' },
  { icon: MapPin, label: 'Location', text: LOCATION, color: 'text-foreground' },
  { icon: Clock, label: 'Hours', text: HOURS, color: 'text-brand-green' },
];

// Must match the hidden form Netlify detects at deploy time in index.html.
const FORM_NAME = 'contact';

const encode = (data: Record<string, string>) =>
  new URLSearchParams(data).toString();

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [botField, setBotField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, 'bot-field': botField, ...formData }),
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

      toast.success('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error(`Sorry, your message could not be sent. Please email us at ${HELLO_EMAIL}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-brand-light relative overflow-hidden">
      {/* Background delight element */}
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-brand-clay/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <div className="mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-headline text-foreground leading-tight tracking-tight mb-3">
              Let's <span className="font-serif italic font-normal text-brand-green">Talk</span>
            </h2>
            <p className="text-xl lg:text-2xl font-serif italic text-muted-foreground" style={{ maxWidth: '36ch' }}>
              Every transformation begins with a conversation
            </p>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Contact details — with staggered icons */}
          <div className="lg:col-span-5 space-y-10 lg:pr-8">
            <AnimateIn delay={0.1}>
              <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground" style={{ maxWidth: '32ch' }}>
                We are based in Nairobi and work across Africa. Reach out, and let’s begin.
              </p>
            </AnimateIn>
            
            <div className="space-y-6 pt-6 border-t border-brand-clay/10">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <AnimateIn key={index} delay={0.15 + index * 0.08} variant="fade-up">
                    <motion.div
                      className="flex items-center gap-6 py-1 group cursor-default"
                      whileHover={{ x: 6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-full border border-border bg-white shadow-sm flex items-center justify-center group-hover:border-brand-clay/30 transition-colors duration-300 relative overflow-hidden"
                        whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <Icon className={`size-5 relative z-10 ${detail.color}`} strokeWidth={1.5} />
                      </motion.div>
                      <div>
                        <span className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground">{detail.label}</span>
                        {detail.href ? (
                          <a href={detail.href} className="text-lg text-foreground font-medium tracking-wide tabular-nums hover:text-brand-clay transition-colors">
                            {detail.text}
                          </a>
                        ) : (
                          <span className="text-lg text-foreground font-medium tracking-wide tabular-nums">{detail.text}</span>
                        )}
                      </div>
                    </motion.div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>

          {/* Form — primary weight with focus-within glow */}
          <div className="lg:col-span-7">
            <AnimateIn variant="fade-up" delay={0.15}>
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-8 lg:p-12 border border-border relative overflow-hidden group"
                whileHover={{ boxShadow: '0 25px 50px -12px oklch(0.35 0.05 55 / 0.05)' }}
                transition={{ duration: 0.5 }}
              >
                {/* Form Background pattern */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <form
                  name={FORM_NAME}
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8 relative z-10"
                >
                  <input type="hidden" name="form-name" value={FORM_NAME} />
                  <p className="hidden">
                    <label>
                      Don’t fill this out: <input name="bot-field" value={botField} onChange={e => setBotField(e.target.value)} />
                    </label>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-foreground text-xs uppercase tracking-wider font-semibold">Your name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-brand-light/50 border-transparent focus:border-brand-green/30 focus:bg-white h-14 text-base px-5 rounded-lg transition-all duration-300 shadow-none hover:bg-brand-light"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-foreground text-xs uppercase tracking-wider font-semibold">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-brand-light/50 border-transparent focus:border-brand-green/30 focus:bg-white h-14 text-base px-5 rounded-lg transition-all duration-300 shadow-none hover:bg-brand-light"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-foreground text-xs uppercase tracking-wider font-semibold">How can we help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your organization and the change you are navigating..."
                      rows={5}
                      className="min-h-36 bg-brand-light/50 border-transparent focus:border-brand-green/30 focus:bg-white text-base p-5 rounded-lg transition-all duration-300 resize-none shadow-none hover:bg-brand-light"
                      required
                    />
                  </div>

                  <motion.div
                    whileHover={!isSubmitting ? { y: -2 } : undefined}
                    whileTap={!isSubmitting ? { y: 1, scale: 0.98 } : undefined}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="pt-4"
                  >
                    <Button
                      type="submit"
                      className="w-full bg-brand-clay text-white hover:bg-brand-clay/90 disabled:opacity-60 h-16 text-lg font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-3">
                          <motion.span
                            className="inline-block size-5 border-[3px] border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          />
                          Sending…
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </AnimateIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}