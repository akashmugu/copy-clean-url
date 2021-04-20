import { useEffect, useState } from "react";
import Ajv from "ajv";
import { DetectModifyUrlConfig } from "@urltools/utils/lib/types/detectModifyUrl";

export const validateConfig = new Ajv().compile(
  require("@urltools/utils/lib/schema/detectModifyUrl.json")
);

type nil = null | undefined;
export const isNil = (x: any): x is nil => x == null;

export const useTabUrl = () => {
  const [url, setUrl] = useState<string | nil>(null);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setUrl(tabs[0].url);
    });
  }, []);

  return url;
};

export const useConfig = () => {
  const [config, setConfig] = useState<DetectModifyUrlConfig | nil>(null);

  useEffect(() => {
    chrome.storage.sync.get("config", ({ config }) => {
      setConfig(config);
    });
  }, []);

  return config;
};
