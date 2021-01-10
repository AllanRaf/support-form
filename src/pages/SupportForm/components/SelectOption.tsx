import React from "react";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";

type SelectOptionProps = {
  selectedOption: string;
};

export const SelectOption: React.FunctionComponent<SelectOptionProps> = ({
  selectedOption,
}) => {
  return (
    <div>
      <Field name={selectedOption} component="input" />
      <ErrorMessage name={selectedOption} component={ErrorContainer} />
    </div>
  );
};

const ErrorContainer = styled.div`
  height: 2rem;
  font-size: 1.5rem;
  color: red;
`;
