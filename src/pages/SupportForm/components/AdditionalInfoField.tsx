import React from "react";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { CustomFieldInput } from "./FieldInput";

type AdditionalInfoFieldProps = {
  fieldName: string;
};

export const AdditionalInfoField: React.FunctionComponent<AdditionalInfoFieldProps> = ({
  fieldName,
}) => {
  switch (fieldName) {
    case "phoneNumber":
      return <CustomFieldInput name={fieldName} />;

    case "Software Issue":
      return <input type="number" name="softwareVersion" placeholder="1.1.1" />;

    default:
      return null;
  }
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const UserInputLabel = styled.label`
  color: grey;
  font-size: 1.5rem;
`;

const UserInput = styled.input`
  width: 25%;
  background-color: grey;
  color: green;
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 5px;
  display: block;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid grey;
`;

const ErrorContainer = styled.div`
  font-size: 1.5rem;
  color: red;
`;
