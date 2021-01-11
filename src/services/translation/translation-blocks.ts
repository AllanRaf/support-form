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
    phoneNumberFormat: "01234",
  },
  de: {
    phoneNumber: "Telefonnummer",
    phoneNumberFormat: "01234",
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
    softwareFieldEmptyError: "Software version must be included",
    softwareFieldWrongFormat:
      "Please provide software version in the correct format",
  },
  de: {
    generalRequirment: "{{field}} mussen nicht leer sein",
    softwareFieldEmptyError: "Softwareversion muss eingegeben werden",
    softwareFieldWrongFormat:
      "Bitte die Softwarenversion in die Form 1.0.1 eingeben",
  },
};

const topics = {
  en: {
    topic: "Topic",
    generalQuestion: "General Question",
    callMeBack: "Call Me Back",
  },
  de: {
    topic: "Themenbereich",
    generalQuestion: "Allgemeine Frage",
    callMeBack: "Ruckruf",
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
