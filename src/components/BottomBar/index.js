import React from 'react';

import { useModal } from '../../utils/useModal';

import FunctionButton from '../FunctionButton';
import Icon from '../Icon';
import Modal from '../Modal';

const BottomBar = ({ toggleView, view }) => {
  const [modal, showModal, hideModal] = useModal();

  return (
    <>
      {modal && (
        <Modal title="Import Images" closeModal={hideModal}>
          <p>This is a Modal</p>
        </Modal>
      )}
      <div className="bottom-bar">
        <FunctionButton onClick={showModal}>Import</FunctionButton>
        <FunctionButton onClick={() => toggleView(!view)}>
          <Icon name="toggle" />
          <span>Toggle View</span>
        </FunctionButton>
      </div>
    </>
  );
};

export default BottomBar;
