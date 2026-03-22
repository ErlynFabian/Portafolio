import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(145 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(145 80% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-widest uppercase">
            {`// ${t("hero.role")}`}
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Erlyn</span>
            <br />
            <span className="text-primary">Valerio</span>
            <span className="text-foreground"> Fabian</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground"
        >
          <a href="mailto:Erlinvfabian01@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Erlinvfabian01@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            829-563-3977
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Santo Domingo Norte
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
