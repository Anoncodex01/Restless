import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Insurance in the UAE',
    description: 'Comprehensive overview of insurance requirements and best practices for businesses in the UAE. Learn about mandatory coverage, policy types, and how to protect your business...',
    image: 'https://www.shuraa.com/wp-content/uploads/2025/03/the-ultimate-guide-to-iloe-insurance-in-the-uae.webp',
    link: '/blog/uae-insurance-guide',
    author: 'Sarah Johnson',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    category: 'Business Insurance'
  },
  {
    id: 2,
    title: 'How to Apply for UAE Residency Visa via ICP Smart Services',
    description: 'Step-by-step guide to obtaining UAE residency through ICP Smart Services. Understanding the digital transformation of visa services and ensuring a smooth application process...',
    image: 'https://www.shuraa.com/wp-content/uploads/2025/01/how-apply-uae-residency-visa-via-icp-smart-services.webp',
    link: '/blog/uae-residency-visa-guide',
    author: 'Michael Chen',
    date: 'Mar 12, 2024',
    readTime: '6 min read',
    category: 'Visa & Immigration'
  },
  {
    id: 3,
    title: 'Complete Guide to Gold Trading License in Dubai',
    description: 'Everything you need to know about obtaining a gold trading license in Dubai. From application requirements to compliance regulations and market opportunities...',
    image: 'https://www.shuraa.com/wp-content/uploads/2025/01/gold-trading-license-in-dubai.webp',
    link: '/blog/gold-trading-license-dubai',
    author: 'Ahmed Hassan',
    date: 'Mar 10, 2024',
    readTime: '7 min read',
    category: 'Business Setup'
  },
  {
    id: 4,
    title: 'Understanding UAE Tax Regulations and Compliance',
    description: 'Comprehensive guide to UAE tax regulations, compliance requirements, and best practices for businesses. Stay updated with the latest tax laws and obligations...',
    image: 'https://aurifer.tax/wp-content/uploads/elementor/thumbs/shutterstock-448459603-pxudzw5eywq9tpu654h9qq1qrff88gm3uxg0i79oxo.png',
    link: '/blog/uae-tax-regulations',
    author: 'David Miller',
    date: 'Mar 8, 2024',
    readTime: '9 min read',
    category: 'Tax & Compliance'
  }
];

export function BlogSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(blogPosts.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <div className="h-[2px] w-8 bg-[#e66b02]"></div>
              <span className="text-[#e66b02] font-semibold uppercase tracking-wider text-xs">Latest Updates & Guides</span>
              <div className="h-[2px] w-8 bg-[#e66b02]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] bg-clip-text text-transparent">
              Resource Hub
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Stay informed with our comprehensive guides and insights on business setup, 
              taxation, and regulatory compliance in the UAE.
            </p>
          </div>

          {/* Blog Posts Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="flex gap-6 w-full flex-nowrap">
                  {blogPosts.map((post, index) => (
                    <div 
                      key={post.id}
                      className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                    >
                      <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-500 transform hover:-translate-y-0.5">
                        <div className="aspect-[16/10] relative overflow-hidden border-b border-gray-100">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 z-20">
                            <span className="inline-block bg-[#e66b02] text-white text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 border-t border-gray-50">
                          <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <User size={12} className="text-[#e66b02]" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={12} className="text-[#e66b02]" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#e66b02] transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {post.description}
                          </p>
                          <a
                            href={post.link}
                            className="inline-flex items-center text-[#e66b02] hover:text-[#d25a02] font-medium text-sm group/link"
                          >
                            Read the article
                            <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border-2 border-[#e66b02] flex items-center justify-center text-[#e66b02] hover:bg-[#e66b02] hover:text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <ArrowLeft size={16} />
              </button>
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'w-4 bg-[#e66b02]' 
                        : 'bg-gray-300 hover:bg-[#e66b02]/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] flex items-center justify-center text-white hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
                aria-label="Next slide"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 