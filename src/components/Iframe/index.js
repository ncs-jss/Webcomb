import React, { useRef, useEffect } from 'react';

import { runCode } from '../helpers';

const Iframe = ({ html, css, js, view, toggleView }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    runCode(iframeRef, html, css, js);
  }, [html, css, js]);

  return (
    <section className="result">
      <iframe title="result" className="iframe" ref={iframeRef} />
    </section>
  );
};

export default Iframe;
