import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  darkMode?: boolean;
}

export function ContactForm({ darkMode = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses = `w-full px-3 py-2 text-sm rounded-lg ${
    darkMode 
      ? 'bg-[#1e293b] text-white placeholder-gray-400 border border-gray-700 focus:border-[#00A0DC]' 
      : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-[#00A0DC]'
  } focus:outline-none focus:ring-1 focus:ring-[#00A0DC] focus:ring-opacity-50 transition-colors`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (+123-4567)"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Type your message"
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none h-24`}
          required
        />
      </div>
      <button
        type="submit"
        className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-medium transition-colors duration-200`}
      >
        <span>Submit</span>
        <Send size={16} className="transform -rotate-45" />
      </button>
    </form>
  );
} 