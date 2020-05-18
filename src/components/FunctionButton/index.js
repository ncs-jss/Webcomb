import React from 'react';

const FunctionButton = props => {
  const { children, onClick } = props;
  return (
    <button className='btn' onClick={onClick} style={props.styles}>
      {children}
    </button>
  );
};

export default FunctionButton;
