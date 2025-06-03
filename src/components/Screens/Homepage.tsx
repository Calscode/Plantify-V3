import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌿 Welcome to PlantPal!</Text>
      <Button
        title="Discover Plants 🌱"
        onPress={() => navigation.navigate("Discovery")}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0fdf4",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#14532d",
    fontWeight: "bold",
  },
});

export default Homepage;