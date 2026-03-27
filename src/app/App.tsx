import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VisionMission } from './components/VisionMission';
import { CoreValues } from './components/CoreValues';
import { About } from './components/About';
import { Services } from './components/Services';
import { Founder } from './components/Founder';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full" style={{ fontFamily: 'var(--font-body)' }}>
      <Header />
      <main>
        <Hero />
        <VisionMission />
        <CoreValues />
        <About />
        <Services />
        <Founder />
        <Team />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}