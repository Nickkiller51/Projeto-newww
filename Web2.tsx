import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';

interface Web2Props {
  theme: 'light' | 'dark';
}

export function Web2({ theme }: Web2Props) {
  const { t, language } = useLanguage();

  const features = [
    {
      title: {
        pt: 'Redes Sociais',
        en: 'Social Networks'
      },
      description: {
        pt: 'Facebook, Twitter, LinkedIn transformaram a comunicação online',
        en: 'Facebook, Twitter, LinkedIn transformed online communication'
      }
    },
    {
      title: {
        pt: 'Conteúdo Gerado pelo Usuário',
        en: 'User Generated Content'
      },
      description: {
        pt: 'Blogs, wikis e fóruns permitiram que qualquer um criasse conteúdo',
        en: 'Blogs, wikis and forums allowed anyone to create content'
      }
    },
    {
      title: {
        pt: 'Aplicações Web Interativas',
        en: 'Interactive Web Applications'
      },
      description: {
        pt: 'AJAX permitiu interfaces dinâmicas sem recarregar páginas',
        en: 'AJAX enabled dynamic interfaces without page reloads'
      }
    },
    {
      title: {
        pt: 'Colaboração Online',
        en: 'Online Collaboration'
      },
      description: {
        pt: 'Ferramentas como Google Docs revolucionaram o trabalho em equipe',
        en: 'Tools like Google Docs revolutionized teamwork'
      }
    }
  ];

  const platforms = [
    { 
      name: 'Facebook', 
      description: {
        pt: 'Rede social global',
        en: 'Global social network'
      }
    },
    { 
      name: 'YouTube', 
      description: {
        pt: 'Compartilhamento de vídeos',
        en: 'Video sharing platform'
      }
    },
    { 
      name: 'Wikipedia', 
      description: {
        pt: 'Enciclopédia colaborativa',
        en: 'Collaborative encyclopedia'
      }
    },
    { 
      name: 'Blogger', 
      description: {
        pt: 'Plataforma de blogs',
        en: 'Blogging platform'
      }
    },
    { 
      name: 'Flickr', 
      description: {
        pt: 'Compartilhamento de fotos',
        en: 'Photo sharing platform'
      }
    },
    { 
      name: 'MySpace', 
      description: {
        pt: 'Rede social musical',
        en: 'Music social network'
      }
    }
  ];

  const technologies = [
    { 
      name: 'AJAX', 
      desc: {
        pt: 'Páginas dinâmicas sem recarregamento',
        en: 'Dynamic pages without reload'
      },
      color: theme === 'light' ? '#ff6b35' : '#ff8c69'
    },
    { 
      name: 'RSS', 
      desc: {
        pt: 'Feeds de conteúdo atualizável',
        en: 'Updatable content feeds'
      },
      color: theme === 'light' ? '#32cd32' : '#90ee90'
    },
    { 
      name: 'APIs', 
      desc: {
        pt: 'Integração entre serviços',
        en: 'Service integration'
      },
      color: theme === 'light' ? '#4169E1' : '#6495ed'
    }
  ];

  const positiveChanges = {
    pt: [
      'Democratização da criação de conteúdo',
      'Surgimento de comunidades online',
      'Colaboração global em projetos',
      'Novas formas de aprendizado social'
    ],
    en: [
      'Democratization of content creation',
      'Emergence of online communities',
      'Global project collaboration',
      'New forms of social learning'
    ]
  };

  const newChallenges = {
    pt: [
      'Sobrecarga de informação',
      'Questões de privacidade',
      'Dependência de plataformas',
      'Polarização em echo chambers'
    ],
    en: [
      'Information overload',
      'Privacy issues',
      'Platform dependency',
      'Echo chamber polarization'
    ]
  };

  const getBackgroundClass = () => {
    return theme === 'light' 
      ? 'min-h-screen bg-gradient-to-br from-orange-50 to-green-50'
      : 'min-h-screen bg-gradient-to-br from-slate-900 via-orange-950 to-green-950';
  };

  const getTextColor = (type: string) => {
    switch(type) {
      case 'primary':
        return theme === 'light' ? 'text-orange-800' : 'text-orange-200';
      case 'secondary':
        return theme === 'light' ? 'text-green-700' : 'text-green-300';
      case 'accent':
        return theme === 'light' ? 'text-orange-600' : 'text-orange-400';
      case 'accent-alt':
        return theme === 'light' ? 'text-green-600' : 'text-green-400';
      case 'muted':
        return theme === 'light' ? 'text-gray-600' : 'text-slate-400';
      default:
        return theme === 'light' ? 'text-orange-800' : 'text-orange-200';
    }
  };

  const getCardClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-white to-orange-50 p-8 rounded-lg border border-orange-200/50 mb-8 shadow-xl'
      : 'bg-gradient-to-br from-orange-900 to-green-900 p-8 rounded-lg border border-orange-600/30 mb-8 shadow-2xl';
  };

  const getSmallCardClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-white to-orange-50 p-6 rounded-lg border border-orange-200/50 shadow-lg'
      : 'bg-gradient-to-br from-orange-900 to-green-900 p-6 rounded-lg border border-orange-600/30 shadow-xl';
  };

  const getIconBadgeClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-orange-500 to-green-500'
      : 'bg-gradient-to-br from-orange-600 to-green-600';
  };

  const getSectionClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-r from-orange-100/80 to-green-100/80 p-8 rounded-lg border border-orange-200/50 shadow-xl backdrop-blur-sm'
      : 'bg-gradient-to-r from-orange-900/50 to-green-900/50 p-8 rounded-lg border border-orange-400/50 shadow-2xl backdrop-blur-sm';
  };

  return (
    <div className={getBackgroundClass()} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <span className={theme === 'light' 
            ? 'bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent'
          }>
            {t('web2Title')}
          </span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-lg text-white text-3xl font-bold mb-4 shadow-xl ${getIconBadgeClass()}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              2.0
            </div>
            <p className={`text-xl ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>2004 - 2014</p>
          </div>

          <div className="text-center mb-12">
            <div className="relative">
              <div className={`absolute inset-0 rounded-lg blur-lg opacity-30 ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-orange-200 to-green-200'
                  : 'bg-gradient-to-r from-orange-500/20 to-green-500/20'
              }`}></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1728393620463-bef90c9c9702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHdlYiUyMDIuMHxlbnwxfHx8fDE3NTYyMDkyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Redes sociais e mídia digital"
                className={`relative w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl border-4 ${
                  theme === 'light' ? 'border-orange-300' : 'border-orange-500/50'
                }`}
              />
            </div>
          </div>

          <div className={getCardClass()}>
            <h2 className={`text-2xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('participationEra')}
            </h2>
            <p className={`leading-relaxed mb-4 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'pt' 
                ? 'A Web 2.0 marcou uma transformação fundamental na internet, passando de um modelo "somente leitura" para "leitura e escrita". Os usuários deixaram de ser meros consumidores de conteúdo para se tornarem criadores ativos, colaboradores e participantes de uma web mais social e interativa.'
                : 'Web 2.0 marked a fundamental transformation in the internet, moving from a "read-only" model to "read and write". Users stopped being mere content consumers to become active creators, collaborators and participants in a more social and interactive web.'
              }
            </p>
            <p className={`leading-relaxed ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'pt'
                ? 'Este período foi caracterizado pelo surgimento de plataformas que facilitavam a criação de conteúdo pelos usuários, a colaboração online e o compartilhamento social de informações.'
                : 'This period was characterized by the emergence of platforms that facilitated user content creation, online collaboration and social information sharing.'
              }
            </p>
          </div>

          <h2 className={`text-2xl font-semibold mb-6 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('mainCharacteristics')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className={`${getSmallCardClass()} hover:shadow-xl transition-shadow`}>
                <h3 className={`text-lg font-semibold mb-3 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {feature.title[language]}
                </h3>
                <p className={`text-sm ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {feature.description[language]}
                </p>
              </div>
            ))}
          </div>

          <div className={getSmallCardClass() + ' mb-8'}>
            <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('revolutionaryTechnologies')}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className={`text-center p-4 rounded-lg ${
                  theme === 'light' ? 'bg-orange-50' : 'bg-orange-800/30'
                }`}>
                  <div className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold shadow-lg" 
                       style={{ backgroundColor: tech.color }}>
                    {tech.name.slice(0, 3)}
                  </div>
                  <h4 className={`font-semibold text-sm ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {tech.name}
                  </h4>
                  <p className={`text-xs ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {tech.desc[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('iconicPlatforms')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {platforms.map((platform, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 hover:shadow-lg transition-all hover:scale-105 ${
                theme === 'light' 
                  ? 'bg-white border-orange-200'
                  : 'bg-orange-900/50 border-orange-500/50'
              }`}>
                <h4 className={`font-semibold ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {platform.name}
                </h4>
                <p className={`text-sm ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {platform.description[language]}
                </p>
              </div>
            ))}
          </div>

          <div className={getSectionClass()}>
            <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('culturalImpact')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className={`font-semibold mb-2 ${getTextColor('accent-alt')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('positiveChanges')}
                </h4>
                <ul className={`text-sm space-y-1 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {positiveChanges[language].map((change, index) => (
                    <li key={index}>• {change}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={`font-semibold mb-2 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('newChallenges')}
                </h4>
                <ul className={`text-sm space-y-1 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {newChallenges[language].map((challenge, index) => (
                    <li key={index}>• {challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}