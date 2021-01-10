import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { DropDownField } from "./components/DropDownField";
import { AdditionalInfoField } from "./components/AdditionalInfoField";
import { SelectOption } from "./components/SelectOption";
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
      <h1>{t("title")}</h1>
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
              <Field
                name="selected"
                component="select"
                /*       onChange={handleSelectChange}
                value={topic} */
              >
                <option label={t("generalQuestion")} value="generalQuestion" />
                <option label={t("callMeBack")} value="phoneNumber" />
                <option label={t("softwareIssue")} value="softwareIssue" />
              </Field>
              <ErrorMessage name="selected" component={ErrorContainer} />
            </div>

            {(values.selected === "softwareIssue" && (
              <SelectOption selectedOption="softwareIssue" />
            )) ||
              (values.selected === "phoneNumber" && (
                <SelectOption selectedOption="phoneNumber" />
              ))}

            <SubmitButton type="submit" disabled={isSubmitting}>
              Submit
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </SupportFormContainer>
  );
};

export const SupportPage = withRouter(SupportForm);

const SupportFormContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  height: 2rem;
  margin-top: 1rem;
  border-radius: 1rem;
  border-width: 0;
  width: 25%;
  outline: none;
  background-color: green;
  color: palevioletred;
`;

const ErrorContainer = styled.div`
  font-size: 1.5rem;
  color: red;
`;
