import React from "react";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ErrorContainer, GeneralContainer } from "../styles/input-styles";

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
          <GeneralContainer>
            <ErrorMessage name={name} component={ErrorContainer} />
          </GeneralContainer>
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
  height: 2rem;
  color: #898f97;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const UserInput = styled.input`
  width: 40%;
  font-size: 1.8rem;
  height: 3rem;
  padding: 1rem 1rem 1rem;
  outline: none;
  display: block;
  border: 1px solid #898f97;
  border-radius: 1px;
`;

const UserInputDescription = styled.textarea`
  width: 25%;
  color: black;
`;
