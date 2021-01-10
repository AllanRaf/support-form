import React from "react";
import styled from "styled-components";

interface WrappedInputProps {
  name: string;
}

export const InputWrapper = (WrappedInput: React.FunctionComponent) => {
  const InputWithProps: React.FunctionComponent<WrappedInputProps> = ({
    name,
  }) => {
    return (
      <div>
        <div>{name}</div>
        <WrappedInput />
      </div>
    );
  };
  return InputWithProps;
};

export default InputWrapper;
