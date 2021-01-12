import React from "react";
import { Form, Formik } from "formik";
import { BigTitle, CenterContent } from "../../styles";
import { useSubmitForm } from "../../hooks/api-calls";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { supportFormValidation } from "./supportFormValidation";
import {
  TextInputBlock,
  LanguageSelector,
  SelectInputBlock,
  ButtonBlock,
} from "./components";
import { useTranslation } from "react-i18next";

type SupportPageProps = {};

export const SupportPage: React.FunctionComponent<SupportPageProps> = () => {
  const initialValues = {
    name: "",
    email: "",
    description: "",
    selected: "generalQuestion",
    phoneNumber: "",
    softwareIssue: "",
  };

  const handleSubmit = useSubmitForm();
  const { t } = useTranslation();

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
        {({ isSubmitting }) => (
          <Form>
            <TextInputBlock name="name" />
            <TextInputBlock name="email" />
            <SelectInputBlock />
            <TextInputBlock name="description" inputType="textarea" />

            {isSubmitting && (
              <CenterContent>
                <Loader type="Oval" color="#4f7fbe" height={60} width={60} />
              </CenterContent>
            )}

            <ButtonBlock isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </SupportFormContainer>
  );
};

const SupportFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
