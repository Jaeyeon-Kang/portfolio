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
    period: "2024.11 - 2025.12",
    company: {
      ko: "이즈피엠피 (EZPMP)",
      en: "EZPMP",
    },
    position: {
      ko: "Frontend Developer (선임)",
      en: "Senior Frontend Developer",
    },
    description: {
      ko: "스마트관광 웹앱과 MICE 행사 플랫폼의 프론트엔드 개발 및 기존 웹 시스템의 Next.js 마이그레이션 담당",
      en: "Responsible for frontend development of Smart Tourism web apps and MICE event platforms, and Next.js migration of existing web systems",
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
      ko: "콜센터 인프라 소프트웨어(CTI, 통계, 소프트폰)와 사내 메신저·소프트폰 등 데스크탑 앱의 프론트엔드를 담당",
      en: "Responsible for frontend of call center infrastructure software (CTI, statistics, softphone) and desktop apps including internal messenger and softphone",
    },
  },
  {
    period: "2020.08 - 2021.11",
    company: {
      ko: "한국농수산유통식품공사",
      en: "Korea Agro-Fisheries & Food Trade Corporation",
    },
    position: {
      ko: "PD",
      en: "PD",
    },
    description: {
      ko: "기업 대상 광고 영상 기획, 제작, 조감독 등의 역할 수행",
      en: "Responsible for planning, production, and assistant directing of corporate advertising videos",
    },
  },
  {
    period: "2016.03 - 2020.04",
    company: {
      ko: "Photography & Marketing (해외)",
      en: "Photography & Marketing (Overseas)",
    },
    position: {
      ko: "Freelancer",
      en: "Freelancer",
    },
    description: {
      ko: "패션기업 대상으로 마케팅 전략 수립 & 사진 촬영 업무",
      en: "Marketing strategy development and photography for fashion companies",
    },
  },
];
