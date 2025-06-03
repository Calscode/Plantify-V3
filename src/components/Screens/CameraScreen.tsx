import { useEffect } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

useEffect(() => {
  ImagePicker.requestCameraPermissionsAsync()
    .then(({ status: cameraStatus }) => {
      return MediaLibrary.requestPermissionsAsync().then((mediaStatus) => {
        if (cameraStatus !== 'granted' || mediaStatus.status !== 'granted') {
          Alert.alert('Permission required', 'Camera and storage access are needed.');
        }
      });
    })
    .catch((error) => {
      console.error('Permission request error:', error);
    });
}, []);