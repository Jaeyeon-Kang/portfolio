import { motion } from "framer-motion";
import SectionHeader from "../../../components/SectionHeader";

const careers = [
  {
    period: "2022.03 - 현재",
    company: "아우라네트웍",
    position: "Frontend Developer (주임)",
    description:
      "콜센터 인프라 소프트웨어 (CTI, 통계, 소프트폰) 웹 전반 유지보수 및 관리, 데스크탑 앱 API 및 프론트엔드 개발",
  },
  {
    period: "2020.08 - 2021.11",
    company: "한국농수산유통식품공사",
    position: "PD",
    description: "기업 대상 광고 영상 기획, 제작, 조감독 등의 역할 수행",
  },
  {
    period: "2016.03 - 2020.04",
    company: "Photography & Marketing (해외)",
    position: "Freelancer",
    description: "패션기업 대상으로 마케팅 전략 수립 & 사진 촬영 업무",
  },
];

const CareerSection = () => {
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
              key={career.company}
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
                {career.company}
              </h3>
              <div className="text-slate-400 mb-3">{career.position}</div>
              <p className="text-slate-400 leading-relaxed">
                {career.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;

