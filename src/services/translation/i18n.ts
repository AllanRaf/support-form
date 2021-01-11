import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {
  nameInputBlock,
  emailInputBlock,
  phoneNumberInputBlock,
  descriptionBlock,
  softwareIssueBlock,
  errors,
  topics,
} from "./translation-blocks";

const resources = {
  en: {
    translation: {
      title: "Contact Us",
      send: "send message",
      formSubmitted: "Form Submitted",
      ...nameInputBlock.en,
      ...emailInputBlock.en,
      ...phoneNumberInputBlock.en,
      ...descriptionBlock.en,
      ...softwareIssueBlock.en,
      ...errors.en,
      ...topics.en,
    },
  },
  de: {
    translation: {
      title: "Nehmen Sie Kontact Mit Uns Auf",
      send: "Nachricht Absenden",
      formSubmitted: "Formular Wurde Abgeschickt",
      ...nameInputBlock.de,
      ...emailInputBlock.de,
      ...phoneNumberInputBlock.de,
      ...descriptionBlock.de,
      ...softwareIssueBlock.de,
      ...errors.de,
      ...topics.de,
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
