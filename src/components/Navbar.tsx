import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 w-full backdrop-blur-md border-b z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 border-gray-200 shadow-lg' : 'bg-white/80 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative h-12">
              <img 
                src="/CognitiMax (1).png" 
                alt="Cognitimax - Digital Growth Hub" 
                className="h-12 w-[120px] transform transition-all duration-300 group-hover:scale-105"
                style={{ 
                  maxWidth: '120px',
                  height: '58px',
                  objectFit: 'contain'
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative px-3 py-2 rounded-md text-sm font-subheading font-medium transition-all duration-300 group ${
                isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transform transition-transform duration-300 ${
                isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link
              to="/services"
              className={`relative px-3 py-2 rounded-md text-sm font-subheading font-medium transition-all duration-300 group ${
                isActive('/services') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Services
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transform transition-transform duration-300 ${
                isActive('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link
              to="/industries"
              className={`relative px-3 py-2 rounded-md text-sm font-subheading font-medium transition-all duration-300 group ${
                isActive('/industries') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Industries
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transform transition-transform duration-300 ${
                isActive('/industries') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link
              to="/free-audit"
              className={`relative px-3 py-2 rounded-md text-sm font-subheading font-medium transition-all duration-300 group ${
                isActive('/free-audit') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Free Audit
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transform transition-transform duration-300 ${
                isActive('/free-audit') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Button 
              asChild 
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 transform transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-red-300 focus:outline-none font-subheading"
            >
              <Link to="/free-audit" className="flex items-center gap-2 font-subheading">
                <span>🚀</span>
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors transform hover:scale-110 duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-md p-1"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-subheading font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                🏠 Home
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-subheading font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                ⚡ Services
              </Link>
              <Link
                to="/industries"
                className="block px-3 py-2 rounded-md text-base font-subheading font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                🏭 Industries
              </Link>
              <Link
                to="/free-audit"
                className="block px-3 py-2 rounded-md text-base font-subheading font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                📊 Free Audit
              </Link>
              <div className="pt-2">
                <Button asChild className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 focus:ring-4 focus:ring-red-300 focus:outline-none font-subheading">
                  <Link to="/free-audit" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 font-subheading">
                    <span>🚀</span>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
