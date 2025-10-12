import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";

interface Education {
  period: string;
  institution: string;
  degree: string;
  description: string;
}

const educations: Education[] = [
  {
    period: "2013.03 - 2017.02",
    institution: "국민대학교 (서울)",
    degree: "한국역사학과 졸업",
    description: "인문학적 사고와 분석력 함양",
  },
  {
    period: "2018.08 - 2020.07",
    institution: "City University of New York, Hunter College",
    degree: "Film & Media 전공 (2년 수료)",
    description: "영상 제작 및 미디어 이론 학습",
  },
  {
    period: "2021.11 - 2022.02",
    institution: "코드캠프 4기",
    degree: "프론트엔드 개발 과정 수료",
    description: "React 기반 팀 프로젝트 수행 및 알고리즘 학습",
  },
];

const EducationSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader titleKey="education.title" />
        </motion.div>

        <div className="space-y-8">
          {educations.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-slate-800 pl-8 hover:border-cyan-500/60 transition-colors"
            >
              <div className="text-sm text-cyan-400 font-medium mb-2">
                {edu.period}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {edu.institution}
              </h3>
              <div className="text-slate-400 mb-2">{edu.degree}</div>
              <p className="text-sm text-slate-500">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

