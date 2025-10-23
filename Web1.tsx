import { useLanguage } from './LanguageContext';

interface Web1Props {
  theme: 'light' | 'dark';
}

export function Web1({ theme }: Web1Props) {
  const { t, language } = useLanguage();

  const characteristics = [
    {
      title: {
        pt: 'Páginas Estáticas',
        en: 'Static Pages'
      },
      description: {
        pt: 'Conteúdo fixo em HTML simples, sem interatividade',
        en: 'Fixed content in simple HTML, without interactivity'
      }
    },
    {
      title: {
        pt: 'Apenas Leitura',
        en: 'Read Only'
      },
      description: {
        pt: 'Usuários consumiam informações, mas não podiam contribuir',
        en: 'Users consumed information but could not contribute'
      }
    },
    {
      title: {
        pt: 'Design Simples',
        en: 'Simple Design'
      },
      description: {
        pt: 'Layout básico com texto e imagens, pouca formatação',
        en: 'Basic layout with text and images, little formatting'
      }
    },
    {
      title: {
        pt: 'Navegação Linear',
        en: 'Linear Navigation'
      },
      description: {
        pt: 'Links simples conectando páginas de forma hierárquica',
        en: 'Simple links connecting pages hierarchically'
      }
    }
  ];

  const examples = {
    pt: [
      'Sites de empresas com informações básicas',
      'Páginas pessoais simples',
      'Catálogos online estáticos',
      'Portais de notícias básicos',
      'Diretórios de links'
    ],
    en: [
      'Company sites with basic information',
      'Simple personal pages',
      'Static online catalogs',
      'Basic news portals',
      'Link directories'
    ]
  };

  const technologies = {
    pt: ['HTML básico', 'CSS simples', 'JavaScript limitado', 'Tabelas para layout', 'GIFs animados', 'Frames e framesets'],
    en: ['Basic HTML', 'Simple CSS', 'Limited JavaScript', 'Tables for layout', 'Animated GIFs', 'Frames and framesets']
  };

  const positivePoints = {
    pt: [
      'Simplicidade e facilidade de navegação',
      'Carregamento rápido das páginas',
      'Foco no conteúdo informativo',
      'Menor complexidade técnica'
    ],
    en: [
      'Simplicity and ease of navigation',
      'Fast page loading',
      'Focus on informative content',
      'Lower technical complexity'
    ]
  };

  const limitations = {
    pt: [
      'Falta de interatividade',
      'Usuários passivos, apenas consumidores',
      'Design limitado e pouco atrativo',
      'Dificuldade para atualizar conteúdo'
    ],
    en: [
      'Lack of interactivity',
      'Passive users, only consumers',
      'Limited and unattractive design',
      'Difficulty updating content'
    ]
  };

  const getBackgroundClass = () => {
    return theme === 'light' 
      ? 'min-h-screen bg-gradient-to-br from-gray-100 to-blue-100'
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
      case 'muted':
        return theme === 'light' ? 'text-gray-600' : 'text-slate-400';
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

  const getIconBadgeClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
      : 'bg-gradient-to-br from-slate-500 to-blue-600';
  };

  const getPositiveCardClass = () => {
    return theme === 'light' 
      ? 'p-6 rounded-lg border-2 bg-green-50 border-green-200'
      : 'p-6 rounded-lg border-2 bg-green-950/30 border-green-600/50';
  };

  const getNegativeCardClass = () => {
    return theme === 'light' 
      ? 'p-6 rounded-lg border-2 bg-red-50 border-red-200'
      : 'p-6 rounded-lg border-2 bg-red-950/30 border-red-600/50';
  };

  return (
    <div className={getBackgroundClass()} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <span className={theme === 'light' 
            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-slate-400 to-blue-400 bg-clip-text text-transparent'
          }>
            {t('web1Title')}
          </span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-lg text-white text-3xl font-bold mb-4 shadow-lg ${getIconBadgeClass()}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              1.0
            </div>
            <p className={`text-xl ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>1991 - 2004</p>
          </div>

          <div className={getCardClass()}>
            <h2 className={`text-2xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('mainCharacteristics')}
            </h2>
            <p className={`leading-relaxed mb-6 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'pt' 
                ? 'A Web 1.0 foi caracterizada como uma web "somente leitura", onde o conteúdo era criado por um pequeno número de desenvolvedores para um grande número de usuários. As páginas eram estáticas, com pouca ou nenhuma interatividade, e o foco estava na distribuição de informações.'
                : 'Web 1.0 was characterized as a "read-only" web, where content was created by a small number of developers for a large number of users. Pages were static, with little or no interactivity, and the focus was on information distribution.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className={getSmallCardClass()}>
              <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('technicalFeatures')}
              </h3>
              <div className="space-y-4">
                {characteristics.map((char, index) => (
                  <div key={index} className={`border-l-4 pl-4 ${
                    theme === 'light' ? 'border-blue-400' : 'border-cyan-400'
                  }`}>
                    <h4 className={`font-semibold ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {char.title[language]}
                    </h4>
                    <p className={`text-sm ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {char.description[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={getSmallCardClass()}>
              <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('dominantTechnologies')}
              </h3>
              <div className="space-y-3">
                {technologies[language].map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      theme === 'light' ? 'bg-blue-400' : 'bg-cyan-400'
                    }`}></div>
                    <span className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={getSmallCardClass() + ' mb-8'}>
            <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('typicalExamples')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {examples[language].map((example, index) => (
                <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${
                  theme === 'light' ? 'bg-blue-50' : 'bg-slate-700/50'
                }`}>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    theme === 'light' ? 'bg-blue-400' : 'bg-cyan-400'
                  }`}></div>
                  <span className={`text-sm ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>{example}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={getPositiveCardClass()}>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'light' ? 'text-green-700' : 'text-green-400'
              }`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('positivePoints')}
              </h3>
              <ul className="space-y-2 text-sm">
                {positivePoints[language].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className={`mt-1 ${theme === 'light' ? 'text-green-500' : 'text-green-400'}`}>✓</span>
                    <span className={theme === 'light' ? 'text-green-800' : 'text-green-200'} style={{ fontFamily: 'Montserrat, sans-serif' }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={getNegativeCardClass()}>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'light' ? 'text-red-700' : 'text-red-400'
              }`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('limitations')}
              </h3>
              <ul className="space-y-2 text-sm">
                {limitations[language].map((limitation, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className={`mt-1 ${theme === 'light' ? 'text-red-500' : 'text-red-400'}`}>✗</span>
                    <span className={theme === 'light' ? 'text-red-800' : 'text-red-200'} style={{ fontFamily: 'Montserrat, sans-serif' }}>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}