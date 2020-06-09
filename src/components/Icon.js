import React from 'react';

import { getIcons } from 'utils/getIcons';

const Icon = ({ name, width, height, style, title, ...rest }) => {
  let current = getIcons().find((icon) => icon.name === name);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || current.width}
      height={height || current.height}
      viewBox={current.viewBox}
      style={{ fill: '#fff', stroke: '#fff', strokeWidth: '0.4px', ...style }}
      title={title}>
      {current.svg}
    </svg>
  );
};

export default Icon;
