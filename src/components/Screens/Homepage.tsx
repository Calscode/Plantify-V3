import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import PlantOnloadScreen from './PlantOnloadScreen';
import WeatherBox from '../WeatherBox';
import QuizButton from '../QuizButton';
import { useUser } from '../UserContext';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Homepage = ({ navigation }: Props) => {
  const { username } = useUser();
  const [groupIndex, setGroupIndex] = useState(0);

  const handleTakeQuiz = () => {
    navigation.navigate('QuizScreen', { groupIndex });
    setGroupIndex((prev) => (prev + 1) % 4);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text style={styles.title}>🌿 Welcome to Plantify, {username}!</Text>

        <View style={styles.topRow}>
          <View style={styles.leftBox}>
            <PlantOnloadScreen />
          </View>

          <View style={styles.rightColumn}>
            <WeatherBox />
            <QuizButton onPress={handleTakeQuiz} />
          </View>
        </View>

        <View style={styles.buttonGrid}>
          <TouchableOpacity style={styles.squareButton} onPress={() => navigation.navigate('Discovery')}>
            <Text style={styles.buttonText}>Discover Plants 🌱</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.squareButton} onPress={() => navigation.navigate('HintsScreen')}>
            <Text style={styles.buttonText}>Hints & Tips</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.fullWidthButton} onPress={() => navigation.navigate('Journal')}>
          <Text style={styles.buttonText}>Gardening Journal 📝</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacer} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 safeArea: {
  flex: 1,
  backgroundColor: '#f0fdf4',
},
content: {
  flex: 1,
  paddingHorizontal: 20,
  paddingTop: 20,
  paddingBottom: 20, // So it doesn't clash with bottom bar
  justifyContent: 'space-between',
  alignItems: 'center',
},
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100, // Make room for bottom bar + photo button
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#14532d',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 16,
    marginBottom: 20,
  },
  leftBox: {
    flex: 1,
    backgroundColor: '#d1fae5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  rightColumn: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 12,
  },
  buttonGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  squareButton: {
    flex: 1,
    backgroundColor: '#bbf7d0',
    marginHorizontal: 5,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidthButton: {
    width: '100%',
    backgroundColor: '#a7f3d0',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#065f46',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacer: {
    height: 20,
  },
});

export default Homepage;