import React, { useState } from 'react';
import { Mail, ArrowRight, Info, Users, Handshake, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formType, setFormType] = useState<'waitlist' | 'partner' | 'question'>('waitlist');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const renderForm = () => {
    switch (formType) {
      case 'waitlist':
        return (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-dark border-0 focus:ring-2 focus:ring-white/30 outline-none text-sm sm:text-base"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-secondary-white group text-sm sm:text-base px-4 sm:px-6"
                disabled={isSubmitted}
              >
                {isSubmitted ? '✅ Joined!' : '🚀 Join Now'}
                {!isSubmitted && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />}
              </button>
            </div>
          </form>
        );
      case 'partner':
        return (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your organization's email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-dark border-0 focus:ring-2 focus:ring-white/30 outline-none text-sm sm:text-base"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-secondary-white group text-sm sm:text-base px-4 sm:px-6"
                disabled={isSubmitted}
              >
                {isSubmitted ? '✅ Submitted!' : '🤝 Partner'}
                {!isSubmitted && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />}
              </button>
            </div>
          </form>
        );
      case 'question':
        return (
          <div className="max-w-md mx-auto mb-6 sm:mb-8 text-center">
            <a
              href="mailto:skillpurse.org@gmail.com"
              className="inline-flex items-center justify-center btn-secondary-white group text-sm sm:text-base px-6 py-3"
            >
              <HelpCircle className="mr-2" size={20} />
              Ask a Question
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        );
    }
  };

  return (
    <section id="waitlist" className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Join Our Journey
        </h2>
        <p className="text-lg sm:text-xl mb-3 sm:mb-4 opacity-90">
          Be part of the movement to empower talent globally.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFormType('waitlist')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              formType === 'waitlist' ? 'bg-white text-primary' : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            <Users className="inline-block mr-2" size={20} />
            Join Waitlist
          </button>
          <button
            onClick={() => setFormType('partner')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              formType === 'partner' ? 'bg-white text-primary' : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            <Handshake className="inline-block mr-2" size={20} />
            Partner With Us
          </button>
          <button
            onClick={() => setFormType('question')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              formType === 'question' ? 'bg-white text-primary' : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            <HelpCircle className="inline-block mr-2" size={20} />
            Ask Questions
          </button>
        </div>

        {renderForm()}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Early Access</h3>
            <p className="opacity-80 text-sm sm:text-base">Be among the first to use SkillPurse</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Exclusive Features</h3>
            <p className="opacity-80 text-sm sm:text-base">Access premium tools and features</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Mentorship</h3>
            <p className="opacity-80 text-sm sm:text-base">Get guidance from industry experts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
