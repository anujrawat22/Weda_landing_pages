import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../../assets/Weda_logo_cropped.png'; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
          
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
            <h3 className="text-lg md:text-xl font-serif font-bold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Our Books</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-serif font-bold mb-4 md:mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                <FaMapMarkerAlt className="mt-1 text-green-500 shrink-0" />
                <span>123 Defence Colony, New Delhi, India - 110024</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm md:text-base">
                <FaPhoneAlt className="text-green-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm md:text-base">
                <FaEnvelope className="text-green-500 shrink-0" />
                <span>support@weda.in</span>
              </li>
            </ul>
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
