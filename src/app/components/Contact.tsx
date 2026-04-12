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
    <section id="contact" className="py-24 lg:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statement */}
        <AnimateIn>
          <div className="mb-16">
            <h2 className="text-foreground mb-6">
              Let's Talk
            </h2>
            <p
              className="text-statement text-muted-foreground"
              style={{ maxWidth: '36ch' }}
            >
              Every transformation begins with a conversation.
            </p>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-12 gap-14">
          {/* Contact details — with staggered icons */}
          <div className="lg:col-span-5 space-y-10">
            <AnimateIn delay={0.1}>
              <p
                className="text-statement text-muted-foreground"
                style={{ maxWidth: '32ch' }}
              >
                We are based in Nairobi and work across Africa. Every conversation starts simply.
              </p>
            </AnimateIn>
            <div className="space-y-4">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <AnimateIn key={index} delay={0.15 + index * 0.08} variant="fade-up">
                    <motion.div
                      className="flex items-center gap-4 py-1"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.15, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Icon className={`size-5 flex-shrink-0 ${detail.color}`} />
                      </motion.div>
                      <span className="text-muted-foreground tabular-nums">{detail.text}</span>
                    </motion.div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>

          {/* Form — primary weight with focus-within glow */}
          <div className="lg:col-span-7">
            <AnimateIn variant="fade-scale" delay={0.15}>
              <div className="form-card bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone <span className="text-muted-foreground font-normal">(optional)</span></Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 ..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your organization and the change you are navigating..."
                      rows={5}
                      required
                    />
                  </div>

                  <motion.div
                    whileHover={!isSubmitting ? { y: -2, boxShadow: '0 6px 20px oklch(0.58 0.14 45 / 0.25)' } : undefined}
                    whileTap={!isSubmitting ? { y: 1, scale: 0.98 } : undefined}
                    transition={{ duration: 0.12, ease: [0.25, 1, 0.5, 1] }}
                    className="rounded-lg"
                  >
                    <Button
                      type="submit"
                      className="w-full bg-brand-clay text-white hover:bg-brand-clay/90 disabled:opacity-60"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            className="inline-block size-4 border-2 border-white/30 border-t-white rounded-full"
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
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}