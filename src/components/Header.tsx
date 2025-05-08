import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import images from "../assets"
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-start">
            <img src={images.logo} alt="Bambuup Logo" className="h-8 w-auto mr-2" />

          </div>


          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link
                to="/"
                className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-600 transition-colors`}
              >
                Home
              </Link>
              <div className="relative group">
                <button
                  className={`flex items-center font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-600 transition-colors`}
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <Link to="/services/market-research" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                      Market Research & Entry Strategy
                    </Link>
                    <Link to="/services/trade-representation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                      Trade Representation
                    </Link>
                    <Link to="/services/business-matching" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                      Business Matching
                    </Link>
                    <Link to="/services/business-advisory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                      Business Advisory
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-600 transition-colors`}
              >
                About Us
              </Link>
              <a
                href="https://bambuup.com/en/contact"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-600 transition-colors`}
              >
                Contact
              </a>

            </nav>
            <Link
              to="/login"
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-md font-medium transition-colors"
            >
              Login
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="px-3 py-2">
              <div className="font-medium text-gray-900">Services</div>
              <div className="pl-4 mt-1 space-y-1">
                <Link
                  to="/services/market-research"
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-primary-700"
                  onClick={() => setIsOpen(false)}
                >
                  Market Research & Entry Strategy
                </Link>
                <Link
                  to="/services/trade-representation"
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-primary-700"
                  onClick={() => setIsOpen(false)}
                >
                  Trade Representation
                </Link>
                <Link
                  to="/services/business-matching"
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-primary-700"
                  onClick={() => setIsOpen(false)}
                >
                  Business Matching
                </Link>
                <Link
                  to="/services/business-advisory"
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-primary-700"
                  onClick={() => setIsOpen(false)}
                >
                  Business Advisory
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {/* <div className="pt-2">
              <Link
                to="/login"
                className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-md font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;