import React from 'react';
import { Users, Gift, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Waitlist = () => {
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
    <section id="waitlist" className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Join Our Journey
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Be part of the movement to empower talent globally.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="opacity-80">{benefit.description}</p>
            </div>
          ))}
        </div>

        <Link 
          to="/join-waitlist"
          className="btn-secondary-white group text-sm sm:text-base inline-flex items-center"
        >
          🚀 Join the Waitlist
        </Link>
      </div>
    </section>
  );
};

export default Waitlist;
