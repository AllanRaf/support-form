import { useHistory } from "react-router-dom";
import { FormValues } from "../pages/SupportForm/SupportForm";

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

export const useSubmitForm = () => {
  const history = useHistory();

  const handleSubmit = (values: FormValues) => {
    const formData = extractFormData(values);
    history.push({ pathname: "/contactsent", state: { formData } });
  };
  return handleSubmit;
};
