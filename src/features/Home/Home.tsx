import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // PDF 다운로드 핸들러
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = '강재연_이력서.pdf';
    link.click();
  };

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
      >
        {/* Subtle animated background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-cyan-400/40 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              animate={{
                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center z-10 max-w-4xl"
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            강재연
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-4 mb-12"
          >
            <p className="text-xl md:text-2xl font-light text-slate-300 tracking-wide">
              Frontend Developer
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
              <p className="text-lg md:text-xl text-cyan-400 font-medium">
                AI Product Engineer
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            사용자 경험과 AI를 결합하여 더 나은 제품을 만드는 개발자입니다
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-white text-slate-900 rounded-lg font-semibold hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              더 알아보기
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 border-2 border-slate-700 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all"
              onClick={handleDownloadResume}
            >
              이력서 다운로드
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-slate-500 text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mb-16" />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Full-Stack Frontend Developer</h3>
                <p className="text-slate-400 leading-relaxed">
                  JavaScript, React.js, Electron.js 기반의 웹/데스크탑 애플리케이션 개발 경험을 보유하고 있습니다.
                  필요에 따라 Node.js, Spring, MySQL을 다루며 프론트엔드부터 백엔드까지 전 과정에 참여합니다.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration & Growth</h3>
                <p className="text-slate-400 leading-relaxed">
                  SVN, Git 등 협업 도구를 활용하여 팀원들과 효율적으로 소통하며, 혼자보다는 함께 일할 때 더 나은 결과를 만듭니다.
                  프로젝트 전 과정에서 책임감을 가지고 최선을 다합니다.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-950/30 to-teal-950/20 border border-cyan-900/30 rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why AI Product Engineer?</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                2년간의 프론트엔드 개발 경험을 통해 사용자 인터페이스와 경험의 중요성을 깊이 이해하게 되었습니다.
                이제는 <span className="text-cyan-400 font-semibold">AI 기술을 프론트엔드에 접목</span>하여
                더욱 인텔리전트하고 사용자 친화적인 제품을 만들고자 합니다.
              </p>
              <p className="text-slate-300 leading-relaxed">
                LLM API 통합, RAG 기반 검색 시스템, AI 챗봇 등 AI를 실제 제품에 녹여내는
                <span className="text-cyan-400 font-semibold"> AI Product Engineer</span>로 성장하고 있습니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Career
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mb-16" />
          </motion.div>

          <div className="space-y-12">
            {[
              {
                period: "2022.03 - 현재",
                company: "아우라네트웍",
                position: "Frontend Developer (주임)",
                description: "콜센터 인프라 소프트웨어 (CTI, 통계, 소프트폰) 웹 전반 유지보수 및 관리, 데스크탑 앱 API 및 프론트엔드 개발",
              },
              {
                period: "2020.08 - 2021.11",
                company: "한국농수산유통식품공사",
                position: "PD",
                description: "기업 대상 광고 영상 기획, 제작, 조감독 등의 역할 수행",
              },
              {
                period: "2016.03 - 2020.04",
                company: "Photography & Marketing (해외)",
                position: "Freelancer",
                description: "패션기업 대상으로 마케팅 전략 수립 & 사진 촬영 업무",
              },
            ].map((career, idx) => (
              <motion.div
                key={career.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-cyan-500/30 pl-8 hover:border-cyan-500/60 transition-colors"
              >
                <div className="text-sm text-cyan-400 font-medium mb-2">{career.period}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{career.company}</h3>
                <div className="text-slate-400 mb-3">{career.position}</div>
                <p className="text-slate-400 leading-relaxed">{career.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mb-16" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                skills: [
                  { name: "React.js", level: 90 },
                  { name: "JavaScript/TypeScript", level: 85 },
                  { name: "Next.js", level: 70 },
                  { name: "HTML/CSS", level: 90 },
                  { name: "jQuery", level: 80 },
                ],
              },
              {
                category: "Backend & Database",
                skills: [
                  { name: "Node.js", level: 80 },
                  { name: "Spring/Spring Boot", level: 70 },
                  { name: "MySQL/MariaDB", level: 75 },
                  { name: "REST API/GraphQL", level: 80 },
                ],
              },
              {
                category: "Desktop & Tools",
                skills: [
                  { name: "Electron.js", level: 85 },
                  { name: "Git/SVN", level: 85 },
                  { name: "Figma/Zeplin", level: 75 },
                  { name: "GCP/Firebase", level: 70 },
                ],
              },
              {
                category: "AI & Learning",
                skills: [
                  { name: "LangChain", level: 60, learning: true },
                  { name: "RAG Systems", level: 55, learning: true },
                  { name: "OpenAI API", level: 65, learning: true },
                  { name: "Vector DB", level: 50, learning: true },
                ],
              },
              {
                category: "Styling",
                skills: [
                  { name: "Tailwind CSS", level: 85 },
                  { name: "Emotion-styled", level: 80 },
                  { name: "Framer Motion", level: 75 },
                ],
              },
              {
                category: "Collaboration",
                skills: [
                  { name: "Team Communication", level: 90 },
                  { name: "Agile/Scrum", level: 75 },
                  { name: "Code Review", level: 80 },
                  { name: "Documentation", level: 85 },
                ],
              },
            ].map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-slate-800">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-300 flex items-center gap-2">
                          {skill.name}
                          {skill.learning && (
                            <span className="text-xs px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">
                              학습중
                            </span>
                          )}
                        </span>
                        <span className="text-xs text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mb-16" />
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "사내 채팅 어플리케이션 개발",
                company: "아우라네트웍",
                period: "2023.09 - 2023.12 (16주, 3인)",
                description: "고객사 대상 데스크탑 기반 채팅 솔루션의 프론트엔드 아키텍처 설계 및 구현을 90% 이상 담당",
                achievements: [
                  "Electron.js를 사용하여 크로스 플랫폼 데스크탑 앱 개발",
                  "웹소켓 API 통합으로 실시간 채팅 기능 구현",
                  "설치파일 생성 및 배포 작업 수행",
                ],
                tech: ["Electron.js", "React.js", "WebSocket", "Node.js"],
                status: "Completed",
              },
              {
                title: "유화증권 소프트폰 구축",
                company: "아우라네트웍",
                period: "2023.06 - 2023.08 (6주, 3인)",
                description: "폰패드인증 시스템 '소프트폰' 데스크탑 앱 구현",
                achievements: [
                  "파워빌더와의 로그인 정보 통신 구현",
                  "ARS 암호화 패스워드 복호화 처리",
                  "Tray 기능, PC 자동 실행 등 데스크탑 앱 핵심 기능 구현",
                ],
                tech: ["Node.js", "Electron.js", "암호화/복호화"],
                status: "Completed",
              },
              {
                title: "롯데정보통신 SSO 로그인 구현",
                company: "아우라네트웍",
                period: "2022.09 - 2022.10 (4주, 3인)",
                description: "롯데멤버스 챗봇 홈페이지 SSO 구현",
                achievements: [
                  "Node.js, Express.js로 SSO 서버 개발",
                  "통합회원 로그인 API 연동",
                  "SSO 토큰 기반 로그인 후처리 구현",
                ],
                tech: ["Node.js", "Express.js", "SSO", "REST API"],
                status: "Completed",
              },
              {
                title: "CTI 콜센터 관리자 페이지 유지보수",
                company: "아우라네트웍",
                period: "2022.03 - 현재 (4인)",
                description: "JavaScript, Spring, MySQL 사용한 관리자 페이지 유지보수 및 최적화",
                achievements: [
                  "기존 코드를 Spring MVC 패턴에 맞게 리팩토링",
                  "Spring Controller를 통한 DB 통신 관리",
                  "Kendo UI, jQuery 활용한 효율적인 화면 개발",
                ],
                tech: ["JavaScript", "Spring", "MySQL", "Kendo UI", "jQuery"],
                status: "In Progress",
              },
            ].map((project, idx) => (
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
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="text-sm text-slate-400">{project.company} · {project.period}</div>
                  </div>
                  <span className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${
                    project.status === "Completed"
                      ? "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                      : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  }`}>
                    {project.status === "Completed" ? "완료" : "진행중"}
                  </span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm text-slate-400 mb-3 font-medium">주요 성과</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-3">
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

      {/* Education Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mb-16" />
          </motion.div>

          <div className="space-y-8">
            {[
              {
                period: "2021.11 - 2022.02",
                institution: "코드캠프 4기",
                degree: "프론트엔드 과정 수료",
                description: "팀 프로젝트 & 개인 프로젝트 진행, TIL Blogging & 알고리즘 공부",
              },
              {
                period: "2018.08 - 2020.07",
                institution: "City University of New York, Hunter College",
                degree: "Film & Media 전공 (중퇴)",
                description: "영상 제작 및 미디어 이론 학습",
              },
              {
                period: "2013.03 - 2017.02",
                institution: "국민대학교 (서울)",
                degree: "한국역사학과 (졸업)",
                description: "인문학적 사고와 분석력 함양",
              },
            ].map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-slate-800 pl-8 hover:border-cyan-500/60 transition-colors"
              >
                <div className="text-sm text-cyan-400 font-medium mb-2">{edu.period}</div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                <div className="text-slate-400 mb-2">{edu.degree}</div>
                <p className="text-sm text-slate-500">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              새로운 기회와 협업에 열려있습니다. 언제든지 연락주세요.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:bellaglittery@gmail.com"
                className="px-8 py-3.5 bg-white text-slate-900 rounded-lg font-semibold hover:bg-cyan-50 transition-colors shadow-lg"
              >
                bellaglittery@gmail.com
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/Jaeyeon-Kang"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border-2 border-slate-700 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all"
              >
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://just-coding.tistory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border-2 border-slate-700 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all"
              >
                Tech Blog
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-500 text-sm"
            >
              <p className="mb-8">📲 010-7560-1791</p>
              <p>© 2025 강재연. All rights reserved.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
