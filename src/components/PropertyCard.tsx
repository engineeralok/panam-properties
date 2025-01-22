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
    <div className="bg-gray-900 rounded-xl overflow-hidden">
      <img 
        src={property.image} 
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        {property.category && (
          <p className="text-sm text-gray-400 mb-2">{property.category}</p>
        )}
        <h3 className="text-xl font-bold mb-2">{property.title}</h3>
        {featured && <p className="text-gray-400 mb-4">{property.description}</p>}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span>{property.bedrooms} Bedrooms</span>
            <span>{property.bathrooms} Bathrooms</span>
            <span>{property.area} m²</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-2xl font-bold">${property.price.toLocaleString()}</span>
          <Link 
            to={`/properties/${property.id}`}
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 w-full sm:w-auto text-center"
          >
            View Property Details
          </Link>
        </div>
      </div>
    </div>
  );
}