import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

const Services = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add the hexagon clip path style to the document
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = hexagonClipPath;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Background Elements */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-70"></div>
        
        {/* Animated Blob */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        
        {/* Orbit Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-red-500 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-orange-500 rounded-full animate-spin-slow animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Digital Marketing <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Comprehensive digital marketing solutions designed to grow your business and maximize your online presence. From SEO to social media, we've got you covered.
          </motion.p>
        </div>
      </section>

      <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className={`absolute -left-20 top-1/4 w-96 h-96 bg-gradient-to-br from-red-100 to-orange-50 rounded-full blur-3xl transition-all duration-1000 ${isIntersecting ? 'opacity-50 scale-100' : 'opacity-0 scale-50'}`}
          ></div>
          <div 
            className={`absolute -right-20 bottom-1/4 w-96 h-96 bg-gradient-to-tl from-orange-100 to-red-50 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-50 scale-100' : 'opacity-0 scale-50'}`}
          ></div>
          
          {/* Multiple orbit lines inspired by logo */}
          <div 
            className={`absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 border border-red-200 rounded-full transition-all duration-1500 ${isIntersecting ? 'opacity-30 scale-100' : 'opacity-0 scale-0'}`}
          ></div>
          <div 
            className={`absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 border border-orange-200 rounded-full transition-all duration-1800 delay-300 ${isIntersecting ? 'opacity-20 scale-100' : 'opacity-0 scale-0'}`}
          ></div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-[10%] w-8 h-8 rotate-45 bg-red-100 opacity-40"></div>
          <div className="absolute bottom-20 right-[10%] w-12 h-12 rotate-12 bg-orange-100 opacity-40"></div>
          <div className="absolute top-[40%] right-[15%] w-6 h-6 rounded-full bg-gradient-to-r from-red-200 to-orange-200 opacity-40"></div>
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

      {/* CTA Section with Enhanced Design */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-white rounded-full animate-ping-slow"></div>
            <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-white rounded-full animate-ping-slow animation-delay-1000"></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Digital Presence?
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation and discover how our services can drive your business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-red-600 font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="https://cognitimax.aidaform.com/client-intake-form">
              Contact us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
