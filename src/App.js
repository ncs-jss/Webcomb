import React, { useState, useEffect, useCallback } from 'react';

import './App.css';

import { useModal } from './utils/useModal';

import Navbar from './components/Navbar';
import DefaultWindow from './components/DefaultWindow';
import DisplayWindow from './components/DisplayWindow';
import CodeEditor from './components/CodeEditor';
import BottomBar from './components/BottomBar';
import Modal from './components/Modal';

import { downloadFile } from './utils/helpers.js';

const App = () => {
  // states
  const [html, sethtml] = useState('');
  const [css, setcss] = useState('');
  const [js, setjs] = useState('');
  const [isResizable, setIsResizable] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [modal, showModal, hideModal] = useModal();

  // codemirror extrakeys
  const extraKeys = {
    'Ctrl-S': () => saveToLocalStorage(),
    'Ctrl-R': () => showResetModal(),
    'Ctrl-D': () => downloadFile(),
    'Cmd-S': () => saveToLocalStorage(),
    'Cmd-R': () => showResetModal(),
    'Cmd-D': () => downloadFile(),
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
    if (html !== '' || css !== '' || js !== '') {
      setModalContent({
        title: 'Reset Pen?',
        desc: 'Clicking the Reset button will reset the Pen!',
        reset: true,
      });
      showModal();
    }
  };

  // logic to reset everyhting
  const reset = () => {
    sethtml('');
    setcss('');
    setjs('');
    localStorage.clear();
    hideModal();
  };

  const mouseDownHandler = useCallback(() => setIsResizable(true), []);

  const mouseMoveHandler = useCallback(
    (e) => {
      if (isResizable) {
        const el = document.querySelector('.playground');
        el.style.width = window.innerWidth - e.pageX + 'px';
      }
    },
    [isResizable],
  );

  const mouseUpHandler = useCallback(() => setIsResizable(false), []);

  useEffect(() => {
    document.addEventListener('mouseup', mouseUpHandler);
    return () => {
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [mouseUpHandler]);

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [mouseMoveHandler]);

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
              mouseMoveHandler={mouseMoveHandler}
              mouseUpHandler={mouseUpHandler}
            />
          )}

          <section className="playground">
            <div
              className="resizable"
              onMouseDown={mouseDownHandler}
              title="resize"></div>
            <CodeEditor
              langName="HTML"
              value={html}
              mode="htmlmixed"
              lang={html}
              setFn={sethtml}
              extraKeys={extraKeys}
            />
            <CodeEditor
              langName="CSS"
              value={css}
              mode="css"
              lang={css}
              setFn={setcss}
              extraKeys={extraKeys}
            />
            <CodeEditor
              langName="JavaScript"
              value={js}
              mode="javascript"
              lang={js}
              setFn={setjs}
              extraKeys={extraKeys}
            />
          </section>
        </div>

        <BottomBar />
      </div>
    </>
  );
};

export default App;
