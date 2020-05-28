import React from 'react';

import Iframe from '../Iframe';
import BottomBar from '../BottomBar';

const DisplayWindow = ({
  html,
  css,
  js,
  reset,
  saveToLocalStorage,
  view,
  toggleView,
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
      <BottomBar view={view} toggleView={toggleView} />
    </div>
  );
};

export default DisplayWindow;
