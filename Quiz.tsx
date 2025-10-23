import { useState } from 'react';
import { useLanguage } from './LanguageContext';

interface Question {
  id: number;
  question: {
    pt: string;
    en: string;
  };
  options: {
    pt: string[];
    en: string[];
  };
  correct: number;
  explanation: {
    pt: string;
    en: string;
  };
}

const questions: Question[] = [
  {
    id: 1,
    question: {
      pt: 'Em que ano Tim Berners-Lee criou a primeira proposta da World Wide Web?',
      en: 'In what year did Tim Berners-Lee create the first World Wide Web proposal?'
    },
    options: {
      pt: ['1987', '1989', '1991', '1993'],
      en: ['1987', '1989', '1991', '1993']
    },
    correct: 1,
    explanation: {
      pt: 'Tim Berners-Lee criou a proposta "Information Management: A Proposal" em 1989 no CERN.',
      en: 'Tim Berners-Lee created the "Information Management: A Proposal" in 1989 at CERN.'
    }
  },
  {
    id: 2,
    question: {
      pt: 'Qual era a principal característica da Web 1.0?',
      en: 'What was the main characteristic of Web 1.0?'
    },
    options: {
      pt: ['Interatividade social', 'Páginas estáticas somente leitura', 'Blockchain', 'Realidade virtual'],
      en: ['Social interactivity', 'Static read-only pages', 'Blockchain', 'Virtual reality']
    },
    correct: 1,
    explanation: {
      pt: 'A Web 1.0 era caracterizada por páginas estáticas onde os usuários apenas consumiam informações.',
      en: 'Web 1.0 was characterized by static pages where users only consumed information.'
    }
  },
  {
    id: 3,
    question: {
      pt: 'Qual tecnologia NÃO era comum na Web 2.0?',
      en: 'Which technology was NOT common in Web 2.0?'
    },
    options: {
      pt: ['AJAX', 'Redes sociais', 'NFTs', 'Blogs'],
      en: ['AJAX', 'Social networks', 'NFTs', 'Blogs']
    },
    correct: 2,
    explanation: {
      pt: 'NFTs são uma tecnologia da Web 3.0, baseada em blockchain. A Web 2.0 focava em interatividade social.',
      en: 'NFTs are a Web 3.0 technology, based on blockchain. Web 2.0 focused on social interactivity.'
    }
  },
  {
    id: 4,
    question: {
      pt: 'O que caracteriza principalmente a Web 3.0?',
      en: 'What mainly characterizes Web 3.0?'
    },
    options: {
      pt: ['Páginas coloridas', 'Descentralização e blockchain', 'Apenas texto', 'Vídeos em alta qualidade'],
      en: ['Colorful pages', 'Decentralization and blockchain', 'Text only', 'High quality videos']
    },
    correct: 1,
    explanation: {
      pt: 'A Web 3.0 é caracterizada pela descentralização, uso de blockchain e propriedade digital verdadeira.',
      en: 'Web 3.0 is characterized by decentralization, blockchain usage, and true digital ownership.'
    }
  },
  {
    id: 5,
    question: {
      pt: 'Qual navegador popularizou a web ao adicionar suporte para imagens?',
      en: 'Which browser popularized the web by adding image support?'
    },
    options: {
      pt: ['Internet Explorer', 'Netscape', 'Mosaic', 'Safari'],
      en: ['Internet Explorer', 'Netscape', 'Mosaic', 'Safari']
    },
    correct: 2,
    explanation: {
      pt: 'O navegador Mosaic, lançado em 1993, foi o primeiro navegador gráfico popular com suporte para imagens.',
      en: 'The Mosaic browser, launched in 1993, was the first popular graphical browser with image support.'
    }
  },
  {
    id: 6,
    question: {
      pt: 'Qual é um exemplo de DApp (Aplicação Descentralizada)?',
      en: 'What is an example of a DApp (Decentralized Application)?'
    },
    options: {
      pt: ['Facebook', 'Uniswap', 'Google', 'YouTube'],
      en: ['Facebook', 'Uniswap', 'Google', 'YouTube']
    },
    correct: 1,
    explanation: {
      pt: 'Uniswap é um exemplo de DApp, uma exchange descentralizada que roda na blockchain Ethereum.',
      en: 'Uniswap is an example of a DApp, a decentralized exchange that runs on the Ethereum blockchain.'
    }
  }
];

interface QuizProps {
  theme: 'light' | 'dark';
}

