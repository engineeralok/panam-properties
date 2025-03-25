
import { Building2, TrendingUp, BarChart3, Users, Briefcase, Shield, LineChart, Target } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Valuation Mastery',
    description: 'Discover the true worth of your property with our expert valuation services.',
    icon: <BarChart3 className="w-8 h-8" />,
    features: [
      'Comprehensive market analysis',
      'Professional property assessment',
      'Detailed valuation report',
      'Regular market updates'
    ]
  },
  {
    title: 'Strategic Marketing',
    description: 'Selling a property requires more than just listing it. It demands a strategic marketing approach.',
    icon: <TrendingUp className="w-8 h-8" />,
    features: [
      'Targeted advertising',
      'Social media promotion',
      'Professional photography',
      'Virtual tours'
    ]
  },
  {
    title: 'Negotiation Wizardry',
    description: 'Negotiating the best deal is an art, and our negotiation experts are masters of it.',
    icon: <Briefcase className="w-8 h-8" />,
    features: [
      'Expert negotiation strategy',
      'Market-based pricing',
      'Contract review',
      'Deal optimization'
    ]
  },
  {
    title: 'Closing Success',
    description: 'A successful sale is not complete until the closing. We guide you through the intricate closing process.',
    icon: <Target className="w-8 h-8" />,
    features: [
      'Document preparation',
      'Legal compliance',
      'Closing coordination',
      'Final walkthrough'
    ]
  }
];

const managementServices = [
  {
    title: 'Tenant Harmony',
    description: 'Our Tenant Management services ensure that your tenants have a smooth and relaxing experience.',
    icon: <Users className="w-8 h-8" />,
    features: [
      'Tenant screening',
      'Lease management',
      'Maintenance coordination',
      '24/7 support'
    ]
  },
  {
    title: 'Maintenance Ease',
    description: 'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.',
    icon: <Building2 className="w-8 h-8" />,
    features: [
      'Regular inspections',
      'Preventive maintenance',
      'Emergency repairs',
      'Vendor management'
    ]
  },
  {
    title: 'Financial Peace of Mind',
    description: 'Managing property finances can be complex. Our financial experts take care of rent collection.',
    icon: <LineChart className="w-8 h-8" />,
    features: [
      'Rent collection',
      'Financial reporting',
      'Budget management',
      'Tax documentation'
    ]
  },
  {
    title: 'Legal Guardian',
    description: 'Stay compliant with property laws and regulations effortlessly.',
    icon: <Shield className="w-8 h-8" />,
    features: [
      'Legal compliance',
      'Document management',
      'Risk assessment',
      'Insurance coordination'
    ]
  }
];

export default function Services() {
  return (
    <div className="py-20 space-y-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Elevate Your Real Estate Experience</h1>
          <p className="text-gray-400">

In today's real estate landscape, the journey begins online. That's why we prioritize crafting compelling digital appeal for every listing – because first impressions are formed on screens, long before a buyer sets foot inside. Our team blends stunning content with deep market expertise to showcase your property's unique story and unlock its full investment potential.

But attracting attention is only part of the equation. Setting the right price isn't guesswork; it's a data-driven strategy. We meticulously analyze market trends and comparable sales to craft a pricing strategy that tells your property's value story, ensuring you capture top dollar from the moment it hits the market.

And to truly maximize your home's value, presentation is key. We go beyond simply listing your property. Our team analyzes every aspect of its condition, pinpointing opportunities for strategic improvements based on current market expectations. This allows us to craft a tailored preparation strategy, ensuring your home resonates with buyers and achieves the highest possible return.

            
          </p>
        </div>
      </section>

      {/* Property Selling Services */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Unlock Property Value</h2>
        <p className="text-gray-400 mb-8">
          Selling your property should be a rewarding experience, and at Panam-Properties, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help at every step of your selling journey.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Property Management */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Effortless Property Management</h2>
        <p className="text-gray-400 mb-8">
          Owning a property should be a pleasure, not a hassle. Panam-Properties's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {managementServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-silver rounded-xl p-8 text-center shadow-lg border border-silver/20">
          <h2 className="text-2xl font-bold mb-4 text-navy">Start Your Real Estate Journey Today</h2>
          <p className="text-navy/70 mb-6">
            Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
          </p>
          <button className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90">
            Explore Properties
          </button>
        </div>
      </section>
    </div>
  );
}
