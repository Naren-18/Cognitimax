import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const services = [
    {
      title: 'Social Media Marketing',
      subtitle: 'Build Your Community',
      description: 'Create engaging content and grow your social presence across all platforms',
      icon: '📱',
      color: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=600&q=80',
      platforms: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn']
    },
    {
      title: 'SEO & Content',
      subtitle: 'Rank Higher, Convert Better',
      description: 'Dominate search results with strategic SEO and compelling content',
      icon: '🔍',
      color: 'from-orange-500 to-yellow-500',
      image: '/seo.jpg',
      platforms: ['Google', 'Bing', 'YouTube', 'Blogs']
    },
    {
      title: 'PPC Advertising',
      subtitle: 'Instant Results',
      description: 'Get immediate visibility with targeted paid advertising campaigns',
      icon: '💰',
      color: 'from-yellow-500 to-red-500',
      image: '/ppc.jpg',
      platforms: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'YouTube Ads']
    },
    {
      title: 'Brand Strategy',
      subtitle: 'Tell Your Story',
      description: 'Develop a powerful brand identity that resonates with your audience',
      icon: '✨',
      color: 'from-red-600 to-orange-600',
      image: '/Brand_Strategy.jpg',
      platforms: ['Logo Design', 'Brand Voice', 'Visual Identity', 'Guidelines']
    }
  ];
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 6000); // Increased from 4000ms to 6000ms for longer display
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden flex items-center justify-center pt-20 pb-16"
    >
      {/* Animated Background Grid with logo colors */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(239,68,68,0.1)_49%,rgba(239,68,68,0.1)_51%,transparent_52%)] bg-[length:20px_20px]" />
      </div>

      {/* Floating Elements with logo colors */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-gradient-to-r ${services[i % services.length]?.color || 'from-red-500 to-orange-500'} rounded-full opacity-60 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Side - Main Content */}
          <div className={`space-y-8 flex flex-col justify-center transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold italic leading-tight">
                <span className="block text-white mb-2">DIGITAL</span>
                <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  MARKETING
                </span>
                <span className="block text-white text-2xl md:text-3xl lg:text-4xl font-medium mt-4">
                  THAT DELIVERS
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed font-body">
                Transform your business with our comprehensive digital marketing solutions. 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-semibold font-tagline tracking-wider">
                  {" "}We drive results that matter.
                </span>
              </p>
            </div>

            {/* Action Buttons - Improved accessibility and alignment */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                asChild 
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-6 rounded-xl text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-red-300 focus:outline-none font-subheading"
                aria-label="Get a free digital marketing audit for your business"
              >
                <Link to="/free-audit" className="flex items-center gap-3 font-subheading">
                  <span className="relative z-10">GET FREE AUDIT</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-6 rounded-xl text-lg font-bold backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-red-300 focus:outline-none font-subheading"
                aria-label="View our digital marketing services"
              >
                <Link to="/services" className="flex items-center gap-3 font-subheading">
                  <Play className="w-5 h-5" />
                  VIEW SERVICES
                </Link>
              </Button>
            </div>

            {/* Stats - Better alignment */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '98%', label: 'Client Success Rate' },
                { number: '24/7', label: 'Expert Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-heading font-bold italic text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Side - Service Placards */}
          <div className={`relative flex items-center justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Placard Display - Fixed overlapping and blur issues */}
              <div className="relative h-[520px]">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out cursor-pointer ${
                      index === currentService 
                        ? 'opacity-100 scale-100 z-30 translate-x-0 translate-y-0' 
                        : index === (currentService + 1) % services.length
                        ? 'opacity-70 scale-95 z-20 translate-x-6 translate-y-6'
                        : index === (currentService + 2) % services.length
                        ? 'opacity-40 scale-90 z-10 translate-x-12 translate-y-12'
                        : 'opacity-0 scale-85 z-0 translate-x-16 translate-y-16'
                    }`}
                    onClick={() => setCurrentService(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${service.title} service details`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setCurrentService(index);
                      }
                    }}
                  >
                    <div className={`w-full h-full rounded-2xl border border-white/20 shadow-2xl p-8 flex flex-col justify-between hover:shadow-3xl transition-all duration-300 ${index === currentService ? 'ring-2 ring-white/50 shadow-white/20' : ''}`}
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      {/* Service Icon */}
                      <div className="text-center mb-6">
                        <div className="text-5xl mb-4 transform hover:scale-110 transition-transform duration-300 filter-none">
                          {service.icon}
                        </div>
                        <div className={`w-16 h-1 bg-gradient-to-r ${service.color} rounded-full mx-auto`} />
                      </div>

                      {/* Service Content */}
                      <div className="space-y-4 text-center flex-1">
                        <div className="mb-4">
                          <h3 className="text-xl font-heading font-bold italic text-white mb-2 filter-none" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                            {service.title}
                          </h3>
                          <p className={`text-base font-subheading font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent filter-none`} style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                            {service.subtitle}
                          </p>
                        </div>
                        
                        <p className="text-white leading-relaxed text-sm mb-4 filter-none font-body" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                          {service.description}
                        </p>

                        {/* Platform tags */}
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                          {service.platforms.map((platform, idx) => (
                            <span key={idx} className="text-xs px-3 py-1 bg-black/30 border border-white/30 rounded-full text-white filter-none font-body">
                              {platform}
                            </span>
                          ))}
                        </div>
                        
                        <Button 
                          asChild
                          className={`w-full bg-gradient-to-r ${service.color} hover:scale-105 transition-all duration-300 text-white font-bold py-3 rounded-xl focus:ring-4 focus:ring-white/20 focus:outline-none border-0 filter-none font-subheading`}
                          aria-label={`Learn more about ${service.title}`}
                        >
                          <Link to="/services" className="filter-none font-subheading">
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Indicators - Improved accessibility */}
              <div className="flex justify-center space-x-4 mt-8" role="tablist" aria-label="Service indicators">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentService(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 focus:ring-4 focus:ring-white/20 focus:outline-none border-2 ${
                      index === currentService 
                        ? `bg-gradient-to-r ${services[currentService].color} scale-125 border-white/50` 
                        : 'bg-transparent border-gray-500 hover:border-gray-400 hover:bg-gray-600'
                    }`}
                    aria-label={`Show ${service.title} service`}
                    role="tab"
                    aria-selected={index === currentService}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Better alignment */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="text-gray-400 text-sm font-medium text-center font-tagline tracking-wider">EXPLORE MORE</div>
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-red-500 to-transparent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
