
import { useEffect, useState, useRef } from 'react';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    experience: 0
  });
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasAnimated.current) {
          animateCounters();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.5 }
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

  const targetValues = {
    clients: 500,
    projects: 1200,
    countries: 15,
    experience: 8
  };

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        clients: Math.floor(targetValues.clients * progress),
        projects: Math.floor(targetValues.projects * progress),
        countries: Math.floor(targetValues.countries * progress),
        experience: Math.floor(targetValues.experience * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, stepDuration);
  };

  const stats = [
    {
      value: `${counters.clients}+`,
      label: 'Happy Clients',
      description: 'Businesses we\'ve helped grow'
    },
    {
      value: `${counters.projects}+`,
      label: 'Projects Completed',
      description: 'Successful campaigns delivered'
    },
    {
      value: `${counters.countries}+`,
      label: 'Countries Served',
      description: 'Global reach and expertise'
    },
    {
      value: `${counters.experience}+`,
      label: 'Years Experience',
      description: 'Proven track record'
    }
  ];

  return (
    <section 
      id="stats-section" 
      ref={sectionRef}
      className="py-20 text-white relative overflow-hidden"
    >
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500"></div>
      
      {/* Animated orbits from logo */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 border-2 border-white/10 rounded-full transition-all duration-1000 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        ></div>
        <div 
          className={`absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        ></div>
        <div 
          className={`absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full transition-all duration-1000 delay-500 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Delivering measurable results and driving business growth across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
              style={{ 
                transform: isIntersecting ? 'translateY(0)' : 'translateY(40px)',
                opacity: isIntersecting ? 1 : 0,
                transition: `all 0.6s ease-out ${index * 100}ms` 
              }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2 text-white/90">
                  {stat.label}
                </div>
                <div className="text-sm text-white/70">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
