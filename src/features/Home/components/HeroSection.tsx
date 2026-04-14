import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { profile } from "../../../data/profile";
import { GitHub, BookOpen, Mail } from "react-feather";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "ko" | "en";

  return (
    <motion.section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center z-10 max-w-3xl"
      >
        {/* Name */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {profile.name[currentLang]}
        </motion.h1>

        {/* Title + Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl font-medium text-slate-700 tracking-wide mb-2">
            {profile.title[currentLang]}
          </p>
          <p className="text-base md:text-lg text-blue-600 font-medium">
            {profile.subtitle[currentLang]}
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="w-16 h-px bg-slate-300 mx-auto mb-8"
        />

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed mb-10"
        >
          {profile.intro[currentLang].quote}
        </motion.p>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("hero.learnMore")}
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={`mailto:${profile.email}`}
            className="px-6 py-3 border border-slate-200 text-slate-600 rounded-lg font-semibold text-sm hover:border-slate-400 transition-all flex items-center gap-2"
          >
            <Mail size={16} />
            Contact
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-200 text-slate-600 rounded-lg font-semibold text-sm hover:border-slate-400 transition-all flex items-center gap-2"
          >
            <GitHub size={16} />
            GitHub
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-400 text-xs tracking-widest uppercase"
        >
          {t("hero.scrollExplore")}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
