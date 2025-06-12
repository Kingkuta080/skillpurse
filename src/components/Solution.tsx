
import React from 'react';
import { Target, Shield, DollarSign } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      icon: Target,
      title: "Remote gigs for the unbanked",
      description: "Access global opportunities without traditional banking requirements"
    },
    {
      icon: Shield,
      title: "Verified work portfolios, built-in trust",
      description: "Build credibility through our verification system and skill badges"
    },
    {
      icon: DollarSign,
      title: "Earn in USDC, cash out via mobile money",
      description: "Receive payments in cryptocurrency and withdraw through local mobile money services"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Our Solution
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Breaking down barriers to create a truly inclusive global economy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card group">
              <div className="solution-icon-wrapper">
                <solution.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={48} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="solution-flow">
            <div className="flow-step">
              <div className="flow-number">1</div>
              <p className="text-sm font-medium text-dark">Find Gigs</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-number">2</div>
              <p className="text-sm font-medium text-dark">Complete Work</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-number">3</div>
              <p className="text-sm font-medium text-dark">Get Paid</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-number">4</div>
              <p className="text-sm font-medium text-dark">Cash Out</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600 font-medium">No bank needed!</p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
