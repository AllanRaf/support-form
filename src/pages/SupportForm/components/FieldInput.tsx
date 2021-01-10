import React from "react";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

type CustomFieldInputProps = {
  name: string;
  inputType?: string;
};

export const CustomFieldInput: React.FunctionComponent<CustomFieldInputProps> = ({
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
          <UserInputLabel>{t(name)}</UserInputLabel>
          {inputType === "text" ? (
            <UserInput type="text" placeholder={name} {...field} />
          ) : (
            <UserInputDescription
              name="description"
              placeholder="Please describe"
              {...field}
            />
          )}
          <ErrorMessage name={name} component={ErrorContainer} />
        </InputContainer>
      )}
    </Field>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1rem;
  padding-left: 5rem;
`;

const UserInputLabel = styled.label`
  color: grey;
  font-size: 1.5rem;
`;

const UserInput = styled.input`
  width: 25%;
  background-color: grey;
  color: green;
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 5px;
  display: block;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid grey;
`;

const ErrorContainer = styled.div`
  font-size: 1.5rem;
  color: red;
`;

const UserInputDescription = styled.textarea`
  width: 25%;
  color: black;
`;
