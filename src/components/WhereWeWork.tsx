import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Users, 
  Calendar, 
  TrendingUp
} from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

// World map data URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Markers for our office locations
const markers = [
  { name: 'TANZANIA', coordinates: [34.888822, -6.369028], projects: '200+', youth: '55,695' },
  { name: 'KENYA', coordinates: [37.906193, -0.023559], projects: '45+', youth: '8,500+' },
  { name: 'UGANDA', coordinates: [32.290275, 1.373333], projects: '32+', youth: '6,200+' },
  { name: 'ZAMBIA', coordinates: [27.849332, -13.133897], projects: '28+', youth: '5,800+' },
  { name: 'MALAWI', coordinates: [34.301525, -13.254308], projects: '22+', youth: '4,100+' },
  { name: 'ZIMBABWE', coordinates: [29.154857, -19.015438], projects: '18+', youth: '3,200+' },
  { name: 'RWANDA', coordinates: [29.873888, -1.940278], projects: '15+', youth: '2,800+' },
  { name: 'GHANA', coordinates: [-1.023194, 7.946527], projects: '25+', youth: '4,500+' },
  { name: 'SIERRA LEONE', coordinates: [-11.779889, 8.460555], projects: '12+', youth: '2,200+' },
  { name: 'MADAGASCAR', coordinates: [46.869107, -18.766947], projects: '8+', youth: '1,500+' },
  { name: 'INDIA', coordinates: [78.96288, 20.593684], projects: '35+', youth: '7,200+' },
  { name: 'NEPAL', coordinates: [84.124008, 28.394857], projects: '20+', youth: '3,800+' },
  { name: 'IRAQ', coordinates: [43.679291, 33.223191], projects: '15+', youth: '2,900+' },
  { name: 'LEBANON', coordinates: [35.862285, 33.854721], projects: '10+', youth: '1,800+' },
  { name: 'USA', coordinates: [-95.712891, 37.09024], projects: '5+', youth: '800+' },
  { name: 'UK', coordinates: [-3.435973, 55.378051], projects: '8+', youth: '1,200+' }
];

