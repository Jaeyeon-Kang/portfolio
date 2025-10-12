import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 한국어 번역
const ko = {
  nav: {
    home: "Home",
    about: "About",
    career: "Career",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    name: "강재연",
    title: "Frontend Developer",
    subtitle: "AI Product Engineer",
    description: "사용자 경험과 AI를 결합하여 더 나은 제품을 만드는 개발자입니다",
    learnMore: "더 알아보기",
    scrollExplore: "Scroll to explore",
  },
  about: {
    title: "About Me",
    frontendTitle: "Frontend Developer",
    frontendDesc: "3년차 프론트엔드 개발자로 React.js, Electron.js 기반의 웹/데스크탑 애플리케이션을 개발합니다. 필요에 따라 Node.js, Spring, MySQL을 활용하여 백엔드 협업 및 개발도 가능합니다.",
    collaborationTitle: "Collaboration & Growth",
    collaborationDesc: "SVN, Git 등 협업 도구를 활용하여 팀원들과 효율적으로 소통하며, 혼자보다는 함께 일할 때 더 나은 결과를 만듭니다. 프로젝트 전 과정에서 책임감을 가지고 최선을 다합니다.",
    aiTitle: "Why AI Product Engineer?",
    aiDesc1: "2년간의 프론트엔드 개발 경험을 통해 사용자 인터페이스와 경험의 중요성을 깊이 이해하게 되었습니다. 이제는",
    aiHighlight1: "AI 기술을 프론트엔드에 접목",
    aiDesc2: "하여 더욱 인텔리전트하고 사용자 친화적인 제품을 만들고자 합니다.",
    aiDesc3: "LLM API 통합, RAG 기반 검색 시스템, AI 챗봇 등 AI를 실제 제품에 녹여내는",
    aiHighlight2: " AI Product Engineer",
    aiDesc4: "로 성장하고 있습니다.",
  },
  career: {
    title: "Career",
  },
  skills: {
    title: "Skills & Technologies",
    levels: {
      expert: "숙련",
      proficient: "능숙",
      familiar: "익숙",
      learning: "학습중",
    },
  },
  work: {
    title: "Work Experience",
    completed: "완료",
    inProgress: "진행중",
    achievements: "주요 성과",
  },
  education: {
    title: "Education",
  },
  contact: {
    title: "Let's Connect",
    description: "새로운 기회와 협업에 열려있습니다. 언제든지 연락주세요.",
    showPhone: "전화번호 보기",
    copyright: "© 2025 강재연. All rights reserved.",
  },
};

// 영어 번역
const en = {
  nav: {
    home: "Home",
    about: "About",
    career: "Career",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    name: "Jaeyeon Kang",
    title: "Frontend Developer",
    subtitle: "AI Product Engineer",
    description: "A developer who creates better products by combining user experience with AI",
    learnMore: "Learn More",
    scrollExplore: "Scroll to explore",
  },
  about: {
    title: "About Me",
    frontendTitle: "Frontend Developer",
    frontendDesc: "3-year experienced frontend developer specializing in React.js and Electron.js-based web/desktop applications. Also capable of backend collaboration and development using Node.js, Spring, and MySQL.",
    collaborationTitle: "Collaboration & Growth",
    collaborationDesc: "Efficiently communicate with team members using collaboration tools like SVN and Git, achieving better results when working together. Always committed to delivering the best throughout the entire project lifecycle.",
    aiTitle: "Why AI Product Engineer?",
    aiDesc1: "Through 2 years of frontend development experience, I've gained a deep understanding of the importance of user interface and experience. Now, I aim to",
    aiHighlight1: "integrate AI technology into frontend",
    aiDesc2: "to create more intelligent and user-friendly products.",
    aiDesc3: "Growing as an",
    aiHighlight2: " AI Product Engineer",
    aiDesc4: " who integrates AI into real products, including LLM API integration, RAG-based search systems, and AI chatbots.",
  },
  career: {
    title: "Career",
  },
  skills: {
    title: "Skills & Technologies",
    levels: {
      expert: "Expert",
      proficient: "Proficient",
      familiar: "Familiar",
      learning: "Learning",
    },
  },
  work: {
    title: "Work Experience",
    completed: "Completed",
    inProgress: "In Progress",
    achievements: "Key Achievements",
  },
  education: {
    title: "Education",
  },
  contact: {
    title: "Let's Connect",
    description: "Open to new opportunities and collaboration. Feel free to contact me anytime.",
    showPhone: "Show Phone Number",
    copyright: "© 2025 Jaeyeon Kang. All rights reserved.",
  },
};

i18n.use(initReactI18next).init({
  resources: {
    ko: { translation: ko },
    en: { translation: en },
  },
  lng: "ko", // 기본 언어
  fallbackLng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

