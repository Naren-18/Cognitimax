
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SEOService = () => {
  const seoServices = [
    {
      title: 'Website Audit & Analysis',
      description: 'Comprehensive technical analysis of your website\'s SEO health',
      details: 'We perform a deep-dive analysis of your website\'s technical structure, content quality, and SEO performance to identify areas for improvement.'
    },
    {
      title: 'Keyword Research',
      description: 'Strategic keyword identification and competitor analysis',
      details: 'Our team researches high-value keywords that your target audience is searching for, analyzing competition and search intent.'
    },
    {
      title: 'On-Page Optimization',
      description: 'Optimize every element of your web pages for search engines',
      details: 'We optimize title tags, meta descriptions, headers, content, and internal linking structure to improve your search rankings.'
    },
    {
      title: 'Technical SEO',
      description: 'Fix technical issues that prevent search engines from crawling your site',
      details: 'We address site speed, mobile optimization, crawlability, indexation, and schema markup to ensure optimal technical performance.'
    },
    {
      title: 'Link Building',
      description: 'Build high-quality backlinks to increase domain authority',
      details: 'Our white-hat link building strategies help you earn quality backlinks from authoritative websites in your industry.'
    },
    {
      title: 'Local SEO',
      description: 'Dominate local search results in your geographic area',
      details: 'We optimize your Google My Business profile, local citations, and location-based content to improve local visibility.'
    }
  ];

  const benefits = [
    {
      title: 'Increased Organic Traffic',
      description: 'Higher rankings lead to more qualified visitors to your website',
      icon: '📈'
    },
    {
      title: 'Better User Experience',
      description: 'SEO improvements enhance overall website usability',
      icon: '👥'
    },
    {
      title: 'Long-term Results',
      description: 'SEO provides sustainable growth that compounds over time',
      icon: '🎯'
    },
    {
      title: 'Cost-Effective',
      description: 'Organic traffic provides excellent ROI compared to paid advertising',
      icon: '💰'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">🔍</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                SEO & Search Engine Marketing
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Be seen. Get clicks. Drive growth. At Cognitimax, we blend long-term organic growth (SEO) with instant visibility through paid search ads (SEM). Our goal is simple: get your brand in front of the right audience—when they need you most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  <Link to="/free-audit">Get Free SEO Audit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">SEO Success Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Organic Traffic Increase</span>
                    <span className="text-2xl font-bold text-green-600">+150%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Keyword Rankings</span>
                    <span className="text-2xl font-bold text-blue-600">Top 3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lead Generation</span>
                    <span className="text-2xl font-bold text-purple-600">+200%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you want to rank higher or get quick traffic, we build search strategies that deliver real results—efficiently and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our SEO Services?
            </h2>
            <p className="text-xl text-gray-600">
              Proven strategies that deliver sustainable growth and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our SEO Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to improving your search engine rankings and driving organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit & Analysis', description: 'Comprehensive website and competitor analysis' },
              { step: '02', title: 'Strategy Development', description: 'Custom SEO roadmap based on your goals' },
              { step: '03', title: 'Implementation', description: 'Execute on-page and technical optimizations' },
              { step: '04', title: 'Monitor & Optimize', description: 'Continuous monitoring and strategy refinement' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free SEO audit and discover how we can improve your search rankings and drive more organic traffic.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-blue-600">
            <Link to="/free-audit">Get Free SEO Audit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOService;
