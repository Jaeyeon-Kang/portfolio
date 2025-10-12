import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";

type SkillLevel = "Expert" | "Proficient" | "Familiar" | "Learning";

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "JavaScript/TypeScript", level: "Proficient" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "Next.js", level: "Familiar" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "Framer Motion", level: "Familiar" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", level: "Proficient" },
      { name: "Spring/Spring Boot", level: "Familiar" },
      { name: "MySQL/MariaDB", level: "Familiar" },
      { name: "REST API", level: "Proficient" },
    ],
  },
  {
    category: "Desktop & Tools",
    skills: [
      { name: "Electron.js", level: "Proficient" },
      { name: "Git/SVN", level: "Proficient" },
      { name: "Figma", level: "Familiar" },
      { name: "GCP/Firebase", level: "Familiar" },
    ],
  },
  {
    category: "AI & Learning",
    skills: [
      { name: "OpenAI API", level: "Learning" },
      { name: "LangChain", level: "Learning" },
    ],
  },
];

const levelColors: Record<SkillLevel, string> = {
  Expert: "bg-cyan-500",
  Proficient: "bg-cyan-600",
  Familiar: "bg-slate-600",
  Learning: "bg-slate-700",
};

const SkillsSection = () => {
  const { t } = useTranslation();
  
  const levelLabels: Record<SkillLevel, string> = {
    Expert: t("skills.levels.expert"),
    Proficient: t("skills.levels.proficient"),
    Familiar: t("skills.levels.familiar"),
    Learning: t("skills.levels.learning"),
  };
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
              <div className="space-y-3">
                {skillGroup.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">{skill.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        levelColors[skill.level]
                      } text-white`}
                    >
                      {levelLabels[skill.level]}
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
