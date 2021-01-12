import React from "react";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import {
  UserInputLabel,
  UserInputDescription,
  UserInput,
} from "../../styles/input-styles";
import { ErrorMessageBlock } from "../ErrorMessageBlock";

type TextInputContainerProps = {
  name: string;
  inputType?: string;
};
//This component can be refactored
export const TextInputContainer: React.FunctionComponent<TextInputContainerProps> = ({
  name,
  inputType = "text",
}) => {
  const { t } = useTranslation();
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
      }) => (
        <>
          <UserInputLabel htmlFor={name}>{t(name)}</UserInputLabel>
          {inputType === "text" ? (
            <UserInput placeholder={t(`${name}Format`)} {...field} />
          ) : (
            <UserInputDescription placeholder={t(`${name}Format`)} {...field} />
          )}
          <ErrorMessageBlock name={name} />
        </>
      )}
    </Field>
  );
};
