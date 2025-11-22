import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import { skillGroups, skillLevelLabels } from "../../../data/skills";

const levelColors = {
  expert: "bg-cyan-500",
  proficient: "bg-cyan-600",
  familiar: "bg-slate-600",
  learning: "bg-slate-700",
} as const;

const SkillsSection = () => {
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
          <SectionHeader titleKey="skills.title" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category.ko}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-slate-800">
                {skillGroup.category[currentLang]}
              </h3>
              <div className="space-y-3">
                {skillGroup.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">{skill.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        levelColors[skill.level]
                      } text-white`}
                    >
                      {skillLevelLabels[skill.level][currentLang]}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
