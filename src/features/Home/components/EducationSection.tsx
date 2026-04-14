import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import { educations } from "../../../data/education";

const typeLabel: Record<string, { ko: string; en: string }> = {
  study: { ko: "교육", en: "Training" },
  bootcamp: { ko: "부트캠프", en: "Bootcamp" },
  degree: { ko: "학위", en: "Degree" },
};

const EducationSection = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as "ko" | "en";

  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader titleKey="education.title" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {educations.map((edu, idx) => (
            <motion.div
              key={edu.institution.ko}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-blue-600 font-mono">
                  {edu.period}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium px-2 py-0.5 bg-slate-100 rounded">
                  {typeLabel[edu.type]?.[currentLang]}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {edu.institution[currentLang]}
              </h3>
              <div className="text-sm text-slate-500 mb-1">
                {edu.degree[currentLang]}
              </div>
              <p className="text-xs text-slate-400">
                {edu.description[currentLang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
