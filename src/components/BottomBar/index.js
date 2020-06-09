import React, { useState } from 'react';

import { useModal } from 'utils/useModal';

import FunctionButton from 'components/FunctionButton';
import Icon from 'components/Icon';
import Modal from 'components/Modal';
import ImageUpload from 'components/ImageUpload';
import Shortcuts from 'components/Shortcuts';

const BottomBar = () => {
  const [modal, showModal, hideModal] = useModal();
  const [modalTitle, setModalTitle] = useState(null);

  const showShortcuts = () => {
    setModalTitle('Shortcuts');
    showModal();
  };

  const showImageModal = () => {
    setModalTitle('Import Images');
    showModal();
  };

  const closeModal = () => {
    setModalTitle(null);
    hideModal();
  };

  return (
    <>
      {modal && (
        <Modal title={modalTitle} closeModal={closeModal}>
          {modalTitle === 'Shortcuts' ? <Shortcuts /> : <ImageUpload />}
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
