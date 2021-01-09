import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import styled from "styled-components";
import { supportFormValidation } from "./supportFormValidation";

type SupportFormProps = RouteComponentProps;

const SupportForm: React.FunctionComponent<SupportFormProps> = ({
  history,
}) => {
  const initialValues = {
    name: "",
    email: "",
    description: "",
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
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/*          <Field type="text" name="name" />

            <ErrorMessage name="name" component="div" /> */}

            <Field name="name">
              {({
                field, // { name, value, onChange, onBlur }
              }) => (
                <InputContainer>
                  <label>name</label>
                  <UserInput type="text" placeholder="name" {...field} />
                </InputContainer>
              )}
            </Field>
            <ErrorMessage name="name" component={ErrorContainer} />

            <Field name="email">
              {({
                field, // { name, value, onChange, onBlur }
              }) => (
                <InputContainer>
                  <label>email</label>
                  <UserInput type="email" placeholder="email" {...field} />
                </InputContainer>
              )}
            </Field>
            <ErrorMessage name="email" component={ErrorContainer} />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
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

const ErrorContainer = styled.div`
  font-size: 1.5rem;
  color: red;
`;
