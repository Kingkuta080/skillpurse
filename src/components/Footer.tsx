import React from 'react';
import { Mail, Twitter, Linkedin, Globe, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <div className="text-2xl font-bold mb-4">SkillPurse</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Unlocking global earning opportunities for the unbanked. 
              Join the future of work where talent meets opportunity without barriers.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/skillpurse-org" target="_blank" rel="noopener noreferrer" className="social-link hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/skillpurse_org" target="_blank" rel="noopener noreferrer" className="social-link hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/SkillPurse" target="_blank" rel="noopener noreferrer" className="social-link hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/skillpurse_org" target="_blank" rel="noopener noreferrer" className="social-link hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:skillpurse.org@gmail.com" className="social-link hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/2348162727394" target="_blank" rel="noopener noreferrer" className="social-link hover:text-primary transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Join Us</h3>
            <ul className="space-y-2">
              <li><a href="#waitlist" className="footer-link hover:text-primary transition-colors">Join our waitlist</a></li>
              <li><a href="#partner" className="footer-link hover:text-primary transition-colors">Partner with us</a></li>
              <li><a href="mailto:skillpurse.org@gmail.com" className="footer-link hover:text-primary transition-colors">Ask questions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:skillpurse.org@gmail.com" className="footer-link hover:text-primary transition-colors">skillpurse.org@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle size={16} />
                <a href="https://wa.me/2348162727394" target="_blank" rel="noopener noreferrer" className="footer-link hover:text-primary transition-colors">+234 816 272 7394</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SkillPurse. All rights reserved. Empowering the unbanked, one skill at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
