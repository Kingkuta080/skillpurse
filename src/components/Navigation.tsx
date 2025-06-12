
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-200">
              <img src="/logo.png" alt="SkillPurse Logo" className="w-[10rem]" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {isHomePage && (
                <>
                  <a href="#problem" className="nav-link">Problem</a>
                  <a href="#solution" className="nav-link">Solution</a>
                  <a href="#features" className="nav-link">Features</a>
                  <a href="#mission" className="nav-link">Mission</a>
                </>
              )}
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/join-waitlist" className="btn-primary">
                Join Waitlist
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {isHomePage && (
            <>
              <a href="#problem" className="mobile-nav-link">Problem</a>
              <a href="#solution" className="mobile-nav-link">Solution</a>
              <a href="#features" className="mobile-nav-link">Features</a>
              <a href="#mission" className="mobile-nav-link">Mission</a>
            </>
          )}
          <Link to="/contact" className="mobile-nav-link">Contact</Link>
          <Link to="/join-waitlist" className="btn-primary w-full mt-4">
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
