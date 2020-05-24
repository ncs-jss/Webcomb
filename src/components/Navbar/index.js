import React from 'react';

import FunctionButton from '../FunctionButton';
import Icon from '../Icon';

const Navbar = ({ reset, save, view, html, download }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="heading">
          <Icon name="webcomb" />
          Webcomb <span>&nbsp; - &nbsp; an online web editor</span>
        </h1>
      </div>
      <div className="buttons" style={html === '' ? { display: 'none' } : null}>
        {!view && (
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
        )}
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
