import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const data = [
  {
    id: "1",
    title: "1. Fruit Types & Families 🍎🍓",
    bullets: [
      "Fruits come in all shapes, sizes, and flavors—from crisp apples to juicy strawberries.",
      "Understanding their types and families helps you grow them with confidence.",
      "For example, citrus fruits like oranges, lemons, and limes share similar care needs.",
      "Berries like strawberries and raspberries love cooler climates.",
      "Knowing family ties makes gardening smarter and more rewarding!",
      "🍊 Fruit joke: Why did the orange stop halfway up the hill? It ran out of juice!",
    ],
  },
  {
    id: "2",
    title: "2. Growing Zones & Conditions ☀️❄️",
    bullets: [
      "Not all fruits thrive in the same climate.",
      "Strawberries and grapes prefer mild, temperate zones.",
      "Tropical fruits like mangoes and pineapples need warm, frost-free environments.",
      "Understanding your local growing zone helps you pick fruits that will flourish.",
      "This saves effort and boosts your harvest!",
      "😅 Fruit joke: What do you call a fruit that’s always on time? A date!",
    ],
  },
  {
    id: "3",
    title: "3. Soil, Spacing & Roots 🌱🪴",
    bullets: [
      "Beneath the surface, fruit plants have unique root systems.",
      "Deep-rooted trees like apples and peaches anchor themselves firmly and draw nutrients from deep soil.",
      "Smaller fruits like strawberries spread via runners, sending out new plants nearby.",
      "Proper spacing ensures each plant has room to grow and access nutrients without crowding.",
      "🍓 Fruit highlight: Strawberries send out runners that root and create new plants!",
    ],
  },
  {
    id: "4",
    title: "4. Watering & Feeding 💧🥄",
    bullets: [
      "Getting watering right is crucial for healthy fruit plants.",
      "Deep watering encourages strong root development in trees.",
      "Consistent moisture keeps berries juicy and sweet.",
      "Feeding your plants with balanced nutrients, especially magnesium for citrus, supports flowering and fruit development.",
      "🍊 Fruit highlight: Citrus trees love a feeding schedule with extra magnesium!",
    ],
  },
  {
    id: "5",
    title: "5. Pollination & Flowering 🐝🌸",
    bullets: [
      "Pollination is the secret behind a fruitful garden.",
      "Many fruit trees like apples and cherries need cross-pollination from a different variety to produce fruit.",
      "Bees and other pollinators play a vital role, carrying pollen from flower to flower.",
      "Planting pollinator-friendly flowers nearby can boost your fruit yield!",
      "🐝 Fruit joke: Why did the bee get married? Because he found his honey!",
    ],
  },
  {
    id: "6",
    title: "6. Pests & Protection 🐛🛡️",
    bullets: [
      "Fruit plants attract various pests, from tiny aphids to hungry birds.",
      "Protecting your crop naturally can be effective—netting keeps birds away, neem oil deters insects.",
      "Companion planting with garlic or marigolds can repel unwanted visitors.",
      "Healthy plants are also more resilient to pests and diseases.",
      "🧄 Fruit highlight: Garlic near fruit trees helps repel aphids!",
    ],
  },
  {
    id: "7",
    title: "7. Crop Rotation & Companion Planting 🔄🌿",
    bullets: [
      "While fruit trees stay put, rotating berry crops each year helps prevent soil depletion and reduces pest build-up.",
      "Companion planting pairs fruits with beneficial neighbors—like nasturtiums attracting aphids away from strawberries.",
      "These strategies boost plant health and create a balanced garden ecosystem.",
      "🍐 Fruit joke: What’s a fruit’s favorite workout? The pear up!",
    ],
  },
  {
    id: "8",
    title: "8. Harvest Tips 🥳🌾",
    bullets: [
      "Harvesting fruits at the right time makes all the difference.",
      "Some, like berries, need a gentle touch and frequent picking.",
      "Others, such as peaches, continue ripening after picking.",
      "Watermelons must be harvested perfectly ripe.",
      "Knowing these cues ensures your fruits taste their best and last longer.",
      "🍉 Fruit highlight: Watermelons don’t ripen after picking—check the yellow ground spot!",
    ],
  },
  {
    id: "9",
    title: "9. Fun & Useful Facts 🌟🍇",
    bullets: [
      "Fruit gardening is full of fascinating surprises!",
      "Pineapples take up to two years to mature.",
      "Bananas are actually herbs.",
      "Apples come in over 7,500 varieties worldwide.",
      "These fun facts make every gardening day a chance to learn something new and amazing.",
      "🍇 Fruit joke: Why did the grape stop in the middle of the road? Because it ran out of juice!",
    ],
  },
];

const FruitCard = () => {
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

        {item.bullets && item.bullets.map((bullet, i) => (
          <Text key={i} style={styles.content}>
            • {bullet}
          </Text>
        ))}

        {item.highlight && <Text style={styles.highlight}>{item.highlight}</Text>}
        {item.joke && <Text style={styles.joke}>{item.joke}</Text>}
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
              { backgroundColor: i === activeIndex ? "#713f12" : "#d6d3d1" },
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
    color: "#15803d",
    marginBottom: 12,
  },
  content: {
    fontSize: 19,
    color: "#374151",
    marginBottom: 12,
  },
  joke: {
    fontStyle: "italic",
    color: "#92400e",
    fontSize: 19,
    marginTop: 10,
  },
  highlight: {
    fontWeight: "600",
    color: "#15803d",
    fontSize: 19,
    marginTop: 10,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 7,
  },
});

export default FruitCard;