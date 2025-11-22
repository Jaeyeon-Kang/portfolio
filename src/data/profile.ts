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
      quote: "사용자 경험(UX)을 설계하는 프론트엔드 엔지니어이자, AI를 제품에 녹여내는 Product Engineer",
      paragraphs: [
        "4년차 프론트엔드 엔지니어로, 복잡한 비즈니스 요구사항을 직관적인 웹·데스크톱 솔루션으로 구현해왔습니다. MICE(오투미트) 및 스마트관광(인제군) 플랫폼의 Next.js 마이그레이션을 주도하며, 하이브리드 지도 시스템과 실시간 데이터 동기화 등 고난도 기술 과제를 해결했습니다.",
        "최근에는 프론트엔드 역량을 넘어 AI 기술을 실제 서비스로 구체화하는 데 집중하고 있습니다. 2.2만 라인 규모의 알고리즘 트레이딩 시스템을 구축하며 데이터 엔지니어링 역량을 증명했고, RAG 기반 챗봇(VectorMind)과 AI 페르소나 연구(Zenodo 등재)를 통해 LLM의 실무적·학술적 활용 가능성을 넓혀가고 있습니다.",
        "기술적 깊이와 인문학적 통찰을 결합하여, 단순한 기능 구현을 넘어 '사용자의 의도를 파악하고 맥락을 이해하는 지능형 인터페이스'를 만드는 것이 저의 목표입니다.",
      ],
    },
    en: {
      quote: "A Frontend Engineer who designs user experiences and a Product Engineer who integrates AI into products",
      paragraphs: [
        "As a 4th-year frontend engineer, I've implemented complex business requirements into intuitive web and desktop solutions. Led Next.js migration of MICE (O2Meet) and Smart Tourism (Inje County) platforms, solving high-difficulty technical challenges such as hybrid map systems and real-time data synchronization.",
        "Recently, I've been focusing on materializing AI technology into actual services beyond frontend capabilities. Proved data engineering capabilities by building a 22K-line algorithm trading system, and expanding practical and academic possibilities of LLM through RAG-based chatbot (VectorMind) and AI persona research (published on Zenodo).",
        "My goal is to create 'intelligent interfaces that understand user intent and context' by combining technical depth with humanistic insights, going beyond simple feature implementation.",
      ],
    },
  },
};