export function Quiz({ theme }: QuizProps) {
  const { language, t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setUserAnswers([...userAnswers, answerIndex]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
      return language === 'pt' 
        ? 'Excelente! Você é um expert em história da web!' 
        : 'Excellent! You are a web history expert!';
    } else if (percentage >= 60) {
      return language === 'pt' 
        ? 'Muito bom! Você tem um bom conhecimento sobre a web.' 
        : 'Very good! You have good knowledge about the web.';
    } else if (percentage >= 40) {
      return language === 'pt' 
        ? 'Regular. Continue estudando para aprender mais!' 
        : 'Fair. Keep studying to learn more!';
    } else {
      return language === 'pt' 
        ? 'Precisa melhorar. Que tal revisar o conteúdo?' 
        : 'Needs improvement. How about reviewing the content?';
    }
  };

  const getBackgroundClass = () => {
    return theme === 'light' 
      ? 'min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'
      : 'min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900';
  };

  const getCardClass = () => {
    return theme === 'light' 
      ? 'bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg border border-blue-200/50 shadow-xl'
      : 'bg-gradient-to-br from-slate-800 to-blue-900 p-8 rounded-lg border border-cyan-500/30 shadow-2xl';
  };

  const getTextColor = (type: string) => {
    switch(type) {
      case 'primary':
        return theme === 'light' ? 'text-gray-800' : 'text-slate-200';
      case 'secondary':
        return theme === 'light' ? 'text-gray-700' : 'text-slate-300';
      case 'accent':
        return theme === 'light' ? 'text-blue-600' : 'text-cyan-300';
      default:
        return theme === 'light' ? 'text-gray-800' : 'text-slate-200';
    }
  };

  const getButtonClass = (isSelected: boolean = false, isCorrect: boolean = false, isWrong: boolean = false) => {
    const baseClass = 'w-full p-4 rounded-lg border-2 transition-all duration-300 text-left';
    
    if (selectedAnswer === null) {
      return theme === 'light' 
        ? `${baseClass} border-gray-300 hover:border-blue-400 hover:bg-blue-50`
        : `${baseClass} border-slate-600 hover:border-cyan-400 hover:bg-slate-700/50`;
    }
    
    if (isCorrect) {
      return `${baseClass} border-green-500 bg-green-500/20`;
    }
    
    if (isWrong) {
      return `${baseClass} border-red-500 bg-red-500/20`;
    }
    
    return theme === 'light' 
      ? `${baseClass} border-gray-300 bg-gray-100/50`
      : `${baseClass} border-slate-600 bg-slate-800/50`;
  };

  if (quizCompleted) {
    return (
      <div className={getBackgroundClass()} style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className={getCardClass() + ' text-center'}>
              <h1 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className={theme === 'light' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
                }>
                  {t('quizTitle')}
                </span>
              </h1>
              
              <div className="mb-8">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${
                  theme === 'light' 
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                    : 'bg-gradient-to-br from-cyan-500 to-blue-500'
                }`}>
                  <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {score}/{questions.length}
                  </span>
                </div>
                <h2 className={`text-xl font-semibold mb-4 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('yourScore')}: {Math.round((score / questions.length) * 100)}%
                </h2>
                <p className={`mb-6 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {getScoreMessage()}
                </p>
              </div>

              <button
                onClick={resetQuiz}
                className={`px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {t('restartQuiz')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className={getBackgroundClass()} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className={getCardClass()}>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className={theme === 'light' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
                }>
                  {t('quizTitle')}
                </span>
              </h1>
              <div className={`px-4 py-2 rounded-lg ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  : 'bg-gradient-to-r from-cyan-600 to-blue-600'
              }`}>
                <span className="text-white font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {currentQuestion + 1}/{questions.length}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className={`text-lg font-semibold mb-6 ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('question')} {currentQuestion + 1}: {question.question[language]}
              </h2>

              <div className="space-y-3">
                {question.options[language].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={getButtonClass(
                      selectedAnswer === index,
                      index === question.correct,
                      selectedAnswer === index && index !== question.correct
                    )}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <span className={getTextColor('primary')}>{option}</span>
                  </button>
                ))}
              </div>
            </div>

            {showExplanation && (
              <div className={`mb-6 p-4 rounded-lg border ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200'
                  : 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-cyan-400/50'
              }`}>
                <p className={`text-sm font-semibold mb-2 ${getTextColor('accent')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {selectedAnswer === question.correct ? t('correct') : t('incorrect')}
                </p>
                <p className={`text-sm ${getTextColor('primary')}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {question.explanation[language]}
                </p>
              </div>
            )}

            {showExplanation && (
              <div className="text-center">
                <button
                  onClick={handleNextQuestion}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 ${
                    theme === 'light'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white'
                  }`}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {currentQuestion === questions.length - 1 ? t('finishQuiz') : t('nextQuestion')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}