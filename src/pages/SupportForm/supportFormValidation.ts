import * as yup from "yup";

export const supportFormValidation = yup.lazy((values) => {
  console.log("yup values", values);

  return yup.object().shape({
    name: yup.string().label("name").required("name must not be left blank"),
    email: yup
      .string()
      .label("Email")
      .email("Email address must be valid")
      .required("Email address must not be left blank"),

    description: yup
      .string()
      .label("description")
      .required("Description must not be blank"),

    phoneNumber: yup.lazy(() => {
      if (values.selected === "phoneNumber") {
        return yup
          .string()
          .label("phoneNumber")
          .required("Please enter phone number")
          .min(2, "too short");
      } else {
        return yup.mixed().notRequired();
      }
    }),
    softwareIssue: yup.lazy(() => {
      if (values.selected === "softwareIssue") {
        return yup
          .string()
          .label("softwareIssue")
          .required("Please enter software version")
          .min(4, "too short");
      } else {
        return yup.mixed().notRequired();
      }
    }),
  });
});
