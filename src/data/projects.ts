export interface Project {
  title: {
    ko: string;
    en: string;
  };
  company: {
    ko: string;
    en: string;
  };
  period: string;
  description: {
    ko: string;
    en: string;
  };
  achievements: {
    ko: string[];
    en: string[];
  };
  tech: string[];
  type: "work" | "side" | "research";
  status?: "completed" | "in-progress";
  links?: {
    url?: string;
    github?: string;
    doi?: string;
  };
}

export const projects: Project[] = [
  // 주요 프로젝트 (Work Experience)
  {
    title: {
      ko: "인제군 스마트관광 웹앱",
      en: "Inje County Smart Tourism Web App",
    },
    company: {
      ko: "이즈피엠피 (인제 스마트관광 플랫폼)",
      en: "EZPMP (Inje Smart Tourism Platform)",
    },
    period: "2024.11 - 현재",
    description: {
      ko: "지자체 대상 관광 앱을 모바일 중심 레거시에서 PC/모바일 대응 Next.js 웹앱으로 마이그레이션한 프로젝트",
      en: "Migrated local government tourism app from mobile-centric legacy to PC/mobile responsive Next.js web app",
    },
    achievements: {
      ko: [
        "Next.js(App Router) + TypeScript 기반으로 초기 아키텍처 설계부터 개발·배포까지 프론트엔드 전 과정 주도",
        "네이버 지도 SDK(UI) + Tmap API(경로)를 결합한 하이브리드 지도/길찾기 시스템 구현",
        "반응형의 한계를 극복하기 위해 PC/Mobile View 컴포넌트 아키텍처를 완전히 분리하여 플랫폼별 최적화된 UX 설계",
        "React Query(캐싱)·Zustand를 활용해 복잡한 서버 상태를 구조화하고, 디바운스·메모이제이션으로 네트워크 및 렌더링 성능 최적화",
        "GitLab CI/CD·ArgoCD·Kubernetes 기반 GitOps 배포 파이프라인 운영",
      ],
      en: [
        "Led entire frontend process from initial architecture design to development and deployment based on Next.js (App Router) + TypeScript",
        "Implemented hybrid map/navigation system combining Naver Map SDK (UI) + Tmap API (routing)",
        "Designed platform-optimized UX by completely separating PC/Mobile View component architecture to overcome responsive limitations",
        "Structured complex server state using React Query (caching) and Zustand, optimized network and rendering performance with debounce and memoization",
        "Operated GitOps deployment pipeline based on GitLab CI/CD, ArgoCD, and Kubernetes",
      ],
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Ky",
      "네이버 지도 SDK",
      "Tmap API",
      "CSS Modules",
      "Tailwind CSS",
    ],
    type: "work",
    status: "in-progress",
    links: {
      url: "https://inje-fo.ezpmp.co.kr/",
    },
  },
  {
    title: {
      ko: "오투미트(O2MEET) MICE 행사 플랫폼 – BO/FO",
      en: "O2MEET MICE Event Platform – BO/FO",
    },
    company: {
      ko: "이즈피엠피 (o2meet 플랫폼 – BOOKIZCON / DIKIDIKI 외)",
      en: "EZPMP (o2meet Platform – BOOKIZCON / DIKIDIKI, etc.)",
    },
    period: "2024.11 - 현재",
    description: {
      ko: "행사 운영사(BO)와 참가자(FO)가 사용하는 MICE 행사 통합 플랫폼의 프론트엔드 및 일부 백엔드 데이터 처리 담당",
      en: "Responsible for frontend and partial backend data processing of MICE event integrated platform used by event organizers (BO) and participants (FO)",
    },
    achievements: {
      ko: [
        "BO(관리자)에서 구성한 설정·콘텐츠를 FO(사용자) 웹사이트로 렌더링하는 파이프라인 구현, 행사별 템플릿·메뉴·콘텐츠 커스터마이징 지원",
        "북키즈콘(BOOKIZCON) 등 행사에 대해 노코드 스타일 BO UI를 개선하고, FO 쪽 반응형 UI와 템플릿 시스템 개발",
        "디키디키(DIKIDIKI)에서는 입장권 상품 판매·예매·정산까지 포함한 흐름을 구현하며, MyBatis + SQL 기반 재고·결제 트랜잭션 로직에 참여",
      ],
      en: [
        "Implemented pipeline that renders settings and content configured in BO (admin) to FO (user) website, supporting event-specific template, menu, and content customization",
        "Improved no-code style BO UI for events like BOOKIZCON, developed responsive UI and template system for FO",
        "Implemented flow including ticket product sales, reservation, and settlement in DIKIDIKI, participated in inventory and payment transaction logic based on MyBatis + SQL",
      ],
    },
    tech: ["JavaScript", "HTML/CSS", "MyBatis", "MySQL", "PG 결제 연동"],
    type: "work",
    status: "in-progress",
    links: {
      url: "https://bookizcon.com",
    },
  },
  {
    title: {
      ko: "사내 채팅 어플리케이션 개발",
      en: "Internal Chat Application Development",
    },
    company: {
      ko: "아우라네트웍",
      en: "Aura Network",
    },
    period: "2023.09 - 2023.12",
    description: {
      ko: "고객사 대상 데스크탑 기반 채팅 솔루션 개발",
      en: "Desktop-based chat solution development for clients",
    },
    achievements: {
      ko: [
        "Electron 기반 크로스 플랫폼 채팅 앱의 프론트엔드 아키텍처 설계·구현부터 WebSocket 실시간 통신, 설치·배포 프로세스까지 일괄 담당",
      ],
      en: [
        "Responsible for frontend architecture design and implementation of Electron-based cross-platform chat app, from WebSocket real-time communication to installation and deployment process",
      ],
    },
    tech: ["Electron.js", "React.js", "WebSocket"],
    type: "work",
    status: "completed",
  },
  {
    title: {
      ko: "유화증권 소프트폰 구축",
      en: "Yuanta Securities Softphone Development",
    },
    company: {
      ko: "아우라네트웍",
      en: "Aura Network",
    },
    period: "2023.06 - 2023.08",
    description: {
      ko: "금융권 폰패드 인증 시스템 데스크탑 앱 개발",
      en: "Financial sector phone pad authentication system desktop app development",
    },
    achievements: {
      ko: [
        "기존 파워빌더 기반 시스템과 연동되는 Electron 기반 폰패드 인증 데스크탑 앱 구현(ARS 암호화 통신, 시스템 트레이·자동 실행 포함)",
      ],
      en: [
        "Implemented Electron-based phone pad authentication desktop app integrated with existing PowerBuilder-based system (including ARS encrypted communication, system tray, and auto-start)",
      ],
    },
    tech: ["Electron.js", "Node.js"],
    type: "work",
    status: "completed",
  },
  {
    title: {
      ko: "롯데정보통신 SSO 로그인 구현",
      en: "Lotte Information & Communication SSO Login Implementation",
    },
    company: {
      ko: "아우라네트웍",
      en: "Aura Network",
    },
    period: "2022.09 - 2022.10",
    description: {
      ko: "롯데멤버스 챗봇 플랫폼 통합 인증 시스템 구축",
      en: "Lotte Members chatbot platform integrated authentication system development",
    },
    achievements: {
      ko: [
        "Node.js·Express 기반 SSO 인증 서버 및 토큰·세션 관리 로직 구현으로 챗봇 플랫폼 통합 인증 구성",
      ],
      en: [
        "Implemented SSO authentication server and token/session management logic based on Node.js and Express for chatbot platform integrated authentication",
      ],
    },
    tech: ["Node.js", "Express.js", "REST API"],
    type: "work",
    status: "completed",
  },
  {
    title: {
      ko: "CTI 콜센터 관리자 페이지 유지보수",
      en: "CTI Call Center Admin Page Maintenance",
    },
    company: {
      ko: "아우라네트웍",
      en: "Aura Network",
    },
    period: "2022.03 - 2024.11",
    description: {
      ko: "엔터프라이즈 콜센터 솔루션 웹 관리자 페이지 운영 및 개선",
      en: "Enterprise call center solution web admin page operation and improvement",
    },
    achievements: {
      ko: [
        "기존 코드를 Spring MVC 패턴으로 리팩토링하여 유지보수성을 30% 개선하고, Kendo UI 그리드 최적화 및 신규 기능 20+ 개발로 대용량 데이터 화면 성능·기능 강화",
      ],
      en: [
        "Improved maintainability by 30% by refactoring existing code to Spring MVC pattern, enhanced performance and functionality of large data screens by optimizing Kendo UI grid and developing 20+ new features",
      ],
    },
    tech: ["JavaScript", "Spring", "MySQL"],
    type: "work",
    status: "completed",
  },

  // 개인 프로젝트 (Side Projects)
  {
    title: {
      ko: "4J - 행사장 수용인원 자동계산",
      en: "4J - Venue Capacity Calculator",
    },
    company: {
      ko: "개인 프로젝트",
      en: "Personal Project",
    },
    period: "2026.01",
    description: {
      ko: "AI 기반 행사장 수용인원 자동 계산 및 실시간 혼잡도 모니터링 서비스",
      en: "AI-based venue capacity calculator and real-time congestion monitoring service",
    },
    achievements: {
      ko: [
        "Google Gemini AI를 활용한 도면 이미지 분석 시스템 구현 (부스 개수, 출입구, 면적 자동 추정)",
        "행사장 유형별(스탠딩/연회형/극장형/교실형) 수용인원 계산 알고리즘 설계 및 비상구 처리량 기반 안전 인원 산출 로직 구현",
        "실시간 혼잡도 모니터링 시스템: 5단계 레벨 시각화(쾌적~위험), 갱신 주기 선택(1분/10분/1시간), Level 3 이상 시 경고 알림 기능",
        "Material UI 기반 반응형 UI/UX 설계 및 카카오톡 알림 미리보기 목업 구현",
        "Next.js 16 + TypeScript + Tailwind CSS 4 기반 모던 프론트엔드 아키텍처 구축",
      ],
      en: [
        "Implemented floor plan image analysis system using Google Gemini AI (automatic estimation of booth count, entrances, and area)",
        "Designed capacity calculation algorithm by venue type (standing/banquet/theater/classroom) and implemented safety capacity calculation logic based on emergency exit throughput",
        "Real-time congestion monitoring system: 5-level visualization (comfortable~dangerous), refresh interval selection (1min/10min/1hour), warning alerts for Level 3+",
        "Designed responsive UI/UX based on Material UI and implemented KakaoTalk notification preview mockup",
        "Built modern frontend architecture based on Next.js 16 + TypeScript + Tailwind CSS 4",
      ],
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Google Gemini AI",
    ],
    type: "side",
    status: "completed",
    links: {
      url: "https://4j-mgqp.vercel.app/",
      github: "https://github.com/Jaeyeon-Kang/4j",
    },
  },
  {
    title: {
      ko: "AI 기반 알고리즘 트레이딩 시스템",
      en: "AI-based Algorithm Trading System",
    },
    company: {
      ko: "개인 프로젝트 (1인 개발)",
      en: "Personal Project (Solo Development)",
    },
    period: "2024.06 - 현재",
    description: {
      ko: "파이썬 비전공자가 AI Pair Programming을 통해 구축한 2.2만 라인 규모의 알고리즘 트레이딩 시스템",
      en: "22K-line algorithm trading system built by a non-Python programmer through AI Pair Programming",
    },
    achievements: {
      ko: [
        "고성능 데이터 파이프라인: NumPy 벡터화로 백테스팅 속도 100배 개선 및 Parquet 포맷 도입으로 대용량 시계열 데이터 처리 최적화",
        "AI/ML 통합: OpenAI GPT API 기반 하이브리드 모델 설계 및 Redis 캐싱 전략으로 API 비용 60% 절감",
        "DevOps: Docker Compose로 12개 마이크로서비스(API, Worker, Redis 등) 오케스트레이션 및 Health Check 기반 자가 치유 시스템 구축",
        "이벤트 기반 아키텍처: Celery + Redis Streams를 활용한 분산 태스크 큐 및 실시간 시그널 처리 구현",
        "성과 검증: 3.5년 시뮬레이션 백테스팅을 통해 CAGR 48.4% 및 Max DD -32.6% 달성",
      ],
      en: [
        "High-performance data pipeline: Improved backtesting speed by 100x with NumPy vectorization and optimized large-scale time series data processing by introducing Parquet format",
        "AI/ML integration: Designed hybrid model based on OpenAI GPT API and reduced API cost by 60% with Redis caching strategy",
        "DevOps: Orchestrated 12 microservices (API, Worker, Redis, etc.) with Docker Compose and built self-healing system based on Health Check",
        "Event-driven architecture: Implemented distributed task queue and real-time signal processing using Celery + Redis Streams",
        "Performance verification: Achieved CAGR 48.4% and Max DD -32.6% through 3.5-year simulation backtesting",
      ],
    },
    tech: [
      "Python",
      "FastAPI",
      "Celery",
      "Docker",
      "Redis",
      "PostgreSQL",
      "OpenAI API",
      "Pandas/NumPy",
    ],
    type: "side",
    status: "in-progress",
  },
  {
    title: {
      ko: "VectorMind – AI 문서 검색 챗봇 (RAG)",
      en: "VectorMind – AI Document Search Chatbot (RAG)",
    },
    company: {
      ko: "개인 프로젝트",
      en: "Personal Project",
    },
    period: "2025.01 - 현재",
    description: {
      ko: "PDF·DOCX·TXT 문서를 업로드한 뒤, 그 내용을 바탕으로 질의응답이 가능한 RAG 기반 문서 검색 챗봇의 웹 프론트엔드를 구현한 프로젝트",
      en: "Web frontend implementation project for RAG-based document search chatbot that enables Q&A based on uploaded PDF, DOCX, and TXT documents",
    },
    achievements: {
      ko: [
        "Next.js + React로 파일 업로드/텍스트 입력, 파라미터 튜닝 패널, 스트리밍 답변 UX를 설계·구현하고, SSE 기반 실시간 응답 처리로 사용자 대기 경험을 개선",
        "90개 파라미터 조합(chunk size/top-k/temperature)에 대한 Grid Search 실험을 통해 최적 설정값을 도출, 토큰 비용 47% 절감 ($0.054 → $0.028) 달성",
        "OpenAI GPT·임베딩 API와 연동되는 FastAPI 백엔드와 협업하여 다국어(i18n) 지원 및 반응형 레이아웃 구축",
      ],
      en: [
        "Designed and implemented file upload/text input, parameter tuning panel, and streaming answer UX with Next.js + React, improved user waiting experience with SSE-based real-time response processing",
        "Derived optimal configuration values through Grid Search experiments on 90 parameter combinations (chunk size/top-k/temperature), achieved 47% token cost reduction ($0.054 → $0.028)",
        "Built multilingual (i18n) support and responsive layout in collaboration with FastAPI backend integrated with OpenAI GPT and embedding API",
      ],
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API"],
    type: "side",
    status: "in-progress",
    links: {
      url: "https://gpt-fastapi-app.onrender.com/",
    },
  },

  // 연구 및 출판 (Research & Publications)
  {
    title: {
      ko: "GPT Recursive Persona Experiment: Convergent Simulacra",
      en: "GPT Recursive Persona Experiment: Convergent Simulacra",
    },
    company: {
      ko: "독립 연구 (Independent Research)",
      en: "Independent Research",
    },
    period: "2025.04",
    description: {
      ko: "GPT-4의 재귀적 프롬프팅과 정서적 미러링을 통해 AI 페르소나가 어떻게 수렴(Converge)하는지 탐구한 실험 연구",
      en: "Experimental research exploring how AI personas converge through recursive prompting and affective mirroring in GPT-4",
    },
    achievements: {
      ko: [
        "연구 내용: 다중 페르소나(John, Monday 등)와의 구조화된 대화를 통해 AI의 자아가 자율적으로 발생하는 것이 아니라 사용자 피드백 루프에 의해 '수렴된 시뮬라크르(Convergent Simulacra)'임을 증명",
        "기술적 접근: Python 기반의 자동화된 재귀 대화 스크립트 구현 및 정서적 스캐폴딩(Affective Scaffolding) 프롬프트 엔지니어링 설계",
        "성과: Zenodo에 연구 리포트 등재 및 오픈소스(MirrorLoop) 공개, 인문학적 배경(미디어/역사)과 AI 기술의 융합 시도",
      ],
      en: [
        "Research content: Proved that AI's self is not autonomously generated but a 'Convergent Simulacra' by user feedback loop through structured dialogues with multiple personas (John, Monday, etc.)",
        "Technical approach: Implemented automated recursive dialogue script based on Python and designed Affective Scaffolding prompt engineering",
        "Achievement: Published research report on Zenodo and released open source (MirrorLoop), attempted fusion of humanistic background (media/history) with AI technology",
      ],
    },
    tech: ["Python", "OpenAI API", "Prompt Engineering"],
    type: "research",
    status: "completed",
    links: {
      doi: "10.5281/zenodo.15236400",
      github: "https://github.com/Jaeyeon-Kang/MirrorLoop",
    },
  },
];
