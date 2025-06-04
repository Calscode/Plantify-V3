import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

function HintsCard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>🌿 Gardening Hints & Tips: A Quick Guide 🌱</Text>

      <Text style={styles.subsectionTitle}>A Brief History of Gardening 🏺🌻</Text>
      <Text style={styles.paragraph}>
        Gardening is one of humanity’s oldest hobbies — and necessities! People began cultivating plants over 10,000 years ago...
      </Text>

      <Text style={styles.subsectionTitle}>Best Practices to Grow Like a Pro 🌞💧</Text>
      <Text style={styles.bullet}>• Know Your Soil: Test pH and add compost to improve fertility.</Text>
      <Text style={styles.bullet}>• Right Plant, Right Place: Match plant needs to climate, soil & sun.</Text>
      <Text style={styles.bullet}>• Water Wisely: Deep watering builds strong roots. Mulch helps!</Text>
      <Text style={styles.bullet}>• Feed Consistently: Use compost and balanced fertilizers carefully.</Text>
      <Text style={styles.bullet}>• Rotate & Companion Plant: Reduce disease, boost plant teamwork.</Text>
      <Text style={styles.bullet}>• Pest Patrol: Use natural controls and attract beneficial insects.</Text>
      <Text style={styles.bullet}>• Prune & Harvest: Encourage health and flavor with good timing.</Text>

      <Text style={styles.subsectionTitle}>Things to Remember 🌼📝</Text>
      <Text style={styles.paragraph}>• Gardening takes patience — don’t fear a few failures.</Text>
      <Text style={styles.paragraph}>• Keep a journal. Each season teaches something new.</Text>
      <Text style={styles.paragraph}>• Connect with your local gardening community for support.</Text>
      <Text style={styles.paragraph}>• Enjoy the journey. Growth happens both above and below ground!</Text>

      <Text style={styles.subsectionTitle}>Quick Hints & Tips ⚡🌿</Text>
      <Text style={styles.bullet}>• Start small — a few pots are perfect to begin learning.</Text>
      <Text style={styles.bullet}>• Use containers or raised beds in poor soil areas.</Text>
      <Text style={styles.bullet}>• Clean up plant debris and rotate crops seasonally.</Text>
      <Text style={styles.bullet}>• Mulch is your low-effort best friend.</Text>
      <Text style={styles.bullet}>• Support tall plants with stakes or cages early.</Text>
      <Text style={styles.bullet}>• Plant flowers to invite pollinators and skip harmful pesticides.</Text>
      <Text style={styles.bullet}>• Save seeds from your favorite plants!</Text>

      <Text style={styles.joke}>🌸 Gardening Joke: Why did the gardener quit? Because his celery wasn’t high enough! 🥬😂</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#f0fdf4", // soft yellow-beige
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#713f12",
  },
  subsectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 6,
    color: "#854d0e",
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
    color: "#374151",
  },
  bullet: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 6,
    color: "#3f6212",
  },
  joke: {
    fontStyle: "italic",
    fontSize: 15,
    marginTop: 20,
    color: "#b45309",
  },
});

export default HintsCard;
