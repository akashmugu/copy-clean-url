import React from "react";
import { ModifiedUrl } from "@urltools/detect-modify-url/lib/types";

export const Popup: React.FC<ModifiedUrl> = (props) => {
  return <p>PopupComponent: {JSON.stringify(props)}</p>;
};
