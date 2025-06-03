import { TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import uploadPhoto from './CameraUtils';

export const CameraButton = () => {
  const takePhoto = () => {
    ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    })
      .then((result) => {
        if (!result.canceled) {
          const photo = result.assets[0];

          photo.fileName = photo.fileName || 'photo.jpg';
          photo.mimeType = photo.mimeType || 'image/jpeg';

          console.log('Captured photo asset:', photo); 
          uploadPhoto(photo);
        }
      })
      .catch((err) => {
        console.error('Camera launch failed:', err);
      });
  };

  return (
    <TouchableOpacity onPress={takePhoto} className="bg-green-500 p-4 rounded">
      <Text className="text-white text-center">Take Photo</Text>
    </TouchableOpacity>
  );
};