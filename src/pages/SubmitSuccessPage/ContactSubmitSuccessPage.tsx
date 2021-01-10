import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Location } from "history";
import { PageContainer } from "../SupportForm/styles/input-styles";
import styled from "styled-components";

interface FormDataProps {
  description: string;
  name: string;
  email: string;
  phoneNumber?: string;
  softwareIssue?: string;
}

export const ContactSubmitSuccessPage: React.FunctionComponent = () => {
  const params = useParams();

  const location = useLocation() as Location<{
    formData: FormDataProps;
  }>;
  const formData = location.state.formData;
  console.log("params are", params, "location", formData);
  return (
    <PageContainer>
      <h1>Message Submitted</h1>
      <span>Thank you for making contact with us</span>

      <InfoBlock>
        <span>name</span>
        <InfoTitle>{formData.name}</InfoTitle>
      </InfoBlock>

      <InfoBlock>
        <InfoTitle>{formData.email}</InfoTitle>
      </InfoBlock>

      <InfoBlock>{formData.description}</InfoBlock>
    </PageContainer>
  );
};

const InfoBlock = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const InfoTitle = styled.span`
  display: inline-block;
  font-size: 1.5rem;
`;
