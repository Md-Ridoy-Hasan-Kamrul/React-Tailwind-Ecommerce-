import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">JS</span>
              </div>
              <div>
                <div className="text-xl font-bold">John Smith</div>
                <div className="text-blue-400 text-sm">Full-Stack Developer</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building scalable web applications with modern technologies. 
              Available for remote work worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-300 mb-4">
              <p>john.smith@developer.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Remote Worldwide</p>
            </div>
            
            <div className="flex space-x-3">
              <a
                href="https://github.com"
                className="bg-gray-800 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="bg-gray-800 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="bg-gray-800 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-sky-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:john.smith@developer.com"
                className="bg-gray-800 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-red-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} John Smith. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;