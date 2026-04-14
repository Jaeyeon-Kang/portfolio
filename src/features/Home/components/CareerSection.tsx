import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import { careers } from "../../../data/careers";

const CareerSection = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as "ko" | "en";

  return (
    <section className="py-28 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader titleKey="career.title" />
        </motion.div>

        <div className="space-y-0">
          {careers.map((career, idx) => (
            <motion.div
              key={career.company.ko}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-10 last:pb-0 border-l border-slate-300 ml-2"
            >
              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-slate-50" />

              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-2">
                <h3 className="text-xl font-bold text-slate-900">
                  {career.company[currentLang]}
                </h3>
                <span className="text-sm text-blue-600 font-mono">
                  {career.period}
                </span>
              </div>

              <div className="text-sm text-slate-500 font-medium mb-2">
                {career.position[currentLang]}
              </div>

              <p className="text-sm text-slate-500 leading-relaxed">
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
