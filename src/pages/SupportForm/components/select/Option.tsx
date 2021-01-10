import React from "react";
import { OptionItem } from "../../styles/input-styles";

type OptionProps = {
  label: string;
  value: string;
};

export const Option: React.FunctionComponent<OptionProps> = ({
  label,
  value,
}) => {
  return <OptionItem label={label} value={value} />;
};
