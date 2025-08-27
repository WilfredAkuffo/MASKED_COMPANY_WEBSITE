import React from 'react';
import { Code, Camera, Palette, Smartphone, Video, Printer } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies, responsive design, and optimized performance.',
      features: ['React/Vue.js', 'E-commerce', 'CMS Integration', 'SEO Optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services for events, products, portraits, and commercial projects.',
      features: ['Event Photography', 'Product Shoots', 'Corporate Headshots', 'Real Estate']
    },
    {
      icon: Video,
      title: 'Videography',
      description: 'High-quality video production including promotional videos, documentaries, and social media content.',
      features: ['Promotional Videos', 'Event Coverage', 'Social Media Content', 'Post-Production']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative visual solutions including branding, logos, marketing materials, and digital graphics.',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Digital Graphics']
    },
    {
      icon: Printer,
      title: 'Printing Services',
      description: 'Professional printing solutions for business cards, brochures, banners, and promotional materials.',
      features: ['Business Cards', 'Brochures', 'Large Format', 'Custom Packaging']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions and creative services to help your business thrive in the modern landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;