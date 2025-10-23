import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';

interface HomePageProps {
  onSectionChange: (section: string) => void;
  theme: 'light' | 'dark';
}

export function HomePage({ onSectionChange, theme }: HomePageProps) {
  const { t } = useLanguage();

  const getBackgroundClass = () => {
    return theme === 'light' 
      ? 'min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'
      : 'min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900';
  };

  const getTextColor = (type: string) => {
    switch(type) {
      case 'primary':
        return theme === 'light' ? 'text-gray-800' : 'text-slate-300';
      case 'secondary':
        return theme === 'light' ? 'text-gray-700' : 'text-slate-200';
      case 'accent':
        return theme === 'light' ? 'text-blue-600' : 'text-cyan-400';
      default:
        return theme === 'light' ? 'text-gray-800' : 'text-slate-300';
    }
  };

  const getCardClass = (webType: string) => {
    const baseClass = 'p-6 rounded-lg border transition-all duration-300 hover:scale-105';
    
    if (theme === 'light') {
      switch(webType) {
        case 'web1':
          return `${baseClass} bg-gradient-to-br from-gray-100 to-blue-100 border-gray-300 hover:border-gray-400 shadow-lg`;
        case 'web2':
          return `${baseClass} bg-gradient-to-br from-orange-100 to-green-100 border-orange-300 hover:border-orange-400 shadow-lg`;
        case 'web3':
          return `${baseClass} bg-gradient-to-br from-purple-100 to-cyan-100 border-purple-300 hover:border-purple-400 shadow-lg`;
        default:
          return `${baseClass} bg-white border-gray-200 shadow-lg`;
      }
    } else {
      switch(webType) {
        case 'web1':
          return `${baseClass} bg-gradient-to-br from-slate-800 to-blue-900 border-slate-600 hover:border-slate-400`;
        case 'web2':
          return `${baseClass} bg-gradient-to-br from-orange-900 to-green-900 border-orange-600 hover:border-orange-400`;
        case 'web3':
          return `${baseClass} bg-gradient-to-br from-purple-900 to-cyan-900 border-purple-600 hover:border-purple-400`;
        default:
          return `${baseClass} bg-slate-800 border-slate-600`;
      }
    }
  };

  const getButtonClass = (webType: string) => {
    const baseClass = 'w-full px-4 py-2 rounded-md transition-all duration-300 shadow-lg';
    
    if (theme === 'light') {
      switch(webType) {
        case 'web1':
          return `${baseClass} bg-gradient-to-r from-gray-600 to-blue-600 hover:from-gray-500 hover:to-blue-500 text-white`;
        case 'web2':
          return `${baseClass} bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-500 hover:to-green-500 text-white`;
        case 'web3':
          return `${baseClass} bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white`;
        default:
          return `${baseClass} bg-blue-600 hover:bg-blue-500 text-white`;
      }
    } else {
      switch(webType) {
        case 'web1':
          return `${baseClass} bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-500 hover:to-blue-500 text-white`;
        case 'web2':
          return `${baseClass} bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-500 hover:to-green-500 text-white`;
        case 'web3':
          return `${baseClass} bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white`;
        default:
          return `${baseClass} bg-cyan-600 hover:bg-cyan-500 text-white`;
      }
    }
  };

  const getSectionClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-r from-blue-100/80 to-cyan-100/80 p-8 rounded-lg border border-blue-200/50 shadow-xl backdrop-blur-sm'
      : 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-8 rounded-lg border border-cyan-400/50 shadow-2xl backdrop-blur-sm';
  };

  return (
    <div className={getBackgroundClass()} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className={theme === 'light' 
              ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'
            }>
              {t('projectName')}
            </span>
          </h1>
          <h2 className={`text-xl md:text-2xl mb-8 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('projectSlogan')}
          </h2>
          
          <div className="relative mb-8">
            <div className={theme === 'light' 
              ? 'absolute inset-0 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-lg blur-xl'
              : 'absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-xl'
            }></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1550346607-59e01007432d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMHdpZGUlMjB3ZWIlMjBpbnRlcm5ldCUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzU2MjA5MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Conexões da internet global"
              className={`relative w-full h-64 md:h-96 object-cover rounded-lg shadow-2xl border ${
                theme === 'light' ? 'border-blue-200/50' : 'border-cyan-500/30'
              }`}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className={`text-lg text-center mb-12 leading-relaxed ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('homeDescription')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Web 1.0 Card */}
            <div className={getCardClass('web1')}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg ${
                theme === 'light' 
                  ? 'bg-gradient-to-br from-gray-500 to-blue-600'
                  : 'bg-gradient-to-br from-slate-500 to-blue-600'
              }`}>
                <span className="text-white font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>1.0</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-gray-800' : 'text-slate-200'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('web1')}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-slate-400'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('web1Description')}
              </p>
              <button
                onClick={() => onSectionChange('web1')}
                className={getButtonClass('web1')}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {t('exploreWeb1')}
              </button>
            </div>

            {/* Web 2.0 Card */}
            <div className={getCardClass('web2')}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg ${
                theme === 'light' 
                  ? 'bg-gradient-to-br from-orange-500 to-green-500'
                  : 'bg-gradient-to-br from-orange-500 to-green-500'
              }`}>
                <span className="text-white font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>2.0</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-orange-800' : 'text-orange-200'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('web2')}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${theme === 'light' ? 'text-orange-700' : 'text-orange-300'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('web2Description')}
              </p>
              <button
                onClick={() => onSectionChange('web2')}
                className={getButtonClass('web2')}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {t('exploreWeb2')}
              </button>
            </div>

            {/* Web 3.0 Card */}
            <div className={getCardClass('web3')}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg ${
                theme === 'light' 
                  ? 'bg-gradient-to-br from-purple-500 to-cyan-400'
                  : 'bg-gradient-to-br from-purple-500 to-cyan-400'
              }`}>
                <span className="text-white font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>3.0</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-purple-800' : 'text-purple-200'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('web3')}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${theme === 'light' ? 'text-purple-700' : 'text-purple-300'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('web3Description')}
              </p>
              <button
                onClick={() => onSectionChange('web3')}
                className={getButtonClass('web3')}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {t('exploreWeb3')}
              </button>
            </div>
          </div>

          {/* Jornada da Web Section */}
          <div className={getSectionClass()} style={{ marginBottom: '2rem' }}>
            <h3 className={`text-2xl font-semibold mb-6 text-center ${theme === 'light' ? 'text-blue-700' : 'text-cyan-300'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('webJourney')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => onSectionChange('what-is-www')}
                className={`p-4 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <h4 className="font-semibold mb-2">{t('whatIsWWWButton')}</h4>
                <p className="text-sm opacity-90">{t('wwwFoundations')}</p>
              </button>
              <button
                onClick={() => onSectionChange('history')}
                className={`p-4 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <h4 className="font-semibold mb-2">{t('webHistoryButton')}</h4>
                <p className="text-sm opacity-90">{t('webOriginEvolution')}</p>
              </button>
            </div>
          </div>

          {/* Quiz Section */}
          <div className={`${getSectionClass()} mb-8`} style={{
            background: theme === 'light' 
              ? 'linear-gradient(to right, rgb(147 51 234 / 0.1), rgb(236 72 153 / 0.1))'
              : 'linear-gradient(to right, rgb(147 51 234 / 0.5), rgb(236 72 153 / 0.5))'
          }}>
            <h3 className={`text-2xl font-semibold mb-4 text-center ${theme === 'light' ? 'text-purple-700' : 'text-purple-300'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('quizTitle')}
            </h3>
            <p className={`text-center mb-6 ${theme === 'light' ? 'text-purple-600' : 'text-purple-200'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('quizDescription')}
            </p>
            <div className="text-center">
              <button
                onClick={() => onSectionChange('quiz')}
                className={`px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {t('startQuiz')}
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className={`text-xl font-semibold mb-4 ${getTextColor('secondary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('startLearning')}
            </h3>
            <p className={`mb-6 ${theme === 'light' ? 'text-gray-600' : 'text-slate-400'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('choosePath')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onSectionChange('history')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {t('startHistory')}
              </button>
              <button
                onClick={() => onSectionChange('web1')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-slate-500 to-blue-500 hover:from-slate-400 hover:to-blue-400 text-white'
                    : 'bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-500 hover:to-blue-500 text-white'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {t('goToWeb1')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}