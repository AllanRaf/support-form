import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { DropDownField } from "./components/DropDownField";
import { AdditionalInfoField } from "./components/AdditionalInfoField";
import styled from "styled-components";
import { supportFormValidation } from "./supportFormValidation";
import { CustomFieldInput } from "./components/FieldInput";

type SupportFormProps = RouteComponentProps;

interface FormValues {
  name: string;
  email: string;
  description: string;
  selected: string;
  softwareIssue: string;
  phoneNumber: string;

  option: string;
}

const SupportForm: React.FunctionComponent<SupportFormProps> = ({
  history,
}) => {
  const initialValues = {
    name: "",
    email: "",
    description: "",
    selected: "generalQuestion",
    phoneNumber: "",
    softwareIssue: "",
    option: "generalQuestion",
  };

  const topicOptions = ["General Question", "Software Issue", "phoneNumber"];
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
        {({ isSubmitting, values, errors }) => (
          <Form>
            <CustomFieldInput name="name" />

            <CustomFieldInput name="email" />

            <CustomFieldInput name="description" inputType="textarea" />

            <div>
              <Field name="selected" component="select">
                <option label="General Question" value="generalQuestion" />
                <option label="Call back" value="phoneNumber" />
                <option label="Software Issue" value="softwareIssue" />
              </Field>
            </div>
            {(values.selected === "softwareIssue" && (
              <div>
                <Field name="softwareIssue" component="input" />
                <ErrorMessage name="softwareIssue" component={ErrorContainer} />
              </div>
            )) ||
              (values.selected === "phoneNumber" && (
                <div>
                  <Field name="phoneNumber" component="input" />
                  <ErrorMessage name="phoneNumber" component={ErrorContainer} />
                </div>
              ))}

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
