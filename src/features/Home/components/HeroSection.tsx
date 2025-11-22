import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { profile } from "../../../data/profile";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "ko" | "en";

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-cyan-400/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000)],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center z-10 max-w-4xl"
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {profile.name[currentLang]}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="space-y-4 mb-12"
        >
          <p className="text-xl md:text-2xl font-light text-slate-300 tracking-wide">
            {profile.title[currentLang]}
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
            <p className="text-lg md:text-xl text-cyan-400 font-medium">
              {profile.subtitle[currentLang]}
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {profile.intro[currentLang].quote}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-white text-slate-900 rounded-lg font-semibold hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("hero.learnMore")}
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-500 text-sm"
        >
          {t("hero.scrollExplore")}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;

