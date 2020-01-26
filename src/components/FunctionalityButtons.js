import React, { Fragment } from "react";

const FunctionalityButtons = ({
  downloadFile,
  reset,
  saveToLocalStorage,
  view,
  toggleView,
  ...props
}) => {
  return (
    <div className={`buttons ${view ? "fullscreen-display-buttons" : null}`}>
      {!view
        ? <Fragment>
            <button className="btn" onClick={saveToLocalStorage}>
              Save
            </button>
            <button className="btn" onClick={reset}>
              Reset
            </button>
          </Fragment>
        : null}
      <button className="btn" onClick={downloadFile}>
        Download File
      </button>
      <button className="btn" onClick={() => toggleView(!view)}>
        Toggle View
      </button>
    </div>
  );
};

export default FunctionalityButtons;
