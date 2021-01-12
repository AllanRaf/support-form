import React from "react";
import { useLocation } from "react-router-dom";
import { Location } from "history";
import styled from "styled-components";
import { BigTitle, SmallTitle, TopSpacing } from "../../styles";
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
      <TopSpacing>
        <SmallTitle>{JSON.stringify(new Date())}</SmallTitle>
      </TopSpacing>

      <SubmittedInfoBlock formData={formData} />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  align-items: center;
`;
