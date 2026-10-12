import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Approach } from './components/Approach';
import { Services } from './components/Services';
import { Philosophy } from './components/Philosophy';
import { Founder } from './components/Founder';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full" style={{ fontFamily: 'var(--font-body)' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Approach />
        <Services />
        <Philosophy />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}