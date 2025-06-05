// /components/Screens/Homepage.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import PlantOnloadScreen from './PlantOnloadScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Homepage = ({ navigation }: Props) => {
  // Keep track of which group (0–3) to send to QuizScreen
  const [groupIndex, setGroupIndex] = useState(0);

  const handleTakeQuiz = () => {
    navigation.navigate('QuizScreen', { groupIndex });
    setGroupIndex((prev) => (prev + 1) % 4);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌿 Welcome to Plantify!</Text>

      <View style={styles.onloadWrapper}>
        <PlantOnloadScreen />
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Discover Plants 🌱"
            onPress={() => navigation.navigate('Discovery')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Hints & Tips"
            onPress={() => navigation.navigate('HintsScreen')}
            color="#4CAF50"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Take Quiz 🌿"
            onPress={handleTakeQuiz}
            color="#10b981"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  onloadWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
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
  },
});

export default Homepage;
