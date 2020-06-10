import React, { useState, useEffect, useCallback } from 'react';

import { useModal } from 'utils/useModal';

import FunctionButton from 'components/FunctionButton';
import Icon from 'components/Icon';
import Modal from 'components/Modal';
import ImageUpload from 'components/ImageUpload';
import Shortcuts from 'components/Shortcuts';

const BottomBar = () => {
  const [modal, showModal, hideModal] = useModal();
  const [modalTitle, setModalTitle] = useState(null);
  const [clipboardFile, setClipboardFile] = useState(null);

  const showShortcuts = useCallback(() => {
    setModalTitle('Shortcuts');
    showModal();
  }, [showModal]);

  const showImageModal = useCallback(() => {
    setModalTitle('Import Images');
    showModal();
  }, [showModal]);

  const closeModal = () => {
    hideModal();
    setModalTitle(null);
    setClipboardFile(null);
  };

  const keyDownHandler = useCallback(
    (e) => {
      const cmdKey = window.navigator.platform.match('Mac')
        ? e.metaKey
        : e.ctrlKey;
      const modalsLength = document.querySelectorAll('.modal').length;
      if (cmdKey && !modalsLength && !e.shiftKey) {
        switch (e.keyCode) {
          case 73:
            e.preventDefault();
            showImageModal();
            break;
          case 75:
            e.preventDefault();
            showShortcuts();
            break;
          default:
            return;
        }
      }
    },
    [showImageModal, showShortcuts],
  );

  const pasteImageHandler = useCallback(
    (e) => {
      const items = (e.clipboardData || e.originalEvent.clipboardData).items;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') === 0) {
          setClipboardFile(items[i].getAsFile());
          showImageModal();
        }
      }
    },
    [showImageModal],
  );

  // Listener for paste from clipboard
  useEffect(() => {
    window.addEventListener('paste', pasteImageHandler, false);

    return () => {
      window.removeEventListener('paste', pasteImageHandler, false);
    };
  }, [pasteImageHandler]);

  // Listener for navbar events' shortcuts
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <>
      {modal && (
        <Modal title={modalTitle} closeModal={closeModal}>
          {modalTitle === 'Shortcuts' ? (
            <Shortcuts />
          ) : (
            <ImageUpload clipboardFile={clipboardFile} />
          )}
        </Modal>
      )}
      <div className="bottom-bar">
        <FunctionButton onClick={showShortcuts}>
          <Icon name="shortcut" />
          Shortcuts
        </FunctionButton>
        <FunctionButton onClick={showImageModal}>
          <Icon name="import" />
          Import Image
        </FunctionButton>
      </div>
    </>
  );
};

export default BottomBar;
