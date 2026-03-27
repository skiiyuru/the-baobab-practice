import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  {
    name: '[Team Member Name]',
    role: '[Role/Title]',
    bio: '[Brief bio and expertise to be added]',
    image: 'https://images.unsplash.com/photo-1769589202365-a7ac98d784d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyb3d0aCUyMHRyYW5zZm9ybWF0aW9uJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzc0MzU3MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: '[Team Member Name]',
    role: '[Role/Title]',
    bio: '[Brief bio and expertise to be added]',
    image: 'https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxlYWRlcnNoaXAlMjBjb2FjaGluZyUyMGNvbmNlcHR8ZW58MXx8fHwxNzc0MzU3MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: '[Team Member Name]',
    role: '[Role/Title]',
    bio: '[Brief bio and expertise to be added]',
    image: 'https://images.unsplash.com/photo-1662493724051-01a5046b530b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG9yZ2FuaXphdGlvbmFsJTIwY2hhbmdlJTIwam91cm5leXxlbnwxfHx8fDE3NzQzNTcxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#4A3728', fontFamily: 'var(--font-headline)' }}>
            Meet Our Team
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#6B5D4F' }}>
            Our dedicated professionals are here to support you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 relative overflow-hidden rounded-2xl aspect-[3/4]" style={{ backgroundColor: '#F7F4EF' }}>
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#4A3728' }}>
                {member.name}
              </h3>
              <p className="text-sm font-medium mb-3" style={{ color: '#C46A3A' }}>
                {member.role}
              </p>
              <p style={{ color: '#6B5D4F' }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}