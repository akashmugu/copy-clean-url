import React from "react";
import { Msg } from "../messages";

export const ErrorMsg: React.FC<Msg> = ({ code, message }) => (
  <div className="error">
    <span className="title">
      <strong>{code}:</strong> {message}
    </span>
    <hr />
    if you think this is a bug, please create an issue{" "}
    <a href="https://github.com/akashmugu/copy-clean-url/issues">here</a> with
    reproduction steps and the above error
  </div>
);

export const LoaderMsg: React.FC<Msg> = ({ code, message }) => (
  <div className="loading">
    <span className="title">
      <strong>{code}:</strong> {message}
    </span>
  </div>
);
