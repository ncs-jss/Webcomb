import React from "react";

const FunctionalityButtons = ({
  downloadFile,
  reset,
  saveToLocalStorage,
  ...props
}) => {
  return (
    <div className="buttons">
      <button className="save-button" onClick={saveToLocalStorage}>
        Save
      </button>
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
      <button className="download-button" onClick={downloadFile}>
        Download File
      </button>
    </div>
  );
};

export default FunctionalityButtons;
