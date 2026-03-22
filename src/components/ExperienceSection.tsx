import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ExperienceSection = () => {
  const { t } = useLanguage();

  // Helper to get array of experience indices
  const experienceIndices = [0, 1, 2, 3];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{t("experience.tag")}</h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">{t("experience.title")}</h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experienceIndices.map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-14"
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-4 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />

                <div className="bg-card border border-border rounded-lg p-5 md:p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h4 className="font-heading text-lg font-semibold text-foreground">{t(`experience.${idx}.title`)}</h4>
                    <span className="font-mono text-xs text-primary">{t(`experience.${idx}.period`)}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{t(`experience.${idx}.company`)}</p>
                  <ul className="space-y-1.5">
                    {[0, 1, 2, 3, 4].map((taskIdx) => {
                      const task = t(`experience.${idx}.task.${taskIdx}`);
                      if (task === `experience.${idx}.task.${taskIdx}`) return null; // Simple check if translation exists
                      return (
                        <li key={taskIdx} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          {task}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
