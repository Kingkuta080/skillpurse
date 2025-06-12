
import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Users, Gift, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const JoinWaitlist = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [skills, setSkills] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
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
            Join the <span className="text-primary">Future</span> of Work
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of the movement that's unlocking global earning opportunities for the unbanked. 
            Get early access and exclusive benefits.
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
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
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
                  Fill out the form below to secure your early access to SkillPurse.
                </p>
              )}
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Skills/Interests (Optional)
                  </label>
                  <textarea
                    id="skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="e.g., Web design, content writing, digital marketing..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary group"
                >
                  🚀 Join the Waitlist
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>
            ) : (
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
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinWaitlist;
