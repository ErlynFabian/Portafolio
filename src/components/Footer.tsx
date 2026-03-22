import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="w-full py-12 px-6 border-t border-border/40 bg-background/50 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent italic tracking-tighter">
            EF.
          </h2>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
            {t("footer.description")}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ErlynFabian"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border/50 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/erlyn-fabian-24767132b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border/50 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:erlinvfabian01@gmail.com"
              className="p-2 rounded-full border border-border/50 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">{t("nav.about")}</a>
            <a href="#experience" className="hover:text-primary transition-colors">{t("nav.experience")}</a>
            <a href="#skills" className="hover:text-primary transition-colors">{t("nav.skills")}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t("nav.contact")}</a>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm font-medium">
            &copy; {currentYear} Erlyn Valerio Fabian
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            {t("footer.madeWith")} <span className="text-red-500 animate-pulse">💚</span> {t("footer.and")} React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
