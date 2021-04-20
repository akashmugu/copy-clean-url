import React from "react";
import { ModifiedUrl } from "@urltools/detect-modify-url/lib/types";

export const Popup: React.FC<ModifiedUrl> = ({ url, match }) => {
  return <h1>PopupComponent</h1>;
};
