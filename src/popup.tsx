import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import detectModifyUrl from "@urltools/detect-modify-url";
import { DetectModifyUrlConfig } from "@urltools/utils/lib/types/detectModifyUrl";
import { isNil, useConfig, useTabUrl } from "./utils";
import { ErrorMsg, LoaderMsg } from "./components/misc";
import { Popup } from "./components/popup";
import {
  err_getConfig,
  err_invalidConfig,
  err_tabUrl,
  load_getConfig,
  load_tabUrl,
} from "./messages";

const PopupContainer = () => {
  const tabUrl = useTabUrl();
  const config = useConfig();

  if (isNil(tabUrl) || isNil(config)) {
    // errors first
    switch (undefined) {
      case tabUrl:
        return <ErrorMsg {...err_tabUrl} />;
      case config:
        return <ErrorMsg {...err_getConfig} />;
    }

    // loaders
    switch (null) {
      case tabUrl:
        return <LoaderMsg {...load_tabUrl} />;
      case config:
        return <LoaderMsg {...load_getConfig} />;
    }
  }

  // if (!validateConfig(config)) {
  //   return <ErrorMsg {...err_invalidConfig} />;
  // }

  // validations passed. render popup
  const props = detectModifyUrl(config as DetectModifyUrlConfig)(
    tabUrl as string
  );
  return <Popup {...props} />;
};

ReactDOM.render(
  <React.StrictMode>
    <PopupContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
