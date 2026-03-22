import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const technicalSkills = [
  { name: "HTML", level: 50 },
  { name: "CSS", level: 50 },
  { name: "JavaScript", level: 30 },
  { name: "SQL", level: 45 },
  { name: "Git", level: 75 },
  { name: "APIs REST", level: 30 },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{t("skills.tag")}</h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">{t("skills.title")}</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6">{t("skills.tech")}</h4>
            <div className="space-y-4">
              {technicalSkills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-sm text-foreground">{skill.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft skills + Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6">{t("skills.soft")}</h4>
            <div className="flex flex-wrap gap-2 mb-10">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <span key={i} className="px-3 py-1.5 border border-border rounded-full text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors">
                  {t(`skills.soft.${i}`)}
                </span>
              ))}
            </div>

            <h4 className="font-heading text-lg font-semibold text-foreground mb-6">{t("skills.courses")}</h4>
            <ul className="space-y-2">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {t(`skills.courses.${i}`)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
