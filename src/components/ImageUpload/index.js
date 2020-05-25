import React, { useState } from 'react';

import Icon from '../Icon';
import Modal from '../Modal';

import { uploadImage } from '../../api';

const ImageUpload = ({ hideModal }) => {
  const [fileName, setFileName] = useState('No file chosen!');
  const [file, setFile] = useState('');
  const [imgUrl, setImgUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    const data = await uploadImage(formData);
    if (!data.err) {
      setImgUrl(data.image.url);
    } else {
      setUploadError(data.err);
    }
    setUploading(false);
  };

  const copyName = () => navigator.clipboard.writeText(fileName);

  const copyUrl = () => navigator.clipboard.writeText(imgUrl);

  return (
    <Modal title="Import Images" closeModal={hideModal}>
      {!imgUrl && !uploadError ? (
        <>
          <label htmlFor="file-upload" className="custom-file-upload">
            Choose an Image
          </label>
          <input id="file-upload" type="file" onChange={handleChange} />
          file: {fileName}
          {fileName !== 'No file chosen!' && (
            <button
              id="upload-file-button"
              type="submit"
              disabled={uploading}
              onClick={handleSubmit}>
              {!uploading ? (
                <>
                  <Icon name="upload" /> Upload and Get link
                </>
              ) : (
                <>
                  <div id="loading"></div>Uploading
                </>
              )}
            </button>
          )}
        </>
      ) : !uploadError ? (
        <div className="image-details">
          <h2>Image successfully uploaded!</h2>
          <br />
          <span>Image name:</span>
          <p title="copy name" onClick={copyName}>
            {fileName}
          </p>
          <span>Image Url:</span>
          <p className="image-url" onClick={copyUrl} title="copy url">
            {imgUrl}
          </p>
        </div>
      ) : (
        <div className="upload-error">
          <h2>Error while uploading :-(</h2>
          <p className="error-message">{uploadError}</p>
        </div>
      )}
    </Modal>
  );
};

export default ImageUpload;
