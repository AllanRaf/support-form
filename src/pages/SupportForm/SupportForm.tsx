import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Field, Form, Formik, FormikHelpers, ErrorMessage } from "formik";
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
  const [supportData, setSupportData] = useState(initialValues);

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
                </InputContainer>
              )}
            </Field>
            <ErrorMessage name="name" component={ErrorContainer} />

            <Field name="email">
              {({ field }) => (
                <InputContainer>
                  <UserInputLabel>email</UserInputLabel>
                  <UserInput type="email" placeholder="email" {...field} />
                </InputContainer>
              )}
            </Field>
            <ErrorMessage name="email" component={ErrorContainer} />

            <Field name="description">
              {({ field }) => (
                <InputContainer>
                  <UserInputLabel>Description</UserInputLabel>
                  <UserInputDescription
                    name="description"
                    placeholder="Please describe"
                    {...field}
                  />
                </InputContainer>
              )}
            </Field>
            <ErrorMessage name="description" component={ErrorContainer} />

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
