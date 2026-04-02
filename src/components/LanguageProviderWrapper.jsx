import { LanguageProvider } from "../context/LanguageContext";

export default function LanguageProviderWrapper({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
