import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { AnimateIn } from './AnimateIn';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { HELLO_EMAIL, PHONE } from '@/constants';

const contactDetails = [
  { icon: Phone, text: PHONE, color: 'text-brand-green' },
  { icon: Mail, text: HELLO_EMAIL, color: 'text-brand-clay' },
  { icon: MapPin, text: 'Nairobi, Kenya', color: 'text-foreground' },
  { icon: Clock, text: 'Mon – Fri, 9 AM – 6 PM', color: 'text-brand-green' },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay for feedback
    await new Promise(resolve => setTimeout(resolve, 600));

    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
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
              Every transformation begins with a conversation.
            </p>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Contact details — with staggered icons */}
          <div className="lg:col-span-5 space-y-10 lg:pr-8">
            <AnimateIn delay={0.1}>
              <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground" style={{ maxWidth: '32ch' }}>
                We are based in Nairobi and work across Africa. Every conversation starts simply.
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
                      <span className="text-lg text-foreground font-medium tracking-wide tabular-nums">{detail.text}</span>
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
                
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-foreground text-xs uppercase tracking-wider font-semibold">Name</Label>
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
                    <Label htmlFor="phone" className="text-foreground text-xs uppercase tracking-wider font-semibold">Phone <span className="text-muted-foreground/50 font-normal lowercase tracking-normal">(optional)</span></Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 ..."
                      className="bg-brand-light/50 border-transparent focus:border-brand-green/30 focus:bg-white h-14 text-base px-5 rounded-lg transition-all duration-300 shadow-none hover:bg-brand-light"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-foreground text-xs uppercase tracking-wider font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your organization and the change you are navigating..."
                      rows={5}
                      className="bg-brand-light/50 border-transparent focus:border-brand-green/30 focus:bg-white text-base p-5 rounded-lg transition-all duration-300 resize-none shadow-none hover:bg-brand-light"
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