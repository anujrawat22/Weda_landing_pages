import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../../assets/Weda_logo_cropped.png'; // Adjust path if needed

const Footer = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <a href="https://www.facebook.com/profile.php?id=61581056314766" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-700 transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/weda_books_/" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-700 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-serif font-bold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li onClick={() => scrollToSection('home')}><span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Home</span></li>
              <li onClick={() => scrollToSection('books')}><span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Books</span></li>
              <li onClick={() => scrollToSection('features')}><span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Features</span></li>
              <li onClick={() => scrollToSection('testimonials')}><span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Testimonials</span></li>
              <li onClick={() => scrollToSection('faq')}><span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">FAQs</span></li>
              <li onClick={() => scrollToSection('contact')}><span className="text-gray-400 hover:text-white transition-colors text-sm md:text-base cursor-pointer">Contact</span></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-serif font-bold mb-4 md:mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {/* Location */}
              <li className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                <FaMapMarkerAlt className="mt-1 text-green-500 shrink-0" />
                <a
                  href="https://www.google.com/maps/place/C%2F29,+Shivlok,+Shivlok+Colony,+Dehradun,+Uttarakhand+248008/@30.3185303,78.0745268,21z/data=!4m6!3m5!1s0x3909284f3b224693:0xc6eb2ac2c2d6cc3f!8m2!3d30.3185357!4d78.0745466!16s%2Fg%2F11lmpqy5k_?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  C-29 Shivlok Colony Ladpur, Raipur, Dehradun, Uttarakhand, 248001
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3 text-gray-400 text-sm md:text-base">
                <FaPhoneAlt className="text-green-500 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-green-400 transition"
                >
                  +91 98765 43210
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3 text-gray-400 text-sm md:text-base">
                <FaEnvelope className="text-green-500 shrink-0" />
                <a
                  href="mailto:support@weda.in"
                  className="hover:text-green-400 transition"
                >
                  support@weda.in
                </a>
              </li>
            </ul>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} WEDA Education. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://wedabooks.com/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://wedabooks.com/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
