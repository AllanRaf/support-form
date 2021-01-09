import React from "react";
import { useField, FieldProps } from "formik";

type DropDownFieldProps = {
  topicOptions: string[];
};

export const DropDownField: React.FunctionComponent<DropDownFieldProps> = ({
  topicOptions,
}) => {
  //const [field, meta, helpers] = useField();
  return (
    <>
      {topicOptions.map((topic) => (
        <option>{topic}</option>
      ))}
    </>
  );
};
