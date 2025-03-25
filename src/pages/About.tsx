
import Stats from '../components/Stats';
import TeamMember from '../components/TeamMember';

const stats = [
  { value: '200+', label: 'Happy Customers' },
  { value: '1000+', label: 'Properties for Clients' },
  { value: '20+', label: 'Years of Experience' },
];

const values = [
  {
    title: 'Trust',
    description: 'Trust is built on expertise, dedication, and always putting the client\'s interests first.',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    description: 'Delivering value through expertise, creativity, and a relentless focus on achieving your goals.',
    icon: '⭐',
  },
  {
    title: 'Client-Centric',
    description: 'Your goals are our priority; we\'re dedicated to making your real estate vision a reality.',
    icon: '👥',
  },
  {
    title: 'Our Commitment',
    description: 'Our commitment is to go above and beyond to deliver tailored solutions and exceptional value for your real estate journey.',
    icon: '✨',
  },
];


{/*
const steps = [
  {
    title: 'Discover & Possibilities',
    description: 'Your journey begins with exploring our carefully curated selection of premium properties.',
  },
  {
    title: 'Narrowing Your Choices',
    description: 'Our expert team helps narrow down the options that best fit your requirements.',
  },
  {
    title: 'Personalized Guidance',
    description: 'Receive specific advice customized to your needs, ensuring you make the right choice.',
  },
  {
    title: 'See It For Yourself',
    description: 'Experience the property firsthand through our guided tours.',
  },
  {
    title: 'Making Informed Decisions',
    description: 'We provide all the data and insights you need to make the right choice.',
  },
  {
    title: 'Getting the Best Deal',
    description: 'Our negotiation experts ensure you get the best possible terms.',
  },
];
*/}

const team = [
  {
    name: 'Max Mitchell',
    role: 'CEO, Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sarah Johnson',
    role: 'Head Sales Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'David Brown',
    role: 'Head of Property Management',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Michelle Turner',
    role: 'Senior Consultant',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
];

export default function About() {
  return (
    <div className="space-y-20 py-20">
      {/* Journey Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">Full-Service Real Estate Brokerage In California</h1>
       <div className="text-navy/70">
  <p style={{ marginBottom: '1rem' }}>
    With more than 20 years in California real estate, Panam Properties has facilitated transactions across diverse property types. We facilitate transactions for a range of properties, including mobile homes and entitlement-required developments, focusing on delivering value to buyers and sellers.
  </p>
  <p style={{ marginBottom: '1rem' }}>
    Unlike many firms, we stand apart because we are investors and brokers; we invest our own money in deals, ensuring we operate with the same level of scrutiny and care as our clients.
  </p>
  <p>
    Over the years, we’ve used our skills and experience to identify hidden opportunities in the real estate market and help our clients find what they need through exemplary brokerage services.
  </p>
</div>
            <Stats stats={stats} />
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
              alt="about us"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-silver p-8 rounded-xl shadow-lg border border-silver/20">
              <span className="text-4xl mb-4 block">{value.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-navy">{value.title}</h3>
              <p className="text-navy/70">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

{/* Experience Steps */}
{/* 3-25-25 EDITED THIS OUT TO REMOVE EXTRA LANGUAGE
<section className="container mx-auto px-4">
  <h2 className="text-3xl font-bold mb-12">Navigating the Panam-Properties Experience</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {steps.map((step, index) => (
      <div key={index} className="bg-silver p-8 rounded-xl shadow-lg border border-silver/20">
        <div className="text-gold font-bold mb-4">Step {index + 1}</div>
        <h3 className="text-xl font-bold mb-2 text-navy">{step.title}</h3>
        <p className="text-navy/70">{step.description}</p>
      </div>
    ))}
  </div>
</section>
*/}

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Meet the Panam-Properties Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Add CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-silver rounded-xl p-8 text-center shadow-lg border border-silver/20">
          <h2 className="text-2xl font-bold mb-4 text-navy">Join Our Journey</h2>
          <p className="text-navy/70 mb-6">
Have an idea you'd like to explore? Reach out! We can discuss it, offer some insights, and help you map out your next steps.          </p>
          <button className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90">
            Let's Discuss
          </button>
        </div>
      </section>
    </div>
  );
}
