import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Linkedin, Facebook, Instagram } from 'lucide-react';

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 shadow-lg backdrop-blur-md' 
          : 'bg-gradient-to-r from-red-50 to-orange-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative h-12">
              <img 
                src="/lovable-uploads/logo.png" 
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
          <div className="hidden lg:flex items-center">
            {/* Main Navigation */}
            <div className="flex items-center space-x-1 mr-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/services', label: 'Services' },
                { path: '/industries', label: 'Industries' },
                { path: '/free-audit', label: 'Free Audit' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-white/50 hover:text-red-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 mr-6">
              <a
                href="https://www.linkedin.com/company/cognitimax/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/80 text-gray-600 hover:text-red-600 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1L3r3A9GYZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/80 text-gray-600 hover:text-red-600 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/cognitimax_dma?igsh=MWg4aHJ4Nm9yb25ocA=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/80 text-gray-600 hover:text-red-600 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Instagram size={18} />
              </a>
            </div>

            {/* CTA Button */}
            <Button 
              asChild 
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link to="/free-audit" className="flex items-center gap-2">
                <span>🚀</span>
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-white/80 text-gray-700 hover:text-red-600 transition-colors duration-300 shadow-sm hover:shadow-md"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl">
            <div className="px-4 py-3 space-y-2">
              {[
                { path: '/', label: 'Home', icon: '🏠' },
                { path: '/services', label: 'Services', icon: '⚡' },
                { path: '/industries', label: 'Industries', icon: '🏭' },
                { path: '/free-audit', label: 'Free Audit', icon: '📊' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              ))}

              {/* Mobile Social Media Icons */}
              <div className="flex items-center space-x-3 px-4 py-3 border-t border-gray-200 mt-2">
                <a
                  href="https://www.linkedin.com/company/cognitimax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-50 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.facebook.com/cognitimax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-50 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/cognitimax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-50 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
              </div>

              <div className="pt-2">
                <Button asChild className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  <Link to="/free-audit" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
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
