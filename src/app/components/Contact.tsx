import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { AnimateIn } from './AnimateIn';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { HELLO_EMAIL, PHONE } from '@/constants';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statement */}
        <AnimateIn>
          <div className="mb-20">
            <h2 className="text-foreground mb-6">
              Let's Talk
            </h2>
            <p className="text-xl lg:text-2xl font-[family-name:var(--font-headline)] text-muted-foreground max-w-2xl" style={{ fontWeight: 300 }}>
              Every transformation begins with a conversation.
            </p>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact details — secondary weight */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="size-5 text-brand-green flex-shrink-0" />
              <span className="text-muted-foreground" style={{ fontWeight: 300 }}>{PHONE}</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="size-5 text-brand-clay flex-shrink-0" />
              <span className="text-muted-foreground" style={{ fontWeight: 300 }}>{HELLO_EMAIL}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="size-5 text-foreground flex-shrink-0" />
              <span className="text-muted-foreground" style={{ fontWeight: 300 }}>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="size-5 text-brand-green flex-shrink-0" />
              <span className="text-muted-foreground" style={{ fontWeight: 300 }}>Mon – Fri, 9 AM – 6 PM</span>
            </div>
          </div>

          {/* Form — primary weight */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-border">
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

                <Button type="submit" className="w-full bg-brand-clay text-white hover:bg-brand-clay/90" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}