import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
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
            <WeatherBox style={styles.weatherBoxFlex} />

              <View style={styles.rightColumn}>
            <QuizButton style= {styles.quizContainer}onPress={handleTakeQuiz} />
            </View>

          </View>
        </View>

        <View style={styles.buttonGrid}>
          <TouchableOpacity style={styles.squareButton} onPress={() => navigation.navigate('Discovery')}>
            <Text style={styles.buttonText}>Discover Plants </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.squareButton} onPress={() => navigation.navigate('HintsScreen')}>
            <Text style={styles.buttonText}>Hints & Tips</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.fullWidthButton} onPress={() => navigation.navigate('Journal')}>
        
        

                    <Text style={styles.buttonText}>Gardening Journal</Text>


        </TouchableOpacity>

        <View style={styles.bottomSpacer} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 safeArea: {
  flex: 1,
  backgroundColor: '#ffffff',
  //
},
content: {
  flex: 1,
  paddingHorizontal: 20,
  paddingTop: 20,
  paddingBottom: 20, 
  justifyContent: 'space-between',
  alignItems: 'stretch',
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
    gap: 7,
    marginBottom: 20,
    height: 240, 
    alignItems: 'stretch', 
    
  },
  leftBox: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: "hidden",
 
    
  },
   rightColumn: {
    flex: 1,
    flexDirection: 'column', 
    gap: 16,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    overflow: "hidden",
    
  },
  weatherBoxFlex: { 
    flex: 1, 
    marginBottom: 12, 
    
  },
  quizContainer:{
    borderRadius: 100,
    elevation: 3,

  },
  buttonGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
    height:50
    //added this 
  },
  squareButton: {
    flex: 1,
    backgroundColor: '#DFF5E1',
    marginHorizontal: 5,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    
    
  },
  fullWidthButton: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#DFF5E1',
    marginHorizontal: 5,
    // padding: 16,
    borderRadius: 10,
    
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    
    
    
  },
  buttonText: {
    color: '#065f46',
    fontSize: 16,
    fontWeight: '600',
    position:"absolute",
    
    
  },
  bottomSpacer: {
    height: 20,
  },image: {
    
    width: "100%",
    height: "100%",
    resizeMode: "center",
    
    

  }
});

export default Homepage;