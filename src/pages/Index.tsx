
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Enhanced scroll progress with logo colors */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
        <div 
          className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 transition-all duration-150 shadow-lg"
          style={{ 
            width: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`,
            boxShadow: '0 0 15px rgba(239, 68, 68, 0.6)'
          }}
        />
      </div>
      
      <Navbar />
      
      {/* Extended gradient background matching logo colors */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <HeroSection />
        
        {/* Extended gradient transition section */}
        <div className="h-48 bg-gradient-to-b from-gray-900 via-gray-800 to-white"></div>
      </div>
      
      <div className="relative z-10 bg-white">
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <IndustriesSection />
      </div>
      
      <Footer />

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          background: #ffffff;
          overflow-x: hidden;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ef4444, #f97316);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #dc2626, #ea580c);
        }
      `}</style>
    </div>
  );
};

export default Index;
