import React from 'react';

import Iframe from '../Iframe';

const DisplayWindow = ({
  html,
  css,
  js,
  reset,
  saveToLocalStorage,
  mouseMoveHandler,
  mouseUpHandler,
}) => {
  return (
    <div className="display-window">
      <Iframe
        html={html}
        css={css}
        js={js}
        reset={reset}
        saveToLocalStorage={saveToLocalStorage}
        mouseMoveHandler={mouseMoveHandler}
        mouseUpHandler={mouseUpHandler}
      />
    </div>
  );
};

export default DisplayWindow;
