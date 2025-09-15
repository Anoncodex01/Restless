import { useState, useEffect } from 'react';
import { Users, Building2, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ImpactStats = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: '/images/AAD1762-1080x703.jpg',
      alt: 'Youth in classroom celebrating unity',
      title: currentLang === 'sw' ? 'Vijana Wanaongoza' : 'Youth Leading Change',
      description: currentLang === 'sw' ? 'Katika jamii zao' : 'In their communities'
    },
    {
      src: '/images/IMG_5938-1180x780.jpg',
      alt: 'Young man harvesting bananas',
      title: currentLang === 'sw' ? 'Maisha Bora' : 'Sustainable Livelihoods',
      description: currentLang === 'sw' ? 'Kupitia kilimo endelevu' : 'Through sustainable agriculture'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      number: "55,695",
      label: currentLang === 'sw' ? 'Vijana Wanaongoza Mabadiliko' : 'Young People Leading Change',
      description: currentLang === 'sw' ? 'katika jamii zao' : 'in their communities',
      icon: Users,
      color: 'from-[#e36f1e] to-[#d45a0a]'
    },
    {
      number: "3,799",
      label: currentLang === 'sw' ? 'Mashirika ya Vijana' : 'Youth Civil Society',
      description: currentLang === 'sw' ? 'yanashirikiana kwa mabadiliko' : 'Organisations Collaborating for Change',
      icon: Building2,
      color: 'from-[#d45a0a] to-[#c44a08]'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Impact Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Statistics */}
            <div className="p-12 lg:p-16 flex flex-col justify-center font-['Noto_Sans']">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {currentLang === 'sw' ? 'Matokeo Yetu' : 'Our Impact'}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {currentLang === 'sw' 
                    ? 'Tunafanya mabadiliko halisi katika jamii kupitia vijana na mashirika yao'
                    : 'Making real change in communities through young people and their organizations'
                  }
                </p>
              </div>

              {/* Statistics */}
              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-4xl lg:text-5xl font-bold text-[#e36f1e] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-xl font-semibold text-gray-900 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-lg text-gray-600">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-12">
                <button className="group bg-gradient-to-r from-[#e36f1e] to-[#d45a0a] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-[#d45a0a] hover:to-[#c44a08] transition-all duration-300 hover:shadow-xl hover:shadow-[#e36f1e]/25 flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>{currentLang === 'sw' ? 'Jiunge na Mabadiliko' : 'Join the Movement'}</span>
                </button>
              </div>
            </div>

            {/* Right Side - Image Slideshow */}
            <div className="relative lg:h-auto h-96">
              {/* Image Container with Drop Shadow */}
              <div className="relative h-full overflow-hidden">
                {/* Main Image */}
                <div className="relative h-full">
                  <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                  />
                  
                  {/* Orange Stroke Rectangle Overlay */}
                  <div className="absolute inset-4 border-4 border-[#e36f1e] rounded-2xl pointer-events-none"></div>
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Image Content */}
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                      {images[currentImageIndex].title}
                    </h3>
                    <p className="text-lg opacity-90">
                      {images[currentImageIndex].description}
                    </p>
                  </div>
                </div>
                
              </div>
              
              {/* Drop Shadow Effect */}
              <div className="absolute -bottom-4 left-4 right-4 h-4 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl blur-sm"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
