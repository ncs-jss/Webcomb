import React, { useState } from "react";

import { Controlled as Codemirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

let numOfMinimisedScreens = 0;

const CodeEditor = ({
  langName,
  value,
  lang,
  mode,
  codeMirrorOptions,
  setFn
}) => {
  const [minimisedEditor, setminimisedEditor] = useState(false);

  const resizeEditor = () => {
    if (numOfMinimisedScreens < 2 || minimisedEditor === true) {
      setminimisedEditor(!minimisedEditor);
      if (minimisedEditor) {
        numOfMinimisedScreens--;
      } else {
        numOfMinimisedScreens++;
      }
    }
  };

  return (
    <div
      className="code-editor"
      style={minimisedEditor ? { height: "50px", overflow: "inherit" } : null}
    >
      <div className="editor-header">
        <span>
          {langName}
        </span>
        <button className="editor-resize-button" onClick={resizeEditor}>
          {minimisedEditor ? "+" : "-"}
        </button>
      </div>
      <Codemirror
        value={value}
        options={{
          mode: mode,
          ...codeMirrorOptions
        }}
        onBeforeChange={(editor, data, lang) => {
          setFn(lang);
        }}
      />
    </div>
  );
};

export default CodeEditor;
