import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Custom CSS for hexagon clip path
const hexagonClipPath = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.clip-hexagon {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.service-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.service-card:hover .service-image {
  transform: scale(1.05);
}
`;

const ServicesSection = () => {
  // Add the hexagon clip path style to the document
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = hexagonClipPath;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: 'SEO & SEM',
      description: 'Be seen. Get clicks. Drive growth. We blend long-term organic growth (SEO) with instant visibility through paid search ads (SEM).',
      features: ['Website Audit & Analysis', 'Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building', 'Local SEO'],
      link: '/services/seo',
      image: '/seo.jpg',
      gradient: 'from-red-500 to-orange-400'
    },
    {
      title: 'Pay-Per-Click',
      description: 'Get instant visibility. Pay only for results. PPC advertising quickly places your business at the top of search results.',
      features: ['Google ADS', 'Instagram ADS', 'Facebook ADS', 'Meta ADS', 'LinkedIn ADS', 'Geo-Targeting Ads'],
      link: '/services/ppc',
      image: '/ppc.jpg',
      gradient: 'from-orange-500 to-yellow-400'
    },
    {
      title: 'Social Media Marketing',
      description: 'Connect, engage, and grow your brand. Social media is where your audience lives—we help you connect with them.',
      features: ['Strategy & Planning', 'Content Creation', 'Platform Management', 'Paid Ad Campaigns', 'Audience Growth', 'Performance Tracking'],
      link: '/services/social-media',
      image: '/lovable-uploads/ssm.png',
      gradient: 'from-red-600 to-pink-500'
    },
    {
      title: 'Online Marketing',
      description: 'Reach, Engage, and Convert Your Audience. Comprehensive suite of services designed to build your brand.',
      features: ['Influencer Marketing', 'Content Marketing', 'Email Marketing', 'Video Marketing', 'Web Analysis', 'CRO', 'Online Reputation', 'AI & Automation'],
      link: '/services/online-marketing',
      image: '/lovable-uploads/om.jpg',
      gradient: 'from-orange-600 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute -left-20 top-1/4 w-96 h-96 bg-gradient-to-br from-red-100 to-orange-50 rounded-full blur-3xl transition-all duration-1000 ${isIntersecting ? 'opacity-50 scale-100' : 'opacity-0 scale-50'}`}
        ></div>
        <div 
          className={`absolute -right-20 bottom-1/4 w-96 h-96 bg-gradient-to-tl from-orange-100 to-red-50 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-50 scale-100' : 'opacity-0 scale-50'}`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What We <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing services designed to grow your business and maximize your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col service-card">
                {/* Service Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-20`}></div>
                </div>
                
                <div className="px-6 pt-6 pb-4 text-center flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="px-6 pb-6 mt-auto">
                  <Button asChild className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-300">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Button asChild size="lg" variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 hover:text-white transition-all duration-300 px-8 py-6 rounded-full shadow-sm hover:shadow-md">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
