import { motion } from "framer-motion";
import { useState } from "react";
import { GitHub, BookOpen, Phone, Mail } from "react-feather";
import { useTranslation } from "react-i18next";
import { profile } from "../../../data/profile";

const ContactSection = () => {
  const { t } = useTranslation();
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section className="py-28 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {t("contact.title")}
          </h2>
          <p className="text-sm text-slate-500 mb-10 max-w-lg mx-auto">
            {t("contact.description")}
          </p>

          {/* Primary CTA */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors mb-8"
          >
            <Mail size={16} />
            {profile.email}
          </motion.a>

          {/* Links */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-all flex items-center gap-2"
            >
              <GitHub size={15} />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={profile.techBlog}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-all flex items-center gap-2"
            >
              <BookOpen size={15} />
              Tech Blog
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={profile.aiBlog}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-all flex items-center gap-2"
            >
              <BookOpen size={15} />
              AI Blog
            </motion.a>
          </div>

          {/* Phone */}
          <div className="mb-8">
            {showPhone ? (
              <p className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <Phone size={14} />
                {profile.phone}
              </p>
            ) : (
              <button
                onClick={() => setShowPhone(true)}
                className="text-sm text-slate-400 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <Phone size={14} />
                {t("contact.showPhone")}
              </button>
            )}
          </div>

          <p className="text-xs text-slate-400">{t("contact.copyright")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
