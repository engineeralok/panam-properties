
import { Building2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-8 h-8 text-gold" />
              <span className="text-xl font-bold">Panam Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-navy-light/10 px-4 py-2 rounded-lg flex-1 border border-gold/20"
              />
              <button className="bg-gold p-2 rounded-lg hover:bg-gold/90">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-silver">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link to="/properties" className="hover:text-gold">Properties</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-silver">
              <li><a href="#" className="hover:text-gold">Property Management</a></li>
              <li><a href="#" className="hover:text-gold">Strategic Marketing</a></li>
              <li><a href="#" className="hover:text-gold">Market Analysis</a></li>
              <li><a href="#" className="hover:text-gold">Property Valuation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-silver">
              <li>123 Real Estate Ave</li>
              <li>Property City, PC 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>info@panamproperties.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-silver">© 2024 Panam Properties. All Rights Reserved</p>
          <div className="flex gap-4">
            <a href="#" className="text-silver hover:text-gold">Terms & Conditions</a>
            <a href="#" className="text-silver hover:text-gold">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}