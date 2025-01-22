import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold">Panam-Properties</span>
          </Link>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex flex-col md:flex-row items-center gap-8">
          <Link to="/" className="hover:text-purple-500">Home</Link>
          <Link to="/about" className="hover:text-purple-500">About Us</Link>
          <Link to="/properties" className="hover:text-purple-500">Properties</Link>
          <Link to="/services" className="hover:text-purple-500">Services</Link>
        </div>
        <Link 
          to="/contact" 
          className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 w-full md:w-auto text-center"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}