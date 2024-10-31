import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if navbar should be transparent based on current route and scroll position
  const isHomePage = location.pathname === '/';
  const shouldBeTransparent = isHomePage && !isScrolled && !isOpen;

  const handleDropdownClick = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    { 
      name: 'About',
      path: '/about',
      dropdownItems: [
        { name: 'Our Story', path: '/about/story' },
        { name: 'What We Believe', path: '/about/beliefs' },
        { name: 'Leadership Team', path: '/about/leadership' },
      ]
    },
    {
      name: 'Worship',
      path: '/worship',
      dropdownItems: [
        { name: 'Service Times', path: '/worship/services' },
        { name: 'Live Stream', path: '/worship/live' },
        { name: 'Past Sermons', path: '/worship/sermons' },
      ]
    },
    {
      name: 'Ministries',
      path: '/ministries',
      dropdownItems: [
        { name: 'Children', path: '/ministries/children' },
        { name: 'Youth', path: '/ministries/youth' },
        { name: 'Young Adults', path: '/ministries/young-adults' },
        { name: 'Family', path: '/ministries/family' },
      ]
    },
    {
      name: 'Community',
      path: '/community',
      dropdownItems: [
        { name: 'Events', path: '/community/events' },
        { name: 'Small Groups', path: '/community/groups' },
        { name: 'Get Involved', path: '/community/volunteer' },
      ]
    },
    { name: 'Give', path: '/give' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        shouldBeTransparent 
          ? 'bg-transparent' 
          : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <Globe 
                className={`h-8 w-8 transition-colors duration-300 ${
                  shouldBeTransparent ? 'text-white' : 'text-[#0B3954]'
                }`} 
              />
              <span 
                className={`font-bold text-2xl transition-colors duration-300 ${
                  shouldBeTransparent ? 'text-white' : 'text-[#0B3954]'
                }`}
              >
                ANZGAC
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdownItems ? (
                  <button
                    onClick={(e) => handleDropdownClick(link.name, e)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium
                      transition-colors duration-300 ${
                      shouldBeTransparent ? 'text-white hover:text-white/80' : 'text-gray-700 hover:text-[#0B3954]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 
                        ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                    />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium
                      transition-colors duration-300 ${
                      shouldBeTransparent ? 'text-white hover:text-white/80' : 'text-gray-700 hover:text-[#0B3954]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
                
                {link.dropdownItems && activeDropdown === link.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0B3954]"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/live"
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-[#0B3954] text-white 
                hover:bg-[#0D4B6F] transition-colors duration-300"
            >
              Watch Live
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md 
                transition-colors duration-300
                ${shouldBeTransparent ? 'text-white hover:text-white/80' : 'text-gray-700 hover:text-[#0B3954]'}
                focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdownItems ? (
                  <>
                    <button
                      onClick={(e) => handleDropdownClick(link.name, e)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 
                               hover:text-[#0B3954] hover:bg-gray-50"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 
                        ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#0B3954] hover:bg-gray-50"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 
                             hover:text-[#0B3954] hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/live"
              className="block px-3 py-2 text-base font-medium text-white bg-[#0B3954] 
                       hover:bg-[#0D4B6F] rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Watch Live
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;