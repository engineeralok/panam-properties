import { storageUrl } from "../config";

const properties = [
  {
    id: 1,
    title: 'Get me the cheapest house for my growing family!',
    image: `${storageUrl}/src/assets/property_1.jpg`,
    bedrooms: 4,
    bathrooms: 3,
    area: 2211,
    description: 'We recently represented a buyer in the acquisition of a home, successfully resolving challenges related to a solar lease and a distressed seller. We also negotiated a rent-back agreement to benefit our client. Got them a good sized home for a good price.'
  },
  {
    id: 2,
    title: 'Downsize Me',
    image: `${storageUrl}/src/assets/property_2.jpg`,
    bedrooms: 4,
    bathrooms: 3,
    area: 2000,
    description: 'Successfully secured a smaller office space for a commercial tenant seeking to downsize while maintaining their desired location. Following a 12-month search and needs assessment, a new lease was negotiated, providing optimal flexibility for potential future changes.'
  },
  {
    id: 3,
    title: 'CA Corporate Home for Multi-National',
    image: `${storageUrl}/src/assets/property_3.jpg`,
    bedrooms: 6,
    bathrooms: 5,
    area: 9000,
    description: 'Panam Properties provides property management services for corporate tenants, addressing requirements that extend beyond standard real estate transactions. Our services include accommodating specific needs and requests to ensure their comfort and satisfaction during their stays. We strive to deliver comprehensive support tailored to the unique demands of corporate clientele.'
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
