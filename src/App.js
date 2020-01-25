import React, { useState, useEffect } from "react";

import { Controlled as Codemirror } from "react-codemirror2";
import DefaultWindow from "./components/DefaultWindow";
import DisplayWindow from "./components/DisplayWindow";

import "./App.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

const App = () => {
  const codeMirrorOptions = {
    theme: "material",
    lineNumbers: true,
    scrollbarStyle: null,
    lineWrapping: true
  };

  const [html, sethtml] = useState("");
  const [css, setcss] = useState("");
  const [js, setjs] = useState("");

  useEffect(() => {
    const langObj = JSON.parse(localStorage.getItem("langObj"));
    if (langObj !== null) {
      sethtml(langObj.html);
      setcss(langObj.css);
      setjs(langObj.js);
    }
  }, []);

  const reset = () => {
    sethtml("");
    setcss("");
    setjs("");
    localStorage.clear();
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
        ? <DefaultWindow />
        : <DisplayWindow
            html={html}
            css={css}
            js={js}
            sethtml={sethtml}
            reset={reset}
          />}
    </div>
  );
};

export default App;

// const addRemoveComment = languageType => {
//   let selectedContent = window.getSelection().toString();
//   const setLanguage =
//     languageType === "html" ? html : languageType === "css" ? css : js;
//   const setFunc =
//     languageType === "html"
//       ? sethtml
//       : languageType === "css" ? setcss : setjs;
//   const commentType = languageType === "html" ? "<!--  -->" : "/*  */";
//   // comment add or remove logic
//   if (selectedContent === "") {
//     setFunc(setLanguage.concat(commentType));
//   } else if (
//     selectedContent.split(" ")[0] === "<!--" ||
//     selectedContent.split(" ")[0] === "/*"
//   ) {
//     let arr = selectedContent.split(" ");
//     arr.shift();
//     arr.pop();
//     let str = arr.join(" ");
//     setFunc(str);
//   } else {
//     languageType === "html"
//       ? (selectedContent = "<!-- " + selectedContent + " -->")
//       : (selectedContent = "/* " + selectedContent + " */");
//     if(setLanguage.split(selectedContent).length === 2) {

//     }
//     else {

//     }
//   }
// }
