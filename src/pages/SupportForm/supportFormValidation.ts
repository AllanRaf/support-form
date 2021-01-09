import * as yup from "yup";

export const supportFormValidation = yup.object().shape({
  name: yup.string().label("name").required("name must not be left blank"),
  email: yup
    .string()
    .label("Email")
    .email("Email address must be valid")
    .required("Email address must not be left blank"),
});
