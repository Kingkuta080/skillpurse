import React from 'react';
import { Brain, Users, DollarSign } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-6">How It Works</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey from learning to earning, simplified
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Learn Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Learn</h3>
            <p className="text-gray-600 text-center">Practical hands-on training with industry experts</p>
          </div>

          {/* Connect Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Connect</h3>
            <p className="text-gray-600 text-center">Link to local employers or cooperatives for opportunities</p>
          </div>

          {/* Earn Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <DollarSign className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Earn</h3>
            <p className="text-gray-600 text-center">Begin earning through jobs or projects that match your skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
