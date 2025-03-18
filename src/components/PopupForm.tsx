import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        return '';
      case 'location':
        return value ? '' : 'Please select a location';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      if (key === 'company' || key === 'message') return; // Skip optional fields
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-[#0f172a] rounded-2xl w-full max-w-5xl overflow-hidden animate-in fade-in zoom-in duration-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-[600px]">
          {/* Left side - Image */}
          <div className="hidden md:block w-[50%] relative group">
            <img
              src="/images/meeting.webp"
              alt="Business meeting"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
              <span className="block text-blue-400 text-sm font-medium mb-2">#1 Accounting Services in Dubai</span>
              <h3 className="text-white text-2xl font-medium leading-snug">
                Building Success Together with Our Trusted Strategic Experts
              </h3>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-[65%] p-8 bg-[#0f172a]">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Thank You!</h3>
                <p className="text-gray-400 mb-8">We've received your request and will get back to you shortly.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#e66b02] text-white font-semibold text-sm">RDV</span>
                      <h4 className="text-sm font-medium text-gray-400">
                        #1 Accounting Services In <span className="text-[#e66b02]">Dubai</span>
                      </h4>
                    </div>
                    <h2 className="text-2xl font-semibold text-white">
                      Get a Free Call Back from Our Expert
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-200 transition-colors p-2 hover:bg-gray-800 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={`w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border ${
                          errors.name ? 'border-red-500' : 'border-gray-700'
                        } focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all placeholder:text-gray-500 text-white`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-red-500 text-[13px]">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border ${
                          errors.email ? 'border-red-500' : 'border-gray-700'
                        } focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all placeholder:text-gray-500 text-white`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-red-500 text-[13px]">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Number
                      </label>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <select className="h-full px-3 py-2.5 rounded-l-xl bg-gray-800/50 border border-r-0 border-gray-700 text-gray-300 text-sm focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all">
                            <option>🇦🇪 +971</option>
                          </select>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number"
                          className={`w-full px-4 py-2.5 rounded-r-xl bg-gray-800/50 border ${
                            errors.phone ? 'border-red-500' : 'border-gray-700'
                          } focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all placeholder:text-gray-500 text-white`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-red-500 text-[13px]">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all placeholder:text-gray-500 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Location
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border ${
                        errors.location ? 'border-red-500' : 'border-gray-700'
                      } focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all text-gray-300`}
                    >
                      <option value="">Select your location</option>
                      <option value="dubai">Dubai</option>
                      <option value="abu-dhabi">Abu Dhabi</option>
                      <option value="sharjah">Sharjah</option>
                      <option value="ajman">Ajman</option>
                      <option value="ras-al-khaimah">Ras Al Khaimah</option>
                      <option value="fujairah">Fujairah</option>
                      <option value="umm-al-quwain">Umm Al Quwain</option>
                    </select>
                    {errors.location && (
                      <p className="mt-1 text-red-500 text-[13px]">{errors.location}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please let us know your requirements here..."
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all placeholder:text-gray-500 text-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#e66b02] hover:bg-[#d65f02] text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>SUBMIT</span>
                        <ArrowRight size={18} className="transform -rotate-45" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 