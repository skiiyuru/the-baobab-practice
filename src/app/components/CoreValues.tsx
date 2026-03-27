import { Heart, Wrench, MessageSquare, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const values = [
  {
    icon: Heart,
    title: 'Human First',
    description: 'Change begins with people. We honor dignity, relationships, and the human experience at the center of every transformation.',
    bgColor: 'rgba(196, 106, 58, 0.15)',
    iconColor: '#C46A3A',
  },
  {
    icon: Wrench,
    title: 'Practice Over Prescription',
    description: 'Real change happens through doing. We build habits, leadership practices, and shared learning, not just plans or recommendations.',
    bgColor: 'rgba(111, 138, 109, 0.15)',
    iconColor: '#6F8A6D',
  },
  {
    icon: MessageSquare,
    title: 'Courageous Truth',
    description: 'Transformation requires honesty. We create safe spaces for difficult conversations and surface what is often unseen or unspoken.',
    bgColor: 'rgba(196, 106, 58, 0.15)',
    iconColor: '#C46A3A',
  },
  {
    icon: Users,
    title: 'Shared Ownership',
    description: 'Lasting change cannot be outsourced. We help leaders and teams take responsibility for their future and develop the capability to shape it.',
    bgColor: 'rgba(111, 138, 109, 0.15)',
    iconColor: '#6F8A6D',
  },
  {
    icon: TrendingUp,
    title: 'Growth With Integrity',
    description: 'Scaling and progress should strengthen - not dilute - purpose and culture, ensuring sustainable impact over time.',
    bgColor: 'rgba(74, 55, 40, 0.12)',
    iconColor: '#4A3728',
  },
];

export function CoreValues() {
  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: '#F7F4EF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>
            Core Values
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#6B5D4F' }}>
            Our values guide how we work with leaders and teams to create meaningful, lasting change.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(74, 55, 40, 0.1)' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: value.bgColor }}>
                    <Icon className="size-6" style={{ color: value.iconColor }} />
                  </div>
                  <CardTitle style={{ color: '#4A3728' }}>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription style={{ color: '#6B5D4F' }}>{value.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}