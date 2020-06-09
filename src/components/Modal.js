import React, { useEffect } from 'react';

import ReactDOM from 'react-dom';

const Modal = ({ title, closeModal, children }) => {
  useEffect(() => {
    const closeModalEvent = (e) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    };
    document.querySelector('.modal').addEventListener('click', closeModalEvent);
    return () => {
      document
        .querySelector('.modal')
        .removeEventListener('click', closeModalEvent);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-main">
        <div className="modal-heading">
          <p>{title}</p>
          <button onClick={closeModal} title="close">
            &times;
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.querySelector('#modal-root'),
  );
};

export default Modal;
