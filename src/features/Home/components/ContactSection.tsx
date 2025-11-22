import { motion } from "framer-motion";
import { useState } from "react";
import { GitHub, BookOpen, Phone } from "react-feather";
import { useTranslation } from "react-i18next";
import { profile } from "../../../data/profile";

const ContactSection = () => {
  const { t } = useTranslation();
  const [showPhone, setShowPhone] = useState(false);
  return (
    <section className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${profile.email}`}
              className="px-8 py-3.5 bg-white text-slate-900 rounded-lg font-semibold hover:bg-cyan-50 transition-colors shadow-lg flex items-center gap-2"
            >
              {profile.email}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border-2 border-slate-700 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-2"
            >
              <GitHub size={18} />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={profile.techBlog}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border-2 border-slate-700 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-2"
            >
              <BookOpen size={18} />
              Tech Blog
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm"
          >
            <div className="mb-8">
              {showPhone ? (
                <p className="flex items-center justify-center gap-2">
                  <Phone size={16} />
                  {profile.phone}
                </p>
              ) : (
                <button
                  onClick={() => setShowPhone(true)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2 mx-auto"
                >
                  <Phone size={16} />
                  {t("contact.showPhone")}
                </button>
              )}
            </div>
            <p>{t("contact.copyright")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

