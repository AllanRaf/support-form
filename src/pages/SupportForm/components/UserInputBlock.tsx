import React from "react";
import { Field } from "formik";

import { useTranslation } from "react-i18next";
import {
  InputContainer,
  UserInputLabel,
  UserInputDescription,
  UserInput,
} from "../styles/input-styles";
import { ErrorMessageBlock } from "./ErrorMessageBlock";

type CustomFieldInputProps = {
  name: string;
  inputType?: string;
};

export const UserInputBlock: React.FunctionComponent<CustomFieldInputProps> = ({
  name,
  inputType = "text",
}) => {
  const { t } = useTranslation();
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
      }) => (
        <InputContainer>
          <UserInputLabel htmlFor={name}>{t(name)}</UserInputLabel>
          {inputType === "text" ? (
            <UserInput placeholder={t(`${name}Format`)} {...field} />
          ) : (
            <UserInputDescription placeholder={t(`${name}Format`)} {...field} />
          )}
          <ErrorMessageBlock name={name} />
        </InputContainer>
      )}
    </Field>
  );
};
