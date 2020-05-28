import React from 'react';

import { useModal } from '../../utils/useModal';

import FunctionButton from '../FunctionButton';
import Icon from '../Icon';
import ImageUpload from '../ImageUpload';

const BottomBar = () => {
  const [modal, showModal, hideModal] = useModal();

  return (
    <>
      {modal && <ImageUpload hideModal={hideModal} />}
      <div className="bottom-bar">
        <FunctionButton onClick={showModal}>
          <Icon name="import" />
          Import Image
        </FunctionButton>
      </div>
    </>
  );
};

export default BottomBar;
