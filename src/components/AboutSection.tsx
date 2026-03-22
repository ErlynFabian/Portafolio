import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{'// Sobre mí'}</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">Perfil Profesional</h3>
          <motion.div 
            whileHover={{ scale: 1.01, borderColor: "rgba(34, 197, 94, 0.4)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-lg hover:shadow-primary/5 transition-shadow"
          >
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Desarrollador Web Junior con experiencia en el desarrollo y mantenimiento de aplicaciones web, 
              utilizando tecnologías como <span className="text-primary font-medium">HTML, CSS y JavaScript</span>. He participado en proyectos frontend y backend, 
              consumiendo APIs REST y trabajando con bases de datos. Cuento con experiencia en el uso de 
              control de versiones con <span className="text-primary font-medium">Git</span>, colaboración activa con equipos de desarrollo y apoyo en pruebas 
              y despliegues de aplicaciones. Soy una persona responsable, con rápido aprendizaje, buena comunicación 
              y orientación a resultados.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
