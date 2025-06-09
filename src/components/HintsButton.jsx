import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, ImageBackground, View } from "react-native";

// This will be passed from the parent now, so it's dynamic and safe
const HintsButton = ({ title, onPress, image, height }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
    <ImageBackground
      source={image}
      style={[styles.imageBackground, { height }]}
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
    width: "100%",
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