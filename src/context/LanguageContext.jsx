import { createContext, useContext, useState, useEffect, useCallback } from "react";
import es from "../i18n/translations/es.json";
import en from "../i18n/translations/en.json";

const translations = { es, en };

const LanguageContext = createContext(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

function getNestedValue(obj, path) {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("language");
    if (saved && (saved === "es" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("language", language);
      document.documentElement.lang = language;
      window.dispatchEvent(new CustomEvent("languageChange", { detail: { language } }));
    }
  }, [language, isClient]);

  const t = useCallback(
    (key) => {
      const value = getNestedValue(translations[language], key);
      return typeof value === "string" ? value : key;
    },
    [language]
  );

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
