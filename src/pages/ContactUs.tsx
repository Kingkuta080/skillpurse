
import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@skillpurse.com",
      description: "Send us an email anytime"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      content: "Available 9AM - 6PM",
      description: "Chat with our support team"
    },
    {
      icon: MapPin,
      title: "Our Mission",
      content: "Global Impact",
      description: "Serving Africa & South Asia"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about SkillPurse? Want to partner with us? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{info.title}</h3>
                <p className="text-primary font-semibold mb-1">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-dark mb-6">
                {isSubmitted ? "Message Sent!" : "Send us a Message"}
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark mb-2">Thank you for reaching out!</h3>
                  <p className="text-gray-600 mb-6">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary group"
                  >
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">Let's Connect</h3>
                <p className="text-gray-600 mb-6">
                  Whether you're interested in joining our mission, exploring partnership opportunities, 
                  or just want to learn more about SkillPurse, we're here to help.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-dark mb-3">Partnership Opportunities</h4>
                <p className="text-gray-600 text-sm mb-4">
                  We're always looking for organizations that share our vision of empowering 
                  the unbanked through technology and skills development.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Training Organizations</li>
                  <li>• Mobile Money Providers</li>
                  <li>• Educational Institutions</li>
                  <li>• NGOs and Development Partners</li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-dark mb-3">Our Response Time</h4>
                <p className="text-gray-600 text-sm">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please include "URGENT" in your subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
