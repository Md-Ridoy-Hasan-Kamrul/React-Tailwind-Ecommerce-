import React, { useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        {/* Floating Elements */}
        <div className="floating-element absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-40"></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-400 rounded-full opacity-50"></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-5 h-5 bg-cyan-400 rounded-full opacity-30"></div>

        {/* Particles */}
        <div className="particle absolute top-10 left-10 w-1 h-1 bg-white rounded-full"></div>
        <div className="particle absolute top-20 right-20 w-1 h-1 bg-blue-300 rounded-full"></div>
        <div className="particle absolute bottom-20 left-20 w-1 h-1 bg-purple-300 rounded-full"></div>
        <div className="particle absolute bottom-10 right-10 w-1 h-1 bg-indigo-300 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-300 text-sm font-medium">Available for Remote Work</span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0">
              Full-Stack
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                MERN Developer
              </span>
            </h1>

            <p className="hero-subtitle text-xl sm:text-2xl text-blue-200 mb-4 opacity-0">
              John Smith
            </p>

            <p className="hero-description text-lg text-gray-300 mb-8 max-w-2xl opacity-0">
              Crafting exceptional digital experiences with modern web technologies. 
              Specialized in React, Node.js, and cloud solutions for global clients.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Mail className="inline-block w-5 h-5 mr-2" />
                Hire Me
              </button>
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                <Download className="inline-block w-5 h-5 mr-2" />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hero-image flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="/image.png"
                alt="John Smith - Full Stack Developer"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;