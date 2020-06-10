import React from 'react';

const Shortcuts = () => {
  return (
    <div className="shortcuts">
      <div>
        <h3 className="shortcuts-type">Pen Shortcuts</h3>
        <p>
          <span>Ctrl/Cmd + S</span> - Save Pen
        </p>
        <p>
          <span>Ctrl/Cmd + R</span> - Open Reset Modal
        </p>
        <p>
          <span>Ctrl/Cmd + H</span> - Download HTML file
        </p>
        <p>
          <span>Ctrl/Cmd + V</span> - Paste Image from clipboard
        </p>
        <p>
          <span>Ctrl/Cmd + I</span> - Import Image Modal
        </p>
        <p>
          <span>Ctrl/Cmd + K</span> - Show Shortcuts Modal
        </p>
      </div>
      <div>
        <h3 className="shortcuts-type">Editor Shortcuts</h3>
        <p>
          <span>Ctrl/Cmd + /</span> - Line comment
        </p>
        <p>
          <span>Ctrl/Cmd + /</span> - Block comment
        </p>
      </div>
    </div>
  );
};

export default Shortcuts;
