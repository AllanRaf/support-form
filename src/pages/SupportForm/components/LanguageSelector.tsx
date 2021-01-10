import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../styles/input-styles";

export const LanguageSelector: React.FunctionComponent = () => {
  const { i18n } = useTranslation();
  const handleChange = (event) => {
    console.log("language change", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <LanguageSelect name="language" onChange={handleChange}>
      <option label="🇩🇪" value="de" />
      <option label="🇬🇧" value="en" />
    </LanguageSelect>
  );
};
