import React from "react";
import { InputContainer } from "../../styles/input-styles";
import { TextInputContainer } from "..";

type TextInputBlockProps = {
  name: string;
  inputType?: string;
};

export const TextInputBlock: React.FunctionComponent<TextInputBlockProps> = ({
  name,
  inputType = "text",
}) => {
  return (
    <InputContainer>
      <TextInputContainer name={name} inputType={inputType} />
    </InputContainer>
  );
};
