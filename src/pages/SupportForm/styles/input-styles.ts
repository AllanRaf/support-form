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
  width: 10rem;
`;

export {
  ErrorContainer,
  GeneralContainer,
  ContainerDiv,
  LanguageSelect,
  OptionItem,
};
