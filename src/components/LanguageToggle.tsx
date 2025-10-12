import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe } from "react-feather";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ko" ? "en" : "ko";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all"
    >
      <Globe size={16} />
      {i18n.language === "ko" ? "EN" : "KO"}
    </motion.button>
  );
};

export default LanguageToggle;

