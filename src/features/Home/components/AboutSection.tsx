import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader titleKey="about.title" />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                Frontend Developer
              </h3>
              <p className="text-slate-400 leading-relaxed">
                3년차 프론트엔드 개발자로 React.js, Electron.js 기반의 웹/데스크탑 애플리케이션을 개발합니다.
                필요에 따라 Node.js, Spring, MySQL을 활용하여 백엔드 협업 및 개발도 가능합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                Collaboration & Growth
              </h3>
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
            className="bg-gradient-to-br from-cyan-950/50 to-teal-950/40 border border-cyan-900/50 rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Why AI Product Engineer?
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              2년간의 프론트엔드 개발 경험을 통해 사용자 인터페이스와 경험의 중요성을 깊이 이해하게 되었습니다.
              이제는{" "}
              <span className="text-cyan-400 font-semibold">
                AI 기술을 프론트엔드에 접목
              </span>
              하여 더욱 인텔리전트하고 사용자 친화적인 제품을 만들고자 합니다.
            </p>
            <p className="text-slate-300 leading-relaxed">
              LLM API 통합, RAG 기반 검색 시스템, AI 챗봇 등 AI를 실제 제품에 녹여내는
              <span className="text-cyan-400 font-semibold"> AI Product Engineer</span>로 성장하고 있습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

