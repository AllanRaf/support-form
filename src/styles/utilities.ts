import styled from "styled-components";

//styles to add spacing and margins to components

const CenterContent = styled.div`
  display: flex;
  justify-content: center;
`;

const TopSpacing = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const GeneralContainer = styled.div`
  padding-top: 0.5rem;
  height: 3rem;
`;

const ErrorContainer = styled.div`
  font-size: 1.5rem;
  color: red;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1rem;
  padding-left: 5rem;
`;

export {
  CenterContent,
  ErrorContainer,
  GeneralContainer,
  InputContainer,
  TopSpacing,
};
