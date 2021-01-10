import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: {
      app_name: "Support Page",
      title: "Send Us A Message",
    },
  },
  de: {
    translation: {
      app_name: "SupportFormular",
      title: "Schicken Sie uns eine Nachricht",
    },
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: "de",
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
