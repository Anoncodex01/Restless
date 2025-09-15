import { useTranslation } from 'react-i18next';
import { Target, Eye, Heart, Globe } from 'lucide-react';

export const MissionVision = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  const missionVision = {
    mission: {
      title: currentLang === 'sw' ? 'Dhamira Yetu' : 'Our Mission',
      content: currentLang === 'sw' 
        ? 'Kuwawezesha vijana kuongoza katika kutatua changamoto kubwa zinazowakabili jamii zao - kutoka maisha bora hadi hatua za mazingira, haki za kijinsia hadi ushiriki wa kijamii.'
        : 'To support young people to lead in solving the biggest challenges facing their communities — from livelihoods to climate action, sexual rights to civic engagement.',
      icon: Target
    },
    vision: {
      title: currentLang === 'sw' ? 'Maono Yetu' : 'Our Vision',
      content: currentLang === 'sw'
        ? 'Tunataka dunia ambapo vijana wanaongoza mabadiliko mazuri katika jamii zao na kuunda maisha bora kwa wote.'
        : 'We want a world where young people lead positive change in their communities and create better lives for everyone.',
      icon: Eye
    },
    values: {
      title: currentLang === 'sw' ? 'Maadili Yetu' : 'Our Values',
      content: currentLang === 'sw'
        ? 'Tunaamini katika nguvu ya vijana, ushirikiano wa jamii, na mabadiliko endelevu. Tunafanya kazi kwa uadilifu, uwazi, na heshima kwa kila mtu.'
        : 'We believe in the power of young people, community collaboration, and sustainable change. We work with integrity, transparency, and respect for everyone.',
      icon: Heart
    }
  };

  const history = {
    title: currentLang === 'sw' ? 'Historia Yetu Tanzania' : 'Our History in Tanzania',
    content: currentLang === 'sw'
      ? 'Tangu mwaka 2010, Restless Development Tanzania imekuwa ikifanya kazi na vijana na jamii kote Tanzania. Tumejenga uhusiano wa kudumu na mashirika ya kijamii, serikali, na sekta binafsi ili kuongeza athari yetu na kufikia vijana zaidi.'
      : 'Since 2010, Restless Development Tanzania has been working with young people and communities across Tanzania. We have built lasting partnerships with civil society organizations, government, and the private sector to amplify our impact and reach more young people.',
    globalConnection: currentLang === 'sw'
      ? 'Tunajumuisha katika mtandao wa kimataifa wa Restless Development, tukishiriki ujuzi na mifumo ya kufanya kazi na vijana katika nchi 10+ kote dunia.'
      : 'We are part of the global Restless Development network, sharing knowledge and approaches to working with young people across 10+ countries worldwide.'
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 font-['Noto_Sans']">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {currentLang === 'sw' ? 'Kuhusu Sisi' : 'About Us'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentLang === 'sw' 
              ? 'Tunafanya kazi na vijana kote Tanzania ili kuongoza mabadiliko mazuri katika jamii zao'
              : 'We work with young people across Tanzania to lead positive change in their communities'
            }
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(missionVision).map(([key, item]) => (
            <div key={key} className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e36f1e] to-[#d45a0a] rounded-2xl flex items-center justify-center mr-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* History Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-orange-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="font-['Noto_Sans']">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e36f1e] to-[#d45a0a] rounded-2xl flex items-center justify-center mr-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{history.title}</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {history.content}
              </p>
              
              <div className="bg-gradient-to-r from-[#e36f1e]/10 to-[#d45a0a]/10 rounded-2xl p-6 border-l-4 border-[#e36f1e]">
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  {history.globalConnection}
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#e36f1e]/20 to-[#d45a0a]/20 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#e36f1e] to-[#d45a0a] rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentLang === 'sw' ? '10+ Nchi' : '10+ Countries'}
                  </h4>
                  <p className="text-gray-600">
                    {currentLang === 'sw' ? 'Mtandao wa kimataifa' : 'Global Network'}
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#e36f1e] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#d45a0a] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-[#e36f1e] to-[#d45a0a] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-[#d45a0a] hover:to-[#c44a08] transition-all duration-300 hover:shadow-xl hover:shadow-[#e36f1e]/25 flex items-center space-x-3 mx-auto">
            <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>{currentLang === 'sw' ? 'Jiunge Nasi' : 'Join Our Mission'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
