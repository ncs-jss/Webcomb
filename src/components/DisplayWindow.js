import React, { useRef, useEffect } from "react";

import { runCode } from "./downloadFile";
import FuntionButton from "./FuntionButton";

const DisplayWindow = ({ html, css, js, view, toggleView }) => {
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
      <FuntionButton
        styles={{ position: "absolute", bottom: "10px", left: "5px" }}
        children={
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.15"
              height="14.15"
              viewBox="0 0 14.15 14.15"
              style={{ fill: "#fff", stroke: "#fff", strokeWidth: "0.4px" }}
            >
              <defs />
              <g transform="translate(59.2 -1.8)">
                <g transform="translate(-59 2)">
                  <path d="M4.813,1.375V0H0V4.813H1.375V2.338L3.85,4.813l.963-.963L2.338,1.375Z" />
                  <path
                    d="M3.85,13,1.375,15.475V13H0v4.813H4.813V16.438H2.338l2.475-2.475Z"
                    transform="translate(0 -4.063)"
                  />
                  <path
                    d="M16.438,15.475,13.962,13,13,13.962l2.475,2.475H13v1.375h4.813V13H16.438Z"
                    transform="translate(-4.063 -4.063)"
                  />
                  <path
                    d="M13,0V1.375h2.475L13,3.85l.962.963,2.475-2.475V4.813h1.375V0Z"
                    transform="translate(-4.063)"
                  />
                </g>
              </g>
            </svg>
            <span>Toggle View</span>
          </div>
        }
        onClick={() => toggleView(!view)}
      />
    </div>
  );
};

export default DisplayWindow;
