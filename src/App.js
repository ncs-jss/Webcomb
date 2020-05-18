import React, { useState, useEffect } from 'react';

import './App.css';

import DefaultWindow from './components/DefaultWindow';
import DisplayWindow from './components/DisplayWindow';
import CodeEditor from './components/CodeEditor';
import Navbar from './components/Navbar';

const App = () => {
  // states
  const [html, sethtml] = useState('');
  const [css, setcss] = useState('');
  const [js, setjs] = useState('');
  const [view, toggleView] = useState(false); // false for normal view, true for fullScreen

  // logic to save file
  const saveToLocalStorage = () => {
    if (html !== '' || css !== '' || js !== '') {
      const langObj = { html, css, js };
      localStorage.setItem('langObj', JSON.stringify(langObj));
      window.alert('Pen Saved ;-)');
    }
  };

  // logic to reset everyhting
  const reset = () => {
    if (window.confirm('Reset Pen?')) {
      sethtml('');
      setcss('');
      setjs('');
      localStorage.clear();
    }
  };

  // logic to get data from local storage
  useEffect(() => {
    const langObj = JSON.parse(localStorage.getItem('langObj'));
    if (langObj !== null) {
      sethtml(langObj.html);
      setcss(langObj.css);
      setjs(langObj.js);
    }
  }, []);

  return (
    <div className='App'>
      <Navbar reset={reset} save={saveToLocalStorage} view={view} html={html} />
      <div className='main'>
        {html === ''
          ? <DefaultWindow />
          : <DisplayWindow
            html={html}
            css={css}
            js={js}
            reset={reset}
            saveToLocalStorage={saveToLocalStorage}
            view={view}
            toggleView={toggleView}
            />}

        <section className='playground' style={view ? { width: '0' } : null}>
          <CodeEditor
            langName='HTML'
            value={html}
            mode='htmlmixed'
            lang={html}
            setFn={sethtml}
            saveToLocalStorage={saveToLocalStorage}
          />
          <CodeEditor
            langName='CSS'
            value={css}
            mode='css'
            lang={css}
            setFn={setcss}
            saveToLocalStorage={saveToLocalStorage}
          />
          <CodeEditor
            langName='Javascript'
            value={js}
            mode='javascript'
            lang={js}
            setFn={setjs}
            saveToLocalStorage={saveToLocalStorage}
          />
        </section>
      </div>
    </div>
  );
};

export default App;
