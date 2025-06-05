import { useEffect, useState, useRef } from 'react';
import { FaSearch, FaBullhorn, FaUsers, FaPenNib, FaGlobe, FaLightbulb } from 'react-icons/fa';

const specialties = [
  { icon: <FaSearch />, label: 'SEO' },
  { icon: <FaBullhorn />, label: 'PPC & Ads' },
  { icon: <FaUsers />, label: 'Social Media' },
  { icon: <FaPenNib />, label: 'Content Marketing' },
  { icon: <FaGlobe />, label: 'Web Development' },
  { icon: <FaLightbulb />, label: 'Brand Strategy' },
];

const AboutSection = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 min-h-[80vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden flex items-center justify-center"
    >
      {/* Floating blurred shapes */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-red-500 to-orange-400 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-orange-500 to-red-600 rounded-full opacity-20 blur-2xl pointer-events-none" />

      {/* Glassmorphic Card */}
      <div className={`relative z-10 max-w-3xl w-full mx-auto rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl px-10 py-14 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
          About Cognitimax
        </h2>
        <div className="text-center text-lg md:text-xl text-gray-200 mb-8 font-medium">
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-semibold">Your Growth Partner</span>
        </div>
        <p className="text-gray-200 text-center mb-8 leading-relaxed">
          <span className="font-bold text-white">Cognitimax</span> is a full-service digital marketing agency dedicated to helping brands grow and thrive in today's fast-paced online environment.
          <span className="text-orange-300 font-semibold"> We go beyond traditional marketing</span>—we're problem solvers, growth strategists, and creative thinkers committed to building strong, lasting client relationships.
        </p>
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
          <div className="flex-1 text-gray-300">
            <h3 className="text-xl font-bold mb-2 text-white">Our Mission</h3>
            <p>
              To make digital marketing <span className="text-orange-300 font-semibold">simple, efficient, and impactful</span> for your business. We take the time to deeply understand your brand, target audience, and business goals, crafting personalized strategies that align with your unique vision and budget.
            </p>
          </div>
          <div className="flex-1 text-gray-300">
            <h3 className="text-xl font-bold mb-2 text-white">Global Reach</h3>
            <p>
              With offices in the <span className="text-orange-300 font-semibold">USA and India</span>, we combine global reach with local expertise, delivering tailored solutions for businesses of all sizes.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4 text-center">We Specialize In</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialties.map((s, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold shadow-md text-sm backdrop-blur-md border border-white/10">
                <span className="text-lg">{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
