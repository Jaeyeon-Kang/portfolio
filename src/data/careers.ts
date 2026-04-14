export interface Career {
  period: string;
  company: {
    ko: string;
    en: string;
  };
  position: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
}

export const careers: Career[] = [
  {
    period: "2024.11 - 현재",
    company: {
      ko: "이즈피엠피 (EZPMP)",
      en: "EZPMP",
    },
    position: {
      ko: "Frontend Developer (선임)",
      en: "Senior Frontend Developer",
    },
    description: {
      ko: "스마트관광 웹앱(인제군)과 MICE 행사 플랫폼(O2MEET)의 프론트엔드 설계·개발, 레거시 시스템 Next.js 마이그레이션 주도",
      en: "Led frontend architecture and development of Smart Tourism web app (Inje County) and MICE event platform (O2MEET), driving legacy-to-Next.js migration",
    },
  },
  {
    period: "2022.03 - 2024.11",
    company: {
      ko: "아우라네트웍",
      en: "Aura Network",
    },
    position: {
      ko: "Frontend Developer (주임)",
      en: "Frontend Developer",
    },
    description: {
      ko: "콜센터 인프라(CTI, 통계, 소프트폰) 및 Electron 기반 데스크탑 앱(메신저, 소프트폰) 프론트엔드 개발",
      en: "Developed frontend for call center infrastructure (CTI, statistics, softphone) and Electron-based desktop apps (messenger, softphone)",
    },
  },
];
