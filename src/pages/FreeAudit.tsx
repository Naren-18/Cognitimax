import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';
import { motion, useAnimation, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const FreeAudit = () => {
  const [formStep, setFormStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    budget: '',
    services: [],
    goals: '',
    currentChallenges: '',
    timeline: ''
  });

  // References for scroll animations
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const benefitsRef = useRef(null);
  const whatYouGetRef = useRef(null);

  // Controls for scroll-triggered animations
  const heroControls = useAnimation();
  const formControls = useAnimation();
  const benefitsControls = useAnimation();
  const whatYouGetControls = useAnimation();

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const services = [
    'SEO & Search Engine Marketing',
    'Pay-Per-Click Advertising',
    'Social Media Marketing',
    'Content Marketing',
    'Email Marketing',
    'Website Design & Development',
    'Online Reputation Management',
    'Conversion Rate Optimization'
  ];

  // Track mouse position for hover effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px'
    };

    const heroObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        heroControls.start('visible');
      }
    }, observerOptions);

    const formObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        formControls.start('visible');
      }
    }, observerOptions);

    const benefitsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        benefitsControls.start('visible');
      }
    }, observerOptions);

    const whatYouGetObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        whatYouGetControls.start('visible');
      }
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (formRef.current) formObserver.observe(formRef.current);
    if (benefitsRef.current) benefitsObserver.observe(benefitsRef.current);
    if (whatYouGetRef.current) whatYouGetObserver.observe(whatYouGetRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (formRef.current) formObserver.unobserve(formRef.current);
      if (benefitsRef.current) benefitsObserver.unobserve(benefitsRef.current);
      if (whatYouGetRef.current) whatYouGetObserver.unobserve(whatYouGetRef.current);
    };
  }, [heroControls, formControls, benefitsControls, whatYouGetControls]);

  // Calculate progress based on form step
  useEffect(() => {
    const progressValue = (formStep / 3) * 100;
    setProgress(progressValue);
  }, [formStep]);

  // Scroll progress effect for progress bar
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  // Add scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const validateCurrentStep = () => {
    if (formStep === 0) {
      return formData.firstName && formData.lastName && formData.email;
    } else if (formStep === 1) {
      return formData.company && formData.website;
    } else if (formStep === 2) {
      return formData.services.length > 0;
    }
    return true;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setFormStep(prev => Math.min(prev + 1, 3));
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      toast({
        title: "Please complete all required fields",
        description: "Fill in the required information before proceeding.",
        variant: "destructive"
      });
    }
  };

  const prevStep = () => {
    setFormStep(prev => Math.max(prev - 1, 0));
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Audit Request Submitted!",
      description: "We'll analyze your digital presence and get back to you within 24 hours with a comprehensive audit report.",
    });
    
    // Reset form after submission
    setFormStep(0);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      industry: '',
      budget: '',
      services: [],
      goals: '',
      currentChallenges: '',
      timeline: ''
    });
  };

  // Render form steps
  const renderFormStep = () => {
    switch (formStep) {
      case 0:
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="mt-1"
                />
              </div>
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">Business Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="website">Website URL *</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://"
                  value={formData.website}
                  onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="restaurants">Restaurants & Food</SelectItem>
                    <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="technology">IT & Technology</SelectItem>
                    <SelectItem value="realestate">Real Estate</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Monthly Marketing Budget</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1k">Under $1,000</SelectItem>
                    <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="over-50k">Over $50,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">Services & Goals</h3>
            <div>
              <Label className="text-base font-medium">Which services are you interested in? *</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={(checked) => 
                        handleServiceChange(service, checked === true)
                      }
                    />
                    <Label htmlFor={service} className="text-sm font-normal cursor-pointer">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="timeline">When would you like to get started?</Label>
              <RadioGroup 
                value={formData.timeline}
                onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
                className="mt-2 space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="immediately" id="immediately" />
                  <Label htmlFor="immediately">Immediately</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-month" id="1-month" />
                  <Label htmlFor="1-month">Within 1 month</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3-months" id="3-months" />
                  <Label htmlFor="3-months">Within 3 months</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="6-months" id="6-months" />
                  <Label htmlFor="6-months">Within 6 months</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="exploring" id="exploring" />
                  <Label htmlFor="exploring">Just exploring options</Label>
                </div>
              </RadioGroup>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">Additional Details</h3>
            <div>
              <Label htmlFor="goals">What are your main business goals? *</Label>
              <Textarea
                id="goals"
                value={formData.goals}
                onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                placeholder="e.g., Increase website traffic, generate more leads, improve brand awareness..."
                required
                className="mt-1"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="currentChallenges">What are your current marketing challenges?</Label>
              <Textarea
                id="currentChallenges"
                value={formData.currentChallenges}
                onChange={(e) => setFormData(prev => ({ ...prev, currentChallenges: e.target.value }))}
                placeholder="e.g., Low website rankings, poor social media engagement, lack of qualified leads..."
                className="mt-1"
                rows={3}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
              >
                Get My Free Audit Report
              </Button>
            </motion.div>

            <p className="text-sm text-gray-600 text-center">
              By submitting this form, you agree to receive communications from Cognitimax. We respect your privacy and will never share your information.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <Navbar />
      </div>
      
      {/* Interactive Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-multiply blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
        <motion.div 
          className="absolute bottom-32 left-20 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", damping: 20 }}
        />
      </div>
      
      {/* Hero Section with parallax and animated elements */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={staggerContainer}
        className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden"
      >
        <motion.div 
          style={{ y: parallaxY }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl" />
          <div className="absolute bottom-0 left-40 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            variants={itemVariant} 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Get Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Free Digital Marketing Audit</span>
          </motion.h1>
          <motion.p 
            variants={itemVariant} 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Discover hidden opportunities in your digital marketing strategy. Our comprehensive audit will reveal what's working, what's not, and provide actionable recommendations for growth.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '📊',
                title: 'Comprehensive Analysis',
                description: 'In-depth review of your current digital presence'
              },
              {
                icon: '💡',
                title: 'Actionable Insights',
                description: 'Clear recommendations for immediate improvements'
              },
              {
                icon: '🚀',
                title: 'Growth Strategy',
                description: 'Customized roadmap for digital success'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariant}
                className="text-center relative"
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 },
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden shadow-lg">
                  <motion.span 
                    className="text-white text-2xl relative z-10"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariant} 
            className="flex justify-center"
          >
            <motion.div 
              className="animate-bounce cursor-pointer"
              onClick={() => {
                document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDown className="text-blue-600" size={32} />
              <span className="sr-only">Scroll down</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Form Section with animated card */}
      <section id="form-section" ref={formRef} className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={formControls}
            variants={zoomIn}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-white/10"
                  animate={{ 
                    x: [0, 100, 0], 
                    opacity: [0, 0.5, 0] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8, 
                    ease: "linear" 
                  }}
                />
                <CardTitle className="text-2xl relative z-10">Free Digital Marketing Audit Form</CardTitle>
                <CardDescription className="text-blue-100 relative z-10">
                  Fill out the form below and we'll provide you with a comprehensive audit within 24 hours
                </CardDescription>
                <div className="mt-6 px-12 relative z-10">
                  <Progress value={progress} className="h-2 bg-blue-200" />
                  <div className="flex justify-between text-xs mt-2 text-blue-100">
                    <span>Step {formStep + 1} of 4</span>
                    <span>{Math.round(progress)}% Complete</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {renderFormStep()}
                  
                  {formStep !== 3 ? (
                    <motion.div 
                      className="flex justify-between mt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={formStep === 0}
                        className={`px-6 ${formStep === 0 ? 'opacity-50' : ''}`}
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6"
                      >
                        Continue
                      </Button>
                    </motion.div>
                  ) : null}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section with animated cards */}
      <motion.section 
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsControls}
        variants={staggerContainer}
        className="py-20 bg-white relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 -z-10" 
          style={{ y: parallaxY }}
        >
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariant} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Free Audit</span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </h2>
            <motion.p 
              variants={itemVariant} 
              className="text-lg text-gray-600 mt-6"
            >
              Our audit is more than just a report—it's your roadmap to digital success
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Analysis',
                description: 'Get insights from seasoned digital marketing professionals who know what works.',
                icon: '👨‍💻'
              },
              {
                title: 'Custom Strategy',
                description: 'Receive tailored recommendations specific to your business and industry.',
                icon: '🎯'
              },
              {
                title: 'No Commitment',
                description: 'Zero obligation—just valuable insights you can implement right away.',
                icon: '🤝'
              },
              {
                title: 'Fast Turnaround',
                description: 'Get your comprehensive audit within 24 hours of submission.',
                icon: '⏱️'
              },
              {
                title: 'Actionable Insights',
                description: 'Clear, practical steps you can take to improve your digital presence.',
                icon: '📝'
              },
              {
                title: 'Competitive Edge',
                description: 'Learn what your competitors are doing and how to outperform them.',
                icon: '🏆'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-xl p-6 border border-gray-100 transition-all duration-300"
              >
                <div className="text-4xl mb-4 flex justify-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* What You'll Get Section with interactive cards */}
      <motion.section 
        ref={whatYouGetRef}
        initial="hidden"
        animate={whatYouGetControls}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariant} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Get in Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Free Audit</span>
            </h2>
            <p className="text-lg text-gray-600">A comprehensive analysis worth $500, absolutely free</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'SEO Analysis',
                description: 'Technical SEO audit, keyword ranking analysis, and competitor research',
                icon: '🔍'
              },
              {
                title: 'Website Performance',
                description: 'Page speed, mobile optimization, user experience, and conversion analysis',
                icon: '⚡'
              },
              {
                title: 'Social Media Review',
                description: 'Profile optimization, content strategy, and engagement analysis',
                icon: '📱'
              },
              {
                title: 'Action Plan',
                description: 'Prioritized recommendations and growth strategy roadmap',
                icon: '📋'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="relative"
              >
                <Card className="text-center border-0 bg-white hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <motion.div 
                      className="text-4xl mb-4"
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        duration: 2 
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Digital Presence?
          </h2>
          
          <p className="text-xl text-white mb-8">
            Get a free consultation and discover how our services can drive your business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <Button asChild size="lg" variant="outline" className="border-white text-red-600  hover:shadow-xl font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="https://cognitimax.aidaform.com/client-intake-form">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeAudit;
