import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App'; 
import PlantOnloadScreen from "./PlantOnloadScreen"; 
import WeatherBox from "../WeatherBox"
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Homepage = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌿 Welcome to Plantify!</Text>
      <View style={styles.onloadWrapper}>
        <PlantOnloadScreen />
      </View>
      <View style={stlyes.weatherBoxWrapper}>
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
         <Button
        title="Take Quiz 🌿"
        onPress={() => navigation.navigate('QuizScreen')}
        color="#10b981"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    paddingHorizontal: 20,
  },
   onloadWrapper: {
    marginBottom: 40,
    width: "100%",
    alignItems: "center",
  },
  weatherBoxWrapper:{

  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    color: '#14532d',
    fontWeight: 'bold',
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
