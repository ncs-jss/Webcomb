import React, { useState, useEffect, useRef } from "react";

import { Controlled as Codemirror } from "react-codemirror2";

import "./App.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

// this variable will have the contents of the iframe
let documentContents = "";

const App = () => {
  const codeMirrorOptions = {
    theme: "material",
    lineNumbers: true,
    scrollbarStyle: null,
    lineWrapping: true
  };

  const iframeRef = useRef(null);

  const [html, sethtml] = useState("");
  const [css, setcss] = useState("");
  const [js, setjs] = useState("");

  useEffect(
    () => {
      runCode();
    },
    [html, css, js]
  );

  const runCode = () => {
    if (html !== "") {
      const iframe = iframeRef.current;
      const document = iframe.contentDocument;
      documentContents = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport content="width=device-width, initial-scale=1.0">
      <meta http-equip="X-UA-Compatible content="ie=edge">
      <title>Document</title>
      <style>
        ${css}
      </style>
    </head>
    <body>
      ${html}
      <script type="text/javascript">
        ${js}
      </script>
    </body>
    </head>
    </html>
    `;

      document.open();
      document.write(documentContents);
      document.close();
    }
  };

  const downloadFile = () => {
    // const content = iframeRef.current.contentDocument;
    const link = document.createElement("a");
    const mimeType = "text/html" || "text/plain";
    link.setAttribute("download", "index.html");
    link.setAttribute(
      "href",
      "data:" +
        mimeType +
        ";charset=utf-8," +
        encodeURIComponent(documentContents)
    );
    // console.log(content);
    link.click();
  };

  return (
    <div className="App">
      <section className="playground">
        <div className="code-editor html-code">
          <div className="editor-header">HTML</div>
          <Codemirror
            value={html}
            options={{
              mode: "htmlmixed",
              ...codeMirrorOptions
            }}
            onBeforeChange={(editor, data, html) => {
              sethtml(html);
            }}
          />
        </div>
        <div className="code-editor css-code">
          <div className="editor-header">CSS</div>
          <Codemirror
            value={css}
            options={{
              mode: "css",
              ...codeMirrorOptions
            }}
            onBeforeChange={(editor, data, css) => {
              setcss(css);
            }}
          />
        </div>
        <div className="code-editor js-code">
          <div className="editor-header">JAVASCRIPT</div>
          <Codemirror
            value={js}
            options={{
              mode: "javascript",
              ...codeMirrorOptions
            }}
            onBeforeChange={(editor, data, js) => {
              setjs(js);
            }}
          />
        </div>
      </section>
      {html === ""
        ? <div className="show-no-content">
            <h1>You are the CSS to my HTML</h1>
          </div>
        : <div>
            <section className="result">
              <iframe title="result" className="iframe" ref={iframeRef} />
            </section>
            {html !== ""
              ? <button
                  className="download-button"
                  onClick={downloadFile}
                  title="download file"
                >
                  Download File
                </button>
              : null}
          </div>}
    </div>
  );
};

export default App;
