import React from "react";
import { useLocation } from "react-router-dom";
import { Location } from "history";
import { PageContainer, BigTitle } from "../SupportForm/styles";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface FormDataProps {
  description: string;
  name: string;
  email: string;
  phoneNumber?: string;
  softwareIssue?: string;
}

const displaySubmittedData = (formData: any) => {
  Object.entries(formData).map(([key, value]) => {
    console.log("key", key, "value", value);
    return value;
  });
};

export const ContactSubmitSuccessPage: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const location = useLocation() as Location<{
    formData: FormDataProps;
  }>;
  const formData = location.state.formData;

  return (
    <PageContainer>
      <BigTitle>{t("formSubmitted")}</BigTitle>

      {Object.entries(formData).map(([key, value]) => {
        console.log("key", key, "value", value);
        return (
          <InfoBlock key={key}>
            <InfoTitle>{t(key)}</InfoTitle>
            <InfoTitle>{t(value)}</InfoTitle>
          </InfoBlock>
        );
      })}
    </PageContainer>
  );
};

const InfoBlock = styled.div`
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  border-radius: 2px;
  width: 80%;
  border: 1px solid #898f97;
  margin-bottom: 1rem;
  padding: 0.5rem 0.5rem 0.5rem;
`;

const InfoTitle = styled.span`
  display: inline-block;
  font-size: 1.5rem;
`;
