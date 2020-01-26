import React from "react";

const BottomButtons = props => {
  const { children, onClick } = props;
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default BottomButtons;
