import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  onPhotoTaken: (photo: any) => void;
};

export const CameraButton = ({ onPhotoTaken }: Props) => {
  const takePhoto = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });

      console.log('📷 ImagePicker result:', result);

      if (!result.canceled) {
        const photo = result.assets[0];
        onPhotoTaken(photo);
      }
    } catch (err) {
      console.error('Camera error:', err);
    }
  };

  return (
    <TouchableOpacity onPress={takePhoto}>
      <Ionicons name="camera-outline" size={28} color="#4B5563" />
    </TouchableOpacity>
  );
};