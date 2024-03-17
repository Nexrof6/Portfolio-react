import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
}
function CodeSection({ children }: Props) {
  const [buttonText, setButtonText] = useState("Copy Code");

  const handleCopyCode = () => {
    navigator.clipboard.writeText(children);
    setButtonText("Code Copied");
    setTimeout(() => {
      setButtonText("Copy Code");
    }, 1000);
  };

  return (
    <div className="code-section">
      <div className="code-header">
        <button onClick={handleCopyCode}>{buttonText}</button>
      </div>
      <div className="code-content">
        <textarea
          value={children}
          readOnly
          className="code-editor"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
    </div>
  );
}

export default CodeSection;
