
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OnlineMarketingService = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement>(null);

  // Track scroll position
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Track cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated cursor follower */}
      <div 
        className="fixed w-32 h-32 rounded-full bg-gradient-to-r from-orange-200 to-red-300 opacity-20 blur-3xl pointer-events-none z-0"
        style={{ 
          left: `${cursorPosition.x - 64}px`, 
          top: `${cursorPosition.y - 64}px`,
          transition: 'transform 0.2s ease-out, left 0.3s ease-out, top 0.3s ease-out'
        }}
      />
      
      {/* Fixed animated circles inspired by logo */}
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="fixed bottom-0 left-1/3 w-80 h-80 bg-red-400/10 rounded-full blur-3xl -z-10 animate-pulse animation-delay-1000" />
      
      {/* Animated red orbit lines inspired by the logo */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute top-1/2 left-1/2 w-full h-full border-4 border-red-500 rounded-full animate-[spin_20s_linear_infinite]" style={{ transform: `translate(-50%, -50%) rotate(${scrollY * 0.05}deg)` }} />
          <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] border-2 border-red-400 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{ transform: `translate(-50%, -50%) rotate(${-scrollY * 0.08}deg)` }} />
        </div>
      </div>

      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-br from-orange-50 to-red-50">
        <div 
          ref={contentRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div 
            className="text-6xl mb-6 transform transition-all duration-1000"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >🌐</div>
          
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 delay-100"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Online Marketing
            </span>
          </h1>
          
          <p 
            className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-200"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            Reach, Engage, and Convert Your Audience. In today's digital world, effective online marketing is key to growing your business. At Cognitimax, we offer a comprehensive suite of services designed to build your brand, connect with your audience, and drive measurable results.
          </p>
          
          <div 
            className="space-y-4 text-left max-w-2xl mx-auto mb-8 bg-white/50 p-6 rounded-lg shadow-sm border border-red-100 transform transition-all duration-1000 delay-300"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
            }}
          >
            <h3 className="text-xl font-semibold text-gray-900">Our Services Include:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Influencer Marketing',
                'Content Marketing',
                'Email Marketing',
                'Video Marketing',
                'Web Analysis',
                'CRO (Conversion Rate Optimization)',
                'Online Reputation Management',
                'AI & Automation'
              ].map((service, index) => (
                <li 
                  key={index} 
                  className="flex items-center space-x-2 text-gray-600"
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.6s ease-out ${300 + index * 100}ms`
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <p 
            className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-500"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            At Cognitimax, we craft tailored strategies that align with your goals, drive results, and help your business thrive in the digital space.
          </p>

          <div
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 600ms'
            }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
              <Link to="/free-audit">Get Free Marketing Audit</Link>
            </Button>
          </div>

          {/* Animated orbit shape */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-red-200/20 rounded-full -z-10"
            style={{ 
              transform: `translate(-50%, -50%) rotate(${scrollY * 0.05}deg)`,
              opacity: 0.1
            }}
          ></div>
        </div>
      </section>

      {/* Additional section to showcase our approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              className="space-y-6"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s ease-out 700ms'
              }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Our <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Approach</span>
              </h2>
              
              <p className="text-gray-600">
                We believe in a data-driven, results-oriented approach to online marketing. Our team of experts works closely with you to understand your business goals and target audience, crafting customized strategies that deliver measurable results.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Research & Strategy',
                    description: 'We begin with thorough market research and strategic planning.'
                  },
                  {
                    title: 'Implementation',
                    description: 'Our team executes campaigns with precision and creativity.'
                  },
                  {
                    title: 'Analysis & Optimization',
                    description: 'We continuously monitor performance and make data-driven improvements.'
                  }
                ].map((step, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4"
                    style={{ 
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.6s ease-out ${800 + index * 150}ms`
                    }}
                  >
                    <div className="mt-1">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual element */}
            <div 
              className="relative h-80"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 0.8s ease-out 800ms'
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl transform rotate-3 opacity-80 animate-pulse"></div>
              <div className="absolute inset-0 w-full h-full bg-white rounded-3xl shadow-xl flex items-center justify-center transform -rotate-3">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl mx-auto flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Results-Driven</h3>
                  <p className="text-gray-600">Our online marketing strategies are designed to deliver measurable results that impact your bottom line.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OnlineMarketingService;
