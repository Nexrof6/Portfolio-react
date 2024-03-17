import React, { ReactNode, useState } from "react";
import "/src/assets/CodeSection.css";

interface Props {
  language: string;
  children: string;
}
function CodeSection({ language, children }: Props) {
  const [buttonText, setButtonText] = useState("Copy Code");

  const handleCopyCode = () => {
    navigator.clipboard.writeText(children);
    setButtonText("Code Copied");
    setTimeout(() => {
      setButtonText("Copy Code");
    }, 1000);
  };

  return (
    <div className="code-section ">
      <div className="code-header bg-dark  ">
        <div className="row">
          <div className="col">
            <pre>{language}</pre>
          </div>
          <div className="col text-end">
            <button
              className="btn bg-transparent btn-sm"
              onClick={handleCopyCode}
            >
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/fluency-systems-regular/48/copy--v1.png"
                alt="copy--v1"
              />
              {buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="code-content  ">
        <textarea
          value={children.split("\\n").join("\n").split("\\t").join("    ")}
          readOnly
          className="code-editor bg-dark text-light"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
    </div>
  );
}

export default CodeSection;
