import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../../assets/Weda_logo_cropped.png'; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
               {/* Use a white version of logo if available, or filter brightness */}
               <img src={Logo} alt="WEDA Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering future leaders with the best preparation material for Sainik School & RMS entrance exams. Discipline, Dedication, and Success.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-700 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-700 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-700 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Books</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="mt-1 text-green-500 shrink-0" />
                <span>123 Defence Colony, New Delhi, India - 110024</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhoneAlt className="text-green-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-green-500 shrink-0" />
                <span>support@weda.in</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get exam tips and updates.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full px-4 py-3 rounded-lg bg-green-900 border border-green-800 text-white placeholder-green-400 focus:outline-none focus:border-green-500"
              />
              <button className="w-full px-4 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} WEDA Education. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
