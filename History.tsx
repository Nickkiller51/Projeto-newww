import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';

interface HistoryProps {
  theme: 'light' | 'dark';
}

export function History({ theme }: HistoryProps) {
  const { t, language } = useLanguage();
  
  const timeline = [
    {
      year: '1989',
      title: {
        pt: 'A Proposta Original',
        en: 'The Original Proposal'
      },
      description: {
        pt: 'Tim Berners-Lee, trabalhando no CERN, propõe um sistema de gestão de informações baseado em hipertexto.',
        en: 'Tim Berners-Lee, working at CERN, proposes an information management system based on hypertext.'
      },
      details: {
        pt: 'O documento "Information Management: A Proposal" estabeleceu as bases conceituais da WWW.',
        en: 'The document "Information Management: A Proposal" established the conceptual foundations of the WWW.'
      }
    },
    {
      year: '1990',
      title: {
        pt: 'Primeira Página Web',
        en: 'First Web Page'
      },
      description: {
        pt: 'Criação do primeiro navegador (WorldWideWeb) e da primeira página web.',
        en: 'Creation of the first browser (WorldWideWeb) and the first web page.'
      },
      details: {
        pt: 'A primeira página explicava o que era a World Wide Web e como usar navegadores.',
        en: 'The first page explained what the World Wide Web was and how to use browsers.'
      }
    },
    {
      year: '1991',
      title: {
        pt: 'Web Torna-se Pública',
        en: 'Web Goes Public'
      },
      description: {
        pt: 'A WWW é disponibilizada publicamente, marcando o início da era digital.',
        en: 'The WWW is made publicly available, marking the beginning of the digital era.'
      },
      details: {
        pt: 'O primeiro servidor web fora do CERN foi instalado na Universidade de Stanford.',
        en: 'The first web server outside CERN was installed at Stanford University.'
      }
    },
    {
      year: '1993',
      title: {
        pt: 'Navegador Mosaic',
        en: 'Mosaic Browser'
      },
      description: {
        pt: 'Lançamento do Mosaic, primeiro navegador gráfico popular.',
        en: 'Launch of Mosaic, the first popular graphical browser.'
      },
      details: {
        pt: 'O Mosaic popularizou a web ao adicionar suporte para imagens inline.',
        en: 'Mosaic popularized the web by adding support for inline images.'
      }
    },
    {
      year: '1994',
      title: {
        pt: 'World Wide Web Consortium',
        en: 'World Wide Web Consortium'
      },
      description: {
        pt: 'Criação do W3C para padronizar tecnologias web.',
        en: 'Creation of W3C to standardize web technologies.'
      },
      details: {
        pt: 'Tim Berners-Lee funda o W3C no MIT para desenvolver padrões web.',
        en: 'Tim Berners-Lee founds the W3C at MIT to develop web standards.'
      }
    }
  ];

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

  const getTimelineCardClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg border border-blue-200/50 shadow-lg'
      : 'bg-gradient-to-br from-slate-800 to-blue-900 p-6 rounded-lg border border-cyan-500/30 shadow-xl';
  };

  const getSectionClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-r from-blue-100/80 to-cyan-100/80 p-8 rounded-lg border border-blue-200/50 shadow-xl backdrop-blur-sm'
      : 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-8 rounded-lg border border-cyan-400/50 shadow-2xl backdrop-blur-sm';
  };

  return (
    <div className={getBackgroundClass()} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <span className={theme === 'light' 
            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
          }>
            {t('historyTitle')}
          </span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative">
              <div className={`absolute inset-0 rounded-lg blur-xl ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-blue-200/30 to-cyan-200/30'
                  : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
              }`}></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651615721396-248623263391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29tcHV0ZXIlMjBuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTYyMDkyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Computadores vintage representando o início da era digital"
                className={`relative w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl border mb-8 ${
                  theme === 'light' ? 'border-blue-200/50' : 'border-cyan-500/30'
                }`}
              />
            </div>
          </div>

          <div className={getCardClass()}>
            <h2 className={`text-2xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('timBernersLee')}
            </h2>
            <p className={`leading-relaxed mb-4 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'pt' 
                ? 'Em 1989, Tim Berners-Lee, um cientista da computação trabalhando no CERN (Organização Europeia para a Pesquisa Nuclear) na Suíça, teve uma visão revolucionária. Ele imaginou um sistema onde informações poderiam ser facilmente compartilhadas entre pesquisadores ao redor do mundo.'
                : 'In 1989, Tim Berners-Lee, a computer scientist working at CERN (European Organization for Nuclear Research) in Switzerland, had a revolutionary vision. He imagined a system where information could be easily shared between researchers around the world.'
              }
            </p>
            <p className={`leading-relaxed ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'pt'
                ? 'Sua proposta era simples, mas poderosa: criar uma "teia" de documentos interconectados que pudesse ser acessada universalmente. Esta ideia simples mudaria o mundo para sempre.'
                : 'His proposal was simple but powerful: create a "web" of interconnected documents that could be universally accessed. This simple idea would change the world forever.'
              }
            </p>
          </div>

          <h2 className={`text-2xl font-semibold mb-8 text-center ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('timeline')}
          </h2>
          
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 ${
                    theme === 'light' 
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 border-blue-400'
                      : 'bg-gradient-to-br from-cyan-500 to-blue-500 border-cyan-400'
                  }`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {event.year}
                  </div>
                </div>
                <div className={`flex-1 ${getTimelineCardClass()}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {event.title[language]}
                  </h3>
                  <p className={`mb-3 ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {event.description[language]}
                  </p>
                  <p className={`text-sm leading-relaxed ${getTextColor('muted')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {event.details[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 ${getSectionClass()}`}>
            <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('legacy')}
            </h3>
            <p className={`leading-relaxed ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'pt'
                ? 'A decisão de Tim Berners-Lee de tornar a WWW gratuita e aberta foi fundamental para seu sucesso global. Ao invés de patentear sua invenção, ele escolheu compartilhá-la com o mundo, permitindo que bilhões de pessoas se beneficiassem de sua criação. Esta decisão altruísta estabeleceu as bases para a sociedade digital moderna e continua influenciando como pensamos sobre tecnologia e compartilhamento de conhecimento.'
                : 'Tim Berners-Lee\'s decision to make the WWW free and open was fundamental to its global success. Instead of patenting his invention, he chose to share it with the world, allowing billions of people to benefit from his creation. This altruistic decision established the foundations for modern digital society and continues to influence how we think about technology and knowledge sharing.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}