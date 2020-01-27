import React from "react";

const FuntionButton = props => {
  const { children, onClick } = props;
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default FuntionButton;
