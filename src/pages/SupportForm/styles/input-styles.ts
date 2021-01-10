import styled from "styled-components";

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

export { ErrorContainer, ContainerDiv, LanguageSelect, OptionItem };
