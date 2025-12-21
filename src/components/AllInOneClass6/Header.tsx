import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from '../../assets/Weda_logo_cropped.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = [
    { name: "Home", id: "home" },
    { name: "Books", id: "books" },
    { name: "Features", id: "features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img
              src={Logo}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-full hover:bg-green-50 text-gray-600 hover:text-green-900 font-medium transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            
            <button 
              onClick={() => scrollToSection("books")}
              className="ml-4 px-6 py-2 bg-green-900 text-white rounded-full font-medium hover:bg-green-800 transition-colors shadow-lg shadow-green-900/20"
            >
              Buy Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-green-900 focus:outline-none p-2"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 rounded-xl hover:bg-green-50 text-gray-600 hover:text-green-900 font-medium text-left transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection("books")}
                className="mt-4 w-full px-6 py-3 bg-green-900 text-white rounded-xl font-medium hover:bg-green-800 transition-colors text-center shadow-lg"
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
