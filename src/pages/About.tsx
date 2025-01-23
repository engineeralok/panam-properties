import Stats from '../components/Stats';
import TeamMember from '../components/TeamMember';

const stats = [
  { value: '200+', label: 'Happy Customers' },
  { value: '10k+', label: 'Properties for Clients' },
  { value: '16+', label: 'Years of Experience' },
];

const values = [
  {
    title: 'Trust',
    description: 'Trust is the cornerstone of every successful real estate transaction.',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    description: 'We set the bar high for excellence, from the expertise we bring to the services we provide.',
    icon: '⭐',
  },
  {
    title: 'Client-Centric',
    description: 'Your dreams and needs are at the center of our services. We listen, understand.',
    icon: '👥',
  },
  {
    title: 'Our Commitment',
    description: 'We are dedicated to providing you with the highest level of service, professionalism, and support.',
    icon: '✨',
  },
];

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
            <h1 className="text-4xl md:text-5xl font-bold">Our Journey</h1>
            <p className="text-navy/70">
              We've been helping people find their dream homes and make smart property investments that transcend the ordinary. Over the years, we've grown from humble beginnings into a full-service real estate powerhouse.
            </p>
            <Stats stats={stats} />
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
              alt="Our journey"
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
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Navigating the Estatein Experience</h2>
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

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Meet the Estatein Team</h2>
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
            Ready to be part of our story? Whether you're looking to buy, sell, or invest in properties,
            our team is here to guide you every step of the way.
          </p>
          <button className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}