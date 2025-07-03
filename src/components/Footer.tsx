import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import images from '../assets';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleServiceClick = (direction: 'au-to-vn' | 'vn-to-au', e: React.MouseEvent) => {
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
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full filter blur-[80px] animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={images.logo} alt="Bambuup Logo" className="h-10 w-auto mb-6" />
            <p className="text-gray-600 leading-relaxed">
              Your trusted partner for business expansion and market entry strategies in Australia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/bambuupnetwork/"
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-green-600 hover:bg-green-50 hover:text-green-700 transition-colors duration-300 shadow-sm hover:shadow-md border border-gray-100"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/bambuup/"
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-green-600 hover:bg-green-50 hover:text-green-700 transition-colors duration-300 shadow-sm hover:shadow-md border border-gray-100"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/BambuUPplatform"
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-green-600 hover:bg-green-50 hover:text-green-700 transition-colors duration-300 shadow-sm hover:shadow-md border border-gray-100"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/#services"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center"
                  onClick={(e) => handleServiceClick('au-to-vn', e)}
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Inbound Services (AU to VN)
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center"
                  onClick={(e) => handleServiceClick('vn-to-au', e)}
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Outbound Services (VN to AU)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://bambuup.com/en/about#our_story"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://bambuup.com/en/news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="ml-3 text-gray-600">
                  10 Mckinley Avenue, Malvern, Vic 3144, Australia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="ml-3 text-gray-600">(+61) 468 515 831</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="ml-3 text-gray-600">vaughan.ryan@bambuup.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} BambuUP. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;