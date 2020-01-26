import React, { useRef, useEffect, useState } from "react";

import FunctionalityButtons from "./FunctionalityButtons";

const DisplayWindow = ({
  html,
  css,
  js,
  reset,
  saveToLocalStorage,
  ...props
}) => {
  const iframeRef = useRef(null);
  const [documentContents, setdocumentContents] = useState("");

  // logic to display the variales as an iframe
  const runCode = () => {
    if (html !== "") {
      const iframe = iframeRef.current;
      const document = iframe.contentDocument;
      setdocumentContents(`
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
    `);
      document.open();
      document.write(documentContents);
      document.close();
    }
  };

  useEffect(
    () => {
      runCode();
    },
    [html, css, js, runCode]
  );

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

  return (
    <div>
      <section className="result">
        <iframe title="result" className="iframe" ref={iframeRef} />
      </section>
      <FunctionalityButtons
        downloadFile={downloadFile}
        reset={reset}
        saveToLocalStorage={saveToLocalStorage}
      />
    </div>
  );
};

export default DisplayWindow;
