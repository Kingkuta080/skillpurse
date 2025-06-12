
import React from 'react';
import { Rocket, Users, Zap, Shield } from 'lucide-react';

const MVPStatus = () => {
  const features = [
    {
      icon: Users,
      title: "Talent Onboarding",
      description: "Simple registration without traditional banking requirements"
    },
    {
      icon: Zap,
      title: "Skill Verification",
      description: "Portfolio-based verification system with badges"
    },
    {
      icon: Shield,
      title: "Smart Escrow",
      description: "Blockchain-based payment protection for all parties"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">
            What We're Building
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4 sm:mb-6">
            A comprehensive platform that removes barriers to global freelance work
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
              <Rocket className="text-primary" size={24} />
              <span className="text-primary font-semibold text-sm sm:text-base">MVP Development</span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
              Currently mapping MVP workflows and forming partnerships — MVP launch planned post-funding.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <feature.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dark mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MVPStatus;
