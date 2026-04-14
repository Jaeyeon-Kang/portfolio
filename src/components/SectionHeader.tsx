import React from "react";
import { useTranslation } from "react-i18next";

interface SectionHeaderProps {
  titleKey: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ titleKey }) => {
  const { t } = useTranslation();
  
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
        {t(titleKey)}
      </h2>
      <div className="w-12 h-0.5 bg-blue-600" />
    </div>
  );
};

export default SectionHeader;

