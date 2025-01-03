import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-600 dark:text-white mb-12">CONTACT</h2>
        <div className='flex justify-center space-x-4'>
          <a href="mailto:manoharkale5368@gmail.com">
            <button className='flex justify-center gap-3 items-center px-4 py-3 border border-1px-solid-blue text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors'><Send size={18} />Email me </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;