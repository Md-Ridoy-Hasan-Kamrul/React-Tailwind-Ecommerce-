import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Full-Stack Developer',
      location: 'Remote (San Francisco, CA)',
      duration: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise-scale web applications using MERN stack. Architected microservices handling 1M+ daily users.',
      achievements: [
        'Reduced application load time by 45% through optimization',
        'Led team of 8 developers across 3 time zones',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 5 junior developers to senior level'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'TypeScript']
    },
    {
      company: 'Digital Innovations Inc.',
      position: 'Full-Stack Developer',
      location: 'Remote (New York, NY)',
      duration: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects including e-commerce platforms, SaaS applications, and mobile-responsive websites.',
      achievements: [
        'Delivered 25+ projects on time and within budget',
        'Increased client satisfaction score to 4.8/5',
        'Implemented automated testing reducing bugs by 40%',
        'Built reusable component library used across 10+ projects'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redux', 'Jest']
    },
    {
      company: 'StartupHub',
      position: 'Frontend Developer',
      location: 'Austin, TX',
      duration: '2019 - 2020',
      type: 'Full-time',
      description: 'Focused on creating responsive, user-friendly interfaces for various startup clients. Collaborated closely with designers and backend developers.',
      achievements: [
        'Improved user engagement by 35% through UX optimization',
        'Built 15+ responsive web applications',
        'Reduced development time by 30% with component reusability',
        'Achieved 98% cross-browser compatibility'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Sass', 'Webpack']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-2023-001'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'MDB-DEV-2022-456'
    },
    {
      name: 'React Professional Certificate',
      issuer: 'Meta',
      date: '2021',
      credentialId: 'META-REACT-2021-789'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            5+ years of experience building scalable web applications for global clients
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                
                <div className="flex-1 bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                      <div className="flex items-center space-x-2 text-blue-600 font-semibold mb-2">
                        <span>{exp.company}</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-1">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h3>
            <p className="text-lg text-gray-600">Professional certifications and continuous learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-blue-600 font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                  <p className="text-xs text-gray-400 font-mono">{cert.credentialId}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;