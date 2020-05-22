import React from 'react';

import FunctionButton from '../FunctionButton';
import Icon from '../Icon';

const BottomBar = ({ toggleView, view }) => {
  return (
    <div className="bottom-bar">
      <FunctionButton onClick={() => toggleView(!view)}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="toggle" />
          <span>Toggle View</span>
        </div>
      </FunctionButton>
    </div>
  );
};

export default BottomBar;
