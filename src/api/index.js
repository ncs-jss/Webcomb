import axios from 'axios';

export const uploadImage = async (formData) => {
  const token = process.env.REACT_APP_IMGBB_API_KEY;
  const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_IMAGEBB_URL}?key=${token}`;
  const options = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const {
    data: { data },
  } = await axios.post(url, formData, options);
  return data;
};
