import { Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface NavigationProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

export function Navigation({ onSectionChange, currentSection, theme, onThemeChange }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();
  
  const sections = [
    { id: 'home', label: t('home') },
    { id: 'what-is-www', label: t('whatIsWww') },
    { id: 'history', label: t('history') },
    { id: 'web1', label: t('web1') },
    { id: 'web2', label: t('web2') },
    { id: 'web3', label: t('web3') },
    { id: 'quiz', label: t('quiz') }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const toggleTheme = () => {
    onThemeChange(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={`${theme === 'light' 
      ? 'bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 border-b border-blue-200/50' 
      : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-cyan-500/20'
    } p-4 sticky top-0 z-50 backdrop-blur-sm`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <button
            onClick={() => onSectionChange('home')}
            className={`text-lg font-semibold transition-all duration-300 ${
              theme === 'light'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-cyan-500'
                : 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-300'
            }`}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('projectName')}
          </button>
          
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            {/* Navigation Sections */}
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`px-3 py-2 rounded-md transition-all duration-300 text-sm border ${
                    currentSection === section.id
                      ? theme === 'light'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-400 shadow-lg shadow-blue-500/25'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/25'
                      : theme === 'light'
                      ? 'text-blue-700 border-gray-300 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50'
                      : 'text-cyan-200 border-slate-600 hover:border-cyan-400 hover:text-cyan-100 hover:bg-slate-800/50'
                  }`}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {section.label}
                </button>
              ))}
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-2 ml-2 border-l border-opacity-30 pl-2" style={{
              borderColor: theme === 'light' ? 'rgb(59 130 246 / 0.3)' : 'rgb(6 182 212 / 0.3)'
            }}>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-all duration-300 ${
                  theme === 'light'
                    ? 'text-blue-600 hover:bg-blue-100 hover:text-blue-700'
                    : 'text-cyan-400 hover:bg-slate-800 hover:text-cyan-300'
                }`}
                title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-md transition-all duration-300 flex items-center gap-1 ${
                  theme === 'light'
                    ? 'text-blue-600 hover:bg-blue-100 hover:text-blue-700'
                    : 'text-cyan-400 hover:bg-slate-800 hover:text-cyan-300'
                }`}
                title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              >
                <Globe size={16} />
                <span className="text-xs font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language.toUpperCase()}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}