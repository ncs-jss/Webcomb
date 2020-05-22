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
}) => {
  return (
    <div className="display-window">
      <Iframe
        html={html}
        css={css}
        js={js}
        reset={reset}
        saveToLocalStorage={saveToLocalStorage}
      />
      <BottomBar view={view} toggleView={toggleView} />
    </div>
  );
};

export default DisplayWindow;
