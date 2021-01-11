import React from "react";
import { useLocation } from "react-router-dom";
import { Location } from "history";
import { PageContainer, BigTitle } from "../SupportForm/styles";
import { SubmittedInfoBlock } from "./components/InfoBlock";
import { useTranslation } from "react-i18next";

interface FormDataProps {
  description: string;
  name: string;
  email: string;
  phoneNumber?: string;
  softwareIssue?: string;
}

export const ContactSubmitSuccessPage: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const location = useLocation() as Location<{
    formData: FormDataProps;
  }>;
  const formData = location.state.formData;

  return (
    <PageContainer>
      <BigTitle>{t("formSubmitted")}</BigTitle>
      <span>{JSON.stringify(new Date())}</span>

      <SubmittedInfoBlock formData={formData} />
    </PageContainer>
  );
};
