
import Stats from '../components/Stats';
import TeamMember from '../components/TeamMember';

const stats = [
  { value: '200+', label: 'Happy Customers' },
  { value: '500+', label: 'Properties for Clients' },
  { value: '20+', label: 'Years of Experience' },
];

const values = [
  {
    title: 'Trust',
    description: 'We\'re all about being straight with you. We know our stuff, we\'re here for you, and we always put your needs first.',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    description: 'We go the extra mile to get you the best results. We use our know-how and get creative to make your goals happen.',
    icon: '⭐',
  },
  {
    title: 'Client-Centric',
    description: 'Your goals are what matter most to us. We\'re here to make your real estate dreams a reality.',
    icon: '👥',
  },
  {
    title: 'Our Commitment',
    description: 'We\'re committed to giving you personalized solutions and making sure you get the best bang for your buck on your real estate journey.',
    icon: '✨',
  },
];


{/* COMMENTED OUT
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
    id: 1,
    name: 'Ashish Patel',
    role: 'Broker, Agent',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Pravin Patel',
    role: 'Agent',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Jayesh Shah',
    role: 'Agent',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Taran Kaler',
    role: 'Agent',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Jay Patel',
    role: 'CPA',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Sophia Williams',
    role: 'Content Operations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  }
];

export default function About() {
  return (
    <div className="space-y-20 py-20">
      {/* Journey Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Full-Service Real Estate Brokerage In California</h1>
            <div className="text-navy/70 space-y-4">
              <p className="mb-4">
                With more than 20 years in California real estate, Panam Properties has facilitated transactions across diverse property types. We facilitate transactions for a range of properties, including mobile homes and entitlement-required developments, focusing on delivering value to buyers and sellers.
              </p>
              <p className="mb-4">
                Unlike many firms, we stand apart because we are investors and brokers; we invest our own money in deals, ensuring we operate with the same level of scrutiny and care as our clients.
              </p>
              <p>
                Over the years, we've used our skills and experience to identify hidden opportunities in the real estate market and help our clients find what they need through exemplary brokerage services.
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
        <h2 className="text-3xl font-bold mb-12">Meet the Panam Properties Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {/*  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
          {team.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </section>

      {/* Add CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-silver rounded-xl p-8 text-center shadow-lg border border-silver/20">
          <h2 className="text-2xl font-bold mb-4 text-navy">Call Anytime</h2>
          <p className="text-navy/70 mb-6">
            Have an idea you'd like to explore? Reach out! We can discuss it, offer some insights, and help you map out your next steps.
          </p>
          <button className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90">
            Let's Discuss
          </button>
        </div>
      </section>
    </div>
  );
}
