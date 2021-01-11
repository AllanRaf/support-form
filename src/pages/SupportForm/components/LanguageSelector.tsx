import React, { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../styles/input-styles";

export const LanguageSelector: React.FunctionComponent = () => {
  const { i18n } = useTranslation();
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <LanguageSelect name="language" onChange={handleChange}>
      <option label="🇩🇪" value="de" />
      <option label="🇬🇧" value="en" />
    </LanguageSelect>
  );
};
