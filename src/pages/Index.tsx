
import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Features from '../components/Features';
import ImpactMetrics from '../components/ImpactMetrics';
import YahanasuSpotlight from '../components/YahanasuSpotlight';
import MVPStatus from '../components/MVPStatus';
import Mission from '../components/Mission';
import Waitlist from '../components/Waitlist';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <ImpactMetrics />
      <YahanasuSpotlight />
      <MVPStatus />
      <Mission />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
