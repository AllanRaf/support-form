import { useHistory } from "react-router-dom";
import { FormValues } from "../types/form-types";

const extractFormData = (formData: FormValues) => {
  //return data with empty fields deleted
  let sanitisedFormData;

  for (const fieldData in formData) {
    delete formData["selected"];

    if (!formData[fieldData]) {
      delete formData[fieldData];
    }
    sanitisedFormData = formData;
  }
  return sanitisedFormData;
};

//fake api call for testing purposes
export const useSubmitForm = () => {
  const history = useHistory();

  const handleSubmit = (values: FormValues) => {
    const formData = extractFormData(values);
    history.push({ pathname: "/contactsent", state: { formData } });
  };
  return handleSubmit;
};
