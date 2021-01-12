import React from "react";
import { SubmitButton } from "../styles";
import { InputContainer } from "../../../styles";
import { useTranslation } from "react-i18next";

export const ButtonBlock = ({ isSubmitting }) => {
  const { t } = useTranslation();
  return (
    <InputContainer>
      <SubmitButton type="submit" disabled={isSubmitting} value={t("send")} />
    </InputContainer>
  );
};

export default ButtonBlock;
