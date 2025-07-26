import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'John delivered an exceptional e-commerce platform that exceeded our expectations. His technical expertise in the MERN stack and attention to detail resulted in a 40% increase in our conversion rates. The project was completed on time and within budget.',
      project: 'Enterprise E-Commerce Platform',
      duration: '8 months'
    },
    {
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'FinanceFlow Inc.',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Working with John was a game-changer for our fintech startup. He built a robust banking dashboard that handles millions of transactions daily with 99.9% uptime. His expertise in security and performance optimization is outstanding.',
      project: 'FinTech Banking Dashboard',
      duration: '10 months'
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Director of IT',
      company: 'HealthCare Network',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'John developed a HIPAA-compliant healthcare management system that transformed our operations. The platform now serves 10+ hospitals and 100K+ patients. His understanding of healthcare regulations and technical requirements is impressive.',
      project: 'Healthcare Management System',
      duration: '12 months'
    },
    {
      name: 'David Thompson',
      position: 'Founder & CEO',
      company: 'ProjectHub SaaS',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'John built our project management SaaS platform from scratch. The result is a scalable solution used by 500+ companies worldwide. His full-stack expertise and ability to understand business requirements made him the perfect choice.',
      project: 'SaaS Project Management Tool',
      duration: '6 months'
    },
    {
      name: 'Lisa Wang',
      position: 'VP of Engineering',
      company: 'EduTech Solutions',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'John created an outstanding learning management system that serves 100+ educational institutions. His technical skills, communication, and ability to deliver complex features on schedule make him an exceptional developer.',
      project: 'Learning Management System',
      duration: '7 months'
    },
    {
      name: 'Robert Martinez',
      position: 'Operations Director',
      company: 'RealEstate Pro',
      location: 'Miami, FL',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The real estate platform John developed has revolutionized our business. With 50K+ property listings and 1M+ monthly views, the platform handles our scale perfectly. John\'s expertise in performance optimization is remarkable.',
      project: 'Real Estate Platform',
      duration: '5 months'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What clients say about working with me on their projects
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Project Info */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="text-sm font-semibold text-blue-800 mb-1">Project:</div>
                <div className="text-sm text-blue-700">{testimonial.project}</div>
                <div className="text-xs text-blue-600 mt-1">Duration: {testimonial.duration}</div>
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Client Satisfaction Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-sm opacity-80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-80">Project Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-80">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">90%</div>
              <div className="text-sm opacity-80">Repeat Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;