import * as yup from "yup";

export const supportFormValidation = yup.lazy((values) => {
  console.log("values", values);
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

    /*   phoneNumber: yup
          .number()
          .label("phoneNumber")
          .required("Please enter your phone number")
          .min(2, "too short"), */

    /*   phoneNumber: yup.lazy((value) => {
      console.log("yup lazy", value, "yup object values");
      if (value !== "1234") {
        console.log("number required");
        return yup
          .string()
          .label("phoneNumber")
          .required("Please enter your phone number")
          .min(2, "too short");
      } else {
        console.log("hello");
        return yup.mixed().notRequired();
      }
    }),
     optionalObject: yup.lazy((value) => {
          console.log("optional Object", value);
          if (value !== undefined) {
            return yup.object().shape({
              phoneNumber: yup.string().required("Please enter your phone number"),
            });
          }
          return yup.mixed().notRequired();
        }), */
  });
});
