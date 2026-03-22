import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{'// Contacto'}</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">¿Trabajamos juntos?</h3>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Estoy abierto a nuevas oportunidades. No dudes en contactarme.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:Erlinvfabian01@gmail.com"
              className="flex items-center gap-3 bg-card border border-border rounded-lg px-6 py-4 hover:border-primary/50 transition-colors group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors text-sm">
                Erlinvfabian01@gmail.com
              </span>
            </a>
            <div className="flex items-center gap-3 bg-card border border-border rounded-lg px-6 py-4">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">829-563-3977</span>
            </div>
            <div className="flex items-center gap-3 bg-card border border-border rounded-lg px-6 py-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">Santo Domingo Norte</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
