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
      { name: "Next.js", level: "proficient" },
      { name: "TypeScript", level: "proficient" },
      { name: "HTML/CSS", level: "expert" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "Zustand / React Query", level: "proficient" },
    ],
  },
  {
    category: {
      ko: "Backend & Infra",
      en: "Backend & Infra",
    },
    skills: [
      { name: "Node.js", level: "proficient" },
      { name: "Python / FastAPI", level: "familiar" },
      { name: "MySQL / PostgreSQL", level: "familiar" },
      { name: "Docker", level: "familiar" },
      { name: "GitLab CI/CD / ArgoCD", level: "familiar" },
    ],
  },
  {
    category: {
      ko: "Desktop & Tools",
      en: "Desktop & Tools",
    },
    skills: [
      { name: "Electron.js", level: "proficient" },
      { name: "Git", level: "proficient" },
      { name: "Figma", level: "familiar" },
    ],
  },
  {
    category: {
      ko: "AI & Data",
      en: "AI & Data",
    },
    skills: [
      { name: "OpenAI / Gemini API", level: "proficient" },
      { name: "RAG / Vector Search", level: "familiar" },
      { name: "Prompt Engineering", level: "proficient" },
    ],
  },
];

export const skillLevelLabels: Record<SkillLevel, { ko: string; en: string }> = {
  expert: { ko: "숙련", en: "Expert" },
  proficient: { ko: "능숙", en: "Proficient" },
  familiar: { ko: "익숙", en: "Familiar" },
  learning: { ko: "학습중", en: "Learning" },
};
