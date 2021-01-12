import * as yup from "yup";
import i18next from "i18next";

export const supportFormValidation = yup.lazy((values) => {
  console.log("yup values", values);

  return yup.object().shape({
    name: yup
      .string()
      .label("name")
      .required(i18next.t("generalRequirment", { field: "Name" })),
    email: yup
      .string()
      .label("Email")
      .email(i18next.t("emailValid"))
      .required(i18next.t("generalRequirment", { field: "Email" })),

    description: yup
      .string()
      .label("description")
      .required(
        i18next.t("generalRequirment", { field: i18next.t("description") })
      )
      .min(6, i18next.t("descriptionTooShort")),

    phoneNumber: yup.lazy(() => {
      if (values.selected === "phoneNumber") {
        return yup
          .string()
          .label("phoneNumber")
          .required(
            i18next.t("generalRequirment", { field: i18next.t("phoneNumber") })
          )
          .matches(/^[0-9]*$/, i18next.t("phoneNumberValid"))
          .min(4, i18next.t("phoneNumberTooShort"));
      } else {
        return yup.mixed().notRequired();
      }
    }),
    softwareIssue: yup.lazy(() => {
      if (values.selected === "softwareIssue") {
        return yup
          .string()
          .label("softwareIssue")
          .required(i18next.t("softwareFieldEmptyError"))
          .matches(
            /^\b\d{1,2}\.\d{1,2}\.\d{1,2}\b$/,
            i18next.t("softwareFieldWrongFormat")
          );
      } else {
        return yup.mixed().notRequired();
      }
    }),
    selected: yup.lazy(() => {
      return yup.string().label("theme").notRequired();

      /*  if (values.selected === "phoneNumber") {
        return yup
          .string()
          .label("phoneNumber")
          .required("Please enter phone number selected")
          .min(2, "too short");
      } else if (values.selected === "softwareIssue") {
        return yup
          .string()
          .label("softwareIssue")
          .required("Please enter software version")
          .min(4, "too short");
      } else {
        return yup.mixed().notRequired();
      } */
    }),
  });
});
