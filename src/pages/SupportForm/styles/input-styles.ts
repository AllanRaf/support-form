import styled from "styled-components";

const OptionItem = styled.option`
  width: 40%;
  height: 1.5rem;
  border: 1px solid #898f97;
`;

const LanguageSelect = styled.select`
  align-self: flex-end;
  height: 2rem;
  width: 5rem;
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

const SubmitButton = styled.input`
  height: 3rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border-width: 0;
  width: 25%;
  outline: none;
  background-color: #4f7fbe;
  opacity: 0.8;
  color: #e0e7ef;
  transition: all 0.2s ease;
  box-shadow: 2px 2px 3px black;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(1px);
    box-shadow: none;
  }
  &:disabled {
    opacity: 0.5;
    transform: translateY(0);
    box-shadow: none;
  }
`;

export {
  LanguageSelect,
  OptionItem,
  SubmitButton,
  ThemeSelect,
  UserInputLabel,
  UserInput,
  UserInputDescription,
};
