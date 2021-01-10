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
      send: "send message",
      generalRequirment: "{{field}} must not be empty",
      softwareFieldEmptyError: "Software version must be included",
      softwareFieldWrongFormat:
        "Please provide software version in the correct format",
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
      send: "Nachricht Absenden",
      generalRequirment: "{{field}} mussen nicht leer sein",
      softwareFieldEmptyError: "Softwareversion muss eingegeben werden",
      softwareFieldWrongFormat:
        "Bitte die Softwarenversion in die richtige Format eingeben",
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
