const nameInputBlock = {
  en: { name: "Name", nameFormat: "Joe Bloggs" },
  de: { name: "Name", nameFormat: "A Mustermann" },
};

const emailInputBlock = {
  en: { email: "Email Address", emailFormat: "yourname@yourname.com" },
  de: {
    email: "Email Adresse",
    emailFormat: "deinname@deinname.com",
  },
};

const phoneNumberInputBlock = {
  en: {
    phoneNumber: "Phone Number",
    phoneNumberFormat: "0049123456",
  },
  de: {
    phoneNumber: "Telefonnummer",
    phoneNumberFormat: "0049123456",
  },
};

const descriptionBlock = {
  en: {
    description: "Description",
    descriptionPlaceholderText: "Your question...",
    descriptionFormat: "Your question...",
  },
  de: {
    description: "Beschreibung",
    descriptionPlaceholderText: "Ihre Anfrage...",
    descriptionFormat: "Ihre Anfrage...",
  },
};

const softwareIssueBlock = {
  en: {
    softwareIssue: "Software Issue",
    softwareVersion: "Software Version",
    softwareIssueFormat: "1.0.1",
  },
  de: {
    softwareIssue: "Softwarefehler",
    softwareVersion: "Softwarenversion",
  },
};

const errors = {
  en: {
    generalRequirment: "{{field}} must not be empty",
    descriptionTooShort: "Minimum 6 characters please",
    emailValid: "Email must be valid",
    phoneNumberValid: "Please only use numbers",
    phoneNumberTooShort: "Too short",
    softwareFieldEmptyError: "Software version must be included",
    softwareFieldWrongFormat:
      "Software version format should be in the form eg. 1.20.0",
  },
  de: {
    generalRequirment: "{{field}} darf nicht leer sein",
    descriptionTooShort: "Mindestens 6 Buchstaben bitte",
    emailValid: "Email muss gültig sein",
    phoneNumberValid: "Nur Ziffern bitte",
    phoneNumberTooShort: "Zu kurz",
    softwareFieldEmptyError: "Softwareversion muss eingegeben werden",
    softwareFieldWrongFormat:
      "Bitte die Softwarenversion im Format zB 1.20.1 eingeben",
  },
};

const topics = {
  en: {
    topic: "Topic",
    generalQuestion: "General Enquiry",
    callMeBack: "Call Me Back",
  },
  de: {
    topic: "Themenbereich",
    generalQuestion: "Allgemeine Anfrage",
    callMeBack: "Rückruf",
  },
};

export {
  nameInputBlock,
  emailInputBlock,
  phoneNumberInputBlock,
  descriptionBlock,
  softwareIssueBlock,
  errors,
  topics,
};
