import React, { Fragment, useRef, useEffect } from "react";

import { runCode } from "./downloadFile";

const DisplayWindow = ({ html, css, js }) => {
  const iframeRef = useRef(null);

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
    </div>
  );
};

export default DisplayWindow;
