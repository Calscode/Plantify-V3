import axios from 'axios';

const uploadPhoto = (photo: {
  uri: string;
  fileName?: string;
  mimeType?: string;
}) => {
  const formData = new FormData();

  formData.append('image', {
    uri: photo.uri,
    name: photo.fileName || 'photo.jpg',
    type: photo.mimeType || 'image/jpeg',
  } as any);

  axios
    .post('https://plantify-backend-n824.onrender.com/api/plant', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log('API response:', response.data.plantData);
    })
    .catch((error) => {
      console.error('Upload failed:', error.message);
    });
};

export default uploadPhoto;