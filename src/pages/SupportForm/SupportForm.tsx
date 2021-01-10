import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
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

type SupportFormProps = RouteComponentProps;

interface FormValues {
  name: string;
  email: string;
  description: string;
  selected: string;
  softwareIssue: string;
  phoneNumber: string;
}

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
    i18n.changeLanguage("en");
    setSupportData(values);
    // history.replace("/contactsent");
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
          }, 400);
        }}
      >
        {({ isSubmitting, values, errors }) => (
          <Form>
            <CustomFieldInput name="name" />

            <CustomFieldInput name="email" />

            <CustomFieldInput name="description" inputType="textarea" />

            <div>
              <SelectField />
            </div>

            {values.selected === "softwareIssue" && (
              <SelectOption selectedOption="softwareIssue" />
            )}
            {values.selected === "phoneNumber" && (
              <SelectOption selectedOption="phoneNumber" />
            )}

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              value={t("send")}
            />
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
`;

const SubmitButton = styled.input`
  height: 2rem;
  margin-top: 1rem;
  border-radius: 1rem;
  border-width: 0;
  width: 25%;
  outline: none;
  background-color: green;
  color: palevioletred;
`;
