export interface Profile {
  name: {
    ko: string;
    en: string;
  };
  title: {
    ko: string;
    en: string;
  };
  subtitle: {
    ko: string;
    en: string;
  };
  email: string;
  phone: string;
  github: string;
  techBlog: string;
  aiBlog: string;
  intro: {
    ko: {
      quote: string;
      paragraphs: string[];
    };
    en: {
      quote: string;
      paragraphs: string[];
    };
  };
}

export const profile: Profile = {
  name: {
    ko: "강재연",
    en: "Jaeyeon Kang",
  },
  title: {
    ko: "Frontend Engineer",
    en: "Frontend Engineer",
  },
  subtitle: {
    ko: "AI Product Engineer",
    en: "AI Product Engineer",
  },
  email: "bellaglittery@gmail.com",
  phone: "010-7560-1791",
  github: "https://github.com/Jaeyeon-Kang",
  techBlog: "https://just-coding.tistory.com",
  aiBlog: "https://medium.com/@mirrorloop",
  intro: {
    ko: {
      quote: "복잡한 비즈니스를 직관적인 인터페이스로, AI를 실제 제품으로",
      paragraphs: [
        "Next.js 기반 MICE 플랫폼과 스마트관광 웹앱을 설계·개발하며, 하이브리드 지도 시스템·실시간 데이터 동기화 등 기술 난제를 해결해온 프론트엔드 엔지니어입니다.",
        "RAG 챗봇(VectorMind), 알고리즘 트레이딩 시스템(2.2만 라인), AI 페르소나 연구(Zenodo 등재)까지 — 프론트엔드를 넘어 AI를 실제 서비스로 구현하는 데 집중하고 있습니다.",
      ],
    },
    en: {
      quote: "Turning complex business into intuitive interfaces, and AI into real products",
      paragraphs: [
        "Frontend engineer with hands-on experience designing and building Next.js-based MICE platforms and smart tourism web apps, solving challenges like hybrid map systems and real-time data synchronization.",
        "Beyond frontend — built a RAG chatbot (VectorMind), a 22K-line algorithm trading system, and published AI persona research on Zenodo, focusing on shipping AI as real products.",
      ],
    },
  },
};
