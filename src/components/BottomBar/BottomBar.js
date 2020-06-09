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

  const showShortcuts = () => {
    setModalTitle('Shortcuts');
    showModal();
  };

  const showImageModal = useCallback(() => {
    setModalTitle('Import Images');
    showModal();
  }, [showModal]);

  const closeModal = () => {
    hideModal();
    setModalTitle(null);
    setClipboardFile(null);
  };

  useEffect(() => {
    const pasteImageHandler = (e) => {
      const items = (e.clipboardData || e.originale.clipboardData).items;
      const item = items[0];

      if (item.kind === 'file') {
        setClipboardFile(item.getAsFile());
        showImageModal();
      }
    };
    window.addEventListener('paste', pasteImageHandler, false);

    return () => {
      window.removeEventListener('paste', pasteImageHandler, false);
    };
  }, [showImageModal]);

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
          Shortcut
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
