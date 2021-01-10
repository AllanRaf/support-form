import styled from "styled-components";

const GeneralContainer = styled.div`
  padding-top: 0.5rem;
  height: 3rem;
`;

const ErrorContainer = styled.div`
  font-size: 1.5rem;
  color: red;
`;

const OptionItem = styled.option`
  width: 25%;
  height: 1.5rem;
  color: grey;
`;

const ContainerDiv = styled.div`
  height: 3rem;
`;

const LanguageSelect = styled.select`
  align-self: flex-end;
  height: 2rem;
  width: 5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1rem;
  padding-left: 5rem;
`;

export {
  ErrorContainer,
  GeneralContainer,
  InputContainer,
  ContainerDiv,
  LanguageSelect,
  OptionItem,
};
