import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

type SupportFormProps = RouteComponentProps;

const SupportForm: React.FunctionComponent<SupportFormProps> = ({
  history,
}) => {
  return (
    <div>
      <h1>Send us a message</h1>
      <span>Hello there</span>
      <button
        onClick={() => {
          history.push("/contactsent");
        }}
      >
        Send
      </button>
    </div>
  );
};

export const SupportPage = withRouter(SupportForm);
