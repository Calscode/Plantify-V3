import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

function PlantsCard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>1. Plant Types & Families 🌿🌼</Text>
      <Text style={styles.paragraph}>
        Plants come in endless shapes and sizes, from towering trees to tiny herbs...
      </Text>
      <Text style={styles.joke}>🌸 Plant joke: Why did the flower break up with the gardener? It just felt too rooted in the past!</Text>

      <Text style={styles.sectionTitle}>2. Growing Zones & Conditions ☀️🌧️</Text>
      <Text style={styles.paragraph}>
        Not every plant can grow everywhere. Some love blazing sun, others prefer shade...
      </Text>
      <Text style={styles.joke}>📐 Plant joke: What do you call a plant that loves math? A square root!</Text>

      <Text style={styles.sectionTitle}>3. Soil, Roots & Space 🌱🪴</Text>
      <Text style={styles.paragraph}>
        Roots are the hidden heroes of plants. Some dig deep, others spread out wide...
      </Text>
      <Text style={styles.highlight}>🎋 Plant highlight: Bamboo grows fast because its roots spread like crazy underground!</Text>

      <Text style={styles.sectionTitle}>4. Watering & Feeding 💧🌿</Text>
      <Text style={styles.paragraph}>
        Watering is a fine art. Overwater and roots drown; underwater and plants thirst...
      </Text>
      <Text style={styles.highlight}>🍅 Plant highlight: Tomatoes love balance—too much nitrogen = all leaves, no fruit!</Text>

      <Text style={styles.sectionTitle}>5. Pollination & Flowering 🐝🌸</Text>
      <Text style={styles.paragraph}>
        Pollination is the secret behind flowers turning into fruit or seeds...
      </Text>
      <Text style={styles.joke}>🌺 Plant joke: Why don’t flowers like to tell secrets? Because they might blossom everywhere!</Text>

      <Text style={styles.sectionTitle}>6. Pests & Protection 🐛🛡️</Text>
      <Text style={styles.paragraph}>
        Garden plants face many threats — from bugs to deer! Natural pest control is key...
      </Text>
      <Text style={styles.highlight}>🌼 Plant highlight: Marigolds keep pests away — they’re the garden’s bodyguards!</Text>

      <Text style={styles.sectionTitle}>7. Crop Rotation & Companion Planting 🔄🌿</Text>
      <Text style={styles.paragraph}>
        Rotating crops and using companion planting keeps soil healthy and pests confused...
      </Text>
      <Text style={styles.joke}>🥕 Plant joke: What did the carrot say to the celery? You’re stalk-ing me!</Text>

      <Text style={styles.sectionTitle}>8. Harvest & Pruning Tips ✂️🌾</Text>
      <Text style={styles.paragraph}>
        Harvest at the right time for taste and quality. Prune to encourage healthy growth...
      </Text>
      <Text style={styles.highlight}>🌿 Plant highlight: Pinch basil often for bushy plants and perfect pesto leaves!</Text>

      <Text style={styles.sectionTitle}>9. Fun & Useful Facts 🌟🌱</Text>
      <Text style={styles.paragraph}>
        Did you know bamboo can grow 91 cm in one day? Or that sunflowers follow the sun?
      </Text>
      <Text style={styles.joke}>🍄 Plant joke: Why did the mushroom go to the party alone? Because he’s a fungi to be with!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#f0fdf4", // minty fresh light green
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
    color: "#15803d",
  },
  highlight: {
    marginTop: 10,
    color: "#065f46",
    fontWeight: "600",
  },
});

export default PlantsCard;
