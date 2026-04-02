import { useState, useEffect, useCallback } from "react";
import es from "../i18n/translations/es.json";
import en from "../i18n/translations/en.json";

const translations = { es, en };

function getNestedValue(obj, path) {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      return saved === "en" ? "en" : "es";
    }
    return "es";
  });

  useEffect(() => {
    const handleLanguageChange = (e) => {
      const newLang = e.detail?.language;
      if (newLang && (newLang === "es" || newLang === "en")) {
        setLanguage(newLang);
      }
    };

    const handleStorageChange = (e) => {
      if (e.key === "language" && (e.newValue === "es" || e.newValue === "en")) {
        setLanguage(e.newValue);
      }
    };

    window.addEventListener("languageChange", handleLanguageChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const t = useCallback(
    (key) => {
      const value = getNestedValue(translations[language], key);
      if (typeof value === "string") return value;
      if (Array.isArray(value)) return value;
      return key;
    },
    [language]
  );

  const toggleLanguage = useCallback(() => {
    const newLang = language === "es" ? "en" : "es";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.lang = newLang;
    window.dispatchEvent(new CustomEvent("languageChange", { detail: { language: newLang } }));
  }, [language]);

  return { language, t, toggleLanguage };
}
