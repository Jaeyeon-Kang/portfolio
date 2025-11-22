import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import { projects } from "../../../data/projects";
import { ExternalLink, GitHub } from "react-feather";

const WorkExperienceSection = () => {
  const { t, i18n } = useTranslation();
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
          <SectionHeader titleKey="work.title" />
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title.ko}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-cyan-900/50 transition-colors"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.title[currentLang]}
                    </h3>
                    {project.links?.url && (
                      <a
                        href={project.links.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <GitHub size={18} />
                      </a>
                    )}
                    {project.links?.doi && (
                      <a
                        href={`https://doi.org/${project.links.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded hover:bg-cyan-500/20 transition-colors"
                      >
                        DOI
                      </a>
                    )}
                  </div>
                  <div className="text-sm text-slate-400">
                    {project.company[currentLang]} · {project.period}
                  </div>
                </div>
                {project.status && (
                  <span
                    className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${
                      project.status === "completed"
                        ? "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                        : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    }`}
                  >
                    {t(
                      `work.${
                        project.status === "completed" ? "completed" : "inProgress"
                      }`
                    )}
                  </span>
                )}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description[currentLang]}
              </p>
              <div className="mb-6">
                <h4 className="text-sm text-slate-400 mb-3 font-medium">
                  {t("work.achievements")}
                </h4>
                <ul className="space-y-2">
                  {project.achievements[currentLang].map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-400 flex items-start gap-3"
                    >
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm text-slate-400 mb-2 font-medium">
                  {t("work.tech")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
