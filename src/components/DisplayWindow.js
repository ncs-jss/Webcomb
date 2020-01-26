import React, { Fragment, useRef, useEffect, useState } from "react";

import FunctionalityButtons from "./FunctionalityButtons";

const DisplayWindow = ({
  html,
  css,
  js,
  reset,
  saveToLocalStorage,
  view,
  toggleView,
  ...props
}) => {
  const iframeRef = useRef(null);

  const [documentContents, setdocumentContents] = useState("");

  // logic to display the variales as an iframe
  const runCode = () => {
    if (html !== "") {
      const iframe = iframeRef.current;
      const iframeWindow = iframe.contentWindow;
      iframeWindow.console.log = () => {};
      console.log(iframeWindow.console.log);
      const document = iframe.contentDocument;
      setdocumentContents(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport content="width=device-width, initial-scale=1.0">
      <meta http-equip="X-UA-Compatible content="ie=edge">
      <title>Pen</title>
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
    `);
      document.open();
      document.write(documentContents);
      document.close();
    }
  };

  // logic to download file
  const downloadFile = () => {
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
    link.click();
  };

  useEffect(
    () => {
      runCode();
    },
    [html, css, js, runCode]
  );

  return (
    <Fragment>
      <section className={`result ${view ? "fullscreen-display" : null}`}>
        <iframe title="result" className="iframe" ref={iframeRef} />
      </section>
      <FunctionalityButtons
        downloadFile={downloadFile}
        reset={reset}
        saveToLocalStorage={saveToLocalStorage}
        view={view}
        toggleView={toggleView}
      />
    </Fragment>
  );
};

export default DisplayWindow;
