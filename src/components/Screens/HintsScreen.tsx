import React from "react";
import { View, StyleSheet } from "react-native";
import HintsButton from "../HintsButton";

const HintsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
    flexDirection: "column",
    backgroundColor: "#f0fdf4",
  },
  button: {
    flex: 1,
  },
 
});

export default HintsScreen;