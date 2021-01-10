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

const displaySubmittedData = (formData: any) => {
  Object.entries(formData).map(([key, value]) => {
    console.log("key", key, "value", value);
    return value;
  });
};

export const ContactSubmitSuccessPage: React.FunctionComponent = () => {
  const params = useParams();

  const location = useLocation() as Location<{
    formData: FormDataProps;
  }>;
  const formData = location.state.formData;
  displaySubmittedData(formData);
  console.log("params are", params, "location", formData);
  return (
    <PageContainer>
      <h1>Message Submitted</h1>
      <span>Thank you for making contact with us</span>

      {Object.entries(formData).map(([key, value]) => {
        console.log("key", key, "value", value);
        return (
          <InfoBlock>
            <InfoTitle>{key}</InfoTitle>
            <InfoTitle>{value}</InfoTitle>
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
