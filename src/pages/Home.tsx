
import { Building2, Home as HomeIcon, TrendingUp, Brain, Star } from 'lucide-react';
import Stats from '../components/Stats';

const stats = [
  { value: '200+', label: 'Happy Customers' },
  { value: '1,000+', label: 'Properties for Clients' },
  { value: '20+', label: 'Years of Experience' },
];

const properties = [
  {
    id: 1,
    title: 'Seaside Serenity Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    price: 580000,
    bedrooms: 4,
    bathrooms: 3,
    area: 450,
    description: 'A stunning 4-bedroom seaside villa with a peaceful garden and private pool.'
  },
  {
    id: 2,
    title: 'Metropolitan Haven',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
    price: 550000,
    bedrooms: 3,
    bathrooms: 2,
    area: 350,
    description: 'Luxurious city-center apartment with panoramic views.'
  },
  {
    id: 3,
    title: 'Rustic Refined Cottage',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    price: 350000,
    bedrooms: 2,
    bathrooms: 2,
    area: 250,
    description: 'Charming 2-bedroom cottage with modern amenities.'
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Wade Warren',
    role: 'CEO, Gainline',
    content: 'Our experience with Panam-Properties was outstanding. Their team\'s dedication and professionalism made finding our dream home a breeze.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 2,
    name: 'Emilie Thomson',
    role: 'Tech Director',
    content: 'Panam-Properties provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn\'t be happier with the result.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 3,
    name: 'John Nora',
    role: 'CFO, Nexbase',
    content: 'The advisors have guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your help!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80'
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              At Panam Properties, we're more than just real estate agents – we're investors ourselves who understand your journey. As your trusted partner, we put your interests first and aim to build lasting relationships that extend beyond a single transaction. Whether you're buying, selling, or investing, count on us to be your long-term resource for all things real estate.
            </h1>
            <p className="text-navy/70">
              Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90">
                Explore Properties
              </button>
              <button className="border border-gold text-gold px-6 py-3 rounded-lg hover:bg-gold/10">
                Learn More
              </button>
            </div>
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
            <h3 className="text-xl font-bold mb-2">Find Your Dream Home</h3>
            <p className="text-navy/70">Explore our extensive property listings.</p>
          </div>
          <div className="bg-silver p-8 rounded-xl">
            <TrendingUp className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-2">Unlock Property Value</h3>
            <p className="text-navy/70">Get the best value for your property.</p>
          </div>
          <div className="bg-silver p-8 rounded-xl">
            <Building2 className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-2">Property Management</h3>
            <p className="text-navy/70">Professional property management services.</p>
          </div>
          <div className="bg-silver p-8 rounded-xl">
            <Brain className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-2">Smart Investments</h3>
            <p className="text-navy/70">Make informed investment decisions.</p>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 sm:mb-0">Featured Properties</h2>
          <button className="text-gold hover:text-gold/90">View All Properties</button>
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
                    <span className="text-navy/70">{property.area} m²</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-2xl font-bold text-navy">${property.price.toLocaleString()}</span>
                  <button className="bg-gold px-4 py-2 rounded-lg hover:bg-gold/90 w-full sm:w-auto text-white">
                    View Property Details
                  </button>
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
          <button className="text-gold hover:text-gold/90">View All Testimonials</button>
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
          <h2 className="text-2xl font-bold mb-4 text-navy">Ready to Find Your Dream Home?</h2>
          <p className="text-navy/70 mb-6">
            Take the first step towards your perfect property. Our expert team is here to guide you
            through every step of your real estate journey.
          </p>
          <button className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90">
            Start Your Search
          </button>
        </div>
      </section>
    </div>
  );
}
