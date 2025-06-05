
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PPCService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">💰</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pay-Per-Click Advertising
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Get instant visibility. Pay only for results. PPC advertising quickly places your business at the top of search engine results and across social media platforms, delivering immediate visibility. Every click drives targeted, high-intent traffic to your website, making PPC one of the most effective ways to attract leads, boost sales, and expand your reach.
          </p>
          <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-gray-900">Our PPC Services Include:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Google ADS</li>
              <li>• Instagram ADS</li>
              <li>• Facebook ADS</li>
              <li>• Meta ADS</li>
              <li>• LinkedIn ADS</li>
              <li>• Geo-Targeting Ads</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            At Cognitimax, we create high-performing ad campaigns tailored to your goals. We focus on making every click count—with ads that are smart, targeted, and built to perform.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
            <Link to="/free-audit">Get Free PPC Audit</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PPCService;
