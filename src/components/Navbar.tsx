import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { scrollYProgress } = useScroll();
  
  const links = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.education"), href: "#education" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-lg text-foreground hover:text-primary transition-colors">
          E<span className="text-primary">V</span>F
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform">
              {l.label}
            </a>
          ))}
          
          <button 
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="flex items-center gap-1 px-2 py-1 border border-border rounded text-[10px] font-mono text-muted-foreground hover:border-primary hover:text-primary transition-all uppercase"
          >
            {language}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="px-2 py-1 border border-border rounded text-[10px] font-mono text-muted-foreground uppercase"
          >
            {language}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <motion.div
        className="h-[2px] bg-primary origin-left absolute bottom-0 left-0 right-0"
        style={{ scaleX }}
      />

      {/* Mobile menu */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-4 py-4 space-y-3"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
