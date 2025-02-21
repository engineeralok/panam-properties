import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { buttonVariants } from '../theme/components';
import { storageUrl } from '../config';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClasses = (path: string) => {
    return `transition-colors duration-200 ${isActivePath(path)
      ? 'text-gold font-medium'
      : 'hover:text-gold text-navy'
      }`;
  };

  const getMobileLinkClasses = (path: string) => {
    return `py-2 transition-colors duration-200 ${isActivePath(path)
      ? 'text-gold font-medium'
      : 'hover:text-gold text-navy'
      }`;
  };

  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={`${storageUrl}/src/assets/panam-properties-logo.png`} alt="Panam Properties Logo" className="w-40 h-auto" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <Menu className="w-6 h-6 text-navy" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={getLinkClasses('/')}>
              Home
            </Link>
            <Link to="/about" className={getLinkClasses('/about')}>
              About Us
            </Link>
            <Link to="/properties" className={getLinkClasses('/properties')}>
              Properties
            </Link>
            <Link to="/services" className={getLinkClasses('/services')}>
              Services
            </Link>
            <Link
              to="/contact"
              className={isActivePath('/contact') ? buttonVariants.primary + ' !bg-gold/80' : buttonVariants.primary}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 py-4 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className={getMobileLinkClasses('/')}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={getMobileLinkClasses('/about')}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/properties"
                className={getMobileLinkClasses('/properties')}
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              <Link
                to="/services"
                className={getMobileLinkClasses('/services')}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`bg-gold text-white px-4 py-2 rounded-lg hover:bg-gold/90 text-center ${isActivePath('/contact') ? 'bg-gold/80' : ''
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
