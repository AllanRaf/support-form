import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Contact Us",
      name: "Name",
      email: "Email Address",
      description: "Description",
      generalQuestion: "General Question",
      softwareIssue: "Softwarefehler",
      callMeBack: "Call Me Back",
      generalRequirment: "{{field}} must not be empty",
      softwareFieldEmptyError: "Software version must be included",
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
      generalRequirment: "{{field}} mussen nicht leer sein",
      softwareFieldEmptyError: "Softwareversion muss eingegeben werden",
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
