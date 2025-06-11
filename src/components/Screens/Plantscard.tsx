import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const data = [
  {
    id: "1",
    title: "1. Plant Types & Families 🌿🌼",
    bullets: [
      "Plants come in endless shapes and sizes—from towering trees that touch the sky to tiny herbs that fit in your palm.",
      "Understanding plant families helps you care for them better, since relatives often share similar needs and quirks.",
      "For example, the rose family includes apples and strawberries, so next time you see a flower, think about the fruit it could become!",
      "🌸 Plant joke: Why did the flower break up with the gardener? It just felt too rooted in the past!"
    ],
    noteType: "joke",
  },
  {
    id: "2",
    title: "2. Growing Zones & Conditions ☀️🌧️",
    bullets: [
      "Not every plant thrives in every climate.",
      "Some crave blazing sun, while others prefer the cool comfort of shade.",
      "Understanding your growing zone—based on temperature and frost dates—helps you pick plants that will flourish where you live.",
      "It’s like matchmaking for plants and places!",
      "📐 Plant joke: What do you call a plant that loves math? A square root!"
    ],
    noteType: "joke",
  },
  {
    id: "3",
    title: "3. Soil, Roots & Space 🌱🪴",
    bullets: [
      "Roots are the underground heroes anchoring plants and sucking up nutrients and water.",
      "Some roots dig deep like explorers, others spread wide like a network of friends.",
      "Good soil structure and plenty of space mean healthy roots, and happy roots mean vibrant plants above ground.",
      "🎋 Plant highlight: Bamboo grows fast because its roots spread like crazy underground!"
    ],
    noteType: "highlight",
  },
  {
    id: "4",
    title: "4. Watering & Feeding 💧🌿",
    bullets: [
      "Watering plants is an art that requires balance.",
      "Overwatering drowns roots, while underwatering leaves plants parched.",
      "Feeding your plants with the right nutrients at the right time helps them grow strong.",
      "Think of it as their daily vitamins!",
      "🍅 Plant highlight: Tomatoes love balance—too much nitrogen means lots of leaves but no juicy fruit!"
    ],
    noteType: "highlight",
  },
  {
    id: "5",
    title: "5. Pollination & Flowering 🐝🌸",
    bullets: [
      "Pollination is the magical process where pollen travels from flower to flower, allowing plants to produce seeds and fruit.",
      "Bees, butterflies, wind, and even birds are nature’s couriers in this love story.",
      "Without pollination, many of our favorite foods wouldn’t exist!",
      "🌺 Plant joke: Why don’t flowers like to tell secrets? Because they might blossom everywhere!"
    ],
    noteType: "joke",
  },
  {
    id: "6",
    title: "6. Pests & Protection 🐛🛡️",
    bullets: [
      "Every garden faces invaders—from tiny aphids to hungry deer.",
      "But nature offers solutions: companion plants, natural predators, and organic sprays can keep pests at bay.",
      "Learning about your garden’s ecosystem turns you into a pest-fighting ninja!",
      "🌼 Plant highlight: Marigolds keep pests away—they’re the garden’s bodyguards!"
    ],
    noteType: "highlight",
  },
  {
    id: "7",
    title: "7. Crop Rotation & Companion Planting 🔄🌿",
    bullets: [
      "Crop rotation means planting different crops in a spot each season to keep soil healthy and pests confused.",
      "Companion planting pairs plants that help each other grow—like beans that add nitrogen to the soil while corn provides support.",
      "It’s teamwork for your garden!",
      "🥕 Plant joke: What did the carrot say to the celery? You’re stalk-ing me!"
    ],
    noteType: "joke",
  },
  {
    id: "8",
    title: "8. Harvest & Pruning Tips ✂️🌾",
    bullets: [
      "Harvesting at the perfect time guarantees the best taste and nutrition.",
      "Pruning isn’t just tidying up—it encourages plants to grow fuller and stronger.",
      "With the right snip and timing, you’ll have a flourishing garden that keeps giving all season long.",
      "🌿 Plant highlight: Pinch basil often for bushy plants and perfect pesto leaves!"
    ],
    noteType: "highlight",
  },
  {
    id: "9",
    title: "9. Fun & Useful Facts 🌟🌱",
    bullets: [
      "Did you know bamboo can grow up to 91 cm in a single day?",
      "Or that sunflowers actually track the sun across the sky?",
      "Plants have surprising superpowers that show just how incredible and adaptable they are.",
      "Gardening lets you witness these wonders up close.",
      "🍄 Plant joke: Why did the mushroom go to the party alone? Because he’s a fungi to be with!"
    ],
    noteType: "joke",
  },
];

const PlantsCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = React.useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderItem = ({ item }) => (
  <View style={[styles.page, { width: SCREEN_WIDTH }]}>
    <ImageBackground
      source={require("../../assets/whitebackground.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollInner}>
        <Text style={styles.title}>{item.title}</Text>
        {item.bullets.map((bullet, idx) => (
          <Text key={idx} style={styles.content}>
            • {bullet}
          </Text>
        ))}
        {item.noteType === "joke" ? (
          <Text style={styles.joke}>{item.note}</Text>
        ) : (
          <Text style={styles.highlight}>{item.note}</Text>
        )}
      </ScrollView>
    </ImageBackground>
  </View>
);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={renderItem}
      />
      <View style={styles.pagination}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: i === activeIndex ? "#14532d" : "#94a3b8" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 20,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  scrollInner: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#14532d",
    marginBottom: 12,
  },
  content: {
    fontSize: 19,
    color: "#374151",
    marginBottom: 12,
  },
  joke: {
    fontStyle: "italic",
    color: "#065f46",
  },
  highlight: {
    fontWeight: "600",
    color: "#065f46",
    marginTop: 10,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 12,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
});

export default PlantsCard;