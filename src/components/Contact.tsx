import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-gray-300">maskedmedia.info@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div className="text-gray-300">0509107567 / 0247883082</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-gray-300">Cape Coast, Ghana</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-white">Business Hours</div>
                  <div className="text-gray-300">Mon - Fri: 8AM - 6PM GMT</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 p-6 rounded-2xl">
              <h4 className="font-bold text-white mb-2">Quick Response Guarantee</h4>
              <p className="text-gray-300">We respond to all inquiries within 24 hours. For urgent matters, call us directly.</p>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-apps">Mobile Apps</option>
                  <option value="photography">Photography</option>
                  <option value="videography">Videography</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="printing">Printing Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;