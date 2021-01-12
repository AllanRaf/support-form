import React from "react";
import { Field } from "formik";
import {
  InputContainer,
  ThemeSelect,
  UserInputLabel,
} from "../../styles/input-styles";
import { Option } from "./Option";
import { OptionalInputBlock } from "../index";
import { useTranslation } from "react-i18next";

export const SelectInputBlock: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const optionsList = [
    { label: t("generalQuestion"), value: "generalQuestion" },
    { label: t("callMeBack"), value: "phoneNumber" },
    { label: t("softwareIssue"), value: "softwareIssue" },
  ];

  return (
    <InputContainer>
      <Field name="selected">
        {({ field }) => {
          return (
            <>
              <UserInputLabel>{t("topic")}</UserInputLabel>
              <ThemeSelect {...field}>
                {optionsList.map((option) => {
                  const { label, value } = option;
                  return <Option key={label} label={label} value={value} />;
                })}
              </ThemeSelect>
              {/*Depending on the theme there may be no OptionalInputBlock to show*/}
              <OptionalInputBlock nameOfInputBlockToShow={field.value} />
            </>
          );
        }}
      </Field>
    </InputContainer>
  );
};
