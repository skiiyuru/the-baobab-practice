import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
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
        <Services />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}