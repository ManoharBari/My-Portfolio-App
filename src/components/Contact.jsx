import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 dark:text-blue-400 mr-4" size={24} />
                <span className="text-gray-700 dark:text-gray-300">your.email@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 dark:text-blue-400 mr-4" size={24} />
                <span className="text-gray-700 dark:text-gray-300">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 dark:text-blue-400 mr-4" size={24} />
                <span className="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;