import React from "react";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { UserInputLabel, UserInput } from "../styles/input-styles";
import { ErrorMessageBlock } from "./ErrorMessageBlock";

type OptionalInputBlockProps = {
  nameOfInputBlockToShow: string;
};

export const OptionalInputBlock: React.FunctionComponent<OptionalInputBlockProps> = ({
  nameOfInputBlockToShow,
}) => {
  const { t } = useTranslation();
  if (nameOfInputBlockToShow !== "generalQuestion") {
    return (
      <Field name={nameOfInputBlockToShow}>
        {({
          field, // { name, value, onChange, onBlur }
        }) => (
          <>
            <UserInputLabel htmlFor={nameOfInputBlockToShow}>
              {t(nameOfInputBlockToShow)}
            </UserInputLabel>
            <UserInput
              placeholder={t(`${nameOfInputBlockToShow}Format`)}
              {...field}
            />
            <ErrorMessageBlock name={nameOfInputBlockToShow} />
          </>
        )}
      </Field>
    );
  } else {
    return null;
  }
};
