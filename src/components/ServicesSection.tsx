import React, { useEffect, useState } from 'react';
import { Users, Leaf, Heart, Vote, ArrowRight, Briefcase, Globe } from 'lucide-react';
import { useRef } from 'react';
import { PopupForm } from './PopupForm';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const services = [
  {
    icon: Briefcase,
    title: "Livelihoods & Economic Empowerment",
    titleSw: "Maisha na Uwezeshaji wa Kiuchumi",
    description: "We support young people to develop entrepreneurial skills, access employment opportunities, and create sustainable income sources through training, mentorship, and microfinance programs.",
    descriptionSw: "Tunawasaidia vijana kujenga ujuzi wa biashara, kupata fursa za kazi, na kuunda vyanzo vya kipato endelevu kupitia mafunzo, ushauri, na miradi ya fedha ndogo.",
    href: "/programs/livelihoods"
  },
  {
    icon: Leaf,
    title: "Climate Action & Environment",
    titleSw: "Hatua za Hali ya Hewa na Mazingira",
    description: "Youth-led environmental conservation initiatives including tree planting, waste management, renewable energy projects, and climate adaptation strategies for resilient communities.",
    descriptionSw: "Miradi ya uhifadhi wa mazingira inayoongozwa na vijana ikiwa ni pamoja na kupanda miti, usimamizi wa taka, miradi ya nishati mbadala, na mikakati ya kubadilika kwa hali ya hewa.",
    href: "/programs/climate"
  },
  {
    icon: Heart,
    title: "Sexual & Reproductive Health Rights",
    titleSw: "Haki za Afya ya Uzazi",
    description: "Comprehensive sexual health education, family planning services, and advocacy for reproductive rights, ensuring young people have access to accurate information and quality healthcare.",
    descriptionSw: "Elimu kamili ya afya ya kijinsia, huduma za kupanga uzazi, na utetezi wa haki za uzazi, kuhakikisha vijana wanapata habari sahihi na huduma bora za afya.",
    href: "/programs/srhr"
  },
  {
    icon: Vote,
    title: "Civic Engagement & Democracy",
    titleSw: "Ushiriki wa Kiraia na Demokrasia",
    description: "Empowering young people to participate in democratic processes, advocacy training, leadership development, and community organizing for social change and good governance.",
    descriptionSw: "Kuwezesha vijana kushiriki katika michakato ya kidemokrasia, mafunzo ya utetezi, maendeleo ya uongozi, na kuandaa jamii kwa mabadiliko ya kijamii na utawala bora.",
    href: "/programs/civic"
  },
  {
    icon: Users,
    title: "Youth Leadership Development",
    titleSw: "Maendeleo ya Uongozi wa Vijana",
    description: "Building the next generation of leaders through mentorship programs, leadership training, and opportunities for young people to take on meaningful roles in their communities.",
    descriptionSw: "Kujenga kizazi kijacho cha viongozi kupitia miradi ya ushauri, mafunzo ya uongozi, na fursa za vijana kuchukua majukumu muhimu katika jamii zao.",
    href: "/programs/leadership"
  },
  {
    icon: Globe,
    title: "Digital Innovation & Technology",
    titleSw: "Uvumbuzi wa Kidijitali na Teknolojia",
    description: "Leveraging technology for social impact through digital literacy programs, online platforms for youth engagement, and innovative solutions for community challenges.",
    descriptionSw: "Kutumia teknolojia kwa athari za kijamii kupitia miradi ya ujuzi wa kidijitali, majukwaa ya mtandaoni kwa ushiriki wa vijana, na suluhisho za kibunifu kwa changamoto za jamii.",
    href: "/programs/digital"
  }
];

export function ServicesSection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      id="services-section" 
      className="relative py-24 w-full overflow-hidden bg-gradient-to-br from-[#1E2757]/5 via-white to-[#e66b02]/5"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1E2757]/10 via-white to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#e66b02]/10 via-transparent to-white"></div>
      </div>
      
      {/* Accent gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(30,39,87,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(230,107,2,0.1),transparent_50%)]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1E2757]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#e66b02]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(#1E2757 0.5px, transparent 0.5px), radial-gradient(#1E2757 0.5px, transparent 0.5px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757] bg-clip-text text-transparent pb-2">
              {currentLang === 'sw' ? 'Miradi Yetu' : 'Our Programs'}
              <br />
              <span className="bg-gradient-to-r from-[#e66b02] via-[#1E2757] to-[#e66b02] bg-clip-text text-transparent">
                {currentLang === 'sw' ? 'Kuwezesha Vijana Tanzania' : 'Empowering Tanzanian Youth'}
              </span>
            </h2>
            {/* Gradient line under the title */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-white hover:bg-gradient-to-br hover:from-[#0f172a] hover:to-[#1e3a8a] transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/90 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-[#e66b02] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1E2757] group-hover:text-white transition-colors">
                    {currentLang === 'sw' ? service.titleSw : service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-8 group-hover:text-white/90 transition-colors min-h-[80px]">
                    {currentLang === 'sw' ? service.descriptionSw : service.description}
                  </p>
                  <button 
                    onClick={handleOpenPopup}
                    className="inline-flex items-center gap-2 bg-[#e66b02] text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#d65f02] hover:shadow-lg hover:shadow-orange-500/20 group-hover:bg-white group-hover:text-[#1E2757]"
                  >
                    <span className="text-sm font-medium">
                      {currentLang === 'sw' ? 'Jifunze Zaidi' : 'Learn More'}
                    </span>
                    <ArrowRight size={16} className="transform -rotate-45" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <PopupForm
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </div>
    </section>
  );
}