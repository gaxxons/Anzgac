import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B3954] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Visit Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <p>123 Church Street</p>
                  <p>Sydney, NSW 2000</p>
                  <p>Australia</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold">Service Times</p>
                  <p>Saturday: 9:30 AM</p>
                  <p>Bible Study: 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link to="/worship/live" className="hover:text-gray-300 transition-colors">Watch Live</Link></li>
              <li><Link to="/worship/sermons" className="hover:text-gray-300 transition-colors">Past Sermons</Link></li>
              <li><Link to="/community/events" className="hover:text-gray-300 transition-colors">Events</Link></li>
              <li><Link to="/give" className="hover:text-gray-300 transition-colors">Give Online</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+61 2 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@anzgac.org</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and events.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                         focus:outline-none focus:border-white placeholder-gray-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-[#0B3954] rounded-lg font-medium 
                         hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ANZGAC. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            {' • '}
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;