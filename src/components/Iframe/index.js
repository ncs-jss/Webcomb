import React, { useRef, useEffect } from 'react';

import { runCode } from '../../utils/helpers';

const Iframe = ({ html, css, js, mouseMoveHandler, mouseUpHandler }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    runCode(iframeRef, html, css, js);
  }, [html, css, js]);

  useEffect(() => {
    const iframeDocument = iframeRef.current.contentDocument;
    iframeDocument.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      iframeDocument.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [mouseMoveHandler]);

  useEffect(() => {
    const iframeDocument = iframeRef.current.contentDocument;
    iframeDocument.addEventListener('mouseup', mouseUpHandler);
    return () => {
      iframeDocument.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [mouseUpHandler]);

  return (
    <section className="result">
      <iframe title="result" className="iframe" ref={iframeRef} />
    </section>
  );
};

export default Iframe;
