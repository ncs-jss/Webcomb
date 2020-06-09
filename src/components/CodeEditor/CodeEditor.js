import React, { useState } from 'react';

import { Controlled as Codemirror } from 'react-codemirror2';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

let numOfMinimisedScreens = 0;

const CodeEditor = ({ langName, value, lang, mode, setFn, extraKeys }) => {
  const [minimisedEditor, setminimisedEditor] = useState(false);

  const resizeEditor = () => {
    if (numOfMinimisedScreens < 2) {
      if (minimisedEditor) {
        numOfMinimisedScreens--;
      } else {
        numOfMinimisedScreens++;
      }
      setminimisedEditor(!minimisedEditor);
    } else if (minimisedEditor) {
      numOfMinimisedScreens--;
      setminimisedEditor(!minimisedEditor);
    }
  };

  return (
    <div
      className="code-editor"
      style={minimisedEditor ? { height: '55px', overflow: 'initial' } : null}>
      <div className="header" onClick={resizeEditor}>
        <span>{langName}</span>
        <button className="editor-resize-button">
          {minimisedEditor ? '+' : '-'}
        </button>
      </div>
      <Codemirror
        value={value}
        options={{
          mode: mode,
          theme: 'material',
          lineNumbers: true,
          scrollbarStyle: null,
          lineWrapping: true,
          tabSize: 2,
          matchBrackets: true,
          autoCloseBrackets: true,
          autofocus: mode === 'htmlmixed' ? true : false,
          extraKeys: {
            ...extraKeys,
            'Ctrl-/': 'toggleComment',
            'Cmd-/': 'toggleComment',
          },
        }}
        onBeforeChange={(editor, data, lang) => {
          setFn(lang);
        }}
      />
    </div>
  );
};

export default CodeEditor;
