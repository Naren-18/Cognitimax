import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, CheckCircle, Cloud, UserCheck, Shield, Server, AlertTriangle, Users, RefreshCw, Eye } from 'lucide-react';

const stats = [
  { label: 'Businesses Breached Yearly', value: 60, suffix: '%', color: 'from-red-500 to-orange-500' },
  { label: 'Avg. Cost of a Breach', value: 4, suffix: 'M$', color: 'from-orange-500 to-yellow-500' },
  { label: 'Compliance Success Rate', value: 99, suffix: '%', color: 'from-red-600 to-orange-400' },
];

const features = [
  { icon: <ShieldCheck className="text-red-500 w-7 h-7" />, title: 'Network Security', desc: 'We scan your network for risks and vulnerabilities.' },
  { icon: <Lock className="text-orange-500 w-7 h-7" />, title: 'App & Website Security', desc: 'We find and fix threats like SQLi, XSS, and malware.' },
  { icon: <CheckCircle className="text-yellow-500 w-7 h-7" />, title: 'Compliance Check', desc: 'We ensure you meet GDPR, HIPAA, ISO, PCI-DSS.' },
  { icon: <Cloud className="text-red-400 w-7 h-7" />, title: 'Cloud Audit', desc: 'We secure your AWS, Azure, GCP, and more.' },
  { icon: <UserCheck className="text-orange-400 w-7 h-7" />, title: 'User Access', desc: 'We check for shadow accounts and privilege risks.' },
  { icon: <Shield className="text-red-500 w-7 h-7" />, title: 'Firewall & Endpoint', desc: 'We test your antivirus, firewall, and endpoint defenses.' },
  { icon: <RefreshCw className="text-orange-500 w-7 h-7" />, title: 'Backup & Recovery', desc: 'We review your backup and disaster recovery plans.' },
  { icon: <Eye className="text-yellow-500 w-7 h-7" />, title: 'Employee Awareness', desc: "We simulate phishing and test your team's awareness." },
];

const processSteps = [
  { icon: <Users className="text-red-500 w-6 h-6" />, label: 'Discovery Call'},
  { icon: <Server className="text-orange-500 w-6 h-6" />, label: 'Scope Definition'},
  { icon: <AlertTriangle className="text-yellow-500 w-6 h-6" />, label: 'VAPT'},
  { icon: <CheckCircle className="text-red-400 w-6 h-6" />, label: 'Compliance Check' },
  { icon: <ShieldCheck className="text-orange-400 w-6 h-6" />, label: 'Audit Report' },
  { icon: <RefreshCw className="text-red-500 w-6 h-6" />, label: 'Actionable Roadmap' },
  { icon: <Eye className="text-orange-500 w-6 h-6" />, label: 'Follow-Up Audit' },
];

const testimonial = {
  quote: 'Cognitimax made cybersecurity simple for us. Their audit found issues we never knew existed, and their team guided us every step of the way. Now, we sleep better at night!',
  name: 'Priya S.',
  company: 'eCommerce Startup Founder',
};

const benefits = [
  'Peace of mind for your business',
  'Meet global compliance standards',
  'Protect customer trust and data',
  'Actionable, jargon-free reports',
  'Support from certified experts',
];

