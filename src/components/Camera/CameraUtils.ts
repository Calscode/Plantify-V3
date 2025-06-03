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

  fetch('https://your-backend.com/api/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((json) => {
      console.log('API response:', json);
    })
    .catch((err) => {
      console.error('Upload failed:', err);
    });
};

export default uploadPhoto;