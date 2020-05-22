import React from 'react';

import FunctionButton from '../FunctionButton';
import Icon from '../Icon';

import { downloadFile } from '../../utils/helpers';

const Navbar = ({ reset, save, view, html }) => {
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
          <FunctionButton onClick={reset}>
            <div>
              <Icon
                name="reset"
                style={{
                  fill: '#fff',
                  fillRule: 'evenodd',
                }}
              />
              <span>Reset</span>
            </div>
          </FunctionButton>
        )}
        <FunctionButton onClick={save}>
          <div>
            <Icon
              name="save"
              style={{
                fill: '#fff',
                stroke: '#fff',
                strokeWidth: '0.4px',
              }}
            />
            <span>Save</span>
          </div>
        </FunctionButton>
        <FunctionButton onClick={downloadFile}>
          <div>
            <Icon
              name="download"
              style={{
                fill: '#fff',
                fillRule: 'evenodd',
              }}
            />
            <span>Download file</span>
          </div>
        </FunctionButton>
      </div>
    </div>
  );
};

export default Navbar;
