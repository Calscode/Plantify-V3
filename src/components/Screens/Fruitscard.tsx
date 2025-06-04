import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

function FruitCard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>1. Fruit Types & Families 🍎🍓</Text>
      <Text style={styles.paragraph}>
        Fruits come in all kinds of varieties, and knowing their types and families makes growing them easier and more fun...
      </Text>
      <Text style={styles.joke}>🍊 Fruit joke: Why did the orange stop halfway up the hill? It ran out of juice!</Text>

      <Text style={styles.sectionTitle}>2. Growing Zones & Conditions ☀️❄️</Text>
      <Text style={styles.paragraph}>
        Not all fruits like the same climate! Cool-loving berries like 🍓 strawberries and 🍇 grapes do well in mild zones...
      </Text>
      <Text style={styles.joke}>😅 Fruit joke: What do you call a fruit that’s always on time? A date!</Text>

      <Text style={styles.sectionTitle}>3. Soil, Spacing & Roots 🌱🪴</Text>
      <Text style={styles.paragraph}>
        Underneath the soil, fruit plants have different rooting habits. Deep-rooted trees like 🍏 apples and 🍑 peaches...
      </Text>
      <Text style={styles.highlight}>🍓 Fruit highlight: Strawberries send out runners that root and create new plants!</Text>

      <Text style={styles.sectionTitle}>4. Watering & Feeding 💧🥄</Text>
      <Text style={styles.paragraph}>
        Watering fruit plants right can make all the difference. Deep watering helps trees grow strong roots...
      </Text>
      <Text style={styles.highlight}>🍊 Fruit highlight: Citrus trees love a feeding schedule with extra magnesium!</Text>

      <Text style={styles.sectionTitle}>5. Pollination & Flowering 🐝🌸</Text>
      <Text style={styles.paragraph}>
        Pollination is crucial for many fruits. Apples, pears, and cherries often need cross-pollination...
      </Text>
      <Text style={styles.joke}>🐝 Fruit joke: Why did the bee get married? Because he found his honey!</Text>

      <Text style={styles.sectionTitle}>6. Pests & Protection 🐛🛡️</Text>
      <Text style={styles.paragraph}>
        Fruits attract their fair share of pests, from aphids to birds. Netting, neem oil, and companion planting can help...
      </Text>
      <Text style={styles.highlight}>🧄 Fruit highlight: Garlic near fruit trees helps repel aphids!</Text>

      <Text style={styles.sectionTitle}>7. Crop Rotation & Companion Planting 🔄🌿</Text>
      <Text style={styles.paragraph}>
        While trees don’t move, rotating berries each year and companion planting can boost health and reduce pests...
      </Text>
      <Text style={styles.joke}>🍐 Fruit joke: What’s a fruit’s favorite workout? The pear up!</Text>

      <Text style={styles.sectionTitle}>8. Harvest Tips 🥳🌾</Text>
      <Text style={styles.paragraph}>
        Picking fruits at the right time is key. Berries need a gentle hand, and some fruits ripen off the tree...
      </Text>
      <Text style={styles.highlight}>🍉 Fruit highlight: Watermelons don’t ripen after picking—check the yellow ground spot!</Text>

      <Text style={styles.sectionTitle}>9. Fun & Useful Facts 🌟🍇</Text>
      <Text style={styles.paragraph}>
        Fruit gardening is full of surprises—pineapples take two years, bananas are herbs, and apples have 7,500+ types...
      </Text>
      <Text style={styles.joke}>🍇 Fruit joke: Why did the grape stop in the middle of the road? Because it ran out of juice!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#f0fdf4", // light yellow
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#713f12",
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
    color: "#92400e",
  },
  highlight: {
    marginTop: 10,
    color: "#15803d",
    fontWeight: "600",
  },
});

export default FruitCard;
