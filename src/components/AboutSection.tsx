import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{t("about.tag")}</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">{t("about.title")}</h3>
          <motion.div 
            whileHover={{ scale: 1.01, borderColor: "rgba(34, 197, 94, 0.4)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-lg hover:shadow-primary/5 transition-shadow"
          >
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {t("about.content")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
