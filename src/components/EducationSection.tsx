import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Tecnólogo en Desarrollo de Software",
    institution: "Instituto Tecnológico de Las Américas (ITLA)",
    period: "2022 – 2026",
    note: "Pensum completado · Graduación: Junio 2026",
  },
  {
    title: "Bachiller Técnico en Electrónica",
    institution: "Instituto Tecnológico de Artes y Oficios (ITAO)",
    period: "2018 – 2021",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{'// Formación'}</h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">Educación</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-heading text-lg font-semibold text-foreground mb-1">{edu.title}</h4>
              <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
              <p className="font-mono text-xs text-primary">{edu.period}</p>
              {edu.note && <p className="text-muted-foreground text-xs mt-2">{edu.note}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
