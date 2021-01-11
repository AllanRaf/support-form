import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Form, Formik } from "formik";
import { BigTitle, UserInputLabel, InputContainer } from "./styles";
import { SelectOption } from "./components/SelectOption";
import styled from "styled-components";
import { supportFormValidation } from "./supportFormValidation";
import { CustomFieldInput, LanguageSelector, SelectField } from "./components";
import { useTranslation } from "react-i18next";

type SupportFormProps = RouteComponentProps;

interface FormValues {
  name: string;
  email: string;
  description: string;
  selected: string;
  softwareIssue: string;
  phoneNumber: string;
}

const extractFormData = (formData: FormValues) => {
  let sanitisedFormData;

  for (const fieldData in formData) {
    delete formData["selected"];

    if (!formData[fieldData]) {
      delete formData[fieldData];
    }
    sanitisedFormData = formData;
  }
  console.log("sanitised form data", sanitisedFormData);
  return sanitisedFormData;
};

const SupportForm: React.FunctionComponent<SupportFormProps> = ({
  history,
}) => {
  const initialValues = {
    name: "",
    email: "",
    description: "",
    selected: "generalQuestion",
    phoneNumber: "",
    softwareIssue: "",
  };

  const topicOptions = {
    generalQuestion: "generalQuestion",
    phoneNumber: "phoneNumber",
    softwareIssue: "softwareIssue",
  };
  const [topic, setTopic] = useState(topicOptions.generalQuestion);
  const { t } = useTranslation();

  const handleSubmit = (values: FormValues) => {
    console.log("submitting", values);
    const formData = extractFormData(values);

    //setSupportData(values);

    history.push({ pathname: "/contactsent", state: { formData } });
  };

  return (
    <SupportFormContainer>
      <BigTitle>{t("title")}</BigTitle>
      <LanguageSelector />

      <Formik
        initialValues={initialValues}
        validationSchema={supportFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            handleSubmit(values);
          }, 1000);
        }}
      >
        {({ isSubmitting, values, errors, isValid }) => (
          <Form>
            <CustomFieldInput name="name" />

            <CustomFieldInput name="email" />

            <SelectField />

            {values.selected === "softwareIssue" && (
              <CustomFieldInput name={values.selected} />
            )}
            {values.selected === "phoneNumber" && (
              <CustomFieldInput name={values.selected} />
            )}

            <CustomFieldInput name="description" inputType="textarea" />

            {isSubmitting && <div>submitting form</div>}
            <InputContainer>
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                value={t("send")}
              />
            </InputContainer>
          </Form>
        )}
      </Formik>
    </SupportFormContainer>
  );
};

export const SupportPage = withRouter(SupportForm);

const SupportFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const SubmitButton = styled.input`
  height: 3rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border-width: 0;
  width: 25%;
  outline: none;
  background-color: #4f7fbe;
  color: #e0e7ef;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-1rem);
    box-shadow: 2px 2px 3px black;
  }
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
  &:disabled {
    opacity: 0.5;
    transform: translateY(0);
    box-shadow: none;
  }
`;
