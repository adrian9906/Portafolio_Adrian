import { useLanguage } from "../hooks/useLanguage";
import "flag-icons/css/flag-icons.min.css";

export default function LanguageSelector() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 bg-[#0088cc] dark:bg-[#C8FF00] text-white rounded-xl  hover:opacity-80 transition-opacity "
      aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
      title={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <span className="text-lg leading-none">
        {language === "es" ? <span class="fi fi-us"></span> : <span class="fi fi-cu"></span>}
      </span>
      <span className="text-sm font-medium text-white dark:text-black">
        {language === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
}
