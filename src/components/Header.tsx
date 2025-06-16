import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import images from "../assets"

// Throttle function to limit how often the scroll handler fires
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function (...args: any[]) {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Extract MobileMenu into a separate component
const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onServiceClick: (direction: 'au-to-vn' | 'vn-to-au', e: React.MouseEvent) => void;
}> = React.memo(({ isOpen, onClose, onServiceClick }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white/90 backdrop-blur-lg mt-2 rounded-b-2xl shadow-lg border-t border-gray-100">
      <div className="px-4 pt-2 pb-3 space-y-1">
        <Link
          to="/"
          className="block px-3 py-2 text-base font-medium text-gray-900 rounded-lg transition-colors duration-300 hover:text-[#91BE1F]"
          onClick={onClose}
        >
          Home
        </Link>
        <div className="px-3 py-2">
          <div className="font-medium text-gray-900">Services</div>
          <div className="pl-4 mt-1 space-y-1">
            <Link
              to="/#services"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-300"
              onClick={(e) => onServiceClick('au-to-vn', e)}
            >
              Inbound Services (AU to VN)
            </Link>
            <Link
              to="/#services"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-300"
              onClick={(e) => onServiceClick('vn-to-au', e)}
            >
              Outbound Services (VN to AU)
            </Link>
          </div>
        </div>
        <a
          href="https://bambuup.com/en/about#our_story"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-2 text-base font-medium text-gray-900 rounded-lg transition-colors duration-300 hover:text-[#91BE1F]"
          onClick={onClose}
        >
          About Us
        </a>
        <Link
          to="/contact"
          className="block px-3 py-2 text-base font-medium text-gray-900 rounded-lg transition-colors duration-300 hover:text-[#91BE1F]"
          onClick={onClose}
        >
          Contact
        </Link>
        <div className="pt-2">
          <Link
            to="/book"
            className="block w-full text-center bg-[#91BE1F] hover:bg-[#7ea81a] text-white px-5 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
            onClick={onClose}
          >
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
});

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Memoize the scroll handler
  const handleScroll = useCallback(
    throttle(() => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Memoize the service click handler
  const handleServiceClick = useCallback((direction: 'au-to-vn' | 'vn-to-au', e: React.MouseEvent) => {
    e.preventDefault();

    const goToServices = () => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('switchServiceDirection', { detail: direction }));
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(goToServices, 100);
    } else {
      goToServices();
    }
    setIsOpen(false);
  }, [location.pathname, navigate]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-lg py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-start">
            <Link to="/" onClick={handleLogoClick}>
              <img src={images.logo} alt="Bambuup Logo" className="h-8 w-auto mr-2" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link
                to="/"
                className={`font-medium px-3 py-2 rounded-lg transition-colors duration-300 ${isScrolled
                  ? 'text-gray-800 hover:text-[#91BE1F]'
                  : 'text-gray-800 hover:text-[#91BE1F]'
                  }`}
              >
                Home
              </Link>
              <div className="relative group">
                <button
                  className={`flex items-center font-medium px-3 py-2 rounded-lg transition-colors duration-300 ${isScrolled
                    ? 'text-gray-800  hover:text-[#91BE1F]'
                    : 'text-gray-800  hover:text-[#91BE1F]'
                    }`}
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-xl shadow-lg bg-white/80 backdrop-blur-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="py-1">
                    <Link
                      to="/#services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-300"
                      onClick={(e) => handleServiceClick('au-to-vn', e)}
                    >
                      Inbound Services (AU to VN)
                    </Link>
                    <Link
                      to="/#services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-300"
                      onClick={(e) => handleServiceClick('vn-to-au', e)}
                    >
                      Outbound Services (VN to AU)
                    </Link>
                  </div>
                </div>
              </div>
              <a
                href="https://bambuup.com/en/about#our_story"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium px-3 py-2 rounded-lg transition-colors duration-300 ${isScrolled
                  ? 'text-gray-800 hover:text-[#91BE1F]'
                  : 'text-gray-800 hover:text-[#91BE1F]'
                  }`}
              >
                About Us
              </a>
              <Link
                to="/contact"
                className={`font-medium px-3 py-2 rounded-lg transition-colors duration-300 ${isScrolled
                  ? 'text-gray-800 hover:text-[#91BE1F]'
                  : 'text-gray-800 hover:text-[#91BE1F]'
                  }`}
              >
                Contact
              </Link>
            </nav>
            <Link
              to="/book"
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${isScrolled
                ? 'bg-[#91BE1F] hover:bg-[#7ea81a] text-white shadow-lg hover:shadow-green-500/20'
                : 'bg-[#91BE1F] hover:bg-[#7ea81a] text-white border border-white/20'
                }`}
            >
              Book now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled
              ? 'text-gray-800 hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
              }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Replace the mobile menu JSX with the new component */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onServiceClick={handleServiceClick}
      />
    </header>
  );
};

// Memoize the entire Header component
export default React.memo(Header);

// https://calendly.com/capital-bambuup/30min?