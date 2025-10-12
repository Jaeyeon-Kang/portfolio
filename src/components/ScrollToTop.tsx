import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUp } from "react-feather";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 500px 이상 스크롤 시 버튼 표시
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 p-3 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
      aria-label="맨 위로 가기"
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

export default ScrollToTop;

