import PropertySearch from '../components/PropertySearch';
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
  // Add more properties as needed
];

export default function Properties() {
  return (
    <div className="py-20 space-y-12">
      <section className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-gray-400">
            Welcome to Panam-Properties, where your dream property awaits in every corner of our beautiful world. 
            Explore our curated selection of properties, each offering a unique story and a chance to redefine your life.
          </p>
        </div>
        <PropertySearch />
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Discover a World of Possibilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="bg-gray-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Make It Happen</h2>
          <p className="text-gray-400 mb-6">
            Ready to take the first step toward your dream property? Fill out the form below, 
            and our real estate wizards will work their magic to find your perfect match.
          </p>
          <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
            Contact an Agent
          </button>
        </div>
      </section>
    </div>
  );
}