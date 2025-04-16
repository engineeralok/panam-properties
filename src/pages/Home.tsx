import { Building2, Home as HomeIcon, TrendingUp, Brain, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Stats from '../components/Stats';
import { storageUrl } from '../config';

const stats = [
  { value: '200+', label: 'Happy Customers' },
  { value: '500+', label: 'Properties for Clients' },
  { value: '20+', label: 'Years of Experience' },
];

const properties = [
  {
    id: 1,
    title: 'Home for my growing family!',
    image: `${storageUrl}/src/assets/property_1.jpg`,
    bedrooms: 4,
    bathrooms: 3,
    area: 2211,
    description: 'We recently represented a buyer in the acquisition of a home, successfully resolving challenges related to a solar lease and a distressed seller. We also negotiated a rent-back agreement to benefit our client. Got them a good sized home for a good price.'
  },
  {
    id: 2,
    title: 'Smaller Space',
    image: `${storageUrl}/src/assets/property_2.jpg`,
    bedrooms: 4,
    bathrooms: 3,
    area: 2000,
    description: 'Successfully secured a smaller office space for a commercial tenant seeking to downsize while maintaining their desired location. Following a 12-month search and needs assessment, a new lease was negotiated, providing optimal flexibility for potential future changes.'
  },
  {
    id: 3,
    title: 'CA Corporate Residence for Overseas Company',
    image: `${storageUrl}/src/assets/property_3.jpg`,
    bedrooms: 6,
    bathrooms: 5,
    area: 9000,
    description: 'We provide property management services for corporate tenants, addressing requirements that extend beyond standard real estate transactions. Our services include accommodating specific needs and requests to ensure their comfort and satisfaction during their stays. We strive to deliver comprehensive support tailored to the unique demands of corporate clientele.'
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Jim Bianco',
    role: 'Buyer',
    content: 'I\'m not a first time buyer so I was able to do most of the initial filtering on my own. I enjoyed how we both looked at numbers and had a rational approach to this otherwise emotional process. We were able to frame our offer with the knowledge of the market that they helped uncover which was convincing to my seller.  Their structured approach helped us stay focused, compare options clearly, and make confident decisions.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 2,
    name: 'Emilie Thomson',
    role: 'Office Manager',
    content: 'It started as a no pressure search. We didn\'t quite know the space we needed, but over time we started to refine our search, made offers and ultimately got our new office. Appreciated the questions they introduced as far as commercial code compliance and terms for us to negotiate off of to get the right space for us. Would recommend to others.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 3,
    name: 'Aarav Verma',
    role: 'Buyer',
    content: 'What truly sets this team apart is their willingness to go the extra mile. They put up their own capital to address short-term funding issues so we could secure our home. They also coordinated everything to get the house move-in ready, including managing significant rehab work. Their resourcefulness and dedication turned what seemed like an impossible situation into a seamless transition for our family.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80'
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              The Right Real Estate Team for Maximum Value
            </h1>
            <p className="text-navy/70">
              It's a digital-first world, and let's be honest: buyers are often finding homes online faster than agents. With sites like Zillow attracting hundreds of millions of visitors monthly, today's buyers and sellers are incredibly well-informed. This reality demands a new approach. As your agent, we offer more than just listings; we enhance your search by providing expert filtering, navigating complex contracts and negotiations, and identifying potential red flags that online photos can't reveal. In addition, when necessary, we have arranged for outside capital or added our own to bridge deals to the finish line. Our flexible fees reflect a collaborative spirit, where teamwork and personalized service cultivate a lasting, trusted advisory relationship.
            </p>
            {/* <p className="text-navy/70">
              Whether you're seeking a single-family home, a luxury condo, or a unique California property, we can help. With over 20 years of experience we specialize in buying, selling, and investing across diverse property types, notes, hard money, land development and auction homes. Our strategic, results-driven approach ensures you get the best possible deal.            </p> */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/properties')}
                className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90">
                Explore Properties
              </button>
              <button
                onClick={() => navigate('/services')}
                className="border border-gold text-gold px-6 py-3 rounded-lg hover:bg-gold/10">
                Learn More
              </button>
            </div> */}
            <Stats stats={stats} />
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              alt="Modern building"
              className="rounded-2xl object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-silver p-8 rounded-xl">
            <HomeIcon className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-2">Home Search</h3>
            <p className="text-navy/70">Let's partner on your home search: you bring the online discoveries, and we will bring the local expertise, negotiation power, and behind-the-scenes knowledge to turn your online finds into your dream home</p>
          </div>
          <div className="bg-silver p-8 rounded-xl">
            <TrendingUp className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-2">Unlock Property Value</h3>
            <p className="text-navy/70">Guide you through strategic staging and presentation, highlighting your home's unique features and creating a compelling narrative that resonates with buyers, ultimately driving up your property's perceived value</p>
          </div>
          <div className="bg-silver p-8 rounded-xl">
            <Building2 className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-2">Property Management</h3>
            <p className="text-navy/70">We offer comprehensive property management solutions, including tenant relations, legal compliance, and strategic maintenance, to safeguard your investment and optimize its long-term value</p>
          </div>
          <div className="bg-silver p-8 rounded-xl">
            <Brain className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-2">Smart Investments</h3>
            <p className="text-navy/70">We will guide you in making smart investments by identifying high-potential properties, providing in-depth market analysis, and assessing long-term growth opportunities</p>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 sm:mb-0">Recent Activity</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <div key={property.id} className="bg-silver rounded-xl overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-navy/70 mb-4">{property.description}</p>
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <div className="flex flex-wrap gap-4">
                    <span className="text-navy/70">{property.bedrooms} Bedroom</span>
                    <span className="text-navy/70">{property.bathrooms} Bathroom</span>
                    <span className="text-navy/70">{property.area} Sqft</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  {/* <span className="text-2xl font-bold text-navy">${property.price.toLocaleString()}</span> */}
                  {/* <button className="bg-gold px-4 py-2 rounded-lg hover:bg-gold/90 w-full sm:w-auto text-white">
                    View Property Details
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 sm:mb-0">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-silver p-8 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-navy/70 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-navy">{testimonial.name}</h4>
                  <p className="text-navy/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-silver rounded-xl p-8 text-center shadow-lg border border-silver/20">
          <h2 className="text-2xl font-bold mb-4 text-navy">Want to learn more?</h2>
          <p className="text-navy/70 mb-6">
            Whether you're ready to explore properties, discuss your real estate goals, or need guidance on tax matters, we're here to help. Reach out anytime for a conversation.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90"
          >
            Start Your Search
          </button>
        </div>
      </section>
    </div>
  );
}
