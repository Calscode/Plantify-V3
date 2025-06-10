import React, { useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import uploadPhoto from './CameraUtils';
import PlantIdentifier from './PlantIdentifier';
import { CameraButton } from './CameraButton';

const backgroundImage = require('../../assets/presstoidentify.jpeg');
const widgetImage = require('../../assets/click.png');

const PhotoIdentifierWrapper = () => {
  const [plantData, setPlantData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  const handlePhotoTaken = async (photo: any) => {
    setError(null);
    setLoading(true);
    try {
      const plant = await uploadPhoto(photo);
      console.log('✅ API returned:', plant);
      setPlantData(plant);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
      console.error('Photo error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePlantMatched = (plant: any) => {
    if (plant) {
      console.log('🚀 Navigating to PlantDetail with:', plant);
      navigation.navigate('PlantDetail', { plant: plant.plant });
    }
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image source={widgetImage} style={styles.topImage} />

      <View style={styles.cameraButtonWrapper}>
    <CameraButton onPhotoTaken={handlePhotoTaken} />
        </View>
        {loading && <ActivityIndicator size="large" color="#fff" style={styles.loader} />}
        {error && <Text style={styles.error}>{error}</Text>}

        {plantData && (
    <PlantIdentifier
    apiResponse={plantData}
    onPlantMatched={handlePlantMatched}
  />
)}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(88, 145, 83, 0.4)',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  topImage: {
    width: 180,
    height: 180,
    borderRadius: 20,
    marginBottom: 30,
    alignSelf: 'center',
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, 
  },
  cameraButtonWrapper: {
  backgroundColor: '#fff', 
  borderRadius: 50,       
  width: 100,
  height: 100,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 8, 
},
  promptRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  prompt: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
   
    fontFamily: 'System',
    letterSpacing: 1,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  emoji: {
    fontSize: 28,
    marginLeft: 10,
  },
  emojiCircle: {
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    marginTop: 30,
  },
  loader: {
    marginTop: 30,
  },
  error: {
    marginTop: 30,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PhotoIdentifierWrapper;