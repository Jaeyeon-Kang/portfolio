export interface Education {
  period: string;
  institution: {
    ko: string;
    en: string;
  };
  degree: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  type: "degree" | "bootcamp" | "study";
}

export const educations: Education[] = [
  // 교육 및 스터디 (최신순)
  {
    period: "2024.08 - 2024.10",
    institution: {
      ko: "구글 스터디잼",
      en: "Google Study Jam",
    },
    degree: {
      ko: "Gemini x GCP: 생성형 AI 기반 웹 서비스 만들기",
      en: "Gemini x GCP: Building Web Services with Generative AI",
    },
    description: {
      ko: "Vertex AI, BigQuery ML, Gemini API 활용 — GCP 스킬 뱃지 8개 획득",
      en: "Vertex AI, BigQuery ML, Gemini API — Acquired 8 GCP skill badges",
    },
    type: "study",
  },
  // 부트캠프
  {
    period: "2021.11 - 2022.02",
    institution: {
      ko: "코드캠프 4기",
      en: "Code Camp 4th Cohort",
    },
    degree: {
      ko: "프론트엔드 개발 과정 수료",
      en: "Frontend Development Course Completed",
    },
    description: {
      ko: "React 기반 팀 프로젝트 수행 및 알고리즘 학습",
      en: "React-based team projects and algorithm learning",
    },
    type: "bootcamp",
  },
  // 학력
  {
    period: "2018.08 - 2020.07",
    institution: {
      ko: "City University of New York, Hunter College",
      en: "City University of New York, Hunter College",
    },
    degree: {
      ko: "Film & Media 전공 (2년 수료)",
      en: "Film & Media Major (2 years completed)",
    },
    description: {
      ko: "영상 제작 및 미디어 이론 학습",
      en: "Video production and media theory",
    },
    type: "degree",
  },
  {
    period: "2013.03 - 2017.02",
    institution: {
      ko: "국민대학교 (서울)",
      en: "Kookmin University (Seoul)",
    },
    degree: {
      ko: "한국역사학과 졸업",
      en: "Bachelor of Korean History",
    },
    description: {
      ko: "인문학적 사고와 분석력 함양",
      en: "Cultivated humanistic thinking and analytical skills",
    },
    type: "degree",
  },
];
