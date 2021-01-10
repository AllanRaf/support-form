import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: {
      title: "Contact Us",
      name: "Name",
      email: "Email Address",
      description: "Description",
      option: {
        generalQuestion: "GeneralQuestion",
        softwareIssue: "Software Issue",
      },
      generalQuestion: "General Question",
      softwareIssue: "Softwarefehler",
      callMeBack: "Call Me Back",
      generalRequirment: "This is needed {{field}}",
    },
  },
  de: {
    translation: {
      title: "Nehmen Sie Kontact Mit Uns Auf",
      name: "Name",
      email: "Email Adresse",
      description: "Beschreibung",
      generalQuestion: "Allgemeine Frage",
      callMeBack: "Ruckruf",
    },
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "en",
  supportedLngs: ["de", "en"],
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
