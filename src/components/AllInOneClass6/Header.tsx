import { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import Logo from '../../assets/Weda_logo_cropped.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = useCallback((event) => {
    if (dropdownOpen && !event.target.closest(".dropdown-container")) {
      setDropdownOpen("");
    }
  }, [dropdownOpen]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);

  const navigationItems = [
    {
      name: "Products",
      dropdownItems: ["Software", "Hardware", "Services", "Solutions"]
    },
    {
      name: "Services",
      dropdownItems: ["Consulting", "Development", "Support", "Training"]
    },
    { name: "Pricing" },
    { name: "Contact" }
  ];

  const Dropdown = ({ items, name }) => (
    <div className="dropdown-container relative">
      <button
        className="flex items-center space-x-1 px-4 py-2 rounded-full hover:bg-green-50 text-green-900 font-medium transition-all duration-300"
        onClick={(e) => {
          e.stopPropagation();
          setDropdownOpen(dropdownOpen === name ? "" : name);
        }}
        aria-expanded={dropdownOpen === name}
        aria-haspopup="true"
      >
        <span>{name}</span>
        <FaChevronDown
          className={`transition-transform duration-300 text-sm ${
            dropdownOpen === name ? "rotate-180" : ""
          }`}
        />
      </button>
      {dropdownOpen === name && (
        <div className="absolute top-full left-0 mt-2 w-48 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 transition-colors duration-300"
                role="menuitem"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src={Logo}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdownItems ? (
                  <Dropdown items={item.dropdownItems} name={item.name} />
                ) : (
                  <a
                    href="#"
                    className="px-4 py-2 rounded-full text-green-900 font-medium hover:bg-green-50 transition-all duration-300"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
              <button className="flex items-center px-4 py-2 rounded-full text-green-900 font-medium hover:bg-green-50 transition-all duration-300">
                <BiUser className="mr-2 text-lg" />
                Login
              </button>
              <button className="px-5 py-2 rounded-full bg-green-900 text-white font-medium hover:bg-green-800 shadow-lg shadow-green-900/20 transition-all duration-300 transform hover:-translate-y-0.5">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-green-50 text-green-900 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-inner border border-gray-100 p-4 space-y-2 animate-fadeIn">
            {navigationItems.map((item) => (
              <div key={item.name} className="py-1">
                {item.dropdownItems ? (
                  <div className="space-y-1">
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-green-900 font-medium hover:bg-green-50 transition-all duration-300"
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === item.name ? "" : item.name)
                      }
                    >
                      {item.name}
                      <FaChevronDown
                        className={`transition-transform duration-300 text-sm ${
                          dropdownOpen === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {dropdownOpen === item.name && (
                      <div className="pl-4 space-y-1 border-l-2 border-green-100 ml-4">
                        {item.dropdownItems.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-green-900 hover:bg-green-50 transition-all duration-300"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-lg text-green-900 font-medium hover:bg-green-50 transition-all duration-300"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col space-y-3">
              <button className="flex items-center justify-center w-full px-4 py-2 rounded-lg border border-green-200 text-green-900 font-medium hover:bg-green-50 transition-all duration-300">
                <BiUser className="mr-2" />
                Login
              </button>
              <button className="w-full px-4 py-2 rounded-lg bg-green-900 text-white font-medium hover:bg-green-800 transition-all duration-300">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
