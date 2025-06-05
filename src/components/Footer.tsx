
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background inspired by logo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        ></div>
        <div 
          className={`absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        ></div>
        
        {/* Orbit line inspired by logo */}
        <div 
          className={`absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 border border-red-800/20 rounded-full transition-all duration-1500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div 
            className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Cognitimax" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted digital marketing partner for growth and success in the online world.
            </p>
            <div className="text-sm text-gray-400">
              <p>Offices in USA & India</p>
              <p>Global reach, local expertise</p>
            </div>
          </div>

          {/* Services */}
          <div 
            className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services/seo" className="hover:text-white transition-colors">SEO & SEM</Link></li>
              <li><Link to="/services/ppc" className="hover:text-white transition-colors">Pay-Per-Click</Link></li>
              <li><Link to="/services/social-media" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services/online-marketing" className="hover:text-white transition-colors">Online Marketing</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div 
            className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Health Sector</li>
              <li className="hover:text-white transition-colors cursor-pointer">Restaurants & Cafes</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fitness</li>
              <li className="hover:text-white transition-colors cursor-pointer">Car Dealerships</li>
              <li className="hover:text-white transition-colors cursor-pointer">IT & Tech</li>
              <li className="hover:text-white transition-colors cursor-pointer">Real Estate</li>
            </ul>
          </div>

          {/* Contact */}
          <div 
            className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/free-audit" className="hover:text-white transition-colors">Free Audit</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>
            </ul>
          </div>
        </div>

        <div 
          className={`border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p>&copy; 2024 Cognitimax. All rights reserved. <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Built for digital success.</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
