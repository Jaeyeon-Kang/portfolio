export type SkillLevel = "expert" | "proficient" | "familiar" | "learning";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  category: {
    ko: string;
    en: string;
  };
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: {
      ko: "Frontend",
      en: "Frontend",
    },
    skills: [
      { name: "React.js", level: "expert" },
      { name: "JavaScript/TypeScript", level: "proficient" },
      { name: "HTML/CSS", level: "expert" },
      { name: "Next.js", level: "proficient" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "Framer Motion", level: "familiar" },
    ],
  },
  {
    category: {
      ko: "Backend & Database",
      en: "Backend & Database",
    },
    skills: [
      { name: "Node.js", level: "proficient" },
      { name: "Spring/Spring Boot", level: "familiar" },
      { name: "MySQL/MariaDB", level: "familiar" },
      { name: "REST API", level: "proficient" },
    ],
  },
  {
    category: {
      ko: "Desktop & Tools",
      en: "Desktop & Tools",
    },
    skills: [
      { name: "Electron.js", level: "proficient" },
      { name: "Git/SVN", level: "proficient" },
      { name: "Figma", level: "familiar" },
      { name: "GCP/Firebase", level: "familiar" },
    ],
  },
  {
    category: {
      ko: "AI & Learning",
      en: "AI & Learning",
    },
    skills: [
      { name: "LLM API 활용 (예: OpenAI API)", level: "familiar" },
      { name: "RAG / 벡터 검색 패턴", level: "familiar" },
    ],
  },
];

export const skillLevelLabels: Record<SkillLevel, { ko: string; en: string }> = {
  expert: { ko: "숙련", en: "Expert" },
  proficient: { ko: "능숙", en: "Proficient" },
  familiar: { ko: "익숙", en: "Familiar" },
  learning: { ko: "학습중", en: "Learning" },
};
