import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{t("education.tag")}</h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">{t("education.title")}</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {[0, 1].map((idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-heading text-lg font-semibold text-foreground mb-1">{t(`education.${idx}.title`)}</h4>
              <p className="text-muted-foreground text-sm mb-2">{t(`education.${idx}.institution`)}</p>
              <p className="font-mono text-xs text-primary">{t(`education.${idx}.period`)}</p>
              {t(`education.${idx}.note`) !== `education.${idx}.note` && (
                <p className="text-muted-foreground text-xs mt-2">{t(`education.${idx}.note`)}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
