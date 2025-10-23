import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';

interface Web3Props {
  theme: 'light' | 'dark';
}

export function Web3({ theme }: Web3Props) {
  const { t, language } = useLanguage();

  const concepts = [
    {
      title: {
        pt: 'Descentralização',
        en: 'Decentralization'
      },
      description: {
        pt: 'Eliminação de intermediários através de blockchain e protocolos peer-to-peer',
        en: 'Elimination of intermediaries through blockchain and peer-to-peer protocols'
      }
    },
    {
      title: {
        pt: 'Propriedade Digital',
        en: 'Digital Ownership'
      },
      description: {
        pt: 'NFTs e tokens permitem verdadeira propriedade de ativos digitais',
        en: 'NFTs and tokens enable true ownership of digital assets'
      }
    },
    {
      title: {
        pt: 'Inteligência Artificial',
        en: 'Artificial Intelligence'
      },
      description: {
        pt: 'Web semântica com IA para melhor compreensão e personalização',
        en: 'Semantic web with AI for better understanding and personalization'
      }
    },
    {
      title: {
        pt: 'Interoperabilidade',
        en: 'Interoperability'
      },
      description: {
        pt: 'Protocolos abertos permitindo comunicação entre diferentes plataformas',
        en: 'Open protocols allowing communication between different platforms'
      }
    }
  ];

  const technologies = [
    { 
      name: 'Blockchain', 
      description: {
        pt: 'Base para descentralização e confiança',
        en: 'Foundation for decentralization and trust'
      }
    },
    { 
      name: {
        pt: 'Criptomoedas',
        en: 'Cryptocurrencies'
      }, 
      description: {
        pt: 'Sistemas monetários descentralizados',
        en: 'Decentralized monetary systems'
      }
    },
    { 
      name: 'NFTs', 
      description: {
        pt: 'Tokens não fungíveis para propriedade digital',
        en: 'Non-fungible tokens for digital ownership'
      }
    },
    { 
      name: 'DApps', 
      description: {
        pt: 'Aplicações descentralizadas',
        en: 'Decentralized applications'
      }
    },
    { 
      name: {
        pt: 'Smart Contracts',
        en: 'Smart Contracts'
      }, 
      description: {
        pt: 'Contratos auto-executáveis',
        en: 'Self-executing contracts'
      }
    },
    { 
      name: 'IPFS', 
      description: {
        pt: 'Sistema de arquivos distribuído',
        en: 'Distributed file system'
      }
    }
  ];

  const web3Features = [
    {
      title: {
        pt: 'Sem permissão:',
        en: 'Permissionless:'
      },
      desc: {
        pt: 'Qualquer um pode participar sem aprovação',
        en: 'Anyone can participate without approval'
      }
    },
    {
      title: {
        pt: 'Resistente à censura:',
        en: 'Censorship resistant:'
      },
      desc: {
        pt: 'Conteúdo distribuído globalmente',
        en: 'Globally distributed content'
      }
    },
    {
      title: {
        pt: 'Propriedade de dados:',
        en: 'Data ownership:'
      },
      desc: {
        pt: 'Usuários controlam suas informações',
        en: 'Users control their information'
      }
    },
    {
      title: {
        pt: 'Pagamentos nativos:',
        en: 'Native payments:'
      },
      desc: {
        pt: 'Criptomoedas integradas',
        en: 'Integrated cryptocurrencies'
      }
    }
  ];

  const useCases = [
    {
      title: 'DeFi:',
      desc: {
        pt: 'Finanças descentralizadas sem bancos',
        en: 'Decentralized finance without banks'
      }
    },
    {
      title: {
        pt: 'Metaverso:',
        en: 'Metaverse:'
      },
      desc: {
        pt: 'Mundos virtuais interconectados',
        en: 'Interconnected virtual worlds'
      }
    },
    {
      title: 'DAOs:',
      desc: {
        pt: 'Organizações autônomas descentralizadas',
        en: 'Decentralized autonomous organizations'
      }
    },
    {
      title: 'GameFi:',
      desc: {
        pt: 'Jogos com economia real integrada',
        en: 'Games with integrated real economy'
      }
    }
  ];

  const opportunities = {
    pt: [
      'Democratização do acesso financeiro',
      'Criação de novos modelos econômicos',
      'Maior privacidade e controle de dados',
      'Inovação em governança digital'
    ],
    en: [
      'Democratization of financial access',
      'Creation of new economic models',
      'Greater privacy and data control',
      'Innovation in digital governance'
    ]
  };

  const challenges = {
    pt: [
      'Complexidade técnica para usuários',
      'Questões de escalabilidade',
      'Regulamentação em desenvolvimento',
      'Impacto ambiental do blockchain'
    ],
    en: [
      'Technical complexity for users',
      'Scalability issues',
      'Developing regulation',
      'Environmental impact of blockchain'
    ]
  };

  const getBackgroundClass = () => {
    return theme === 'light' 
      ? 'min-h-screen bg-gradient-to-br from-purple-50 to-cyan-50'
      : 'min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-cyan-950';
  };

  const getTextColor = (type: string) => {
    switch(type) {
      case 'primary':
        return theme === 'light' ? 'text-purple-800' : 'text-purple-200';
      case 'secondary':
        return theme === 'light' ? 'text-cyan-700' : 'text-cyan-300';
      case 'accent':
        return theme === 'light' ? 'text-purple-600' : 'text-purple-400';
      case 'accent-alt':
        return theme === 'light' ? 'text-cyan-600' : 'text-cyan-400';
      case 'muted':
        return theme === 'light' ? 'text-gray-600' : 'text-slate-400';
      default:
        return theme === 'light' ? 'text-purple-800' : 'text-purple-200';
    }
  };

  const getCardClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-white to-purple-50 p-8 rounded-lg border border-purple-200/50 mb-8 shadow-xl'
      : 'bg-gradient-to-br from-purple-900 to-cyan-900 p-8 rounded-lg border border-purple-600/30 mb-8 shadow-2xl';
  };

  const getSmallCardClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-white to-purple-50 p-6 rounded-lg border border-purple-200/50 shadow-lg'
      : 'bg-gradient-to-br from-purple-900 to-cyan-900 p-6 rounded-lg border border-purple-600/30 shadow-xl';
  };

  const getIconBadgeClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/25'
      : 'bg-gradient-to-br from-purple-600 to-cyan-600 shadow-2xl shadow-purple-500/50';
  };

  const getSectionClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-r from-purple-100/80 to-cyan-100/80 p-8 rounded-lg border border-purple-200/50 shadow-xl backdrop-blur-sm'
      : 'bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-8 rounded-lg border border-purple-400/50 shadow-2xl backdrop-blur-sm';
  };

  return (
    <div className={getBackgroundClass()} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <span className={theme === 'light' 
            ? 'bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'
          }>
            {t('web3Title')}
          </span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-lg text-white text-3xl font-bold mb-4 border-2 ${getIconBadgeClass()} ${
              theme === 'light' ? 'border-purple-400' : 'border-purple-500'
            }`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              3.0
            </div>
            <p className={`text-xl ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>2014 - {language === 'pt' ? 'Presente' : 'Present'}</p>
          </div>

          <div className="text-center mb-12">
            <div className="relative">
              <div className={`absolute inset-0 rounded-lg blur-xl opacity-50 ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-purple-200 to-cyan-200'
                  : 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20'
              }`}></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660836814969-9ad54eef3c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwd2ViMyUyMGNyeXB0b3xlbnwxfHx8fDE3NTYyMDkyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Blockchain e tecnologias web3"
                className={`relative w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl border-2 ${
                  theme === 'light' ? 'border-purple-300' : 'border-purple-500/50'
                }`}
              />
            </div>
          </div>

          <div className={getCardClass()}>
            <h2 className={`text-2xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('intelligentDecentralized')}
            </h2>
            <p className={`leading-relaxed mb-4 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'pt' 
                ? 'A Web 3.0 representa a próxima evolução da internet, combinando descentralização, inteligência artificial e propriedade digital verdadeira. Esta nova era promete devolver o controle dos dados aos usuários, eliminar intermediários desnecessários e criar uma internet mais transparente e democrática.'
                : 'Web 3.0 represents the next evolution of the internet, combining decentralization, artificial intelligence and true digital ownership. This new era promises to return data control to users, eliminate unnecessary intermediaries and create a more transparent and democratic internet.'
              }
            </p>
            <p className={`leading-relaxed ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'pt'
                ? 'Construída sobre tecnologias blockchain, a Web 3.0 permite que usuários possuam verdadeiramente seus dados, identidades digitais e ativos online, criando uma economia digital mais justa e aberta.'
                : 'Built on blockchain technologies, Web 3.0 allows users to truly own their data, digital identities and online assets, creating a more fair and open digital economy.'
              }
            </p>
          </div>

          <h2 className={`text-2xl font-semibold mb-6 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('fundamentalConcepts')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {concepts.map((concept, index) => (
              <div key={index} className={`${getSmallCardClass()} hover:shadow-2xl transition-all backdrop-blur-sm`}>
                <h3 className={`text-lg font-semibold mb-3 ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {concept.title[language]}
                </h3>
                <p className={`text-sm ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {concept.description[language]}
                </p>
              </div>
            ))}
          </div>

          <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('mainTechnologies')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {technologies.map((tech, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 hover:shadow-xl transition-all hover:scale-105 backdrop-blur-sm ${
                theme === 'light' 
                  ? 'bg-white border-purple-200'
                  : 'bg-purple-900/50 border-purple-500/50'
              }`}>
                <h4 className={`font-semibold ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {typeof tech.name === 'object' ? tech.name[language] : tech.name}
                </h4>
                <p className={`text-sm ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {tech.description[language]}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className={getSmallCardClass()}>
              <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('web3Features')}
              </h3>
              <ul className="space-y-3">
                {web3Features.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      theme === 'light' ? 'bg-purple-400' : 'bg-cyan-400'
                    }`}></div>
                    <div>
                      <strong className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.title[language]}
                      </strong>
                      <span className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {' '}{item.desc[language]}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={getSmallCardClass()}>
              <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('emergingUseCases')}
              </h3>
              <ul className="space-y-3">
                {useCases.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      theme === 'light' ? 'bg-cyan-500' : 'bg-purple-400'
                    }`}></div>
                    <div>
                      <strong className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {typeof item.title === 'object' ? item.title[language] : item.title}
                      </strong>
                      <span className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {' '}{item.desc[language]}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={getSectionClass()}>
            <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('challengesOpportunities')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className={`font-semibold mb-2 ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('opportunities')}
                </h4>
                <ul className={`text-sm space-y-1 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {opportunities[language].map((opportunity, index) => (
                    <li key={index}>• {opportunity}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={`font-semibold mb-2 ${getTextColor('accent-alt')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('challenges')}
                </h4>
                <ul className={`text-sm space-y-1 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {challenges[language].map((challenge, index) => (
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