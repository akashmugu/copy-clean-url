import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import ClipboardJS from "clipboard";
import { ModifiedUrl } from "@urltools/detect-modify-url/lib/types";

import "./popup.scss";

type fn = () => void;
type PopupProps = ModifiedUrl & {
  onOpenInNewTab: fn;
  onOptionsPage: fn;
};
export const Popup: React.FC<PopupProps> = ({
  url,
  match,
  onOpenInNewTab,
  onOptionsPage,
}) => {
  const [copied, setCopied] = useState<boolean | null>(null);
  const copyBtn = useRef<HTMLButtonElement>(null);
  const copyText = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const clipboard = new ClipboardJS(copyBtn.current!, {
      target: () => copyText.current!,
    });
    clipboard.on("success", () => setCopied(true));
    clipboard.on("error", () => setCopied(false));

    return () => clipboard.destroy();
  }, []);
  const getCopyBtnClass = () => {
    switch (copied) {
      case null:
        return "";
      case true:
        return "success";
      case false:
        return "error";
    }
  };

  return (
    <div className={classNames("popup-root", match ? "match" : "nomatch")}>
      <div className="row1">
        <div className="title">
          {match ? `✔ Matched: ${match.name}` : `✘ No Match`}
        </div>
      </div>

      <div className="row2">
        <div className="left">
          <div>{match ? "Cleaned" : "Original"}</div> <div>URL</div>
        </div>
        <div className="right">
          <textarea value={url} ref={copyText} />
        </div>
      </div>

      <div className="row3">
        <div>
          <button onClick={onOpenInNewTab}>Open in new tab</button>
        </div>
        <div>
          <button ref={copyBtn} className={getCopyBtnClass()}>
            Copy to clipboard
          </button>
        </div>
        <div>
          <button onClick={onOptionsPage}>⚙</button>
        </div>
      </div>
    </div>
  );
};
