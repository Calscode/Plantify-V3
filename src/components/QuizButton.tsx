import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Animated, ImageBackground } from 'react-native';


export default function QuizButton({ onPress }: { onPress: () => void }) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: -1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // const rotate = rotateAnim.interpolate({
  //   inputRange: [-1, 1],
  //   outputRange: ['-2deg', '2deg'],
  // });

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <ImageBackground
        source={require('src/assets/takequizbutton.jpg')} 
        style={[styles.image]}
        resizeMode="contain"
        
      />

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%",
    overflow:"hidden",
    borderRadius: 10
    
    
  
  },
  image: {
    
    width: 150,
    height: 130,
    resizeMode: "center",
    

  }
});
