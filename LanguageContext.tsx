import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { pt: 'Início', en: 'Home' },
  whatIsWww: { pt: 'O que é WWW', en: 'What is WWW' },
  history: { pt: 'História', en: 'History' },
  web1: { pt: 'Web 1.0', en: 'Web 1.0' },
  web2: { pt: 'Web 2.0', en: 'Web 2.0' },
  web3: { pt: 'Web 3.0', en: 'Web 3.0' },
  quiz: { pt: 'Quiz', en: 'Quiz' },
  aboutUs: { pt: 'Sobre Nós', en: 'About Us' },
  
  // Main Project
  projectName: { pt: 'NewwW', en: 'NewwW' },
  projectSlogan: { pt: 'O mundo conectado em um click', en: 'The world connected in one click' },
  
  // Home Page
  homeDescription: { 
    pt: 'Explore a fascinante jornada da World Wide Web, desde sua criação revolucionária até a evolução que transformou nossa sociedade. Descubra como a web evoluiu através de suas diferentes gerações e como continua moldando nosso futuro.',
    en: 'Explore the fascinating journey of the World Wide Web, from its revolutionary creation to the evolution that transformed our society. Discover how the web evolved through its different generations and how it continues to shape our future.'
  },
  
  // Web descriptions
  web1Description: {
    pt: 'A era da web estática, onde usuários apenas consumiam informações. Sites simples com HTML básico e navegação linear dos anos 90.',
    en: 'The era of static web, where users only consumed information. Simple sites with basic HTML and linear navigation from the 90s.'
  },
  web2Description: {
    pt: 'A revolução da interatividade. Redes sociais, blogs, wikis e colaboração online transformaram usuários em criadores de conteúdo.',
    en: 'The interactivity revolution. Social networks, blogs, wikis, and online collaboration transformed users into content creators.'
  },
  web3Description: {
    pt: 'A web descentralizada. Blockchain, criptomoedas, NFTs e propriedade digital redefinindo como interagimos online no futuro.',
    en: 'The decentralized web. Blockchain, cryptocurrencies, NFTs, and digital ownership redefining how we interact online in the future.'
  },
  
  // Buttons
  exploreWeb1: { pt: 'Explorar Web 1.0', en: 'Explore Web 1.0' },
  exploreWeb2: { pt: 'Explorar Web 2.0', en: 'Explore Web 2.0' },
  exploreWeb3: { pt: 'Explorar Web 3.0', en: 'Explore Web 3.0' },
  startHistory: { pt: 'Começar pela História', en: 'Start with History' },
  goToWeb1: { pt: 'Ir direto para Web 1.0', en: 'Go directly to Web 1.0' },
  webJourney: { pt: 'Jornada pela História da Web', en: 'Journey through Web History' },
  whatIsWWWButton: { pt: 'O que é a WWW?', en: 'What is WWW?' },
  wwwFoundations: { pt: 'Descubra os fundamentos da World Wide Web', en: 'Discover the fundamentals of the World Wide Web' },
  webHistoryButton: { pt: 'História da Web', en: 'Web History' },
  webOriginEvolution: { pt: 'Conheça a origem e evolução da internet', en: 'Learn about the origin and evolution of the internet' },
  startLearning: { pt: 'Comece sua jornada de aprendizado', en: 'Start your learning journey' },
  choosePath: { pt: 'Escolha por onde quer começar e mergulhe na fascinante história da web', en: 'Choose where you want to start and dive into the fascinating history of the web' },
  
  // Quiz
  quizTitle: { pt: 'Quiz: Eras da Web', en: 'Quiz: Web Eras' },
  quizDescription: { 
    pt: 'Teste seus conhecimentos sobre a evolução da World Wide Web! Responda às perguntas e descubra o quanto você sabe sobre as diferentes eras da internet.',
    en: 'Test your knowledge about the evolution of the World Wide Web! Answer the questions and discover how much you know about the different eras of the internet.'
  },
  startQuiz: { pt: 'Iniciar Quiz', en: 'Start Quiz' },
  question: { pt: 'Pergunta', en: 'Question' },
  nextQuestion: { pt: 'Próxima Pergunta', en: 'Next Question' },
  finishQuiz: { pt: 'Finalizar Quiz', en: 'Finish Quiz' },
  restartQuiz: { pt: 'Reiniciar Quiz', en: 'Restart Quiz' },
  yourScore: { pt: 'Sua Pontuação', en: 'Your Score' },
  correct: { pt: 'Correto!', en: 'Correct!' },
  incorrect: { pt: 'Incorreto!', en: 'Incorrect!' },
  
  // About Us
  ourMission: { pt: 'Nossa Missão', en: 'Our Mission' },
  whatWeOffer: { pt: 'O Que Oferecemos', en: 'What We Offer' },
  ourVision: { pt: 'Nossa Visão', en: 'Our Vision' },
  ourTeam: { pt: 'Nossa Equipe', en: 'Our Team' },
  technologiesUsed: { pt: 'Tecnologias Utilizadas', en: 'Technologies Used' },
  acknowledgments: { pt: 'Agradecimentos', en: 'Acknowledgments' },
  
  // What is WWW
  whatIsWWWTitle: { pt: 'O que é a World Wide Web?', en: 'What is the World Wide Web?' },
  definition: { pt: 'Definição', en: 'Definition' },
  wwwDefinition: {
    pt: 'A World Wide Web (WWW), comumente conhecida como "Web", é um sistema de informação que permite o acesso a documentos interconectados através da Internet. É uma rede de páginas web que contêm texto, imagens, vídeos e outros recursos digitais, todos conectados através de hyperlinks.',
    en: 'The World Wide Web (WWW), commonly known as the "Web", is an information system that allows access to interconnected documents through the Internet. It is a network of web pages containing text, images, videos and other digital resources, all connected through hyperlinks.'
  },
  mainComponents: { pt: 'Componentes Principais', en: 'Main Components' },
  htmlComponent: { pt: 'Linguagem de marcação para estruturar conteúdo', en: 'Markup language for structuring content' },
  httpComponent: { pt: 'Protocolo para transferência de dados', en: 'Protocol for data transfer' },
  urlsComponent: { pt: 'Endereços únicos para localizar recursos', en: 'Unique addresses to locate resources' },
  browsersComponent: { pt: 'Software para acessar e visualizar páginas', en: 'Software to access and view pages' },
  characteristics: { pt: 'Características', en: 'Characteristics' },
  universalCharacteristic: { pt: 'Acessível de qualquer dispositivo conectado', en: 'Accessible from any connected device' },
  hypertextualCharacteristic: { pt: 'Documentos interconectados por links', en: 'Documents interconnected by links' },
  decentralizedCharacteristic: { pt: 'Sem autoridade central controladora', en: 'No central controlling authority' },
  extensibleCharacteristic: { pt: 'Constantemente evoluindo com novas tecnologias', en: 'Constantly evolving with new technologies' },
  societyImpact: { pt: 'Impacto na Sociedade', en: 'Impact on Society' },
  societyImpactText: {
    pt: 'A World Wide Web revolucionou a forma como compartilhamos informações, nos comunicamos e fazemos negócios. Ela democratizou o acesso ao conhecimento, permitiu o surgimento de novas economias digitais e conectou pessoas ao redor do mundo de maneiras nunca antes imaginadas. Hoje, é impossível imaginar nossa sociedade sem a web - ela se tornou a espinha dorsal da era digital.',
    en: 'The World Wide Web revolutionized how we share information, communicate and do business. It democratized access to knowledge, enabled the emergence of new digital economies and connected people around the world in ways never before imagined. Today, it is impossible to imagine our society without the web - it has become the backbone of the digital age.'
  },
  
  // History
  historyTitle: { pt: 'História da World Wide Web', en: 'History of the World Wide Web' },
  timBernersLee: { pt: 'Tim Berners-Lee: O Inventor da Web', en: 'Tim Berners-Lee: The Web Inventor' },
  timeline: { pt: 'Linha do Tempo', en: 'Timeline' },
  legacy: { pt: 'O Legado', en: 'The Legacy' },
  
  // Web 1.0
  web1Title: { pt: 'Web 1.0: A Era da Informação', en: 'Web 1.0: The Information Era' },
  mainCharacteristics: { pt: 'Características Principais', en: 'Main Characteristics' },
  technicalFeatures: { pt: 'Características Técnicas', en: 'Technical Features' },
  dominantTechnologies: { pt: 'Tecnologias Dominantes', en: 'Dominant Technologies' },
  typicalExamples: { pt: 'Exemplos Típicos da Web 1.0', en: 'Typical Web 1.0 Examples' },
  positivePoints: { pt: 'Pontos Positivos', en: 'Positive Points' },
  limitations: { pt: 'Limitações', en: 'Limitations' },
  
  // Web 2.0
  web2Title: { pt: 'Web 2.0: A Revolução Social', en: 'Web 2.0: The Social Revolution' },
  participationEra: { pt: 'A Era da Participação', en: 'The Participation Era' },
  revolutionaryTechnologies: { pt: 'Tecnologias Revolucionárias', en: 'Revolutionary Technologies' },
  iconicPlatforms: { pt: 'Plataformas Icônicas da Web 2.0', en: 'Iconic Web 2.0 Platforms' },
  culturalImpact: { pt: 'Impacto Cultural', en: 'Cultural Impact' },
  positiveChanges: { pt: 'Mudanças Positivas', en: 'Positive Changes' },
  newChallenges: { pt: 'Novos Desafios', en: 'New Challenges' },
  
  // Web 3.0
  web3Title: { pt: 'Web 3.0: O Futuro Descentralizado', en: 'Web 3.0: The Decentralized Future' },
  intelligentDecentralized: { pt: 'A Web Inteligente e Descentralizada', en: 'The Intelligent and Decentralized Web' },
  fundamentalConcepts: { pt: 'Conceitos Fundamentais', en: 'Fundamental Concepts' },
  mainTechnologies: { pt: 'Tecnologias Principais', en: 'Main Technologies' },
  web3Features: { pt: 'Características da Web 3.0', en: 'Web 3.0 Features' },
  emergingUseCases: { pt: 'Casos de Uso Emergentes', en: 'Emerging Use Cases' },
  challengesOpportunities: { pt: 'Desafios e Oportunidades', en: 'Challenges and Opportunities' },
  opportunities: { pt: 'Oportunidades', en: 'Opportunities' },
  challenges: { pt: 'Desafios', en: 'Challenges' },
  
  // Footer
  footerText: {
    pt: '© 2025 - NewwW - Projeto Educativo sobre a História da Web',
    en: '© 2025 - NewwW - Educational Project about Web History'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}