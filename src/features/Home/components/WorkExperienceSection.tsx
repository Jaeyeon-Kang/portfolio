import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";

interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
  status: "Completed" | "In Progress";
}

const projects: Project[] = [
  {
    title: "사내 채팅 어플리케이션 개발",
    company: "아우라네트웍",
    period: "2023년 9월 - 12월 (4개월)",
    description:
      "고객사 대상 데스크탑 기반 채팅 솔루션 개발",
    achievements: [
      "Electron 기반 크로스 플랫폼 채팅 앱의 프론트엔드 아키텍처 설계 및 90% 구현",
      "WebSocket 실시간 통신 구현으로 안정적인 채팅 기능 제공",
      "설치 프로그램 빌드 및 배포 프로세스 구축",
    ],
    tech: ["Electron.js", "React.js", "WebSocket"],
    status: "Completed",
  },
  {
    title: "유화증권 소프트폰 구축",
    company: "아우라네트웍",
    period: "2023년 6월 - 8월 (3개월)",
    description: "금융권 폰패드 인증 시스템 데스크탑 앱 개발",
    achievements: [
      "파워빌더 레거시 시스템과의 인터페이스 설계 및 구현",
      "ARS 암호화 통신 프로토콜 구현",
      "시스템 트레이, 자동 실행 등 UX 최적화",
    ],
    tech: ["Electron.js", "Node.js"],
    status: "Completed",
  },
  {
    title: "롯데정보통신 SSO 로그인 구현",
    company: "아우라네트웍",
    period: "2022년 9월 - 10월 (2개월)",
    description: "롯데멤버스 챗봇 플랫폼 통합 인증 시스템 구축",
    achievements: [
      "Express 기반 SSO 인증 서버 구축",
      "통합회원 시스템 API 연동 및 토큰 관리",
      "보안 세션 관리 구현",
    ],
    tech: ["Node.js", "Express.js", "REST API"],
    status: "Completed",
  },
  {
    title: "CTI 콜센터 관리자 페이지 유지보수",
    company: "아우라네트웍",
    period: "2022년 3월 - 현재",
    description:
      "엔터프라이즈 콜센터 솔루션 웹 관리자 페이지 운영 및 개선",
    achievements: [
      "레거시 코드를 Spring MVC 패턴으로 리팩토링하여 유지보수성 30% 향상",
      "Kendo UI 그리드 최적화로 대용량 데이터 렌더링 성능 개선",
      "신규 기능 20+ 추가 및 버그 수정",
    ],
    tech: ["JavaScript", "Spring", "MySQL"],
    status: "In Progress",
  },
];

const WorkExperienceSection = () => {
  return (
    <section className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader titleKey="work.title" />
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-cyan-900/50 transition-colors"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="text-sm text-slate-400">
                    {project.company} · {project.period}
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${
                    project.status === "Completed"
                      ? "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                      : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  }`}
                >
                  {project.status === "Completed" ? "완료" : "진행중"}
                </span>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-6">
                <h4 className="text-sm text-slate-400 mb-3 font-medium">
                  주요 성과
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-400 flex items-start gap-3"
                    >
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;

