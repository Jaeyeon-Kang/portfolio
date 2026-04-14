import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import { profile } from "../../../data/profile";

const highlights = {
  ko: [
    { label: "경력", value: "4년+", sub: "프론트엔드 개발" },
    { label: "프로젝트", value: "10+", sub: "웹/데스크탑/AI" },
    { label: "연구", value: "Zenodo", sub: "AI 페르소나 논문" },
  ],
  en: [
    { label: "Experience", value: "4yr+", sub: "Frontend Dev" },
    { label: "Projects", value: "10+", sub: "Web/Desktop/AI" },
    { label: "Research", value: "Zenodo", sub: "AI Persona Paper" },
  ],
};

const AboutSection = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as "ko" | "en";

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader titleKey="about.title" />

          {/* Highlight numbers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            {highlights[currentLang].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center py-6 px-4 border border-slate-200 rounded-xl bg-slate-50"
              >
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-blue-600 font-medium uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400">{item.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote + paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-lg text-blue-600 font-medium mb-8 pl-4 border-l-2 border-blue-500/40">
              {profile.intro[currentLang].quote}
            </blockquote>
            <div className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
              {profile.intro[currentLang].paragraphs.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
