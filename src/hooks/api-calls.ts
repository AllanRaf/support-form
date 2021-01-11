import { useHistory } from "react-router-dom";
import { FormValues } from "../pages/SupportForm/SupportForm";

const extractFormData = (formData: FormValues) => {
  let sanitisedFormData;

  for (const fieldData in formData) {
    delete formData["selected"];

    if (!formData[fieldData]) {
      delete formData[fieldData];
    }
    sanitisedFormData = formData;
  }
  console.log("sanitised form data", sanitisedFormData);
  return sanitisedFormData;
};

export const useSubmitForm = () => {
  const history = useHistory();

  const handleSubmit = (values: FormValues) => {
    const formData = extractFormData(values);
    history.push({ pathname: "/contactsent", state: { formData } });
  };
  return handleSubmit;

  //setSupportData(values);
};
