import axios from "axios";

const uploadPhoto = async (photo: { uri: string; fileName?: string; mimeType?: string }) => {
  const formData = new FormData();

  formData.append('image', {
    uri: photo.uri,
    name: photo.fileName || 'photo.jpg',
    type: photo.mimeType || 'image/jpeg',
  } as any);
console.log('📤 Uploading photo with URI:', photo.uri);
console.log('📦 FormData object:', formData);
  try {
    const response = await axios.post(
      'https://plantify-backend-n824.onrender.com/api/plant',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data.plantData;
 } catch (error: any) {
  console.error('❌ Upload failed:', error.message);
  if (error.response) {
    console.error('❗ Server responded with:', error.response.data);
  } else if (error.request) {
    console.error('❗ No response received:', error.request);
  } else {
    console.error('❗ Axios error:', error);
  }
  throw error;
}
};

export default uploadPhoto;