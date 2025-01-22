import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 p-8 rounded-xl">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-400">
              <ArrowUpRight className="w-4 h-4 text-purple-600" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      <button className="text-purple-500 hover:text-purple-400 flex items-center gap-2">
        Learn More
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
}