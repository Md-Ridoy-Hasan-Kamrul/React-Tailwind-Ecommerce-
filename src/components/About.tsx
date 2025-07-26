import React, { useEffect, useRef } from 'react';
import { Code, Database, Server, Globe, Award, Users, Clock, Zap } from 'lucide-react';
import * as anime from 'animejs';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards
            anime({
              targets: cardsRef.current?.children,
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(200),
              easing: 'easeOutExpo'
            });

            // Animate profile section
            anime({
              targets: imageRef.current,
              scale: [0.8, 1],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutExpo'
            });

            anime({
              targets: contentRef.current?.children,
              translateX: [50, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(150),
              easing: 'easeOutExpo'
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript with modern UI/UX design principles',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Node.js, Express, RESTful APIs, GraphQL, microservices',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Design',
      description: 'MongoDB, PostgreSQL, Redis optimization and scaling',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Cloud Deployment',
      description: 'AWS, Docker, CI/CD, performance optimization',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, label: '100+ Projects', value: 'Delivered' },
    { icon: <Users className="w-6 h-6" />, label: '50+ Clients', value: 'Worldwide' },
    { icon: <Clock className="w-6 h-6" />, label: '5+ Years', value: 'Experience' },
    { icon: <Zap className="w-6 h-6" />, label: '99%', value: 'Success Rate' }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer specializing in MERN stack applications 
            for global remote teams and international clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="/public/image.png"
                  alt="John Smith - Full Stack Developer"
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">John Smith</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-4">
                    Senior Full-Stack Developer
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                        <div className="flex justify-center mb-2 text-blue-600">
                          {achievement.icon}
                        </div>
                        <div className="text-lg font-bold text-gray-900">{achievement.label}</div>
                        <div className="text-sm text-gray-600">{achievement.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - About Content */}
          <div ref={contentRef}>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Building Digital Excellence
                </h3>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    With 5+ years of experience in full-stack development, I specialize in building 
                    scalable web applications using the MERN stack. I've successfully delivered 
                    100+ projects for clients across 25+ countries.
                  </p>
                  <p>
                    My expertise includes modern React development, Node.js backend architecture, 
                    MongoDB database design, and cloud deployment. I focus on writing clean, 
                    maintainable code and implementing best practices for performance and security.
                  </p>
                  <p>
                    I'm passionate about creating solutions that not only meet technical requirements 
                    but also provide exceptional user experiences and drive business growth.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-3">🚀 What Sets Me Apart</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Remote-first mindset with global collaboration experience
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      Agile development with continuous integration practices
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      Performance optimization and scalability expertise
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h3>
            <p className="text-lg text-gray-600">Comprehensive full-stack development services</p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                     style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>
                
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;