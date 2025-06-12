import React from 'react';
import { Users, TrendingUp, Target } from 'lucide-react';

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: Users,
      number: "10k+",
      label: "Youth in First Year",
      description: "Expected to be trained and empowered in our first operational year"
    },
    {
      icon: TrendingUp,
      number: "1M",
      label: "Youth by 2030",
      description: "Targeted across Africa and South Asia"
    },
    {
      icon: Target,
      number: "200M+",
      label: "Youth Population",
      description: "Talented individuals locked out of global opportunities"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Impact Metrics
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            The scale of opportunity and our commitment to change
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <metric.icon className="text-white" size={32} />
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4">{metric.number}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{metric.label}</h3>
              <p className="text-sm sm:text-base opacity-80">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
