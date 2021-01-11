import React from "react";
import { UserInputBlock } from "../components";
//import {UserInput, UserInputLabel} from "../styles"

//new stuff
import { Field } from "formik";

import { useTranslation } from "react-i18next";
import {
  ErrorContainer,
  GeneralContainer,
  InputContainer,
  UserInputLabel,
  UserInputDescription,
  UserInput,
} from "../styles/input-styles";
import { ErrorMessageBlock } from "./ErrorMessageBlock";

type OptionalInputBlockProps = {
  nameOfInputBlockToShow: string;
};

/* export const OptionalInputBlock: React.FunctionComponent<OptionalInputBlockProps> = ({
  nameOfInputBlockToShow,
}) => {
  if (nameOfInputBlockToShow !== "generalQuestion") {
    return <UserInputBlock name={nameOfInputBlockToShow} />;
  } else return null;
}; */

export const OptionalInputBlock: React.FunctionComponent<OptionalInputBlockProps> = ({
  nameOfInputBlockToShow,
}) => {
  const { t } = useTranslation();
  if (nameOfInputBlockToShow !== "generalQuestion") {
    return (
      <Field name={nameOfInputBlockToShow}>
        {({
          field, // { name, value, onChange, onBlur }
        }) => (
          <>
            <UserInputLabel htmlFor={nameOfInputBlockToShow}>
              {t(nameOfInputBlockToShow)}
            </UserInputLabel>
            <UserInput
              placeholder={t(`${nameOfInputBlockToShow}Format`)}
              {...field}
            />
            <ErrorMessageBlock name={nameOfInputBlockToShow} />
          </>
        )}
      </Field>
    );
  } else {
    return null;
  }
};
