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
  width: 40%;
  height: 1.5rem;
  border: 1px solid #898f97;
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

const UserInputLabel = styled.label`
  height: 2rem;
  color: #898f97;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ThemeSelect = styled.select`
  height: 3rem;
  width: 30%;
`;

const UserInput = styled.input`
  width: 60%;
  font-size: 1.8rem;
  height: 3rem;
  padding: 1rem 1rem 1rem;
  outline: none;
  display: block;
  border: 1px solid #898f97;
  border-radius: 1px;
`;

const UserInputDescription = styled.textarea`
  width: 60%;
  height: 15rem;
  outline: none;
  font-size: 1.5rem;
  border: 1px solid #898f97;
  padding: 1rem 1rem 1rem;
  color: black;
  border-radius: 1px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  align-items: center;
`;

export {
  ErrorContainer,
  GeneralContainer,
  InputContainer,
  ContainerDiv,
  LanguageSelect,
  OptionItem,
  PageContainer,
  ThemeSelect,
  UserInputLabel,
  UserInput,
  UserInputDescription,
};
