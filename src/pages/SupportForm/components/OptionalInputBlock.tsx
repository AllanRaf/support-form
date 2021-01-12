import React from "react";
import { TextInputContainer } from "./";
import { TopSpacing } from "../../../styles";

type OptionalInputBlockProps = {
  nameOfInputBlockToShow: string;
};

export const OptionalInputBlock: React.FunctionComponent<OptionalInputBlockProps> = ({
  nameOfInputBlockToShow,
}) => {
  if (nameOfInputBlockToShow !== "generalQuestion") {
    return (
      <TopSpacing>
        <TextInputContainer name={nameOfInputBlockToShow} />
      </TopSpacing>
    );
  } else {
    return null;
  }
};
