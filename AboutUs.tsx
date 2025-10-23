import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';

interface AboutUsProps {
  theme: 'light' | 'dark';
}

export function AboutUs({ theme }: AboutUsProps) {
  const { t, language } = useLanguage();
  
  const teamMembers = [
    {
      name: "Nicolas",
      role: "Full Stack Developer",
      description: {
        pt: "Especialista em desenvolvimento web moderno e arquitetura de sistemas",
        en: "Expert in modern web development and system architecture"
      },
      color: theme === 'light' ? "from-blue-400 to-cyan-400" : "from-blue-500 to-cyan-500"
    },
    {
      name: "Raul",
      role: "Frontend Developer", 
      description: {
        pt: "Focado em experiência do usuário e interfaces responsivas",
        en: "Focused on user experience and responsive interfaces"
      },
      color: theme === 'light' ? "from-purple-400 to-blue-400" : "from-purple-500 to-blue-500"
    },
    {
      name: "Hello",
      role: "UI/UX Designer",
      description: {
        pt: "Criador de experiências visuais e design de interação",
        en: "Creator of visual experiences and interaction design"
      },
      color: theme === 'light' ? "from-green-400 to-cyan-400" : "from-green-500 to-cyan-500"
    },
    {
      name: "Antonio Zion",
      role: "Backend Developer",
      description: {
        pt: "Especialista em APIs, bancos de dados e infraestrutura",
        en: "Expert in APIs, databases and infrastructure"
      },
      color: theme === 'light' ? "from-orange-400 to-red-400" : "from-orange-500 to-red-500"
    }
  ];

  const technologies = [
    { 
      name: "React", 
      description: {
        pt: "Biblioteca JavaScript para interfaces",
        en: "JavaScript library for interfaces"
      }
    },
    { 
      name: "TypeScript", 
      description: {
        pt: "Superset tipado do JavaScript",
        en: "Typed superset of JavaScript"
      }
    },
    { 
      name: "Tailwind CSS", 
      description: {
        pt: "Framework CSS utilitário",
        en: "Utility-first CSS framework"
      }
    },
    { 
      name: "Figma", 
      description: {
        pt: "Ferramenta de design e prototipagem",
        en: "Design and prototyping tool"
      }
    },
    { 
      name: "Montserrat", 
      description: {
        pt: "Tipografia moderna e legível",
        en: "Modern and readable typography"
      }
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getBackgroundClass = () => {
    return theme === 'light' 
      ? 'min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'
      : 'min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900';
  };

  const getTextColor = (type: string) => {
    switch(type) {
      case 'primary':
        return theme === 'light' ? 'text-gray-800' : 'text-slate-200';
      case 'secondary':
        return theme === 'light' ? 'text-gray-700' : 'text-slate-300';
      case 'accent':
        return theme === 'light' ? 'text-blue-600' : 'text-cyan-300';
      case 'accent-alt':
        return theme === 'light' ? 'text-blue-700' : 'text-cyan-200';
      default:
        return theme === 'light' ? 'text-gray-800' : 'text-slate-200';
    }
  };

  const getCardClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg border border-blue-200/50 mb-8 shadow-xl'
      : 'bg-gradient-to-br from-slate-800 to-blue-900 p-8 rounded-lg border border-cyan-500/30 mb-8 shadow-2xl';
  };

  const getSmallCardClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg border border-blue-200/50 shadow-lg'
      : 'bg-gradient-to-br from-slate-800 to-blue-900 p-6 rounded-lg border border-cyan-500/30 shadow-xl';
  };

  const getSectionClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-r from-blue-100/80 to-cyan-100/80 p-8 rounded-lg border border-blue-200/50 shadow-xl backdrop-blur-sm'
      : 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-8 rounded-lg border border-cyan-400/50 shadow-2xl backdrop-blur-sm';
  };

  const getTeamCardClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg border border-blue-200/50 shadow-lg text-center hover:scale-105 transition-transform duration-300'
      : 'bg-gradient-to-br from-slate-800 to-blue-900 p-6 rounded-lg border border-cyan-500/30 shadow-xl text-center hover:scale-105 transition-transform duration-300';
  };

  const getTechCardClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-white to-blue-50 p-4 rounded-lg border border-blue-200/50 shadow-md hover:shadow-lg transition-shadow'
      : 'bg-gradient-to-br from-slate-800 to-blue-900 p-4 rounded-lg border border-cyan-500/30 shadow-lg hover:shadow-xl transition-shadow';
  };

  return (
    <div className={getBackgroundClass()} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <span className={theme === 'light' 
            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
          }>
            {t('aboutUs')}
          </span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className={getCardClass()}>
            <h2 className={`text-2xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('ourMission')}
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'pt' 
                ? 'Criamos este projeto educativo com o objetivo de democratizar o conhecimento sobre a história da World Wide Web. Acreditamos que compreender a evolução da internet é fundamental para entender o mundo digital em que vivemos hoje.'
                : 'We created this educational project with the goal of democratizing knowledge about the history of the World Wide Web. We believe that understanding the evolution of the internet is fundamental to understanding the digital world we live in today.'
              }
            </p>
            <p className={`leading-relaxed ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'pt'
                ? 'Através de uma experiência interativa e visualmente atrativa, buscamos tornar o aprendizado sobre tecnologia acessível e envolvente para estudantes, profissionais e curiosos em geral.'
                : 'Through an interactive and visually attractive experience, we seek to make learning about technology accessible and engaging for students, professionals, and curious people in general.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className={getSmallCardClass()}>
              <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('whatWeOffer')}
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-blue-500' : 'bg-cyan-400'
                  }`}></div>
                  <div className={getTextColor('primary')}>
                    <strong className={getTextColor('accent-alt')}>
                      {language === 'pt' ? 'Conteúdo Educativo:' : 'Educational Content:'}
                    </strong> {language === 'pt' ? 'Informações precisas e bem estruturadas' : 'Accurate and well-structured information'}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-blue-500' : 'bg-cyan-400'
                  }`}></div>
                  <div className={getTextColor('primary')}>
                    <strong className={getTextColor('accent-alt')}>
                      {language === 'pt' ? 'Design Responsivo:' : 'Responsive Design:'}
                    </strong> {language === 'pt' ? 'Experiência otimizada para todos os dispositivos' : 'Optimized experience for all devices'}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-blue-500' : 'bg-cyan-400'
                  }`}></div>
                  <div className={getTextColor('primary')}>
                    <strong className={getTextColor('accent-alt')}>
                      {language === 'pt' ? 'Navegação Intuitiva:' : 'Intuitive Navigation:'}
                    </strong> {language === 'pt' ? 'Interface clara e fácil de usar' : 'Clear and easy-to-use interface'}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-blue-500' : 'bg-cyan-400'
                  }`}></div>
                  <div className={getTextColor('primary')}>
                    <strong className={getTextColor('accent-alt')}>
                      {language === 'pt' ? 'Acesso Gratuito:' : 'Free Access:'}
                    </strong> {language === 'pt' ? 'Conhecimento acessível para todos' : 'Knowledge accessible to everyone'}
                  </div>
                </li>
              </ul>
            </div>

            <div className={getSmallCardClass()}>
              <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('ourVision')}
              </h3>
              <p className={`leading-relaxed mb-4 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'pt'
                  ? 'Visualizamos um futuro onde o conhecimento sobre tecnologia seja acessível a todos, independentemente de sua formação técnica.'
                  : 'We envision a future where knowledge about technology is accessible to everyone, regardless of their technical background.'
                }
              </p>
              <p className={`leading-relaxed ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'pt'
                  ? 'Queremos inspirar a próxima geração de desenvolvedores, designers e inovadores digitais através da compreensão das raízes e evolução da web.'
                  : 'We want to inspire the next generation of developers, designers, and digital innovators through understanding the roots and evolution of the web.'
                }
              </p>
            </div>
          </div>

          <h2 className={`text-2xl font-semibold mb-6 text-center ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('ourTeam')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={getTeamCardClass()}>
                <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-white font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {getInitials(member.name)}
                  </span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {member.name}
                </h3>
                <p className={`text-sm mb-3 ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {member.role}
                </p>
                <p className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-slate-400'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {member.description[language]}
                </p>
              </div>
            ))}
          </div>

          <h3 className={`text-xl font-semibold mb-4 text-center ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('technologiesUsed')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {technologies.map((tech, index) => (
              <div key={index} className={getTechCardClass()}>
                <h4 className={`font-semibold mb-1 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {tech.name}
                </h4>
                <p className={`text-sm ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {tech.description[language]}
                </p>
              </div>
            ))}
          </div>

          <div className={getSectionClass()}>
            <h3 className={`text-xl font-semibold mb-4 text-center ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('acknowledgments')}
            </h3>
            <p className={`leading-relaxed text-center ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'pt'
                ? 'Agradecemos a Tim Berners-Lee pela criação da World Wide Web, a todos os pioneiros da internet que tornaram possível a era digital, e à comunidade open source que continua inovando e compartilhando conhecimento. Este projeto é uma homenagem a todos que contribuíram para tornar a web o que ela é hoje.'
                : 'We thank Tim Berners-Lee for creating the World Wide Web, all the internet pioneers who made the digital age possible, and the open source community that continues to innovate and share knowledge. This project is a tribute to everyone who contributed to making the web what it is today.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}