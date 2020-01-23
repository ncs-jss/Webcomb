import React, { Component } from "react";

import { Controlled as Codemirror } from "react-codemirror2";

import "./App.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

class App extends Component {
  state = {
    html: "",
    css: "",
    js: ""
  };

  componentDidUpdate() {
    this.runCode();
  }

  runCode = () => {
    const { html, css, js } = this.state;
    const iframe = this.refs.iframe;
    const document = iframe.contentDocument;
    const documentContents = `
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
  };

  render() {
    const { html, css, js } = this.state;
    const codeMirrorOptions = {
      theme: "material",
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true
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
                this.setState({ html });
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
                this.setState({ css });
              }}
            />
          </div>
          <div className="code-editor js-code">
            <div className="editor-header">JavaScript</div>
            <Codemirror
              value={js}
              options={{
                mode: "javascript",
                ...codeMirrorOptions
              }}
              onBeforeChange={(editor, data, js) => {
                this.setState({ js });
              }}
            />
          </div>
        </section>
        <section className="result">
          <iframe title="result" className="iframe" ref="iframe" />
        </section>
      </div>
    );
  }
}

export default App;
