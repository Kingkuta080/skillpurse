
import React from 'react';
import { Globe, Lock, Users } from 'lucide-react';

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            The Problem
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="problem-stat">
              <div className="flex items-start space-x-4">
                <div className="problem-icon">
                  <Globe className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">200M+ Youth Locked Out</h3>
                  <p className="text-gray-600">
                    Across Africa & South Asia are locked out of freelance work—not due to lack of skill, 
                    but because they lack bank accounts, ID/KYC access, and global exposure.
                  </p>
                </div>
              </div>
            </div>

            <div className="problem-stat">
              <div className="flex items-start space-x-4">
                <div className="problem-icon">
                  <Lock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Talent is Global</h3>
                  <p className="text-gray-600">
                    Opportunity isn't. Millions of skilled individuals are excluded from the global economy 
                    due to financial infrastructure barriers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="barrier-visual">
              <div className="talent-side">
                <Users size={48} className="text-primary mb-4" />
                <h4 className="text-xl font-bold text-dark">Talent</h4>
                <p className="text-gray-600">Skilled & Ready</p>
              </div>
              <div className="barrier"></div>
              <div className="opportunity-side">
                <Globe size={48} className="text-primary mb-4" />
                <h4 className="text-xl font-bold text-dark">Opportunity</h4>
                <p className="text-gray-600">Global Market</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
