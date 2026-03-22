import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  es: {
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "hero.role": "Desarrollador Web Junior",
    "hero.description": "Construyo experiencias web modernas con HTML, CSS, JavaScript y más. Apasionado por el código limpio y el aprendizaje continuo.",
    "about.title": "Perfil Profesional",
    "about.tag": "// Sobre mí",
    "about.content": "Desarrollador Web Junior con experiencia en el desarrollo y mantenimiento de aplicaciones web, utilizando tecnologías como HTML, CSS y JavaScript. He participado en proyectos frontend y backend, consumiendo APIs REST y trabajando con bases de datos. Cuento con experiencia en el uso de control de versiones con Git, colaboración activa con equipos de desarrollo y apoyo en pruebas y despliegues de aplicaciones. Soy una persona responsable, con rápido aprendizaje, buena comunicación y orientación a resultados.",
    "experience.title": "Experiencia Laboral",
    "experience.tag": "// Trayectoria",
    "experience.0.title": "Desarrollador Web Junior",
    "experience.0.company": "Rentary Group",
    "experience.0.period": "Jun 2025 – Ene 2026",
    "experience.0.task.0": "Desarrollo y mantenimiento de aplicaciones web",
    "experience.0.task.1": "Implementación de interfaces usando HTML, CSS y JavaScript",
    "experience.0.task.2": "Soporte en proyectos frontend y backend",
    "experience.0.task.3": "Consumo de APIs y manejo básico de bases de datos",
    "experience.0.task.4": "Corrección de errores y mejoras de funcionalidades existentes",
    "experience.1.title": "Asistente de Desarrollo de Software",
    "experience.1.company": "ITLA – Santo Domingo Norte",
    "experience.1.period": "Ene 2024 – Mar 2024",
    "experience.1.task.0": "Desarrollo de una aplicación de gestión de inventario con Java y MySQL",
    "experience.1.task.1": "Implementación de funciones CRUD",
    "experience.1.task.2": "Trabajo colaborativo aplicando metodologías ágiles",
    "experience.2.title": "Servicio al Cliente",
    "experience.2.company": "Centro de Internet Larilei",
    "experience.2.period": "2022 – 2024",
    "experience.2.task.0": "Encargado de caja chica",
    "experience.2.task.1": "Atención y canalización de necesidades de clientes",
    "experience.2.task.2": "Supervisión de máquinas",
    "experience.3.title": "Soporte Técnico / Ventas",
    "experience.3.company": "Moda Wear Shop",
    "experience.3.period": "2021 – 2022",
    "experience.3.task.0": "Atención al cliente, cotización y envíos",
    "experience.3.task.1": "Mantenimiento y actualización del catálogo web",
    "skills.title": "Habilidades",
    "skills.tag": "// Competencias",
    "skills.tech": "Técnicas",
    "skills.soft": "Blandas",
    "skills.courses": "Cursos",
    "skills.soft.0": "Liderazgo",
    "skills.soft.1": "Colaboración",
    "skills.soft.2": "Aprendizaje Ágil",
    "skills.soft.3": "Trabajo en Equipo",
    "skills.soft.4": "Comunicación",
    "skills.soft.5": "Autodidacta",
    "skills.soft.6": "Curiosidad",
    "skills.soft.7": "Iniciativa",
    "skills.courses.title": "Cursos",
    "skills.courses.0": "SQL Intermediate",
    "skills.courses.1": "Introducción a SQL",
    "skills.courses.2": "Tech for Everyone",
    "education.title": "Educación",
    "education.tag": "// Formación",
    "education.0.title": "Tecnólogo en Desarrollo de Software",
    "education.0.institution": "Instituto Tecnológico de Las Américas (ITLA)",
    "education.0.period": "2022 – 2026",
    "education.0.note": "Pensum completado · Graduación: Junio 2026",
    "education.1.title": "Bachiller Técnico en Electrónica",
    "education.1.institution": "Instituto Tecnológico de Artes y Oficios (ITAO)",
    "education.1.period": "2018 – 2021",
    "contact.title": "Contacto",
    "contact.tag": "// Hablemos",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.location": "Santo Domingo Norte",
    "contact.description": "Estoy abierto a nuevas oportunidades. No dudes en contactarme.",
    "footer.rights": "Todos los derechos reservados",
    "footer.description": "Desarrollador Web apasionado por crear experiencias digitales innovadoras y eficientes.",
    "footer.madeWith": "Hecho con",
    "footer.and": "y",
    "404.title": "¡Vaya! Página no encontrada",
    "404.back": "Volver al Inicio",
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.role": "Junior Web Developer",
    "hero.description": "I build modern web experiences with HTML, CSS, JavaScript, and more. Passionate about clean code and continuous learning.",
    "about.title": "Professional Profile",
    "about.tag": "// About me",
    "about.content": "Junior Web Developer with experience in the development and maintenance of web applications, using technologies such as HTML, CSS, and JavaScript. I have participated in frontend and backend projects, consuming REST APIs and working with databases. I have experience using Git for version control, active collaboration with development teams, and support in testing and app deployments. I am a responsible person, a fast learner, with good communication and results-oriented.",
    "experience.title": "Work Experience",
    "experience.tag": "// My Journey",
    "experience.0.title": "Junior Web Developer",
    "experience.0.company": "Rentary Group",
    "experience.0.period": "Jun 2025 – Jan 2026",
    "experience.0.task.0": "Development and maintenance of web applications",
    "experience.0.task.1": "Implementation of interfaces using HTML, CSS, and JavaScript",
    "experience.0.task.2": "Support on frontend and backend projects",
    "experience.0.task.3": "API consumption and basic database management",
    "experience.0.task.4": "Bug fixing and improvement of existing features",
    "experience.1.title": "Software Development Assistant",
    "experience.1.company": "ITLA – Santo Domingo Norte",
    "experience.1.period": "Jan 2024 – Mar 2024",
    "experience.1.task.0": "Development of an inventory management app with Java and MySQL",
    "experience.1.task.1": "Implementation of CRUD functions",
    "experience.1.task.2": "Collaborative work using agile methodologies",
    "experience.2.title": "Customer Service",
    "experience.2.company": "Larilei Internet Center",
    "experience.2.period": "2022 – 2024",
    "experience.2.task.0": "In charge of petty cash",
    "experience.2.task.1": "Attention and channeling customer needs",
    "experience.2.task.2": "Machine supervision",
    "experience.3.title": "Technical Support / Sales",
    "experience.3.company": "Moda Wear Shop",
    "experience.3.period": "2021 – 2022",
    "experience.3.task.0": "Customer service, quoting and shipping",
    "experience.3.task.1": "Maintenance and update of the web catalog",
    "skills.title": "Skills",
    "skills.tag": "// Competencies",
    "skills.tech": "Technical",
    "skills.soft": "Soft",
    "skills.courses": "Courses",
    "skills.soft.0": "Leadership",
    "skills.soft.1": "Collaboration",
    "skills.soft.2": "Agile Learning",
    "skills.soft.3": "Teamwork",
    "skills.soft.4": "Communication",
    "skills.soft.5": "Self-taught",
    "skills.soft.6": "Curiosity",
    "skills.soft.7": "Initiative",
    "skills.courses.title": "Courses",
    "skills.courses.0": "SQL Intermediate",
    "skills.courses.1": "Introduction to SQL",
    "skills.courses.2": "Tech for Everyone",
    "education.title": "Education",
    "education.tag": "// Background",
    "education.0.title": "Software Development Technologist",
    "education.0.institution": "Americas Institute of Technology (ITLA)",
    "education.0.period": "2022 – 2026",
    "education.0.note": "Studies completed · Graduation: June 2026",
    "education.1.title": "Technical Bachelor in Electronics",
    "education.1.institution": "Institute of Arts and Crafts (ITAO)",
    "education.1.period": "2018 – 2021",
    "contact.title": "Contact",
    "contact.tag": "// Let's talk",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.location": "Santo Domingo Norte",
    "contact.description": "I am open to new opportunities. Feel free to contact me.",
    "footer.rights": "All rights reserved",
    "footer.description": "Web Developer passionate about creating innovative and efficient digital experiences.",
    "footer.madeWith": "Made with",
    "footer.and": "and",
    "404.title": "Oops! Page not found",
    "404.back": "Return to Home",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
