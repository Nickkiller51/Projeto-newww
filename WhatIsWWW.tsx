import { useLanguage } from './LanguageContext';

interface WhatIsWWWProps {
  theme: 'light' | 'dark';
}

export function WhatIsWWW({ theme }: WhatIsWWWProps) {
  const { t } = useLanguage();

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

  return (
    <div className={getBackgroundClass()} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <span className={theme === 'light' 
            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
          }>
            {t('whatIsWWWTitle')}
          </span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className={getCardClass()}>
            <h2 className={`text-2xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('definition')}
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('wwwDefinition')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className={getSmallCardClass()}>
              <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('mainComponents')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-blue-500' : 'bg-cyan-400'
                  }`}></div>
                  <div className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <strong className={getTextColor('accent-alt')}>HTML:</strong> {t('htmlComponent')}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-blue-500' : 'bg-cyan-400'
                  }`}></div>
                  <div className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <strong className={getTextColor('accent-alt')}>HTTP:</strong> {t('httpComponent')}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-blue-500' : 'bg-cyan-400'
                  }`}></div>
                  <div className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <strong className={getTextColor('accent-alt')}>URLs:</strong> {t('urlsComponent')}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-blue-500' : 'bg-cyan-400'
                  }`}></div>
                  <div className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <strong className={getTextColor('accent-alt')}>{t('browsersComponent').split(':')[0]}:</strong> {t('browsersComponent')}
                  </div>
                </li>
              </ul>
            </div>

            <div className={getSmallCardClass()}>
              <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('characteristics')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-cyan-500' : 'bg-blue-400'
                  }`}></div>
                  <div className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <strong className={getTextColor('accent-alt')}>Universal:</strong> {t('universalCharacteristic')}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-cyan-500' : 'bg-blue-400'
                  }`}></div>
                  <div className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <strong className={getTextColor('accent-alt')}>Hipertextual:</strong> {t('hypertextualCharacteristic')}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-cyan-500' : 'bg-blue-400'
                  }`}></div>
                  <div className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <strong className={getTextColor('accent-alt')}>Descentralizada:</strong> {t('decentralizedCharacteristic')}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-cyan-500' : 'bg-blue-400'
                  }`}></div>
                  <div className={getTextColor('primary')} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <strong className={getTextColor('accent-alt')}>Extensível:</strong> {t('extensibleCharacteristic')}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={getSectionClass()}>
            <h3 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('societyImpact')}
            </h3>
            <p className={`leading-relaxed ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('societyImpactText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}