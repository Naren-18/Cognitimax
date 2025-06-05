
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SocialMediaService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📱</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Social Media Marketing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Connect, engage, and grow your brand. Social media is where your audience lives—and we help you connect with them with strategic, creative, and consistent campaigns. At Cognitimax, we build social media campaigns that spark genuine engagement, grow your followers organically, and drive measurable business results.
          </p>
          <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-gray-900">Our Services Include:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Strategy & Planning</li>
              <li>• Content Creation</li>
              <li>• Platform Management</li>
              <li>• Paid Ad Campaigns</li>
              <li>• Audience Growth & Engagement</li>
              <li>• Performance Tracking & Insights</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We turn likes into leads, followers into fans, and content into conversions—so your brand grows where it matters most.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Link to="/free-audit">Get Free Social Media Audit</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SocialMediaService;
