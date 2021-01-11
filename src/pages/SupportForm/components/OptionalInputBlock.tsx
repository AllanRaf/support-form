import { setNestedObjectValues } from "formik";
import React from "react";
import { UserInputBlock } from "../components";

type OptionalInputBlockProps = {
  nameOfInputBlockToShow: string;
};

export const OptionalInputBlock: React.FunctionComponent<OptionalInputBlockProps> = ({
  nameOfInputBlockToShow,
}) => {
  if (nameOfInputBlockToShow !== "generalQuestion") {
    return <UserInputBlock name={nameOfInputBlockToShow} />;
  } else return null;
};

export default OptionalInputBlock;
