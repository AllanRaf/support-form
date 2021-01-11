import React from "react";
import {
  InfoBlock,
  InfoSection,
  InfoTitle,
} from "../styles/submit-success-styles";
import { useTranslation } from "react-i18next";

interface FormDataProps {
  description: string;
  name: string;
  email: string;
  phoneNumber?: string;
  softwareIssue?: string;
}

interface SubmittedInfoBlockProps {
  formData: FormDataProps;
}

const formDataFieldsOrder = [
  "name",
  "email",
  "phoneNumber",
  "softwareIssue",
  "description",
];

export const SubmittedInfoBlock: React.FunctionComponent<SubmittedInfoBlockProps> = ({
  formData,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {formDataFieldsOrder.map((fieldName) => {
        if (formData.hasOwnProperty(fieldName)) {
          return (
            <InfoBlock key={fieldName}>
              <InfoTitle>{t(fieldName)}</InfoTitle>
              <InfoSection>{t(formData[fieldName])}</InfoSection>
            </InfoBlock>
          );
        }

        return null;
      })}
    </>
  );
};
