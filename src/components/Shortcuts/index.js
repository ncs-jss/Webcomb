import React from 'react';

const Shortcuts = () => {
  return (
    <div className="shortcuts">
      <ul className="shortcuts-list">
        <li>
          <span>Ctrl/Cmd + S</span> - Save Pen
        </li>
        <li>
          <span>Ctrl/Cmd + R</span> - Open Reset Modal
        </li>
        <li>
          <span>Ctrl/Cmd + D</span> - Download HTML file
        </li>
        <li>
          <span>Ctrl/Cmd + /</span> - Line comment
        </li>
        <li>
          <span>Ctrl/Cmd + /</span> - Block comment
        </li>
      </ul>
      <p>
        Note: All these shortcuts can only be triggered when the cursor is in
        the editor.
      </p>
    </div>
  );
};

export default Shortcuts;
