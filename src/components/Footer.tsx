import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import images from '../assets';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-black">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={images.logo} alt="Bambuup Logo" className="h-10 w-auto mr-2 mb-3" />
            <p className="text-black mb-4">
              Your trusted partner for business expansion and market entry strategies in Australia.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/bambuupnetwork/" className="text-green-500 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/bambuup/" className="text-green-500 hover:text-black transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/BambuUPplatform" className="text-green-500 hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/market-research" className="text-black hover:text-primary-400 transition-colors">
                  Market Research & Entry Strategy
                </Link>
              </li>
              <li>
                <Link to="/services/trade-representation" className="text-black hover:text-primary-400 transition-colors">
                  Trade Representation
                </Link>
              </li>
              <li>
                <Link to="/services/business-matching" className="text-black hover:text-primary-400 transition-colors">
                  Business Matching
                </Link>
              </li>
              <li>
                <Link to="/services/business-advisory" className="text-black hover:text-primary-400 transition-colors">
                  Business Advisory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-black hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-black hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-black hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-black">
                  123 Business Street, Sydney, NSW 2000, Australia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-black">+61 2 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-black">info@businessgrowth.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black mt-12 pt-8 text-center text-black">
          <p>&copy; {new Date().getFullYear()} BambuUP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;