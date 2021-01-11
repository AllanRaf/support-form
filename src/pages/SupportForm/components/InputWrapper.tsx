import React from "react";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  ErrorContainer,
  GeneralContainer,
  InputContainer,
  UserInputLabel,
  UserInput,
} from "../styles/input-styles";

interface WrappedInputProps {
  name: string;
}

export const InputWrapper = (
  WrappedInput: React.FunctionComponent<WrappedInputProps>,
  name: string
) => {
  const InputWithProps: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
      <>
        <Field name={name}>
          {({
            field, // { name, value, onChange, onBlur }
          }) => (
            <InputContainer>
              <UserInputLabel htmlFor={name}>{t(name)}</UserInputLabel>

              <WrappedInput placeholder={t(`${name}Format`)} {...field} />

              <GeneralContainer>
                <ErrorMessage name={name} component={ErrorContainer} />
              </GeneralContainer>
            </InputContainer>
          )}
        </Field>
      </>
    );
  };
  return InputWithProps;
};

/* type InputWrapperProps = {
  WrappedInput:React.FunctionComponent
}

export const InputWrapper: React.FunctionComponent<InputWrapperProps> = (
  WrappedInput: React.FunctionComponent<WrappedInputProps>,
) => {
  const { t } = useTranslation();
  const name= "hello"
  return (
    <>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
        }) => (
          <InputContainer>
            <UserInputLabel htmlFor={name}>{t(name)}</UserInputLabel>

            <WrappedInput placeholder={t(`${name}Format`)} {...field} />

            <GeneralContainer>
              <ErrorMessage name={name} component={ErrorContainer} />
            </GeneralContainer>
          </InputContainer>
        )}
      </Field>
    </>
  );
}; */

export const WithWhateverComponent = (name) => {
  InputWrapper(UserInput, name);
};
