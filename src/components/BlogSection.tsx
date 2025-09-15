import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Empowering Youth Through Digital Innovation in Tanzania',
    description: 'Discover how Restless Development Tanzania is leveraging technology to create opportunities for young people. From digital literacy programs to online entrepreneurship platforms...',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    link: '/blog/youth-digital-innovation-tanzania',
    author: 'Amina Mwalimu',
    date: 'Sep 10, 2024',
    readTime: '7 min read',
    category: 'Digital Innovation'
  },
  {
    id: 2,
    title: 'Climate Action: Youth Leading Environmental Change',
    description: 'How young Tanzanians are driving climate adaptation and mitigation efforts in their communities. Stories of tree planting initiatives, renewable energy projects, and sustainable practices...',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    link: '/blog/youth-climate-action-tanzania',
    author: 'Joseph Kimaro',
    date: 'Sep 5, 2024',
    readTime: '6 min read',
    category: 'Climate Action'
  },
  {
    id: 3,
    title: 'Building Economic Resilience: Youth Entrepreneurship Success Stories',
    description: 'Inspiring stories of young entrepreneurs in Tanzania who have built successful businesses through our livelihoods programs. Learn about microfinance, skills training, and market access...',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
    link: '/blog/youth-entrepreneurship-tanzania',
    author: 'Grace Mwanga',
    date: 'Aug 28, 2024',
    readTime: '8 min read',
    category: 'Economic Empowerment'
  },
  {
    id: 4,
    title: 'Strengthening Democracy: Youth Civic Engagement in Tanzania',
    description: 'Exploring how young people are participating in democratic processes and advocating for social change. From voter education to community organizing and policy advocacy...',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
    link: '/blog/youth-civic-engagement-tanzania',
    author: 'Daniel Mwakasege',
    date: 'Aug 20, 2024',
    readTime: '5 min read',
    category: 'Civic Engagement'
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
              <div className="h-[2px] w-8 bg-[#e36f1e]"></div>
              <span className="text-[#e36f1e] font-semibold uppercase tracking-wider text-xs">Latest Updates & Guides</span>
              <div className="h-[2px] w-8 bg-[#e36f1e]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] bg-clip-text text-transparent">
              Resource Hub
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Explore stories of youth empowerment, community impact, and innovative solutions 
              driving positive change across Tanzania.
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
                      <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] cursor-default">
                        <div className="aspect-[16/10] relative overflow-hidden border-b border-gray-100">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4 z-20">
                            <span className="inline-block bg-[#e36f1e] text-white text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 border-t border-gray-50">
                          <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <User size={12} className="text-[#e36f1e]" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={12} className="text-[#e36f1e]" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold mb-2 text-gray-900">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {post.description}
                          </p>
                          <span className="inline-flex items-center text-[#e36f1e] font-medium text-sm cursor-default">
                            Read the article
                            <ArrowRight size={16} className="ml-2" />
                          </span>
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
                className="w-10 h-10 rounded-full border-2 border-[#e36f1e] flex items-center justify-center text-[#e36f1e] hover:bg-[#e36f1e] hover:text-white transition-all duration-300"
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
                        ? 'w-4 bg-[#e36f1e]' 
                        : 'bg-gray-300 hover:bg-[#e36f1e]/50'
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