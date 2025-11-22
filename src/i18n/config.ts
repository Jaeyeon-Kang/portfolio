import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 한국어 UI 텍스트
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
    learnMore: "더 알아보기",
    scrollExplore: "스크롤하여 탐색",
  },
  about: {
    title: "About Me",
  },
  career: {
    title: "Career",
  },
  skills: {
    title: "Skills & Technologies",
  },
  work: {
    title: "Work Experience",
    completed: "완료",
    inProgress: "진행중",
    achievements: "주요 성과",
    tech: "기술 스택",
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

// 영어 UI 텍스트
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
    learnMore: "Learn More",
    scrollExplore: "Scroll to explore",
  },
  about: {
    title: "About Me",
  },
  career: {
    title: "Career",
  },
  skills: {
    title: "Skills & Technologies",
  },
  work: {
    title: "Work Experience",
    completed: "Completed",
    inProgress: "In Progress",
    achievements: "Key Achievements",
    tech: "Tech Stack",
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

