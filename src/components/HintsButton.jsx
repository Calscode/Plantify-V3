import React from "react";
import { TouchableOpacity, Text, StyleSheet, ImageBackground, View } from "react-native";

const HintsButton = ({ title, onPress, image, style }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={style}>
    <ImageBackground
      source={image}
      style={styles.imageBackground}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    resizeMode: "cover",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default HintsButton;