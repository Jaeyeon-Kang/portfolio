import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import { educations } from "../../../data/education";

const EducationSection = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as "ko" | "en";

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader titleKey="education.title" />
        </motion.div>

        <div className="space-y-8">
          {educations.map((edu, idx) => (
            <motion.div
              key={edu.institution.ko}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-slate-800 pl-8 hover:border-cyan-500/60 transition-colors"
            >
              <div className="text-sm text-cyan-400 font-medium mb-2">
                {edu.period}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {edu.institution[currentLang]}
              </h3>
              <div className="text-slate-400 mb-2">{edu.degree[currentLang]}</div>
              <p className="text-sm text-slate-500">{edu.description[currentLang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
