import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PlantCard = ({ plant }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: plant.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{plant.name}</Text>
      <Text style={styles.info}>Water every {plant.wateringFrequency} days</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0fdf4",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2f5d34",
  },
  info: {
    fontSize: 14,
    color: "#4a7c59",
  },
});

export default PlantCard;