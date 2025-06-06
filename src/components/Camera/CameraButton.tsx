import { TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import uploadPhoto from './CameraUtils';
import { Ionicons } from '@expo/vector-icons';

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
          const photo:any = result.assets[0];

          photo.fileName = photo.fileName || 'photo.jpg';
          photo.mimeType = photo.mimeType || 'image/jpeg';

          uploadPhoto(photo);
        }
      })
      .catch((err) => {
        console.error('Camera launch failed:', err);
      });
  };

  return (
<TouchableOpacity onPress={takePhoto}>
  <Ionicons name="camera-outline" size={28} color="#4B5563" />
</TouchableOpacity>
  );
};