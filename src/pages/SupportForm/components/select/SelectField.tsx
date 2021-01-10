import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  ContainerDiv,
  ErrorContainer,
  InputContainer,
  UserInputLabel,
  ThemeSelect,
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
      <Field name="selected">
        {({
          field, // { name, value, onChange, onBlur }
        }) => {
          return (
            <ThemeSelect {...field}>
              {optionsList.map((option) => {
                const { label, value } = option;
                return <Option key="label" label={label} value={value} />;
              })}
            </ThemeSelect>
          );
        }}
      </Field>

      <ContainerDiv>
        <ErrorMessage name="selected" component={ErrorContainer} />
      </ContainerDiv>
    </InputContainer>
  );
};
