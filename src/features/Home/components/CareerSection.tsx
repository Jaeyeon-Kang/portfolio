import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import { careers } from "../../../data/careers";

const CareerSection = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as "ko" | "en";

  return (
    <section className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader titleKey="career.title" />
        </motion.div>

        <div className="space-y-12">
          {careers.map((career, idx) => (
            <motion.div
              key={career.company.ko}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative border-l-2 border-cyan-500/30 pl-8 hover:border-cyan-500/60 transition-colors group"
            >
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform" />
              <div className="text-sm text-cyan-400 font-medium mb-2">
                {career.period}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {career.company[currentLang]}
              </h3>
              <div className="text-slate-400 mb-3">
                {career.position[currentLang]}
              </div>
              <p className="text-slate-400 leading-relaxed">
                {career.description[currentLang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
