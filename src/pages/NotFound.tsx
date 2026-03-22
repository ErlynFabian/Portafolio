import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center p-8 bg-card border border-border rounded-xl shadow-2xl">
        <h1 className="mb-4 text-8xl font-black text-primary animate-pulse tracking-tighter">404</h1>
        <p className="mb-6 text-xl text-muted-foreground font-medium">{t("404.title")}</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
        >
          {t("404.back")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
