import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, ChevronDown } from 'lucide-react';

export function ConsultationSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacyPolicy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Contact form section */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side */}
            <div className="animate-fade-in-left max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Get in Touch
                <span className="block text-[#e66b02] mt-2">with Our Experts</span>
              </h2>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Have questions or want to schedule a consultation? Fill out
                the form below, and we'll get back to you shortly. Your
                business success is our top priority!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#e66b02] to-[#ff8a2b] flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:contact@example.com" className="text-sm font-semibold text-gray-900 hover:text-[#e66b02] transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Call Us</p>
                    <a href="tel:+1234567890" className="text-sm font-semibold text-gray-900 hover:text-[#e66b02] transition-colors">
                      +123 456 7890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] animate-fade-in-right backdrop-blur-sm md:col-span-1 lg:max-w-2xl w-full">
              <div className="space-y-4">
                {/* Name and Email row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-xs font-medium text-gray-700 mb-1.5 transition-colors group-focus-within:text-[#e66b02]">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#e66b02] focus:ring-2 focus:ring-[#e66b02]/20 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400 text-sm"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-medium text-gray-700 mb-1.5 transition-colors group-focus-within:text-[#e66b02]">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#e66b02] focus:ring-2 focus:ring-[#e66b02]/20 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Subject row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-xs font-medium text-gray-700 mb-1.5 transition-colors group-focus-within:text-[#e66b02]">Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (234) 567-8900"
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#e66b02] focus:ring-2 focus:ring-[#e66b02]/20 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400 text-sm"
                      required
                    />
                  </div>
                  <div className="group relative">
                    <label className="block text-xs font-medium text-gray-700 mb-1.5 transition-colors group-focus-within:text-[#e66b02]">Subject</label>
                    <select
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#e66b02] focus:ring-2 focus:ring-[#e66b02]/20 outline-none transition-all duration-300 appearance-none text-gray-800 bg-white text-sm"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="consultation">Business Consultation</option>
                      <option value="audit">Audit Services</option>
                      <option value="tax">Tax Advisory</option>
                      <option value="other">Other Services</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-[38px] w-5 h-5 text-gray-400 pointer-events-none transition-transform group-focus-within:text-[#e66b02]" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-medium text-gray-700 mb-1.5 transition-colors group-focus-within:text-[#e66b02]">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#e66b02] focus:ring-2 focus:ring-[#e66b02]/20 outline-none transition-all duration-300 resize-none text-gray-800 placeholder:text-gray-400 text-sm"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3 group cursor-pointer">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 rounded border-2 border-gray-300 text-[#e66b02] focus:ring-[#e66b02] cursor-pointer"
                    required
                  />
                  <label htmlFor="privacy" className="text-gray-600 text-sm cursor-pointer select-none">
                    I agree with the <a href="#" className="text-[#e66b02] hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#e66b02] to-[#ff8a2b] text-white py-3 rounded-lg hover:shadow-lg hover:shadow-[#e66b02]/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] font-medium text-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 