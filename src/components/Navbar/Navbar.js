import React, { useEffect, useCallback } from 'react';

import FunctionButton from 'components/FunctionButton';
import Icon from 'components/Icon';

const Navbar = ({ reset, save, html, download }) => {
  const keyDownHandler = useCallback(
    (e) => {
      const cmdKey = window.navigator.platform.match('Mac')
        ? e.metaKey
        : e.ctrlKey;
      if (cmdKey) {
        switch (e.keyCode) {
          case 68:
            e.preventDefault();
            download();
            break;
          case 82:
            e.preventDefault();
            reset();
            break;
          case 83:
            e.preventDefault();
            save();
            break;
          default:
            return;
        }
      }
    },
    [download, reset, save],
  );

  // Listener for navbar events' shortcuts
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="heading">
          <Icon name="webcomb" />
          Webcomb <span>&nbsp; - &nbsp; an online web editor</span>
        </h1>
      </div>
      <div className="buttons" style={html === '' ? { display: 'none' } : null}>
        <FunctionButton onClick={reset} name="reset">
          <Icon
            name="reset"
            style={{
              fill: '#fff',
              fillRule: 'evenodd',
            }}
          />
          <span>Reset</span>
        </FunctionButton>
        <FunctionButton onClick={save}>
          <Icon
            name="save"
            style={{
              fill: '#fff',
              stroke: '#fff',
              strokeWidth: '0.4px',
            }}
          />
          <span>Save</span>
        </FunctionButton>
        <FunctionButton onClick={download}>
          <Icon
            name="download"
            style={{
              fill: '#fff',
              fillRule: 'evenodd',
            }}
          />
          <span>Download file</span>
        </FunctionButton>
      </div>
    </div>
  );
};

export default Navbar;
