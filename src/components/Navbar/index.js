import React from 'react';

import FunctionButton from '../FunctionButton';
import { downloadFile } from '../helpers';

const Navbar = ({ reset, save, view, html }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <p className="heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="36"
            viewBox="0 0 40 36">
            <defs />
            <g transform="translate(-39 -28)">
              <g className="a" transform="translate(39 64) rotate(-90)">
                <path className="b" d="M27,0l9,16L27,32H9L0,16,9,0Z" />
                <path
                  className="c"
                  d="M 10.75454330444336 3 L 3.442043304443359 16 L 10.75454330444336 29 L 25.24545669555664 29 L 32.55795669555664 16 L 25.24545669555664 3 L 10.75454330444336 3 M 9 0 L 27 0 L 36 16 L 27 32 L 9 32 L 0 16 L 9 0 Z"
                />
              </g>
              <g className="a" transform="translate(59 51) rotate(-90)">
                <path
                  className="b"
                  d="M17.25,0,23,10,17.25,20H5.75L0,10,5.75,0Z"
                />
                <path
                  className="d"
                  d="M 7.485580444335938 3 L 3.460580825805664 10 L 7.485580444335938 17 L 15.51441955566406 17 L 19.53941917419434 10 L 15.51441955566406 3 L 7.485580444335938 3 M 5.75 0 L 17.25 0 L 23 10 L 17.25 20 L 5.75 20 L 0 10 L 5.75 0 Z"
                />
              </g>
            </g>
          </svg>
          Webcomb <span>&nbsp; - &nbsp; an online web editor</span>
        </p>
      </div>
      <div className="buttons" style={html === '' ? { display: 'none' } : null}>
        {!view && (
          <FunctionButton onClick={reset}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.726"
                height="19.167"
                viewBox="0 0 17.726 19.167"
                style={{
                  fill: '#fff',
                  fillRule: 'evenodd',
                  marginRight: '5px',
                }}>
                <defs />
                <g transform="matrix(0.259, 0.966, -0.966, 0.259, 13.564, 0)">
                  <g transform="translate(0)">
                    <path
                      d="M2.1,6.018H.765a.77.77,0,0,0-.733,1L2.459,11.47c.293.38.791.379,1.164-.149l2.427-4.3a.741.741,0,0,0-.733-1H4.131A4.851,4.851,0,0,1,9.059,2.006a5.021,5.021,0,0,1,5.015,5.015,4.871,4.871,0,0,1-5.015,5.015v2.006A6.94,6.94,0,0,0,16.08,7.021,7.03,7.03,0,0,0,9.059,0,6.932,6.932,0,0,0,2.1,6.018"
                      transform="translate(0)"
                    />
                  </g>
                </g>
              </svg>
              <span>Reset</span>
            </div>
          </FunctionButton>
        )}
        <FunctionButton onClick={save}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.4"
              height="17.4"
              viewBox="0 0 17.4 17.4"
              style={{ fill: '#fff', stroke: '#fff', strokeWidth: '0.4px' }}>
              <defs />
              <g transform="translate(247.2 23.2)">
                <g transform="translate(0 0)">
                  <path
                    d="M11.488,10A1.5,1.5,0,0,0,10,11.487V25.512A1.5,1.5,0,0,0,11.488,27H25.513A1.5,1.5,0,0,0,27,25.512V14.037a.638.638,0,0,0-.186-.452l-3.4-3.4A.638.638,0,0,0,22.962,10Zm0,1.275h1.7v5.312a.638.638,0,0,0,.637.638h8.5a.638.638,0,0,0,.637-.637V11.541L25.725,14.3V25.512a.2.2,0,0,1-.213.212H11.488a.2.2,0,0,1-.213-.212V11.487A.2.2,0,0,1,11.488,11.275Zm2.975,0h7.225V15.95H14.463ZM18.5,18.712a2.763,2.763,0,1,0,2.762,2.763A2.772,2.772,0,0,0,18.5,18.712Zm0,1.275a1.487,1.487,0,1,1-1.488,1.487A1.478,1.478,0,0,1,18.5,19.987Z"
                    transform="translate(-257 -33)"
                  />
                </g>
              </g>
            </svg>
            <span>Save</span>
          </div>
        </FunctionButton>
        <FunctionButton onClick={downloadFile}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.021"
              height="15.62"
              viewBox="0 0 14.021 15.62"
              style={{
                fill: '#fff',
                fillRule: 'evenodd',
                marginRight: '5px',
              }}>
              <defs />
              <path
                d="M4.807,1.829c.506,0,.629.293.275.654L1.5,6.134a.913.913,0,0,0,1.29,1.293L5.667,4.545c.239-.239.432-.161.432.174v9.987a.912.912,0,1,0,1.824,0V4.719c0-.336.192-.415.432-.174l2.874,2.883a.913.913,0,0,0,1.29-1.293L8.913,2.478c-.354-.359-.228-.649.275-.649h3.919a.914.914,0,0,0,0-1.829H.914a.914.914,0,0,0,0,1.829Z"
                transform="translate(14.021 15.62) rotate(180)"
              />
            </svg>
            <span>Download file</span>
          </div>
        </FunctionButton>
      </div>
    </div>
  );
};

export default Navbar;
