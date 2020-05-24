import React, { useState } from 'react';

import { useModal } from '../../utils/useModal';

import FunctionButton from '../FunctionButton';
import Icon from '../Icon';
import Modal from '../Modal';

const BottomBar = ({ toggleView, view }) => {
  const [modal, showModal, hideModal] = useModal();
  const [fileName, setFileName] = useState('No file chosen!');

  const onChangeHandler = (e) => {
    setFileName(e.target.files[0].name);
  };

  return (
    <>
      {modal && (
        <Modal title="Import Images" closeModal={hideModal}>
          <form>
            <label htmlFor="file-upload" className="custom-file-upload">
              Choose an Image
            </label>
            <input id="file-upload" type="file" onChange={onChangeHandler} />
            file: {fileName}
            {fileName !== 'No file chosen!' && (
              <button id="upload-file-button" type="submit">
                <Icon name="upload" /> Upload and Get link
              </button>
            )}
          </form>
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
