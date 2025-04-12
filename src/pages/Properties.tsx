import PropertyCard, { Property } from '../components/PropertyCard';


const properties: Property[] = [
  {
    id: 1,
    title: 'Seaside Serenity Villa',
    category: 'Coastal Escapes - Where Waves Beckon',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3,
    area: 450,
    description: 'Welcome to the embodiment of seaside bliss. This beachfront villa offers...',
    location: 'Malibu, California'
  },
  {
    id: 2,
    title: 'Metropolitan Haven',
    category: 'Urban Oasis - Life in the Heart of the City',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
    price: 565000,
    bedrooms: 3,
    bathrooms: 2,
    area: 350,
    description: 'Premium comfort in the energy of the city. This modern apartment is the ideal...',
    location: 'Downtown LA'
  },
  {
    id: 3,
    title: 'Rustic Retreat Cottage',
    category: 'Countryside Charm - Escape to Nature\'s Embrace',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    price: 380000,
    bedrooms: 2,
    bathrooms: 2,
    area: 250,
    description: 'Find tranquility in this countryside haven. This charming cottage is nestled...',
    location: 'Vermont'
  },
];

export default function Properties() {
  return (
    <div className="py-20 space-y-12">
      <section className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-navy/70">
            Welcome to Panam-Properties, where your dream property awaits in every corner of our beautiful world.
            Explore our curated selection of properties, each offering a unique story and a chance to redefine your life.
          </p>
        </div>
      </section>

      {/* <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Explore Panam-Properties's World</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section> */}

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

      <section className="container mx-auto px-4">
        <div className="bg-silver rounded-xl p-8 text-center shadow-lg border border-silver/20">
          <h2 className="text-2xl font-bold mb-4 text-navy">Let's Dive In</h2>
          <p className="text-navy/70 mb-6">
            Have an idea you'd like to explore? Reach out! We can discuss it, offer some insights, and help you map out your next steps.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-gold/90">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
