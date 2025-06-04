import React from "react";
import { View, StyleSheet } from "react-native";
import HintsButton from "../HintsButton";

const HintsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HintsButton title="Veg" onPress={() => navigation.navigate("VegCard")} />
      <HintsButton title="Plants" onPress={() => navigation.navigate("PlantsCard")} />
      <HintsButton title="Fruit" onPress={() => navigation.navigate("FruitCard")} />
      <HintsButton title="Hints & Tips" onPress={() => navigation.navigate("HintsCard")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#f0fdf4",
    paddingHorizontal: 20,
  },
});

export default HintsScreen;