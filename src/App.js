import React, { useState, useEffect } from 'react';

import './App.css';

import { useModal } from './utils/useModal';

import Navbar from './components/Navbar';
import DefaultWindow from './components/DefaultWindow';
import DisplayWindow from './components/DisplayWindow';
import CodeEditor from './components/CodeEditor';
import Modal from './components/Modal';

import { downloadFile } from './utils/helpers.js';

const App = () => {
  // states
  const [html, sethtml] = useState('');
  const [css, setcss] = useState('');
  const [js, setjs] = useState('');
  const [view, toggleView] = useState(false); // false for normal view, true for fullScreen
  const [modalContent, setModalContent] = useState({});
  const [modal, showModal, hideModal] = useModal();

  // codemirror extra options
  const codeMirrorOptions = {
    theme: 'material',
    lineNumbers: true,
    scrollbarStyle: null,
    lineWrapping: true,
    tabSize: 2,
    extraKeys: {
      'Ctrl-S': () => saveToLocalStorage(),
      'Ctrl-R': () => showResetModal(),
      'Ctrl-D': () => downloadFile(),
    },
  };

  // logic to save file
  const saveToLocalStorage = () => {
    if (html !== '' || css !== '' || js !== '') {
      const langObj = { html, css, js };
      localStorage.setItem('langObj', JSON.stringify(langObj));
      setModalContent({
        title: 'Pen Saved!',
        desc: 'The pen has been saved ;-)',
      });
      showModal();
    }
  };

  // show reset modal
  const showResetModal = () => {
    setModalContent({
      title: 'Reset Pen?',
      desc: 'Clicking the Reset button will reset the Pen!',
      reset: true,
    });
    showModal();
  };

  // logic to reset everyhting
  const reset = () => {
    sethtml('');
    setcss('');
    setjs('');
    localStorage.clear();
    hideModal();
  };

  // logic to get data from local storage when component mounts
  useEffect(() => {
    const langObj = JSON.parse(localStorage.getItem('langObj'));
    if (langObj !== null) {
      sethtml(langObj.html);
      setcss(langObj.css);
      setjs(langObj.js);
    }
  }, []);

  return (
    <>
      {modal && (
        <Modal title={modalContent.title} closeModal={hideModal}>
          <p>{modalContent.desc}</p>
          <br />
          {modalContent.reset && (
            <div className="flex-space-between">
              <button className="btn" title="cancel" onClick={hideModal}>
                Cancel
              </button>
              <button
                className="btn danger-btn"
                title="reset pen"
                onClick={reset}>
                Reset
              </button>
            </div>
          )}
        </Modal>
      )}
      <div className="App">
        <Navbar
          reset={showResetModal}
          save={saveToLocalStorage}
          view={view}
          html={html}
          download={downloadFile}
        />
        <div className="main">
          {html === '' ? (
            <DefaultWindow />
          ) : (
            <DisplayWindow
              html={html}
              css={css}
              js={js}
              reset={reset}
              saveToLocalStorage={saveToLocalStorage}
              view={view}
              toggleView={toggleView}
            />
          )}

          <section className="playground" style={view ? { width: '0' } : null}>
            <CodeEditor
              langName="HTML"
              value={html}
              mode="htmlmixed"
              lang={html}
              setFn={sethtml}
              codeMirrorOptions={codeMirrorOptions}
            />
            <CodeEditor
              langName="CSS"
              value={css}
              mode="css"
              lang={css}
              setFn={setcss}
              codeMirrorOptions={codeMirrorOptions}
            />
            <CodeEditor
              langName="JavaScript"
              value={js}
              mode="javascript"
              lang={js}
              setFn={setjs}
              codeMirrorOptions={codeMirrorOptions}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