const CyberSecurityService = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [statVals, setStatVals] = useState([0, 0, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Animate stats
    let frame = 0;
    const maxFrames = 60;
    const increments = stats.map(s => s.value / maxFrames);
    const animate = () => {
      frame++;
      setStatVals(prev => prev.map((v, i) => Math.min(stats[i].value, Math.round((frame * increments[i]) * 10) / 10)));
      if (frame < maxFrames) requestAnimationFrame(animate);
    };
    animate();
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      {/* Hero Section with Animated Background */}
      <section className="pt-24 pb-12 relative overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-80 z-0"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full filter blur-3xl animate-blob z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000 z-0"></div>
        {/* Orbit Lines */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-red-500 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-orange-500 rounded-full animate-spin-slow animation-delay-2000"></div>
        </div>
        {/* Floating Shield Icons */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(5)].map((_, i) => (
            <ShieldCheck key={i} className={`absolute text-red-200 opacity-30 animate-float${i+1}`} style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
              width: 40,
              height: 40,
            }} />
          ))}
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Worried About Hackers? <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">We've Got You.</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-red-600 font-semibold mb-2"
          >
            Cyber Auditing That's Simple, Powerful, and Human.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don't let cyber threats keep you up at night. Cognitimax helps you spot risks, fix them fast, and stay compliant—so you can focus on growing your business, not fighting hackers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/free-audit">Request for Free Audit</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Stat Bar */}
      <section className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className={`rounded-2xl shadow-lg p-6 bg-gradient-to-br ${stat.color} text-white flex flex-col items-center justify-center`}
          >
            <span className="text-4xl font-bold mb-2">
              {statVals[i]}{stat.suffix}
            </span>
            <span className="text-sm font-medium opacity-80">{stat.label}</span>
          </motion.div>
        ))}
      </section>
      {/* Features Section */}
      <section className="py-12" ref={sectionRef}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isIntersecting ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} animate={isIntersecting ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.05 }}
              className="flex items-start gap-4 bg-white/90 rounded-2xl shadow-xl p-6 hover:scale-[1.03] transition-transform duration-300 border-l-4 border-red-500"
            >
              <div>{f.icon}</div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-1">{f.title}</h4>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* Process Stepper */}
      <section className="py-12">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works: Our Cyber Audit Process</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {processSteps.map((step, i) => (
              <motion.div key={step.label} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}
                className="flex flex-col items-center"
              >
                <div className="bg-gradient-to-br from-red-100 to-orange-100 p-4 rounded-full mb-2 shadow-md">
                  {step.icon}
                </div>
                <span className="text-sm font-semibold text-gray-700 text-center w-24">{step.label}</span>
                {i < processSteps.length - 1 && <div className="h-8 w-1 bg-gradient-to-b from-red-400 to-orange-400 mx-auto my-1 rounded-full" />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Benefits Callout */}
      <section className="py-12">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Get</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {benefits.map((b, i) => (
                <li key={b} className="flex items-center gap-2 text-gray-700 text-base"><CheckCircle className="text-red-500 w-5 h-5" /> {b}</li>
              ))}
            </ul>
            <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-4">
              <Link to="/free-audit">Get My Free Audit</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      {/* Testimonial */}
      <section className="py-12">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto px-4">
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 text-center border-l-4 border-orange-500">
            <p className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
            <div className="font-bold text-red-600">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.company}</div>
          </div>
        </motion.div>
      </section>
      <Footer />
      {/* Custom floating shield icon animations */}
      <style>{`
        @keyframes float1 { 0% { transform: translateY(0); } 50% { transform: translateY(-18px); } 100% { transform: translateY(0); } }
        @keyframes float2 { 0% { transform: translateY(0); } 50% { transform: translateY(12px); } 100% { transform: translateY(0); } }
        @keyframes float3 { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
        @keyframes float4 { 0% { transform: translateY(0); } 50% { transform: translateY(16px); } 100% { transform: translateY(0); } }
        @keyframes float5 { 0% { transform: translateY(0); } 50% { transform: translateY(-14px); } 100% { transform: translateY(0); } }
        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 5.5s ease-in-out infinite; }
        .animate-float4 { animation: float4 8s ease-in-out infinite; }
        .animate-float5 { animation: float5 6.5s ease-in-out infinite; }
        .animate-blob { animation: blob 12s infinite alternate; }
        @keyframes blob {
          0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
          100% { border-radius: 40% 60% 70% 30%/30% 60% 40% 70%; }
        }
        .animate-spin-slow { animation: spin 18s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default CyberSecurityService; 