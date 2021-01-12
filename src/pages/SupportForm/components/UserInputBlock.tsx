import React from "react";
import { InputContainer } from "../styles/input-styles";
import { TextInputContainer } from "./";

type CustomFieldInputProps = {
  name: string;
  inputType?: string;
};

export const UserInputBlock: React.FunctionComponent<CustomFieldInputProps> = ({
  name,
  inputType = "text",
}) => {
  return (
    <InputContainer>
      <TextInputContainer name={name} inputType={inputType} />
    </InputContainer>
  );
};
