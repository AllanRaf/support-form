import React from "react";
import { TextInputContainer } from "./";

type OptionalInputBlockProps = {
  nameOfInputBlockToShow: string;
};

export const OptionalInputBlock: React.FunctionComponent<OptionalInputBlockProps> = ({
  nameOfInputBlockToShow,
}) => {
  if (nameOfInputBlockToShow !== "generalQuestion") {
    return <TextInputContainer name={nameOfInputBlockToShow} />;
  } else {
    return null;
  }
};
