import React from "react";

import FuntionButton from "./FuntionButton";
import { downloadFile } from "./downloadFile";

const Navbar = ({ reset, save }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <p className="heading">
          Webcomb <span>&nbsp; - &nbsp; an online web editor</span>
        </p>
      </div>
      <div className="buttons">
        <FuntionButton children="Reset" onClick={reset} />
        <FuntionButton children="Save" onClick={save} />
        <FuntionButton children="Download file" onClick={downloadFile} />
      </div>
    </div>
  );
};

export default Navbar;
