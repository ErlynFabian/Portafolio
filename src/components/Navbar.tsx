import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

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
          <button onClick={() => setOpen(!open)} className="text-foreground relative w-8 h-8 flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <Menu className="w-5 h-5" />
            </motion.div>
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: open ? 0 : -90, opacity: open ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <X className="w-5 h-5" />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <motion.div
        className="h-[2px] bg-primary origin-left absolute bottom-0 left-0 right-0"
        style={{ scaleX }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-14 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border px-4 py-4 space-y-1 overflow-hidden shadow-xl"
          >
            {links.map((l, i) => (
              <motion.a 
                key={l.href} 
                href={l.href} 
                onClick={() => setOpen(false)} 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors border-b border-border/20 last:border-0"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
