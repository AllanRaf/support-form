import React from "react";
import { ErrorMessage } from "formik";

import { ErrorContainer, GeneralContainer } from "../../../styles";
type ErrorMessageBlockProps = {
  name: string;
};

export const ErrorMessageBlock: React.FunctionComponent<ErrorMessageBlockProps> = ({
  name,
}) => {
  return (
    <GeneralContainer>
      <ErrorMessage name={name} component={ErrorContainer} />
    </GeneralContainer>
  );
};
