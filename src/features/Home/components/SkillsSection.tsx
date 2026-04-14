import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import { skillGroups, skillLevelLabels, SkillLevel } from "../../../data/skills";

const levelWidth: Record<SkillLevel, string> = {
  expert: "w-full",
  proficient: "w-3/4",
  familiar: "w-1/2",
  learning: "w-1/4",
};

const levelBarColor: Record<SkillLevel, string> = {
  expert: "bg-blue-600",
  proficient: "bg-blue-400",
  familiar: "bg-slate-400",
  learning: "bg-slate-300",
};

const SkillsSection = () => {
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
          <SectionHeader titleKey="skills.title" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category.ko}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-5">
                {skillGroup.category[currentLang]}
              </h3>
              <div className="space-y-4">
                {skillGroup.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + sIdx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-slate-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {skillLevelLabels[skill.level][currentLang]}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.2 + sIdx * 0.05 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${levelWidth[skill.level]} ${levelBarColor[skill.level]}`}
                      />
                    </div>
                  </motion.div>
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
