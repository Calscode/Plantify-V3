import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

function VegCard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>1. Vegetable Types & Families 🥦🌿</Text>
      <Text style={styles.paragraph}>
        Vegetables come in all shapes and sizes, but grouping them by type and family makes gardening a whole lot easier...
      </Text>
      <Text style={styles.joke}>🥕 Veggie joke: Why did the carrot get an award? Because it was outstanding in its field!</Text>

      <Text style={styles.sectionTitle}>2. Growing Zones & Conditions ☀️❄️</Text>
      <Text style={styles.paragraph}>
        Not all veggies like the same weather! Some, like peas and 🥗 lettuce, are cool-season champs...
      </Text>
      <Text style={styles.joke}>😂 Veggie joke: What do you call a stolen yam? A hot potato!</Text>

      <Text style={styles.sectionTitle}>3. Soil, Spacing & Roots 🌱🪴</Text>
      <Text style={styles.paragraph}>
        Roots run the show underground! Deep-rooted veggies like 🥕 carrots and parsnips need loose, deep soil...
      </Text>

      <Text style={styles.sectionTitle}>4. Watering & Feeding 💧🥄</Text>
      <Text style={styles.paragraph}>
        Watering right is a game-changer! Root veggies need steady moisture to avoid cracking...
      </Text>

      <Text style={styles.sectionTitle}>5. Pollination & Flowering 🐝🌸</Text>
      <Text style={styles.paragraph}>
        Some veggies do their own thing—tomatoes and beans often self-pollinate...
      </Text>

      <Text style={styles.sectionTitle}>6. Pests & Protection 🐛🛡️</Text>
      <Text style={styles.paragraph}>
        Pests happen, but you don’t have to let them win. The cabbage family is a favorite of cabbage white butterflies...
      </Text>

      <Text style={styles.sectionTitle}>7. Crop Rotation 🔄🌿</Text>
      <Text style={styles.paragraph}>
        Crop rotation isn’t just fancy garden talk; it’s a smart way to keep soil rich and plants healthy...
      </Text>

      <Text style={styles.sectionTitle}>8. Harvest Tips 🥳🌾</Text>
      <Text style={styles.paragraph}>
        The best time to harvest? Early morning, when veggies are crisp and full of flavor...
      </Text>

      <Text style={styles.sectionTitle}>9. Fun & Useful Facts 🌟🥕</Text>
      <Text style={styles.paragraph}>
        Gardening is full of surprises! Did you know carrots were originally purple? Beans improve soil fertility...
      </Text>
      <Text style={styles.joke}>🥋 Veggie joke: What’s a vegetable’s favorite martial art? Carrote!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#f0fdf4",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#14532d",
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    color: "#374151",
  },
  joke: {
    fontStyle: "italic",
    marginTop: 10,
    color: "#065f46",
  },
});

export default VegCard;
