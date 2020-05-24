import React from 'react';

import { useModal } from '../../utils/useModal';

import FunctionButton from '../FunctionButton';
import Icon from '../Icon';
import ImageUpload from '../ImageUpload';

const BottomBar = ({ toggleView, view }) => {
  const [modal, showModal, hideModal] = useModal();

  return (
    <>
      {modal && <ImageUpload showModal={showModal} hideModal={hideModal} />}
      <div className="bottom-bar">
        <FunctionButton onClick={showModal}>
          <Icon name="import" />
          Import Image
        </FunctionButton>
        <FunctionButton onClick={() => toggleView(!view)}>
          <Icon name="toggle" />
          <span>Toggle View</span>
        </FunctionButton>
      </div>
    </>
  );
};

export default BottomBar;
