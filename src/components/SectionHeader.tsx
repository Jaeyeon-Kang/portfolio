import React from "react";
import { useTranslation } from "react-i18next";

interface SectionHeaderProps {
  titleKey: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ titleKey }) => {
  const { t } = useTranslation();
  
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        {t(titleKey)}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mb-16" />
    </>
  );
};

export default SectionHeader;

