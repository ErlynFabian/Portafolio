import { motion } from "framer-motion";

const experiences = [
  {
    title: "Desarrollador Web Junior",
    company: "Rentary Group",
    period: "Jun 2025 – Ene 2026",
    tasks: [
      "Desarrollo y mantenimiento de aplicaciones web",
      "Implementación de interfaces usando HTML, CSS y JavaScript",
      "Soporte en proyectos frontend y backend",
      "Consumo de APIs y manejo básico de bases de datos",
      "Corrección de errores y mejoras de funcionalidades existentes",
    ],
  },
  {
    title: "Asistente de Desarrollo de Software",
    company: "ITLA – Santo Domingo Norte",
    period: "Ene 2024 – Mar 2024",
    tasks: [
      "Desarrollo de una aplicación de gestión de inventario con Java y MySQL",
      "Implementación de funciones CRUD",
      "Trabajo colaborativo aplicando metodologías ágiles",
    ],
  },
  {
    title: "Servicio al Cliente",
    company: "Centro de Internet Larilei",
    period: "2022 – 2024",
    tasks: [
      "Encargado de caja chica",
      "Atención y canalización de necesidades de clientes",
      "Supervisión de máquinas",
    ],
  },
  {
    title: "Soporte Técnico / Ventas",
    company: "Moda Wear Shop",
    period: "2021 – 2022",
    tasks: [
      "Atención al cliente, cotización y envíos",
      "Mantenimiento y actualización del catálogo web",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{'// Trayectoria'}</h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">Experiencia Laboral</h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-14"
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-4 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />

                <div className="bg-card border border-border rounded-lg p-5 md:p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h4 className="font-heading text-lg font-semibold text-foreground">{exp.title}</h4>
                    <span className="font-mono text-xs text-primary">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {task}
                      </li>
                    ))}
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
