import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

const sections = [
  { id: "hero", labelKey: "nav.home" },
  { id: "about", labelKey: "nav.about" },
  { id: "career", labelKey: "nav.career" },
  { id: "skills", labelKey: "nav.skills" },
  { id: "work", labelKey: "nav.projects" },
  { id: "education", labelKey: "nav.education" },
  { id: "contact", labelKey: "nav.contact" },
];

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // 200px 이상 스크롤 시 네비게이션 표시
      setIsVisible(window.scrollY > 200);

      // 현재 섹션 찾기
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id === "hero" ? "root" : id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-white font-bold text-lg cursor-pointer"
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.05 }}
          >
            {t("hero.name")}
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {sections.slice(1).map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === section.id
                    ? "text-cyan-400 bg-slate-800"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {t(section.labelKey)}
              </button>
            ))}
            <LanguageToggle />
          </div>

          {/* 모바일 메뉴는 생략 - 필요시 추가 */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

