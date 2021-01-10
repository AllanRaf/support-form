import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Form, Formik } from "formik";
import { DropDownField } from "./components/DropDownField";
import { AdditionalInfoField } from "./components/AdditionalInfoField";
import { BigTitle } from "./styles/typography-styles";
import { SelectOption } from "./components/SelectOption";
import { SelectField } from "./components/select/SelectField";
import styled from "styled-components";
import { supportFormValidation } from "./supportFormValidation";
import { CustomFieldInput } from "./components/FieldInput";
import { LanguageSelector } from "./components/LanguageSelector";
import { useTranslation } from "react-i18next";
import { UserInputLabel, InputContainer } from "./styles/input-styles";

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
  const [supportData, setSupportData] = useState(initialValues);
  const [topic, setTopic] = useState(topicOptions.generalQuestion);
  const { t, i18n } = useTranslation();

  const handleSubmit = (values: FormValues) => {
    console.log("submitting", values);
    const formData = extractFormData(values);

    //setSupportData(values);

    history.push({ pathname: "/contactsent", state: { formData } });
  };

  const handleSelectChange = (event) => {
    console.log("handleSelectChange", event.target.value);
    setTopic(event.target.value);
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
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            handleSubmit(values);
          }, 2000);
        }}
      >
        {({ isSubmitting, values, errors }) => (
          <Form>
            <CustomFieldInput name="name" />

            <CustomFieldInput name="email" />

            <SelectField />

            {values.selected === "softwareIssue" && (
              <InputContainer>
                <UserInputLabel>
                  Die softwarenversion in den richtigen Format eingeben
                </UserInputLabel>
                <SelectOption selectedOption="softwareIssue" />
              </InputContainer>
            )}
            {values.selected === "phoneNumber" && (
              <InputContainer>
                <UserInputLabel>Telefonnummer eingeben</UserInputLabel>
                <SelectOption selectedOption="phoneNumber" />
              </InputContainer>
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
`;
