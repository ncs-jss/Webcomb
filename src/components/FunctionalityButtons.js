import React, { Fragment } from "react";

import BottomButtons from "./BottomButtons";

const FunctionalityButtons = ({
  downloadFile,
  reset,
  saveToLocalStorage,
  view,
  toggleView
}) => {
  return (
    <div className="buttons-div">
      {!view
        ? <Fragment>
            <BottomButtons children="Save" onClick={saveToLocalStorage} />
            <BottomButtons children="Reset" onClick={reset} />
          </Fragment>
        : null}
      <BottomButtons children="Download File" onClick={downloadFile} />
      <BottomButtons children="Toggle View" onClick={() => toggleView(!view)} />
    </div>
  );
};

export default FunctionalityButtons;
