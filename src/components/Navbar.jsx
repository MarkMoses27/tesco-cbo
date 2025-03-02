import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import TECSO_LOGO from "../assets/tesco-cbo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on window resize (to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle dropdown for keyboard navigation
  const handleDropdownKeyDown = (e, dropdownName) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    } else if (e.key === "Escape") {
      setActiveDropdown(null);
    }
  };

  // Navigation links data
  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      dropdown: true,
      items: [
        { name: "Our History", path: "/about/history" },
        { name: "Our Team", path: "/about/our-team" },
        { name: "Testimonials", path: "/about/testimonials" },
      ]
    },
    { name: "Programs", path: "/programs" },
    {
      name: "Get Involved",
      dropdown: true, 
      items: [
        { name: "Volunteer", path: "/get-involved/volunteer" },
        { name: "Donate", path: "/get-involved/donate" },
      ]
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav 
      ref={navRef}
      className="bg-blue-800 text-white fixed w-full z-50 shadow-md"
      role="navigation"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img 
            src={TECSO_LOGO} 
            alt="TESCO Logo" 
            className="h-20 w-auto"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Main Navigation */}
        <div 
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block absolute md:relative top-full left-0 right-0 md:top-auto bg-blue-800 shadow-lg md:shadow-none transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row md:items-center py-2 md:py-0">
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                {!link.dropdown ? (
                  <Link
                    to={link.path}
                    className="block px-4 py-2 md:py-3 hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-200 transition-colors duration-200 ease-in-out"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 md:py-3 hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-200 transition-colors duration-200 ease-in-out"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === link.name}
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      onMouseEnter={() => window.innerWidth >= 768 && setActiveDropdown(link.name)}
                      onMouseLeave={() => window.innerWidth >= 768 && setActiveDropdown(null)}
                      onKeyDown={(e) => handleDropdownKeyDown(e, link.name)}
                    >
                      {link.name}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 ml-1 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === link.name && (
                      <ul 
                        className="md:absolute left-0 mt-0 md:mt-0 bg-white md:rounded-md shadow-lg py-2 min-w-[200px] z-20"
                        onMouseEnter={() => window.innerWidth >= 768 && setActiveDropdown(link.name)}
                        onMouseLeave={() => window.innerWidth >= 768 && setActiveDropdown(null)}
                      >
                        {link.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              to={item.path}
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-800 transition-colors duration-200"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;