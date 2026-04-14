import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import { projects, Project } from "../../../data/projects";
import { ExternalLink, GitHub } from "react-feather";

const ProjectCard = ({
  project,
  idx,
  currentLang,
  t,
}: {
  project: Project;
  idx: number;
  currentLang: "ko" | "en";
  t: (key: string) => string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: idx * 0.08 }}
    viewport={{ once: true }}
    className="border border-slate-200 rounded-xl p-6 md:p-8 hover:border-slate-300 hover:shadow-sm transition-all bg-white"
  >
    {/* Header */}
    <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
          <h3 className="text-lg font-bold text-slate-900 leading-tight">
            {project.title[currentLang]}
          </h3>
          <div className="flex items-center gap-1.5">
            {project.links?.url && (
              <a
                href={project.links.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <ExternalLink size={15} />
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <GitHub size={15} />
              </a>
            )}
            {project.links?.doi && (
              <a
                href={`https://doi.org/${project.links.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] px-1.5 py-0.5 text-blue-600 border border-blue-200 rounded hover:bg-blue-50 transition-colors font-mono"
              >
                DOI
              </a>
            )}
          </div>
        </div>
        <p className="text-xs text-slate-400 font-mono">
          {project.company[currentLang]} · {project.period}
        </p>
      </div>
      {project.status && (
        <span
          className={`px-2.5 py-1 text-[10px] font-medium rounded-full whitespace-nowrap uppercase tracking-wider ${
            project.status === "completed"
              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
              : "bg-blue-50 text-blue-600 border border-blue-200"
          }`}
        >
          {t(
            `work.${project.status === "completed" ? "completed" : "inProgress"}`
          )}
        </span>
      )}
    </div>

    {/* Description */}
    <p className="text-sm text-slate-500 mb-5 leading-relaxed">
      {project.description[currentLang]}
    </p>

    {/* Achievements */}
    <div className="mb-5">
      <h4 className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider">
        {t("work.achievements")}
      </h4>
      <ul className="space-y-2">
        {project.achievements[currentLang].map((achievement, i) => (
          <li
            key={i}
            className="text-sm text-slate-600 flex items-start gap-2.5 leading-relaxed"
          >
            <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-blue-400" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-1.5">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="px-2.5 py-1 text-[11px] text-slate-500 rounded-md bg-slate-50 border border-slate-200 font-mono"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectGroup = ({
  titleKey,
  projects: groupProjects,
  currentLang,
  t,
}: {
  titleKey: string;
  projects: Project[];
  currentLang: "ko" | "en";
  t: (key: string) => string;
}) => {
  if (groupProjects.length === 0) return null;

  return (
    <div className="mb-14 last:mb-0">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-8"
      >
        <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
          {t(titleKey)}
        </h3>
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-400 font-mono">{groupProjects.length}</span>
      </motion.div>
      <div className="space-y-6">
        {groupProjects.map((project, idx) => (
          <ProjectCard
            key={project.title.ko}
            project={project}
            idx={idx}
            currentLang={currentLang}
            t={t}
          />
        ))}
      </div>
    </div>
  );
};

const WorkExperienceSection = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "ko" | "en";

  const workProjects = projects.filter((p) => p.type === "work");
  const sideProjects = projects.filter((p) => p.type === "side");
  const researchProjects = projects.filter((p) => p.type === "research");

  return (
    <section className="py-28 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader titleKey="work.title" />
        </motion.div>

        <ProjectGroup
          titleKey="work.workProjects"
          projects={workProjects}
          currentLang={currentLang}
          t={t}
        />
        <ProjectGroup
          titleKey="work.sideProjects"
          projects={sideProjects}
          currentLang={currentLang}
          t={t}
        />
        <ProjectGroup
          titleKey="work.researchProjects"
          projects={researchProjects}
          currentLang={currentLang}
          t={t}
        />
      </div>
    </section>
  );
};

export default WorkExperienceSection;
