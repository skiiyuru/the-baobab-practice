import { Target, Compass } from 'lucide-react';

export function VisionMission() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(111, 138, 109, 0.15)' }}>
                <Target className="size-6" style={{ color: '#6F8A6D' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>Vision</h2>
            </div>
            <p className="text-base leading-relaxed" style={{ color: '#4A3728' }}>
              A world where people and organizations thrive through change.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(196, 106, 58, 0.15)' }}>
                <Compass className="size-6" style={{ color: '#C46A3A' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>Mission</h2>
            </div>
            <p className="text-base leading-relaxed" style={{ color: '#6B5D4F' }}>
              The Baobab Practice partners with leaders and teams to navigate complex change through human-led, practice-based coaching. We help organizations uncover the patterns shaping their behavior and results, align values with action, and build the capabilities required to adapt, collaborate, and grow sustainably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}