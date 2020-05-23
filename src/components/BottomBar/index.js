import React from 'react';

import FunctionButton from '../FunctionButton';
import Icon from '../Icon';

const BottomBar = ({ toggleView, view }) => {
  return (
    <>
      <div className="bottom-bar">
        <FunctionButton onClick={() => toggleView(!view)}>
          <Icon name="toggle" />
          <span>Toggle View</span>
        </FunctionButton>
      </div>
    </>
  );
};

export default BottomBar;
