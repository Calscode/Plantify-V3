import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import HintsButton from "../HintsButton";

// Adjust for your layout — header + footer
const { height: screenHeight } = Dimensions.get("window");
const headerHeight = 80;
const footerHeight = 80;
const usableHeight = screenHeight - headerHeight - footerHeight;
const buttonHeight = Math.floor((usableHeight / 4) * 1.1);

const HintsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HintsButton
        title="Veg"
        onPress={() => navigation.navigate("VegCard")}
        image={require("src/assets/vegetables.jpeg")}
        height={buttonHeight}
      />
      <HintsButton
        title="Plants"
        onPress={() => navigation.navigate("PlantsCard")}
        image={require("src/assets/flowers.webp")}
        height={buttonHeight}
      />
      <HintsButton
        title="Fruit"
        onPress={() => navigation.navigate("FruitCard")}
        image={require("src/assets/fruits.jpeg")}
        height={buttonHeight}
      />
      <HintsButton
        title="Hints & Tips"
        onPress={() => navigation.navigate("HintsCard")}
        image={require("src/assets/gardening.webp")}
        height={buttonHeight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0fdf4",
  },
});

export default HintsScreen;
