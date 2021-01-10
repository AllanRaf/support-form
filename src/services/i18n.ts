import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Contact Us",
      name: "Name",
      email: "Email Address",
      topic: "Topic",
      description: "Description",
      generalQuestion: "General Question",
      softwareIssue: "Software Issue",
      softwareVersion: "Software Version",
      softwareIssueFormat: "1.0.1",
      phoneNumber: "Phone Number",
      phoneNumberFormat: "01234",
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
      topic: "Themenbereich",
      description: "Beschreibung",
      generalQuestion: "Allgemeine Frage",
      softwareIssue: "Softwarefehler",
      softwareVersion: "Softwarenversion",
      phoneNumber: "Telefonnummer",
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
