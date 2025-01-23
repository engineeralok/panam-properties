import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  return (
    <div className="bg-silver p-8 rounded-xl shadow-lg border border-silver/20">
      <div className="text-gold mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-navy">{title}</h3>
      <p className="text-navy/70 mb-4">{description}</p>
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-navy/70">
              <ArrowUpRight className="w-4 h-4 text-gold" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      <button className="text-gold hover:text-gold/90 flex items-center gap-2">
        Learn More
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
}