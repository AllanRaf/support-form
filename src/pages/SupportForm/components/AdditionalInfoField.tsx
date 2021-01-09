import React from "react";

type AdditionalInfoFieldProps = {
  fieldName: string;
};

export const AdditionalInfoField: React.FunctionComponent<AdditionalInfoFieldProps> = ({
  fieldName,
}) => {
  switch (fieldName) {
    case "Call Me Back":
      return <input type="number" name="phoneNumber" placeholder="01234" />;

    case "Software Issue":
      return <div>Software Issue</div>;

    default:
      return null;
  }
};

export default AdditionalInfoField;
