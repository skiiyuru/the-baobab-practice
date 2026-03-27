import { Droplet, Leaf, Flower2, Network } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const fourfoldWisdom = [
  {
    icon: Network,
    title: 'The Roots: Grow Deep and Wide',
    description: 'A Baobab\'s roots stretch both deep for water and wide for stability.',
    forOrgs: 'This is purposeful growth. Depth in values, wide in impact across your ecosystem.',
    bgColor: 'rgba(74, 55, 40, 0.12)',
    iconColor: '#4A3728',
  },
  {
    icon: Droplet,
    title: 'The Trunk: Store Your Water',
    description: 'The Baobab\'s massive trunk stores water for wise distribution during droughts.',
    forOrgs: 'This is adaptive capacity. We help organizations build strategic resilience through intentional reserve, not bureaucratic bulk.',
    bgColor: 'rgba(111, 138, 109, 0.15)',
    iconColor: '#6F8A6D',
  },
  {
    icon: Leaf,
    title: 'The Leaves: Know When to Let Go',
    description: 'The Baobab sheds leaves not because it\'s weak, but because it\'s wise.',
    forOrgs: 'This is strategic release. We help organizations distinguish between essential identity and expendable tradition.',
    bgColor: 'rgba(111, 138, 109, 0.15)',
    iconColor: '#6F8A6D',
  },
  {
    icon: Flower2,
    title: 'The Flowers: Bloom in Your Season',
    description: 'Baobabs bloom at night, perfectly timed with their bat pollinators.',
    forOrgs: 'This is authentic innovation. We help organizations find their natural timing and unique rhythm.',
    bgColor: 'rgba(196, 106, 58, 0.15)',
    iconColor: '#C46A3A',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Ancient Witness */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>
              The Baobab Tree: Our Brand Story
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1619203921846-ba381b842a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW9iYWIlMjB0cmVlJTIwc2lsaG91ZXR0ZSUyMHN1bnNldCUyMEFmcmljYXxlbnwxfHx8fDE3NzQzNTY4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ancient Baobab Tree Silhouette"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold" style={{ color: '#6F8A6D', fontFamily: 'var(--font-headline)' }}>The Ancient Witness</h3>
              <p className="text-base leading-relaxed" style={{ color: '#6B5D4F' }}>
                In the heart of Africa grows a tree unlike any other. The Baobab has watched civilizations rise and fall for over 2,000 years. It has seen droughts that would kill lesser trees, fires that would consume weaker forests, and storms that would uproot more shallow lives. Yet it stands. Not just stands, it thrives.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6B5D4F' }}>
                This tree knows something essential about survival that is not about mere endurance. It stores water in its trunk, not hoarding, but wise conservation. It sheds its leaves in dry seasons, not in defeat, but in strategic adaptation. Its flowers bloom at night, not in secret, but in perfect timing with its pollinators.
              </p>
              <p className="text-base leading-relaxed font-semibold" style={{ color: '#4A3728' }}>
                This is not a tree that fights against its environment. It dances with it.
              </p>
            </div>
          </div>
        </div>

        {/* The Modern Parable */}
        <div className="rounded-2xl p-8 lg:p-12 mb-20" style={{ backgroundColor: '#F7F4EF' }}>
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#6F8A6D', fontFamily: 'var(--font-headline)' }}>The Modern Parable</h3>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#6B5D4F' }}>
            Today's organizations face their own droughts, fires, and storms: markets that evaporate overnight, technologies that burn through old ways of working, cultural shifts that threaten to uproot established identities.
          </p>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#6B5D4F' }}>
            Most respond like trees that do not know they are Baobabs. They brace against the wind. They cling to every leaf. They try to bloom at noon when their pollinators rest. They exhaust themselves fighting conditions instead of adapting to them.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#6B5D4F' }}>
            We saw brilliant organizations spending their vitality resisting change rather than growing through it. We saw talented people sacrificing authenticity to fit outdated models. We saw the human cost of treating adaptation as emergency response rather than natural rhythm.
          </p>
          <p className="text-lg font-semibold mt-8" style={{ color: '#4A3728' }}>
            So we asked: What if organizations could learn from the Baobab?
          </p>
        </div>

        {/* The Fourfold Wisdom */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>The Fourfold Wisdom</h3>
            <p className="text-base max-w-3xl mx-auto" style={{ color: '#6B5D4F' }}>
              Four essential lessons from the Baobab tree for organizational transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fourfoldWisdom.map((wisdom, index) => {
              const Icon = wisdom.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow" style={{ borderWidth: '1px', borderColor: 'rgba(74, 55, 40, 0.15)' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: wisdom.bgColor }}>
                    <Icon className="size-7" style={{ color: wisdom.iconColor }} />
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#4A3728' }}>{wisdom.title}</h4>
                  <p className="mb-4 leading-relaxed" style={{ color: '#6B5D4F' }}>{wisdom.description}</p>
                  <p className="font-medium leading-relaxed" style={{ color: '#4A3728' }}>
                    <span style={{ color: '#6B5D4F' }}>For organizations:</span> {wisdom.forOrgs}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Empty Center */}
        <div className="rounded-2xl p-8 lg:p-12 mb-20" style={{ background: 'linear-gradient(to bottom right, #E6D8C9, rgba(111, 138, 109, 0.2))' }}>
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#6F8A6D', fontFamily: 'var(--font-headline)' }}>The Empty Center</h3>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#4A3728' }}>
            There is one more secret. Old Baobabs often become hollow. But here is the miracle: They do not die when they become hollow. They become community centers. People gather inside them. Animals find shelter. Life continues differently, not in spite of the emptiness, but because of it.
          </p>
          <p className="text-base font-semibold leading-relaxed mb-4" style={{ color: '#4A3728' }}>
            For organizations: This is the ultimate lesson.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#4A3728' }}>
            Your vulnerabilities, your empty spaces, your moments of "I do not know", these are not weaknesses to hide. They are spaces for gathering. For new ideas. For community. For unexpected growth.
          </p>
          <p className="text-base font-bold mt-6" style={{ color: '#4A3728' }}>
            The strongest organizations, like the oldest Baobabs, are not those with no hollow spaces. They are those who have learned to make their hollows into meeting places.
          </p>
        </div>

        {/* Why The Baobab Practice */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>Why \"The Baobab Practice\"?</h3>
            <p className="text-base leading-relaxed" style={{ color: '#6B5D4F' }}>
              We chose this name not as a logo, but as a living promise.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2" style={{ color: '#4A3728' }}>\"Practice\" means:</p>
                <p className="text-base leading-relaxed" style={{ color: '#6B5D4F' }}>
                  Growth through disciplined, mindful, repeated action, just like the Baobab grows through countless seasons of practicing resilience.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2" style={{ color: '#4A3728' }}>\"The Baobab\" because:</p>
                <p className="text-base leading-relaxed" style={{ color: '#6B5D4F' }}>
                  We believe in wisdom that lasts. Not quick fixes that wither with the next season, but deep growth that withstands centuries of change.
                </p>
              </div>
            </div>
            <div className="pt-4" style={{ borderTopWidth: '1px', borderColor: 'rgba(74, 55, 40, 0.15)' }}>
              <p className="font-semibold mb-3" style={{ color: '#4A3728' }}>And here - Our Core Belief:</p>
              <p className="text-base leading-relaxed" style={{ color: '#6B5D4F' }}>
                Lasting transformation happens when ancient wisdom meets modern challenge, when individual growth strengthens collective resilience, and when organizations learn to thrive not despite change, but through it.
              </p>
            </div>
          </div>

          <div className="text-white rounded-2xl p-8 lg:p-10" style={{ backgroundColor: '#4A3728' }}>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-headline)' }}>Our Invitation</h3>
            <p className="text-base mb-6 leading-relaxed" style={{ color: '#E6D8C9' }}>
              We do not offer you a blueprint. Blueprints are for buildings, and you are not building, you are growing.
            </p>
            <p className="text-base text-white font-semibold mb-4">We offer instead:</p>
            <ul className="space-y-3 text-base" style={{ color: '#E6D8C9' }}>
              <li className="flex items-start gap-3">
                <span className="mt-1" style={{ color: '#6F8A6D' }}>•</span>
                <span>Seeds for new thinking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1" style={{ color: '#6F8A6D' }}>•</span>
                <span>Water for dry seasons</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1" style={{ color: '#6F8A6D' }}>•</span>
                <span>Shelter for difficult conversations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1" style={{ color: '#6F8A6D' }}>•</span>
                <span>Roots for uncertain times</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1" style={{ color: '#6F8A6D' }}>•</span>
                <span>Space to become who you're meant to be</span>
              </li>
            </ul>
            <p className="text-base font-bold text-white mt-8">
              The real question is: Will you merely withstand the seasons, or will you learn their rhythms and grow through them?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}