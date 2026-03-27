import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
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
    <section id="contact" className="py-20 lg:py-32" style={{ backgroundColor: '#F7F4EF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>
            Get In Touch
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#6B5D4F' }}>
            Ready to take the first step? Reach out to us today to schedule a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(111, 138, 109, 0.15)' }}>
                  <Phone className="size-6" style={{ color: '#6F8A6D' }} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#4A3728' }}>Phone</h3>
                <p style={{ color: '#6B5D4F' }}>+254 722 289642</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(196, 106, 58, 0.15)' }}>
                  <Mail className="size-6" style={{ color: '#C46A3A' }} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#4A3728' }}>Email</h3>
                <p style={{ color: '#6B5D4F' }}>hello@baobabpractice.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(74, 55, 40, 0.12)' }}>
                  <MapPin className="size-6" style={{ color: '#4A3728' }} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#4A3728' }}>Address</h3>
                <p style={{ color: '#6B5D4F' }}>24808 00502<br />Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(111, 138, 109, 0.15)' }}>
                  <Clock className="size-6" style={{ color: '#6F8A6D' }} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#4A3728' }}>Hours</h3>
                <p style={{ color: '#6B5D4F' }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8" style={{ borderWidth: '1px', borderColor: 'rgba(74, 55, 40, 0.1)' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" style={{ color: '#4A3728' }}>Name</Label>
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
                <Label htmlFor="email" style={{ color: '#4A3728' }}>Email</Label>
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

              <div className="space-y-2">
                <Label htmlFor="phone" style={{ color: '#4A3728' }}>Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" style={{ color: '#4A3728' }}>Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg" style={{ backgroundColor: '#C46A3A', color: '#ffffff' }}>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}