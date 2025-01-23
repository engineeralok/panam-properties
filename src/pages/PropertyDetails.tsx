// import { useParams } from 'react-router-dom';
import PropertyGallery from '../components/PropertyGallery';
import ContactForm from '../components/ContactForm';
import { Bed, Bath, Maximize, Info } from 'lucide-react';

const propertyImages = [
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
];

const propertyDetails = {
  title: 'Seaside Serenity Villa',
  price: 1250000,
  location: 'Malibu, California',
  description: 'Welcome to this stunning waterfront villa that seamlessly blends luxury living with breathtaking ocean views. This modern masterpiece offers an unparalleled living experience with its thoughtfully designed spaces and premium finishes.',
  features: [
    'Ocean View',
    'Private Pool',
    'Smart Home System',
    'Wine Cellar',
    'Home Theater',
  ],
  specs: {
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    yearBuilt: 2020,
  },
  additionalFees: [
    { name: 'HOA Fees', amount: 500 },
    { name: 'Property Tax', amount: 15000 },
    { name: 'Insurance', amount: 2400 },
  ],
  monthlyExpenses: [
    { name: 'Utilities', amount: 300 },
    { name: 'Maintenance', amount: 200 },
  ],
};

export default function PropertyDetails() {
  // const { id } = useParams();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">{propertyDetails.title}</h1>
            <p className="text-gray-400">{propertyDetails.location}</p>
          </div>
          <div className="text-3xl font-bold">${propertyDetails.price.toLocaleString()}</div>
        </div>

        {/* Gallery */}
        <PropertyGallery images={propertyImages} />

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-gray-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-400">{propertyDetails.description}</p>
            </section>

            {/* Key Features */}
            <section className="bg-gray-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Key Features and Amenities</h2>
              <ul className="grid grid-cols-2 gap-4">
                {propertyDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-purple-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Property Specs */}
            <section className="bg-gray-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Property Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                  <Bed className="w-6 h-6 text-purple-600 mb-2" />
                  <span className="text-lg font-bold">{propertyDetails.specs.bedrooms}</span>
                  <span className="text-sm text-gray-400">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                  <Bath className="w-6 h-6 text-purple-600 mb-2" />
                  <span className="text-lg font-bold">{propertyDetails.specs.bathrooms}</span>
                  <span className="text-sm text-gray-400">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                  <Maximize className="w-6 h-6 text-purple-600 mb-2" />
                  <span className="text-lg font-bold">{propertyDetails.specs.area}</span>
                  <span className="text-sm text-gray-400">Sq Ft</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                  <Info className="w-6 h-6 text-purple-600 mb-2" />
                  <span className="text-lg font-bold">{propertyDetails.specs.yearBuilt}</span>
                  <span className="text-sm text-gray-400">Year Built</span>
                </div>
              </div>
            </section>

            {/* Pricing Details */}
            <section className="bg-gray-900 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Comprehensive Pricing Details</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3">Additional Fees</h3>
                  <div className="space-y-2">
                    {propertyDetails.additionalFees.map((fee, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-400">{fee.name}</span>
                        <span>${fee.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Monthly Expenses</h3>
                  <div className="space-y-2">
                    {propertyDetails.monthlyExpenses.map((expense, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-400">{expense.name}</span>
                        <span>${expense.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}