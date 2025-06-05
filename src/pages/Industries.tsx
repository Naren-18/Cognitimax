import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Industry images import
const industryImages = {
  health: 'https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b01?q=80&w=600&auto=format&fit=crop',
  restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop',
  fitness: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
  automotive: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=600&auto=format&fit=crop',
  technology: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
  realestate: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop',
  pet: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop',
  beauty: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop',
  ecommerce: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=600&auto=format&fit=crop',
  education: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop',
  manufacturing: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=600&auto=format&fit=crop',
  hospitality: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop',
  legal: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop'
};

// Industry icons as SVG components for better quality
const IndustryIcon = ({ type }: { type: string }) => {
  const iconMap: {[key: string]: React.ReactNode} = {
    health: <span className="text-4xl">🏥</span>,
    restaurant: <span className="text-4xl">🍽️</span>,
    fitness: <span className="text-4xl">💪</span>,
    automotive: <span className="text-4xl">🚗</span>,
    technology: <span className="text-4xl">💻</span>,
    realestate: <span className="text-4xl">🏠</span>,
    pet: <span className="text-4xl">🐾</span>,
    beauty: <span className="text-4xl">💄</span>
  };
  
  return iconMap[type] || <span className="text-4xl">🌟</span>;
};

const IndustriesSection = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [filterTerm, setFilterTerm] = useState('');
  const sectionRef = useRef<HTMLElement | null>(null);

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
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = currentRef.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCursorPosition({ x, y });
      };
      
      currentRef.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        observer.unobserve(currentRef);
        currentRef.removeEventListener('mousemove', handleMouseMove);
      };
    }
    
    return () => {};
  }, []);

  // Auto-rotate industries
  useEffect(() => {
    if (isIntersecting) {
      const timer = setInterval(() => {
        setActiveIndustry(prev => (prev + 1) % industries.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isIntersecting]);

  const industries = [
    {
      title: 'Health Sector',
      description: 'Transform healthcare marketing with trust-building strategies and patient engagement solutions.',
      details: 'HIPAA-compliant marketing, local SEO for medical practices, reputation management, and patient acquisition campaigns.',
      icon: 'health',
      color: 'from-blue-500 to-cyan-500',
      bgPattern: 'medical',
      image: industryImages.health,
      link: '/industries/healthcare'
    },
    {
      title: 'Restaurants & Cafes',
      description: 'Boost foot traffic and online orders with location-focused digital marketing strategies.',
      details: 'Menu optimization, local directory listings, social media engagement, and delivery platform integration.',
      icon: 'restaurant',
      color: 'from-orange-500 to-red-500',
      bgPattern: 'food',
      image: industryImages.restaurant,
      link: '/industries/restaurants'
    },
    {
      title: 'Fitness & Wellness',
      description: 'Build fitness communities and drive membership growth with engaging content strategies.',
      details: 'Workout content creation, membership campaigns, fitness influencer partnerships, and wellness blogging.',
      icon: 'fitness',
      color: 'from-green-500 to-emerald-500',
      bgPattern: 'fitness',
      image: industryImages.fitness,
      link: '/industries/fitness'
    },
    {
      title: 'Car Dealerships',
      description: 'Drive automotive sales with inventory showcasing and targeted lead generation campaigns.',
      details: 'Vehicle inventory marketing, financing promotions, test drive campaigns, and automotive SEO.',
      icon: 'automotive',
      color: 'from-gray-600 to-slate-700',
      bgPattern: 'automotive',
      image: industryImages.automotive,
      link: '/industries/automotive'
    },
    {
      title: 'IT & Technology',
      description: 'Specialized B2B marketing for technology companies and software service providers.',
      details: 'Technical content marketing, SaaS growth strategies, developer community building, and enterprise sales.',
      icon: 'technology',
      color: 'from-purple-500 to-indigo-600',
      bgPattern: 'tech',
      image: industryImages.technology,
      link: '/industries/technology'
    },
    {
      title: 'Real Estate',
      description: 'Generate quality leads and showcase properties with compelling digital marketing.',
      details: 'Property listing optimization, virtual tour marketing, agent branding, and real estate SEO.',
      icon: 'realestate',
      color: 'from-yellow-500 to-orange-600',
      bgPattern: 'realestate',
      image: industryImages.realestate,
      link: '/industries/real-estate'
    },
    {
      title: 'Pet Services',
      description: 'Connect pet lovers with your services through heartwarming and engaging campaigns.',
      details: 'Pet-focused content, local service marketing, pet community building, and veterinary partnerships.',
      icon: 'pet',
      image: industryImages.pet,
      link: '/industries/pet-services',
      color: 'from-pink-500 to-rose-500',
      bgPattern: 'pets'
    },
    {
      title: 'Agriculture Suppliers',
      description: 'Reach farmers and agricultural businesses with targeted B2B marketing strategies.',
      details: 'Agricultural equipment marketing, seasonal campaigns, farmer education content, and supply chain optimization.',
      icon: '🌾',
      color: 'from-lime-600 to-green-600',
      bgPattern: 'agriculture',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop',
    }
  ];

  const filteredIndustries = industries.filter(industry =>
    industry.title.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* Interactive Cursor Follower */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main background blobs */}
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
        {/* Header Section */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block mb-4">
            <span className="text-6xl animate-pulse">🎯</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Industries We <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Transform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Specialized expertise across multiple industries with tailored strategies for each sector's unique challenges and growth opportunities.
          </p>
          
          {/* Search Filter */}
          <div className="max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="🔍 Search industries..."
              value={filterTerm}
              onChange={(e) => setFilterTerm(e.target.value)}
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-full focus:border-red-500 focus:outline-none transition-colors text-center"
            />
          </div>
        </div>

        {/* Featured Industry Showcase - Larger Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          {filteredIndustries.length > 0 && (
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-10"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform hover:scale-110"
                style={{ backgroundImage: `url(${filteredIndustries[activeIndustry].image})` }}
              ></div>
              
              <div className="relative z-20 p-10 md:p-16 flex flex-col md:flex-row items-center md:items-start text-white">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-red-600/90 to-orange-500/90 shadow-lg">
                    <IndustryIcon type={filteredIndustries[activeIndustry].icon} />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {filteredIndustries[activeIndustry].title}
                  </h3>
                  
                  <p className="text-lg text-gray-200 mb-6">
                    {filteredIndustries[activeIndustry].description}
                  </p>
                  
                  <p className="text-sm text-gray-300 mb-8">
                    {filteredIndustries[activeIndustry].details}
                  </p>
                  
                  <Button asChild className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 border-0 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link to={filteredIndustries[activeIndustry].link}>Explore Solutions</Link>
                  </Button>
                </div>
                
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-all duration-500">
                    <img 
                      src={filteredIndustries[activeIndustry].image} 
                      alt={filteredIndustries[activeIndustry].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
        
        {/* Industries Grid with Advanced Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredIndustries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              className="h-full"
            >
              <div 
                className={`group cursor-pointer h-full transform transition-all duration-500 hover:scale-105 hover:rotate-1 rounded-xl overflow-hidden shadow-md hover:shadow-xl ${activeIndustry === index ? 'ring-2 ring-red-500' : ''}`}
                onMouseEnter={() => setActiveIndustry(index)}
              >
                {/* Card with image background */}
                <div className="relative h-full flex flex-col">
                  {/* Image section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-white/90 to-white/70 flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <IndustryIcon type={industry.icon} />
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="relative flex-grow bg-white p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-500 group-hover:bg-clip-text transition-colors duration-300">
                      {industry.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {industry.description}
                    </p>
                    
                    <Button asChild className="w-full mt-auto bg-gradient-to-r from-red-600/90 to-orange-500/90 hover:from-red-700 hover:to-orange-600 text-white group-hover:shadow-md transition-all duration-300">
                      <Link to={industry.link}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Industries Showcase with Images */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Industries</span> We Serve
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't see your industry? We work with businesses across all sectors to deliver customized digital growth solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'E-commerce', image: industryImages.ecommerce },
              { name: 'Education', image: industryImages.education },
              { name: 'Manufacturing', image: industryImages.manufacturing },
              { name: 'Hospitality', image: industryImages.hospitality },
              { name: 'Legal Services', image: industryImages.legal },
              { name: 'And More...', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={isIntersecting ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="text-center">
                      <span className="text-white font-bold text-lg md:text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-300 group-hover:bg-clip-text transition-colors duration-300">
                        {item.name}
                      </span>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center mt-10"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 border-0 text-white px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              <Link to="/industries">Explore All Industries</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
      <Footer />
    </div>
  );
};

export default IndustriesSection;
