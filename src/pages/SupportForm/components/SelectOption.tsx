import React from "react";
import { Field, ErrorMessage } from "formik";
import { ErrorContainer, UserInput } from "../styles/input-styles";
import { useTranslation } from "react-i18next";

type SelectOptionProps = {
  selectedOption: string;
};

export const SelectOption: React.FunctionComponent<SelectOptionProps> = ({
  selectedOption,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Field name={selectedOption}>
        {({
          field, // { name, value, onChange, onBlur }
        }) => (
          <UserInput
            type="text"
            placeholder={t(`${selectedOption}Format`)}
            {...field}
          />
        )}
      </Field>
      <ErrorMessage name={selectedOption} component={ErrorContainer} />
    </>
  );
};