export const WhereWeWork = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const [selectedCountry, setSelectedCountry] = useState<string>('TANZANIA');
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [tooltipContent, setTooltipContent] = useState<any>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    setIsMapLoaded(true);
  }, []);

  const countries = [
    'AFRICA', 'GHANA', 'IRAQ', 'KENYA', 'LEBANON', 'MADAGASCAR', 'MALAWI',
    'RWANDA', 'USA', 'UK', 'ZAMBIA', 'TANZANIA', 'INDIA', 'NEPAL', 'SIERRA LEONE',
    'ZIMBABWE', 'UGANDA'
  ];

  const countryData = {
    'TANZANIA': {
      name: currentLang === 'sw' ? 'Tanzania' : 'Tanzania',
      projects: currentLang === 'sw' ? 'Miradi 200+' : '200+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 55,695' : '55,695 Youth',
      since: currentLang === 'sw' ? 'Tangu 2010' : 'Since 2010',
      focus: currentLang === 'sw' ? 'Maisha, Mazingira, Haki za kijinsia, Ushiriki wa kijamii' : 'Livelihoods, Climate Action, Sexual Rights, Civic Engagement',
      description: currentLang === 'sw' 
        ? 'Tanzania ni makao makuu yetu na eneo la kazi kubwa zaidi. Tunafanya kazi na vijana katika mikoa 8 kujenga ujuzi wa kazi, kuhifadhi mazingira, na kushiriki katika mchakato wa kisiasa.'
        : 'Tanzania is our headquarters and largest area of operation. We work with youth across 8 regions to build job skills, conserve the environment, and participate in political processes.',
      color: '#e36f1e',
      coordinates: { x: 60, y: 45 }
    },
    'KENYA': {
      name: currentLang === 'sw' ? 'Kenya' : 'Kenya',
      projects: currentLang === 'sw' ? 'Miradi 45+' : '45+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 8,500+' : '8,500+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2012' : 'Since 2012',
      focus: currentLang === 'sw' ? 'Ujuzi wa kazi, Mazingira' : 'Livelihoods, Climate Action',
      description: currentLang === 'sw' 
        ? 'Kenya ni mshirika muhimu wa kazi yetu katika Afrika Mashariki. Tunafanya kazi na vijana kujenga ujuzi wa kazi na kuhifadhi mazingira.'
        : 'Kenya is a key partner in our East Africa work. We collaborate with youth to build job skills and conserve the environment.',
      color: '#10b981',
      coordinates: { x: 65, y: 40 }
    },
    'UGANDA': {
      name: currentLang === 'sw' ? 'Uganda' : 'Uganda',
      projects: currentLang === 'sw' ? 'Miradi 32+' : '32+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 6,200+' : '6,200+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2013' : 'Since 2013',
      focus: currentLang === 'sw' ? 'Haki za kijinsia, Ushiriki wa kijamii' : 'Sexual Rights, Civic Engagement',
      description: currentLang === 'sw' 
        ? 'Uganda ni eneo muhimu la kazi yetu ya haki za kijinsia na ushiriki wa kijamii. Tunafanya kazi na vijana kutoa elimu ya afya ya uzazi.'
        : 'Uganda is a key area for our sexual rights and civic engagement work. We work with youth to provide sexual health education.',
      color: '#3b82f6',
      coordinates: { x: 62, y: 35 }
    },
    'ZAMBIA': {
      name: currentLang === 'sw' ? 'Zambia' : 'Zambia',
      projects: currentLang === 'sw' ? 'Miradi 28+' : '28+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 5,800+' : '5,800+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2014' : 'Since 2014',
      focus: currentLang === 'sw' ? 'Maisha, Mazingira' : 'Livelihoods, Climate Action',
      description: currentLang === 'sw' 
        ? 'Zambia ni mshirika muhimu wa kazi yetu ya maisha na mazingira. Tunawasaidia vijana kujenga ujuzi wa kazi na kuhifadhi mazingira.'
        : 'Zambia is a key partner in our livelihoods and climate work. We help youth build job skills and conserve the environment.',
      color: '#8b5cf6',
      coordinates: { x: 55, y: 50 }
    },
    'MALAWI': {
      name: currentLang === 'sw' ? 'Malawi' : 'Malawi',
      projects: currentLang === 'sw' ? 'Miradi 22+' : '22+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 4,100+' : '4,100+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2015' : 'Since 2015',
      focus: currentLang === 'sw' ? 'Maisha, Haki za kijinsia' : 'Livelihoods, Sexual Rights',
      description: currentLang === 'sw' 
        ? 'Malawi ni eneo muhimu la kazi yetu ya maisha na haki za kijinsia. Tunafanya kazi na vijana kujenga ujuzi wa kazi na kutoa elimu ya afya.'
        : 'Malawi is a key area for our livelihoods and sexual rights work. We work with youth to build job skills and provide health education.',
      color: '#f59e0b',
      coordinates: { x: 58, y: 52 }
    },
    'ZIMBABWE': {
      name: currentLang === 'sw' ? 'Zimbabwe' : 'Zimbabwe',
      projects: currentLang === 'sw' ? 'Miradi 18+' : '18+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 3,200+' : '3,200+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2016' : 'Since 2016',
      focus: currentLang === 'sw' ? 'Ushiriki wa kijamii, Maisha' : 'Civic Engagement, Livelihoods',
      description: currentLang === 'sw' 
        ? 'Zimbabwe ni mshirika muhimu wa kazi yetu ya ushiriki wa kijamii na maisha. Tunafanya kazi na vijana kushiriki katika mchakato wa kisiasa.'
        : 'Zimbabwe is a key partner in our civic engagement and livelihoods work. We work with youth on political participation.',
      color: '#ef4444',
      coordinates: { x: 52, y: 48 }
    },
    'RWANDA': {
      name: currentLang === 'sw' ? 'Rwanda' : 'Rwanda',
      projects: currentLang === 'sw' ? 'Miradi 15+' : '15+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 2,800+' : '2,800+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2017' : 'Since 2017',
      focus: currentLang === 'sw' ? 'Mazingira, Ushiriki wa kijamii' : 'Climate Action, Civic Engagement',
      description: currentLang === 'sw' 
        ? 'Rwanda ni eneo muhimu la kazi yetu ya mazingira na ushiriki wa kijamii. Tunafanya kazi na vijana kuhifadhi mazingira na kushiriki katika mchakato wa kisiasa.'
        : 'Rwanda is a key area for our climate action and civic engagement work. We work with youth on environmental conservation and political participation.',
      color: '#06b6d4',
      coordinates: { x: 63, y: 38 }
    },
    'GHANA': {
      name: currentLang === 'sw' ? 'Ghana' : 'Ghana',
      projects: currentLang === 'sw' ? 'Miradi 25+' : '25+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 4,500+' : '4,500+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2018' : 'Since 2018',
      focus: currentLang === 'sw' ? 'Maisha, Mazingira' : 'Livelihoods, Climate Action',
      description: currentLang === 'sw' 
        ? 'Ghana ni mshirika muhimu wa kazi yetu ya maisha na mazingira. Tunawasaidia vijana kujenga ujuzi wa kazi na kuhifadhi mazingira.'
        : 'Ghana is a key partner in our livelihoods and climate work. We help youth build job skills and conserve the environment.',
      color: '#84cc16',
      coordinates: { x: 35, y: 42 }
    },
    'SIERRA LEONE': {
      name: currentLang === 'sw' ? 'Sierra Leone' : 'Sierra Leone',
      projects: currentLang === 'sw' ? 'Miradi 12+' : '12+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 2,200+' : '2,200+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2019' : 'Since 2019',
      focus: currentLang === 'sw' ? 'Haki za kijinsia, Maisha' : 'Sexual Rights, Livelihoods',
      description: currentLang === 'sw' 
        ? 'Sierra Leone ni eneo muhimu la kazi yetu ya haki za kijinsia na maisha. Tunafanya kazi na vijana kutoa elimu ya afya ya uzazi na kujenga ujuzi wa kazi.'
        : 'Sierra Leone is a key area for our sexual rights and livelihoods work. We work with youth to provide sexual health education and build job skills.',
      color: '#f97316',
      coordinates: { x: 30, y: 40 }
    },
    'MADAGASCAR': {
      name: currentLang === 'sw' ? 'Madagascar' : 'Madagascar',
      projects: currentLang === 'sw' ? 'Miradi 8+' : '8+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 1,500+' : '1,500+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2020' : 'Since 2020',
      focus: currentLang === 'sw' ? 'Mazingira, Maisha' : 'Climate Action, Livelihoods',
      description: currentLang === 'sw' 
        ? 'Madagascar ni eneo muhimu la kazi yetu ya mazingira na maisha. Tunafanya kazi na vijana kuhifadhi mazingira na kujenga ujuzi wa kazi.'
        : 'Madagascar is a key area for our climate action and livelihoods work. We work with youth on environmental conservation and job skills.',
      color: '#ec4899',
      coordinates: { x: 68, y: 55 }
    },
    'INDIA': {
      name: currentLang === 'sw' ? 'India' : 'India',
      projects: currentLang === 'sw' ? 'Miradi 35+' : '35+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 7,200+' : '7,200+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2011' : 'Since 2011',
      focus: currentLang === 'sw' ? 'Maisha, Haki za kijinsia, Ushiriki wa kijamii' : 'Livelihoods, Sexual Rights, Civic Engagement',
      description: currentLang === 'sw' 
        ? 'India ni mshirika muhimu wa kazi yetu ya maisha, haki za kijinsia, na ushiriki wa kijamii. Tunafanya kazi na vijana kujenga ujuzi wa kazi na kutoa elimu ya afya.'
        : 'India is a key partner in our livelihoods, sexual rights, and civic engagement work. We work with youth to build job skills and provide health education.',
      color: '#e36f1e',
      coordinates: { x: 75, y: 35 }
    },
    'NEPAL': {
      name: currentLang === 'sw' ? 'Nepal' : 'Nepal',
      projects: currentLang === 'sw' ? 'Miradi 20+' : '20+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 3,800+' : '3,800+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2012' : 'Since 2012',
      focus: currentLang === 'sw' ? 'Maisha, Mazingira' : 'Livelihoods, Climate Action',
      description: currentLang === 'sw' 
        ? 'Nepal ni eneo muhimu la kazi yetu ya maisha na mazingira. Tunafanya kazi na vijana kujenga ujuzi wa kazi na kuhifadhi mazingira.'
        : 'Nepal is a key area for our livelihoods and climate work. We work with youth to build job skills and conserve the environment.',
      color: '#10b981',
      coordinates: { x: 78, y: 32 }
    },
    'IRAQ': {
      name: currentLang === 'sw' ? 'Iraq' : 'Iraq',
      projects: currentLang === 'sw' ? 'Miradi 15+' : '15+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 2,900+' : '2,900+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2013' : 'Since 2013',
      focus: currentLang === 'sw' ? 'Ushiriki wa kijamii, Maisha' : 'Civic Engagement, Livelihoods',
      description: currentLang === 'sw' 
        ? 'Iraq ni mshirika muhimu wa kazi yetu ya ushiriki wa kijamii na maisha. Tunafanya kazi na vijana kushiriki katika mchakato wa kisiasa na kujenga ujuzi wa kazi.'
        : 'Iraq is a key partner in our civic engagement and livelihoods work. We work with youth on political participation and job skills.',
      color: '#3b82f6',
      coordinates: { x: 60, y: 25 }
    },
    'LEBANON': {
      name: currentLang === 'sw' ? 'Lebanon' : 'Lebanon',
      projects: currentLang === 'sw' ? 'Miradi 10+' : '10+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 1,800+' : '1,800+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2014' : 'Since 2014',
      focus: currentLang === 'sw' ? 'Haki za kijinsia, Ushiriki wa kijamii' : 'Sexual Rights, Civic Engagement',
      description: currentLang === 'sw' 
        ? 'Lebanon ni eneo muhimu la kazi yetu ya haki za kijinsia na ushiriki wa kijamii. Tunafanya kazi na vijana kutoa elimu ya afya ya uzazi na kushiriki katika mchakato wa kisiasa.'
        : 'Lebanon is a key area for our sexual rights and civic engagement work. We work with youth to provide sexual health education and political participation.',
      color: '#8b5cf6',
      coordinates: { x: 58, y: 22 }
    },
    'USA': {
      name: currentLang === 'sw' ? 'Marekani' : 'USA',
      projects: currentLang === 'sw' ? 'Miradi 5+' : '5+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 800+' : '800+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2020' : 'Since 2020',
      focus: currentLang === 'sw' ? 'Ushiriki wa kijamii, Mazingira' : 'Civic Engagement, Climate Action',
      description: currentLang === 'sw' 
        ? 'Marekani ni mshirika muhimu wa kazi yetu ya ushiriki wa kijamii na mazingira. Tunafanya kazi na vijana kushiriki katika mchakato wa kisiasa na kuhifadhi mazingira.'
        : 'USA is a key partner in our civic engagement and climate work. We work with youth on political participation and environmental conservation.',
      color: '#f59e0b',
      coordinates: { x: 20, y: 20 }
    },
    'UK': {
      name: currentLang === 'sw' ? 'Uingereza' : 'UK',
      projects: currentLang === 'sw' ? 'Miradi 8+' : '8+ Projects',
      youth: currentLang === 'sw' ? 'Vijana 1,200+' : '1,200+ Youth',
      since: currentLang === 'sw' ? 'Tangu 2019' : 'Since 2019',
      focus: currentLang === 'sw' ? 'Ushiriki wa kijamii, Mazingira' : 'Civic Engagement, Climate Action',
      description: currentLang === 'sw' 
        ? 'Uingereza ni mshirika muhimu wa kazi yetu ya ushiriki wa kijamii na mazingira. Tunafanya kazi na vijana kushiriki katika mchakato wa kisiasa na kuhifadhi mazingira.'
        : 'UK is a key partner in our civic engagement and climate work. We work with youth on political participation and environmental conservation.',
      color: '#ef4444',
      coordinates: { x: 45, y: 15 }
    }
  };

  const getCountryInfo = (countryKey: string) => {
    return countryData[countryKey as keyof typeof countryData];
  };

  const totalStats = {
    countries: Object.keys(countryData).length,
    projects: Object.values(countryData).reduce((sum, country) => {
      const num = parseInt(country.projects.match(/\d+/)?.[0] || '0');
      return sum + num;
    }, 0),
    youth: Object.values(countryData).reduce((sum, country) => {
      const num = parseInt(country.youth.match(/\d+/)?.[0] || '0');
      return sum + num;
    }, 0)
  };

  return (
    <div className="pt-20 pb-0 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-['Noto_Sans']">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {currentLang === 'sw' ? 'Tunafanya Kazi Wapi' : 'Where We Work'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentLang === 'sw' 
              ? 'Tunafanya kazi katika nchi 16 duniani, kufikia vijana zaidi ya 100,000 katika miradi 500+'
              : 'We work across 16 countries worldwide, reaching over 100,000 young people through 500+ projects'
            }
          </p>
        </div>

        {/* Country Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-0">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              onMouseEnter={() => setHoveredCountry(country)}
              onMouseLeave={() => setHoveredCountry(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 border-2 ${
                selectedCountry === country
                  ? 'bg-[#e36f1e] text-white border-[#e36f1e] shadow-lg transform scale-105'
                  : 'bg-black text-white border-white hover:bg-[#e36f1e] hover:border-[#e36f1e] hover:text-white'
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

        {/* Full Width Map Section */}
      <div className="w-full -mt-12 relative">
        {/* React Simple Maps Component - Full Width */}
        <div className="w-full h-[800px] bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden mb-0">
          <div className={`transition-opacity duration-1000 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <ComposableMap
                projection="geoNaturalEarth1"
                projectionConfig={{
                  scale: 280,
                  center: [0, 0]
                }}
                width={1600}
                height={800}
                style={{
                  width: "100%",
                  height: "100%"
                }}
              >
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                  </filter>
                  <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#dbeafe" />
                    <stop offset="100%" stopColor="#bfdbfe" />
                  </linearGradient>
                </defs>
                
                {/* Ocean background */}
                <rect width="100%" height="100%" fill="url(#oceanGradient)" />
                
                <Geographies geography={geoUrl}>
                  {({ geographies }: any) =>
                    geographies.map((geo: any) => {
                      // Color countries based on whether we work there
                      const isActiveCountry = markers.some(marker => 
                        geo.properties.NAME === marker.name || 
                        geo.properties.NAME_LONG === marker.name ||
                        geo.properties.ADMIN === marker.name
                      );
                      
                      
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={(event: any) => {
                            if (isActiveCountry) {
                              const marker = markers.find(m => 
                                geo.properties.NAME === m.name || 
                                geo.properties.NAME_LONG === m.name ||
                                geo.properties.ADMIN === m.name
                              );
                              if (marker) {
                                setHoveredCountry(marker.name);
                                setTooltipContent(getCountryInfo(marker.name));
                                setTooltipPosition({ x: event.clientX, y: event.clientY });
                              }
                            }
                          }}
                          onMouseMove={(event: any) => {
                            if (isActiveCountry && tooltipContent) {
                              setTooltipPosition({ x: event.clientX, y: event.clientY });
                            }
                          }}
                          onMouseLeave={() => {
                            setHoveredCountry(null);
                            setTooltipContent(null);
                          }}
                          onClick={() => {
                            if (isActiveCountry) {
                              const marker = markers.find(m => 
                                geo.properties.NAME === m.name || 
                                geo.properties.NAME_LONG === m.name ||
                                geo.properties.ADMIN === m.name
                              );
                              if (marker) {
                                setSelectedCountry(marker.name);
                              }
                            }
                          }}
                          style={{
                            default: {
                              fill: isActiveCountry ? "url(#activeGradient)" : "#f8fafc",
                              stroke: isActiveCountry ? "#ffffff" : "#e2e8f0",
                              strokeWidth: isActiveCountry ? 1 : 0.5,
                              outline: "none",
                              cursor: isActiveCountry ? "pointer" : "default",
                              filter: isActiveCountry ? "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" : "none",
                              transition: "all 0.3s ease"
                            },
                            hover: {
                              fill: isActiveCountry ? "#dc2626" : "#f1f5f9",
                              stroke: isActiveCountry ? "#ffffff" : "#cbd5e1",
                              strokeWidth: isActiveCountry ? 2 : 0.5,
                              outline: "none",
                              filter: isActiveCountry ? "url(#glow) drop-shadow(0 4px 8px rgba(0,0,0,0.2))" : "none",
                              transform: isActiveCountry ? "scale(1.02)" : "scale(1)",
                              transformOrigin: "center"
                            },
                            pressed: {
                              fill: isActiveCountry ? "#b91c1c" : "#e2e8f0",
                              stroke: "#ffffff",
                              strokeWidth: isActiveCountry ? 2 : 0.5,
                              outline: "none",
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
                
                {/* Markers for our locations */}
                {markers.map(({ name, coordinates }) => {
                  const isSelected = selectedCountry === name;
                  const isHovered = hoveredCountry === name;
                  const markerSize = isSelected ? 8 : isHovered ? 7 : 6;
                  
                  return (
                    <Marker key={name} coordinates={coordinates}>
                      {/* Pulse animation for selected marker */}
                      {isSelected && (
                        <circle
                          r={markerSize + 4}
                          fill="none"
                          stroke="#f97316"
                          strokeWidth={2}
                          opacity={0.6}
                          style={{
                            animation: "pulse 2s infinite"
                          }}
                        />
                      )}
                      
                      {/* Main marker */}
                      <circle
                        r={markerSize}
                        fill="#ffffff"
                        stroke={isSelected ? "#dc2626" : "#f97316"}
                        strokeWidth={isSelected ? 3 : 2}
                        style={{
                          cursor: "pointer",
                          filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.4))",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(event: any) => {
                          setHoveredCountry(name);
                          setTooltipContent(getCountryInfo(name));
                          setTooltipPosition({ x: event.clientX, y: event.clientY });
                        }}
                        onMouseMove={(event: any) => {
                          setTooltipPosition({ x: event.clientX, y: event.clientY });
                        }}
                        onMouseLeave={() => {
                          setHoveredCountry(null);
                          setTooltipContent(null);
                        }}
                        onClick={() => setSelectedCountry(name)}
                      />
                      
                      {/* Inner dot */}
                      <circle
                        r={markerSize - 3}
                        fill={isSelected ? "#dc2626" : "#f97316"}
                        style={{
                          pointerEvents: "none",
                          transition: "all 0.3s ease"
                        }}
                      />
                      
                      {/* Country label */}
                      <text
                        textAnchor="middle"
                        y={-markerSize - 8}
                        style={{
                          fontFamily: "Noto Sans, sans-serif",
                          fontSize: isSelected ? "12px" : "10px",
                          fontWeight: isSelected ? "700" : "600",
                          fill: "#1f2937",
                          pointerEvents: "none",
                          textShadow: "2px 2px 4px rgba(255,255,255,0.9)",
                          transition: "all 0.3s ease"
                        }}
                      >
                        {name}
                      </text>
                    </Marker>
                  );
                })}
              </ComposableMap>
          </div>
          
          {/* Loading overlay */}
          {!isMapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium">Loading interactive map...</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Legend */}
        <div className="py-6 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="flex items-center space-x-6 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-[#e36f1e]"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {currentLang === 'sw' ? 'Nchi za Kazi' : 'Active Countries'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {currentLang === 'sw' ? 'Nchi Zingine' : 'Other Countries'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive Tooltip */}
        {tooltipContent && (
          <div 
            className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y - 10
            }}
          >
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-xs animate-in fade-in-0 zoom-in-95 duration-200">
              <div className="flex items-center gap-2 mb-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: tooltipContent.color }}
                ></div>
                <h3 className="font-bold text-gray-900">{tooltipContent.name}</h3>
              </div>
              
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>{tooltipContent.projects}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-3 h-3" />
                  <span>{tooltipContent.youth}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-3 h-3" />
                  <span>{tooltipContent.since}</span>
                </div>
              </div>
              
              <div className="mt-2 pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500 font-medium">{tooltipContent.focus}</p>
              </div>
              
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </div>
          </div>
        )}
        
      </div>
      
      {/* CSS for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        
        /* Mobile-specific fixes */
        @media (max-width: 768px) {
          .w-full {
            width: 100vw !important;
            margin-left: calc(-50vw + 50%) !important;
          }
        }
      `}</style>
    </div>
  );
};
