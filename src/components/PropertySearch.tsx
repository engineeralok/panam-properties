import { Search } from 'lucide-react';

const filters = {
  location: ['California', 'New York', 'Texas', 'Florida'],
  propertyType: ['House', 'Apartment', 'Villa', 'Cottage'],
  priceRange: ['$100k - $300k', '$300k - $500k', '$500k - $1M', '$1M+'],
  propertySize: ['< 1000 sq ft', '1000-2000 sq ft', '2000-3000 sq ft', '> 3000 sq ft'],
  buildYear: ['2020+', '2015-2020', '2010-2015', 'Before 2010']
};

export default function PropertySearch() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search For A Property"
          className="w-full bg-gray-900 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-600 p-2 rounded-lg hover:bg-purple-700">
          <Search className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <select className="bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
          <option value="">Location</option>
          {filters.location.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <select className="bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
          <option value="">Property Type</option>
          {filters.propertyType.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <select className="bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
          <option value="">Price Range</option>
          {filters.priceRange.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <select className="bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
          <option value="">Property Size</option>
          {filters.propertySize.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <select className="bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
          <option value="">Build Year</option>
          {filters.buildYear.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}