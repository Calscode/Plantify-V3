import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import HintsButton from "../HintsButton";

const { height: screenHeight } = Dimensions.get("window");
const headerHeight = 80;
const footerHeight = 80;
const usableHeight = screenHeight - headerHeight - footerHeight;

const HintsScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, { height: usableHeight }]}>
      <HintsButton
        title="Veg"
        onPress={() => navigation.navigate("VegCard")}
        image={require("src/assets/vegetables.jpeg")}
        style={styles.button}
      />
      <HintsButton
        title="Plants"
        onPress={() => navigation.navigate("PlantsCard")}
        image={require("src/assets/flowers.webp")}
        style={styles.button}
      />
      <HintsButton
        title="Fruit"
        onPress={() => navigation.navigate("FruitCard")}
        image={require("src/assets/fruits.jpeg")}
        style={styles.button}
      />
      <HintsButton
        title="Hints & Tips"
        onPress={() => navigation.navigate("HintsCard")}
        image={require("src/assets/gardening.webp")}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0fdf4",
  },
  button: {
    flex: 1,
  },
});

export default HintsScreen;
