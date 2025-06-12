
import React from 'react';
import { GraduationCap, Users, Heart } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl text-gray-600 mb-8">
              We're just getting started, but our mission is clear:
            </p>
            
            <div className="mission-stat">
              <div className="flex items-center space-x-4 mb-6">
                <div className="mission-icon">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark">10,000+ Individuals</h3>
                  <p className="text-gray-600">Train and empower by 2030 with life-changing skills</p>
                </div>
              </div>
            </div>

            <div className="mission-stat">
              <div className="flex items-center space-x-4 mb-6">
                <div className="mission-icon">
                  <Users className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark">Global Community</h3>
                  <p className="text-gray-600">Building a worldwide network of skilled freelancers</p>
                </div>
              </div>
            </div>

            <div className="mission-stat">
              <div className="flex items-center space-x-4">
                <div className="mission-icon">
                  <Heart className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark">Success Stories</h3>
                  <p className="text-gray-600">Soon, we'll share powerful stories from learners and partners</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="story-placeholder">
              <div className="placeholder-image"></div>
              <p className="text-sm text-gray-500 mt-2">Success Story #1</p>
            </div>
            <div className="story-placeholder">
              <div className="placeholder-image"></div>
              <p className="text-sm text-gray-500 mt-2">Success Story #2</p>
            </div>
            <div className="story-placeholder">
              <div className="placeholder-image"></div>
              <p className="text-sm text-gray-500 mt-2">Workshop Photo</p>
            </div>
            <div className="story-placeholder">
              <div className="placeholder-image"></div>
              <p className="text-sm text-gray-500 mt-2">Training Session</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
