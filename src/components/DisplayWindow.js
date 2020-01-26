import React, { useRef, useEffect } from "react";

import { content, runCode } from "./runCode";
import FunctionalityButtons from "./FunctionalityButtons";

const DisplayWindow = ({
  html,
  css,
  js,
  reset,
  saveToLocalStorage,
  view,
  toggleView
}) => {
  const iframeRef = useRef(null);

  // logic to download file
  const downloadFile = () => {
    const link = document.createElement("a");
    const mimeType = "text/html" || "text/plain";
    link.setAttribute("download", "index.html");
    link.setAttribute(
      "href",
      "data:" + mimeType + ";charset=utf-8," + encodeURIComponent(content)
    );
    link.click();
  };

  useEffect(
    () => {
      runCode(iframeRef, html, css, js);
    },
    [html, css, js]
  );

  return (
    <div className="display-window">
      <section className="result">
        <iframe title="result" className="iframe" ref={iframeRef} />
      </section>
      <FunctionalityButtons
        downloadFile={downloadFile}
        reset={reset}
        saveToLocalStorage={saveToLocalStorage}
        view={view}
        toggleView={toggleView}
      />
    </div>
  );
};

export default DisplayWindow;
