import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import PlantOnloadScreen from './PlantOnloadScreen';
import WeatherBox from '../WeatherBox';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Homepage = ({ navigation }: Props) => {
  const [groupIndex, setGroupIndex] = useState(0);

  const handleTakeQuiz = () => {
    navigation.navigate('QuizScreen', { groupIndex });
    setGroupIndex((prev) => (prev + 1) % 4);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌿 Welcome to Plantify!</Text>

      <View style={styles.topRow}>
        <PlantOnloadScreen />
        <WeatherBox />
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button title="Discover Plants 🌱" onPress={() => navigation.navigate('Discovery')} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Hints & Tips"
            onPress={() => navigation.navigate('HintsScreen')}
            color="#4CAF50"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Take Quiz 🌿" onPress={handleTakeQuiz} color="#10b981" />
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Gardening Journal 📝"
          onPress={() => navigation.navigate('Journal')}
          color="#8BC34A"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 20,
    marginBottom: 30,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    color: '#14532d',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default Homepage;
