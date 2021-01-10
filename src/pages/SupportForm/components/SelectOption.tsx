import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  ErrorContainer,
  InputContainer,
  UserInputLabel,
  UserInput,
} from "../styles/input-styles";

type SelectOptionProps = {
  selectedOption: string;
};

export const SelectOption: React.FunctionComponent<SelectOptionProps> = ({
  selectedOption,
}) => {
  return (
    <>
      <Field name={selectedOption}>
        {({
          field, // { name, value, onChange, onBlur }
        }) => <UserInput type="text" placeholder="example" {...field} />}
      </Field>
      <ErrorMessage name={selectedOption} component={ErrorContainer} />
    </>
  );
};
