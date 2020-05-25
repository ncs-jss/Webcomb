import React from 'react';

import { useModal } from '../../utils/useModal';

import FunctionButton from '../FunctionButton';
import Icon from '../Icon';
import ImageUpload from '../ImageUpload';

const BottomBar = ({ toggleView, view }) => {
  const [modal, showModal, hideModal] = useModal();

  return (
    <>
      {modal && <ImageUpload hideModal={hideModal} />}
      <div className="bottom-bar">
        <FunctionButton onClick={() => toggleView(!view)}>
          <Icon name="toggle" />
          <span>Toggle View</span>
        </FunctionButton>
        <FunctionButton onClick={showModal}>
          <Icon name="import" />
          Import Image
        </FunctionButton>
      </div>
    </>
  );
};

export default BottomBar;
