import { Mail, Phone, MapPin } from 'lucide-react';

interface OfficeProps {
  title: string;
  address: string;
  description: string;
  email: string;
  phone: string;
  location: string;
}

export default function OfficeCard({ title, address, description, email, phone, location }: OfficeProps) {
  return (
    <div className="bg-gray-900 p-8 rounded-xl">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-lg mb-4">{address}</p>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-purple-600" />
          <a href={`mailto:${email}`} className="hover:text-purple-500">{email}</a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-purple-600" />
          <a href={`tel:${phone}`} className="hover:text-purple-500">{phone}</a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-purple-600" />
          <span>{location}</span>
        </div>
      </div>
      <button className="w-full bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 mt-6">
        Get Direction
      </button>
    </div>
  );
}