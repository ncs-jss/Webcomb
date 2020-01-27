import React from "react";

import { Controlled as Codemirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

const CodeEditor = ({
  langName,
  value,
  lang,
  mode,
  codeMirrorOptions,
  setFn
}) => {
  return (
    <div className="code-editor html-code">
      <div className="editor-header">
        <span>
          {langName}
        </span>
        <button className="editor-resize-button">-</button>
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
