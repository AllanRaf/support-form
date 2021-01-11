import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Form, Formik } from "formik";
import { BigTitle } from "./styles";
import { SelectOption } from "./components/SelectOption";
import styled from "styled-components";
import { supportFormValidation } from "./supportFormValidation";
import {
  UserInputBlock,
  LanguageSelector,
  SelectField,
  OptionalInputBlock,
  ButtonBlock,
} from "./components";
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
            <UserInputBlock name="name" />

            <UserInputBlock name="email" />

            <SelectField />

            {/*  <OptionalInputBlock nameOfInputBlockToShow={values.selected} /> */}

            <UserInputBlock name="description" inputType="textarea" />

            {isSubmitting && <div>submitting form</div>}

            <ButtonBlock isSubmitting={isSubmitting} />
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
