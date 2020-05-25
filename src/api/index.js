import axios from 'axios';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

export const uploadImage = async (formData) => {
  try {
    const token = process.env.REACT_APP_IMGBB_API_KEY;
    const url = `${corsAnywhere}${process.env.REACT_APP_IMAGEBB_URL}?key=${token}`;
    const options = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const {
      data: { data },
    } = await axios.post(url, formData, options);
    return data;
  } catch (res) {
    return { err: res.response.data.error.message };
  }
};
