import React from 'react';
import { Search, CheckCircle, Wallet, CreditCard } from 'lucide-react';

const Solution = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Find Gigs",
      description: "Browse available freelance opportunities"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Complete Work",
      description: "Deliver quality work to clients"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Get Paid",
      description: "Receive USDC payments for your work"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Cash Out",
      description: "Convert USDC to local currency"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to start earning globally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-primary">
            No bank needed!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
