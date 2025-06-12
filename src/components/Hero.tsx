import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-4 leading-tight">
              <span className="block animate-fade-in-up delay-100">Unlocking</span>
              <span className="block animate-fade-in-up delay-200 text-primary">Global Earning</span>
              <span className="block animate-fade-in-up delay-300">for the Unbanked</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 animate-fade-in-up delay-350 font-medium">
              Bridging skills to income for 200M+ unbanked youth
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 animate-fade-in-up delay-400 max-w-2xl">
              Freelance jobs. Verified skills. USDC payouts. No banks needed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-500">
              <button 
                onClick={scrollToWaitlist}
                className="btn-primary group text-sm sm:text-base"
              >
                📩 Join Our Waitlist
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              {/* <button className="btn-secondary group text-sm sm:text-base">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Watch Demo
              </button> */}
            </div>
          </div>
          
          <div className="relative animate-fade-in-up delay-600">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="app-header">
                    <div className="status-bar"></div>
                    <h3 className="text-sm font-semibold text-dark">SkillPurse</h3>
                  </div>
                  <div className="app-content">
                    <div className="gig-card">
                      <div className="gig-image"></div>
                      <div className="gig-info">
                        <h4 className="text-xs font-medium">UI/UX Design</h4>
                        <p className="text-xs text-gray-500">$250 USDC</p>
                      </div>
                    </div>
                    <div className="gig-card">
                      <div className="gig-image"></div>
                      <div className="gig-info">
                        <h4 className="text-xs font-medium">Web Development</h4>
                        <p className="text-xs text-gray-500">$400 USDC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
