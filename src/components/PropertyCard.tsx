import { Link } from 'react-router-dom';

export interface Property {
  id: number;
  title: string;
  image: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  category?: string;
  location?: string;
}

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export default function PropertyCard({ property, featured = false }: PropertyCardProps) {
  return (
    <div className="bg-silver rounded-xl overflow-hidden shadow-lg border border-silver/20">
      <img 
        src={property.image} 
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        {property.category && (
          <p className="text-sm text-navy/70 mb-2">{property.category}</p>
        )}
        <h3 className="text-xl font-bold mb-2 text-navy">{property.title}</h3>
        {featured && <p className="text-navy/70 mb-4">{property.description}</p>}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="flex flex-wrap gap-4 text-sm text-navy/70">
            <span>{property.bedrooms} Bedrooms</span>
            <span>{property.bathrooms} Bathrooms</span>
            <span>{property.area} m²</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-2xl font-bold text-navy">${property.price.toLocaleString()}</span>
          <Link 
            to={`/properties/${property.id}`}
            className="bg-gold text-white px-4 py-2 rounded-lg hover:bg-gold/90 w-full sm:w-auto text-center"
          >
            View Property Details
          </Link>
        </div>
      </div>
    </div>
  );
}