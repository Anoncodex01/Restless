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
  message: string;
  countryCode: string;
}

interface FormErrors {
  [key: string]: string;
}

export function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const countryList = [
    { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+1', name: 'United States', flag: '🇺🇸' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+254', name: 'Kenya', flag: '🇰🇪' },
    // ... add more countries as needed ...
  ];

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    countryCode: '+971',
  });
  const [countrySearch, setCountrySearch] = useState('');

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

  const handleCountrySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, countryCode: e.target.value }));
  };

  const handleCountryCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, countryCode: e.target.value }));
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
        className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full p-8 bg-white">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-8">We've received your request and will get back to you shortly.</p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
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
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Get a Free Call Back from Our Expert
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full px-4 py-2.5 rounded-xl bg-gray-50 border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all placeholder:text-gray-400 text-gray-900`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-[13px]">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`w-full px-4 py-2.5 rounded-xl bg-gray-50 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all placeholder:text-gray-400 text-gray-900`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-[13px]">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number
                    </label>
                    <div className="flex gap-2">
                      {/* Manual Code Input Only */}
                      <input
                        type="text"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleCountryCodeInput}
                        placeholder="Code (e.g. +971)"
                        className="w-20 px-2 py-2.5 rounded-l-xl bg-gray-50 border border-gray-300 text-gray-900 focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all"
                        maxLength={6}
                      />
                      {/* Phone Number Input */}
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className={`w-full px-4 py-2.5 rounded-r-xl bg-gray-50 border ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        } focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all placeholder:text-gray-400 text-gray-900`}
                        style={{ minWidth: '120px' }}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-red-500 text-[13px]">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please let us know your requirements here..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 focus:border-[#e66b02] focus:ring-4 focus:ring-[#e66b02]/10 outline-none transition-all placeholder:text-gray-400 text-gray-900 resize-none"
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
  );
} 