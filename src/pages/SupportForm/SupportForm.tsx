import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { DropDownField } from "./components/DropDownField";
import { AdditionalInfoField } from "./components/AdditionalInfoField";
import styled from "styled-components";
import { supportFormValidation } from "./supportFormValidation";

type SupportFormProps = RouteComponentProps;

interface FormValues {
  name: string;
  email: string;
  description: string;
}

const SupportForm: React.FunctionComponent<SupportFormProps> = ({
  history,
}) => {
  const initialValues = {
    name: "",
    email: "",
    description: "",
  };

  const topicOptions = ["General Question", "Software Issue", "Call Me Back"];
  const [supportData, setSupportData] = useState(initialValues);
  const [topic, setTopic] = useState(topicOptions[0]);

  const handleSubmit = (values: FormValues) => {
    console.log("submitting", values);
    setSupportData(values);
    // history.replace("/contactsent");
  };
  return (
    <SupportFormContainer>
      <h1>Send us a message</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={supportFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            handleSubmit(values);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="name">
              {({
                field, // { name, value, onChange, onBlur }
              }) => (
                <InputContainer>
                  <UserInputLabel>name</UserInputLabel>
                  <UserInput type="text" placeholder="name" {...field} />
                  <ErrorMessage name="name" component={ErrorContainer} />
                </InputContainer>
              )}
            </Field>

            <Field name="email">
              {({ field }) => (
                <InputContainer>
                  <UserInputLabel>email</UserInputLabel>
                  <UserInput type="email" placeholder="email" {...field} />
                  <ErrorMessage name="email" component={ErrorContainer} />
                </InputContainer>
              )}
            </Field>

            <Field name="description">
              {({ field }) => (
                <InputContainer>
                  <UserInputLabel>Description</UserInputLabel>
                  <UserInputDescription
                    name="description"
                    placeholder="Please describe"
                    {...field}
                  />
                  <ErrorMessage name="description" component={ErrorContainer} />
                </InputContainer>
              )}
            </Field>

            <Field
              name="topic"
              as="select"
              onChange={(event) => {
                console.log("select option changed", event.target.value);
                setTopic(event.target.value);
              }}
            >
              <DropDownField topicOptions={topicOptions} />
            </Field>
            <AdditionalInfoField fieldName={topic} />

            <SubmitButton type="submit" disabled={isSubmitting}>
              Submit
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </SupportFormContainer>
  );
};

export const SupportPage = withRouter(SupportForm);

const SupportFormContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
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

const UserInputLabel = styled.label`
  color: grey;
  font-size: 1.5rem;
`;

const ErrorContainer = styled.div`
  font-size: 1.5rem;
  color: red;
`;

const SubmitButton = styled.button`
  height: 2rem;
  margin-top: 1rem;
  border-radius: 1rem;
  border-width: 0;
  width: 25%;
  outline: none;
  background-color: green;
  color: palevioletred;
`;

const UserInputDescription = styled.textarea`
  width: 25%;
  color: black;
`;
