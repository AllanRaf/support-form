import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  ContainerDiv,
  ErrorContainer,
  InputContainer,
} from "../../styles/input-styles";
import { Option } from "./Option";
import { useTranslation } from "react-i18next";

export const SelectField: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const optionsList = [
    { label: t("generalQuestion"), value: "generalQuestion" },
    { label: t("callMeBack"), value: "phoneNumber" },
    { label: t("softwareIssue"), value: "softwareIssue" },
  ];

  return (
    <InputContainer>
      <Field name="selected" component="select">
        {optionsList.map((option) => {
          const { label, value } = option;
          return <Option key="label" label={label} value={value} />;
        })}
      </Field>
      <ContainerDiv>
        <ErrorMessage name="selected" component={ErrorContainer} />
      </ContainerDiv>
    </InputContainer>
  );
};

export default SelectField;
