import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Briefcase, 
  Leaf, 
  Heart, 
  Users, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Globe
} from 'lucide-react';

export const ProgramsOverview = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: 'livelihoods',
      icon: Briefcase,
      title: currentLang === 'sw' ? 'Maisha Bora' : 'Livelihoods',
      subtitle: currentLang === 'sw' ? 'Ujuzi na Ajira' : 'Skills & Employment',
      description: currentLang === 'sw' 
        ? 'Tunawapa vijana ujuzi wa kazi, fursa za uwekezaji, na msaada wa kuanzisha biashara ili waweze kujenga maisha bora na kuchangia uchumi wa jamii.'
        : 'We equip young people with job skills, entrepreneurship opportunities, and business support to build better lives and contribute to community economies.',
      whoItServes: currentLang === 'sw' 
        ? 'Vijana wenye umri wa miaka 15-35 ambao wanatafuta fursa za kazi au wanataka kuanzisha biashara'
        : 'Young people aged 15-35 seeking employment opportunities or wanting to start businesses',
      impact: currentLang === 'sw' 
        ? 'Vijana 12,000+ wamepata ajira au wameanzisha biashara zao'
        : '12,000+ young people have gained employment or started their own businesses',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      features: [
        currentLang === 'sw' ? 'Mafunzo ya ujuzi wa kazi' : 'Job skills training',
        currentLang === 'sw' ? 'Msaada wa uwekezaji' : 'Entrepreneurship support',
        currentLang === 'sw' ? 'Uunganisho na wafanyakazi' : 'Job placement connections',
        currentLang === 'sw' ? 'Mikopo ya biashara' : 'Business loans'
      ]
    },
    {
      id: 'climate',
      icon: Leaf,
      title: currentLang === 'sw' ? 'Mazingira' : 'Climate Action',
      subtitle: currentLang === 'sw' ? 'Uhifadhi na Mabadiliko' : 'Conservation & Change',
      description: currentLang === 'sw'
        ? 'Tunafanya kazi na vijana kuhifadhi mazingira, kutumia nishati safi, na kubadilisha tabia za jamii ili kupambana na mabadiliko ya hali ya hewa.'
        : 'We work with young people to conserve the environment, use clean energy, and change community behaviors to combat climate change.',
      whoItServes: currentLang === 'sw'
        ? 'Vijana na jamii zinazokabiliwa na athari za mabadiliko ya hali ya hewa'
        : 'Young people and communities facing climate change impacts',
      impact: currentLang === 'sw'
        ? 'Miradi 150+ ya uhifadhi wa mazingira na nishati safi'
        : '150+ environmental conservation and clean energy projects',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      features: [
        currentLang === 'sw' ? 'Mafunzo ya uhifadhi wa mazingira' : 'Environmental conservation training',
        currentLang === 'sw' ? 'Nishati safi na teknolojia' : 'Clean energy and technology',
        currentLang === 'sw' ? 'Mabadiliko ya tabia' : 'Behavior change campaigns',
        currentLang === 'sw' ? 'Mipango ya kukabiliana na mabadiliko ya hali ya hewa' : 'Climate adaptation planning'
      ]
    },
    {
      id: 'rights',
      icon: Heart,
      title: currentLang === 'sw' ? 'Haki za Kijinsia' : 'Sexual Rights',
      subtitle: currentLang === 'sw' ? 'Afya na Haki' : 'Health & Rights',
      description: currentLang === 'sw'
        ? 'Tunatoa elimu ya afya ya uzazi, tunapambana na ukatili wa kijinsia, na tunahakikisha vijana wanapata huduma za afya na msaada wanaohitaji.'
        : 'We provide sexual health education, combat gender-based violence, and ensure young people access the health services and support they need.',
      whoItServes: currentLang === 'sw'
        ? 'Vijana, hasa wasichana na wanawake, ambao wanahitaji msaada wa afya ya uzazi na haki za kijinsia'
        : 'Young people, especially girls and women, who need sexual health and rights support',
      impact: currentLang === 'sw'
        ? 'Vijana 8,000+ wamepata elimu na huduma za afya ya uzazi'
        : '8,000+ young people have received sexual health education and services',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100',
      features: [
        currentLang === 'sw' ? 'Elimu ya afya ya uzazi' : 'Sexual health education',
        currentLang === 'sw' ? 'Kupambana na ukatili wa kijinsia' : 'Gender-based violence prevention',
        currentLang === 'sw' ? 'Huduma za afya ya uzazi' : 'Sexual health services',
        currentLang === 'sw' ? 'Msaada wa kisaikolojia' : 'Psychological support'
      ]
    },
    {
      id: 'civic',
      icon: Users,
      title: currentLang === 'sw' ? 'Ushiriki wa Kijamii' : 'Civic Engagement',
      subtitle: currentLang === 'sw' ? 'Uongozi na Demokrasia' : 'Leadership & Democracy',
      description: currentLang === 'sw'
        ? 'Tunajenga uongozi wa vijana, tunawapa ujuzi wa kushiriki katika mchakato wa kisiasa, na tunahakikisha sauti zao zinasikika katika maamuzi ya jamii.'
        : 'We build youth leadership, provide skills for political participation, and ensure their voices are heard in community decision-making.',
      whoItServes: currentLang === 'sw'
        ? 'Vijana wanaotaka kuongoza mabadiliko katika jamii zao na kushiriki katika mchakato wa kisiasa'
        : 'Young people wanting to lead change in their communities and participate in political processes',
      impact: currentLang === 'sw'
        ? 'Viongozi vijana 500+ wamechaguliwa katika vikao vya serikali za mitaa'
        : '500+ young leaders elected to local government positions',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      features: [
        currentLang === 'sw' ? 'Mafunzo ya uongozi' : 'Leadership training',
        currentLang === 'sw' ? 'Ushiriki wa kisiasa' : 'Political participation',
        currentLang === 'sw' ? 'Mikakati ya mabadiliko ya jamii' : 'Community change strategies',
        currentLang === 'sw' ? 'Ushirikiano na serikali' : 'Government collaboration'
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-['Noto_Sans']">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {currentLang === 'sw' ? 'Kazi Yetu' : 'Our Work'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentLang === 'sw' 
              ? 'Tunafanya kazi katika maeneo manne makuu ya kimkakati ili kuongeza athari yetu na kufikia vijana zaidi'
              : 'We work across four strategic priority areas to amplify our impact and reach more young people'
            }
          </p>
        </div>

        {/* Interactive Program Selector */}
        <div className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map((program, index) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(index)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  activeProgram === index
                    ? `bg-gradient-to-br ${program.bgColor} border-2 border-[#e36f1e] shadow-lg`
                    : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                  activeProgram === index 
                    ? `bg-gradient-to-br ${program.color}` 
                    : 'bg-gray-200'
                }`}>
                  <program.icon className={`w-6 h-6 ${
                    activeProgram === index ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                <h3 className={`font-semibold text-lg mb-1 ${
                  activeProgram === index ? 'text-gray-900' : 'text-gray-700'
                }`}>
                  {program.title}
                </h3>
                <p className={`text-sm ${
                  activeProgram === index ? 'text-gray-600' : 'text-gray-500'
                }`}>
                  {program.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Active Program Display */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-12 lg:p-16">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 bg-gradient-to-br ${programs[activeProgram].color}`}>
                  {(() => {
                    const IconComponent = programs[activeProgram].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">
                    {programs[activeProgram].title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {programs[activeProgram].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {programs[activeProgram].description}
              </p>

              {/* Who It Serves */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Users className="w-5 h-5 text-[#e36f1e] mr-2" />
                  {currentLang === 'sw' ? 'Wanaohudumiwa' : 'Who We Serve'}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {programs[activeProgram].whoItServes}
                </p>
              </div>

              {/* Impact */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 text-[#e36f1e] mr-2" />
                  {currentLang === 'sw' ? 'Matokeo' : 'Our Impact'}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {programs[activeProgram].impact}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {currentLang === 'sw' ? 'Huduma Zetu' : 'Our Services'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {programs[activeProgram].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#e36f1e] mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <button className="group bg-gradient-to-r from-[#e36f1e] to-[#d45a0a] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-[#d45a0a] hover:to-[#c44a08] transition-all duration-300 hover:shadow-xl hover:shadow-[#e36f1e]/25 flex items-center space-x-3">
                <span>{currentLang === 'sw' ? 'Jifunze Zaidi' : 'Learn More'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Side - Visual */}
            <div className={`bg-gradient-to-br ${programs[activeProgram].bgColor} p-12 lg:p-16 flex items-center justify-center relative`}>
              <div className="text-center">
                <div className={`w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center bg-gradient-to-br ${programs[activeProgram].color} shadow-2xl`}>
                  {(() => {
                    const IconComponent = programs[activeProgram].icon;
                    return <IconComponent className="w-16 h-16 text-white" />;
                  })()}
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentLang === 'sw' ? 'Jiunge Nasi' : 'Join Our Program'}
                </h4>
                
                <p className="text-gray-600 mb-6">
                  {currentLang === 'sw' 
                    ? 'Kuwa sehemu ya mabadiliko mazuri katika jamii yako'
                    : 'Be part of positive change in your community'
                  }
                </p>

                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    <span>{currentLang === 'sw' ? 'Tanzania' : 'Tanzania'}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{currentLang === 'sw' ? 'Vijana 15-35' : 'Ages 15-35'}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-[#e36f1e] rounded-full opacity-20"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-[#d45a0a] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
