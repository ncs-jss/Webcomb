import React, { Fragment, useRef, useEffect } from "react";

import { content, runCode } from "./runCode";
import BottomButtons from "./BottomButtons";

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

      <div className="buttons-div">
        {!view
          ? <Fragment>
              <BottomButtons children="Save" onClick={saveToLocalStorage} />
              <BottomButtons children="Reset" onClick={reset} />
            </Fragment>
          : null}
        <BottomButtons children="Download File" onClick={downloadFile} />
        <BottomButtons
          children="Toggle View"
          onClick={() => toggleView(!view)}
        />
      </div>
    </div>
  );
};

export default DisplayWindow;
