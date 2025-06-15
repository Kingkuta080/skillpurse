import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Users, Gift, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const JoinWaitlist = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    userType: '',
    country: '',
    skills: '',
    excitement: '',
    earlyAccess: '',
    paymentMethod: '',
    privacyConsent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Send notification to admin
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATES.WAITLIST,
        {
          ...formData,
          to_name: 'SkillPurse Team',
          time: new Date().toLocaleString(),
          reply_to: formData.email // This ensures replies go to the user
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({
        email: '',
        fullName: '',
        userType: '',
        country: '',
        skills: '',
        excitement: '',
        earlyAccess: '',
        paymentMethod: '',
        privacyConsent: false
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setError('Failed to join waitlist. Please try again later.');
      console.error('EmailJS error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: Zap,
      title: "Early Access",
      description: "Be among the first to access SkillPurse when we launch"
    },
    {
      icon: Gift,
      title: "Exclusive Features",
      description: "Get access to premium tools and features for free"
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Connect with industry experts and get career guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
            Join the SkillPurse Waitlist – Be Part of the Future of Freelancing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            💡 SkillPurse is a bold new platform using USDC, blockchain, and Circle Wallets to empower unbanked, underpaid, and overlooked youth with verified skills across Africa and the globe.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a freelancer, a client looking to hire top talent, or a partner who believes in building an inclusive global economy—you're welcome here.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up now to be notified as soon as we launch. Let's build the future of work together.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark mb-12">
            Why Join Our Waitlist?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-dark mb-4">
                {isSubmitted ? "Welcome to SkillPurse!" : "Join Our Waitlist"}
              </h2>
              {isSubmitted ? (
                <div className="flex items-center justify-center text-green-600 mb-4">
                  <CheckCircle size={24} className="mr-2" />
                  <span className="text-lg">Successfully joined the waitlist!</span>
                </div>
              ) : (
                <p className="text-gray-600">
                  Sign up now to be notified as soon as we launch. Let's build the future of work together.
                </p>
              )}
            </div>

            {isSubmitted ? (
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  We'll keep you updated on our progress and notify you as soon as SkillPurse is ready for you.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary"
                >
                  Join Another Person
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                    What best describes you? *
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="ecosystem">Ecosystem Partner/Organization</option>
                    <option value="client">Hiring Clients</option>
                    <option value="freelancer">Skilled Freelancer</option>
                    <option value="curious">Just Curious/Supporter</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Country of Residence *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                    What skill do you have or hire for? *
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="excitement" className="block text-sm font-medium text-gray-700 mb-2">
                    Why are you excited about SkillPurse?
                  </label>
                  <textarea
                    id="excitement"
                    name="excitement"
                    value={formData.excitement}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="earlyAccess" className="block text-sm font-medium text-gray-700 mb-2">
                    Would you like early access, exclusive updates, or partnership opportunities? *
                  </label>
                  <select
                    id="earlyAccess"
                    name="earlyAccess"
                    value={formData.earlyAccess}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="early_access">Yes, I want early access to the platform</option>
                    <option value="hire">Yes, I want to hire freelancers</option>
                    <option value="partner">Yes, I'd like to partner or collaborate</option>
                    <option value="updates">Just keep me in the loop</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
                    What payment method would you prefer once SkillPurse is Launched? *
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="mobile_money">📲 Mobile Money (e.g., OPay, MTN MoMo, Smartcah, M-Pesa)</option>
                    <option value="p2p">🤝 Peer-to-Peer (P2P agents in my area)</option>
                    <option value="usdc">💳 USDC (Stablecoin) to crypto wallet (e.g., Bybit, Trust Wallet, Binance)</option>
                    <option value="bank">🏦 Local Bank Transfer (if available)</option>
                    <option value="cash">💵 Cash from a trusted payout partner or local agent</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacyConsent" className="text-sm text-gray-600">
                      <span className="font-medium">YOUR DATA, YOUR PRIVACY 🔐</span>
                      <br />
                      We value your privacy. All information shared through this form is strictly confidential and will only be used to notify you about SkillPurse updates, early access opportunities, and relevant community announcements.
                    </label>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mt-4">
                  <p>Never submit passwords through Google Forms.</p>
                  <p>This content is neither created nor endorsed by Google.</p>
                  <p className="mt-2">
                    <a href="#" className="text-primary hover:underline">Contact form owner</a> - 
                    <a href="#" className="text-primary hover:underline ml-2">Terms of Service</a> - 
                    <a href="#" className="text-primary hover:underline ml-2">Privacy Policy</a>
                  </p>
                  <p className="mt-2">
                    <a href="#" className="text-primary hover:underline">Does this form look suspicious? Report</a>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <>
                      🚀 Join the Waitlist
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinWaitlist;
