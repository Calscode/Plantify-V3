import React, { useState } from "react";
import { View, Text, FlatList, Dimensions, StyleSheet, ScrollView, ImageBackground } from "react-native";


const { width: SCREEN_WIDTH } = Dimensions.get("window");

const data = [
  {
    id: "1",
    title: "1. Vegetable Types & Families 🥦🌿",
    bullets: [
      "Vegetables come in all shapes, colors, and sizes.",
      "From leafy greens like spinach and kale, to root veggies like carrots and beets, each belongs to a family with its own quirks.",
      "Knowing families helps you plan crop rotations and companion planting.",
      "For example, members of the cabbage family (Brassicaceae) include broccoli, cauliflower, and kale — they’re nutrient-rich but also attract similar pests, so mix them wisely!",
      "🥕 Veggie joke: Why did the carrot get an award? Because it was outstanding in its field!",
    ],
  },
  {
    id: "2",
    title: "2. Growing Zones & Conditions ☀️❄️",
    bullets: [
      "Not all veggies like the same weather!",
      "Cool-season champs like peas, lettuce, and radishes thrive in mild temps and crisp air, making spring and fall their playgrounds.",
      "Warm-season stars like tomatoes, peppers, and beans bask happily in summer sun.",
      "Knowing your USDA hardiness zone or local climate is like having a secret weapon for planning the perfect veggie schedule.",
      "😂 Veggie joke: What do you call a stolen yam? A hot potato!",
    ],
  },
  {
    id: "3",
    title: "3. Soil, Spacing & Roots 🌱🪴",
    bullets: [
      "Roots are the unsung heroes underground!",
      "Deep-rooted veggies like carrots and parsnips love loose, sandy soil so their roots can grow long and straight.",
      "Leafy greens like lettuce prefer shallow, fertile beds.",
      "Spacing matters too — crowded plants fight for nutrients and sunlight, leading to scraggly growth.",
      "So, give each veggie its personal space to thrive and keep the soil healthy with compost and organic matter.",
    ],
  },
  {
    id: "4",
    title: "4. Watering & Feeding 💧🥄",
    bullets: [
      "Watering right is the secret sauce!",
      "Root veggies need steady moisture to avoid cracking, while leafy greens love frequent, light watering to stay crisp.",
      "Overwatering can drown roots and invite disease, so check soil moisture before watering.",
      "Feeding with balanced organic fertilizers or compost tea keeps plants happy and productive.",
      "Remember, hungry veggies won’t grow strong!",
    ],
  },
  {
    id: "5",
    title: "5. Pollination & Flowering 🐝🌸",
    bullets: [
      "Many veggies rely on pollinators like bees, butterflies, and even wind.",
      "Tomatoes and beans are self-pollinators, meaning they can set fruit on their own.",
      "Others like cucumbers and squash need buzzing helpers.",
      "Planting flowers nearby invites pollinators to your garden party, boosting yields and biodiversity.",
      "Fun fact: flowers also add color and life to your veggie patch!",
    ],
  },
  {
    id: "6",
    title: "6. Pests & Protection 🐛🛡️",
    bullets: [
      "Pests happen, but you don’t have to let them win!",
      "Aphids, cabbage whites, slugs, and cutworms are common veggie villains.",
      "Use companion planting — like marigolds to deter nematodes, or nasturtiums to lure aphids away.",
      "Physical barriers like row covers keep hungry bugs at bay.",
      "Organic sprays like neem oil work wonders without harming beneficial insects.",
      "Remember, a healthy garden is a pest-resistant garden!",
    ],
  },
  {
    id: "7",
    title: "7. Crop Rotation 🔄🌿",
    bullets: [
      "Crop rotation is garden magic!",
      "By changing what you plant where each year, you prevent nutrient depletion and break pest cycles.",
      "For example, follow heavy feeders like tomatoes with nitrogen-fixing legumes like beans or peas to replenish the soil.",
      "Rotate root veggies, leafy greens, and fruiting plants in a 3- or 4-year plan.",
      "Watch your garden flourish without chemical help!",
    ],
  },
  {
    id: "8",
    title: "8. Harvest Tips 🥳🌾",
    bullets: [
      "Timing is everything when harvesting veggies.",
      "Pick leafy greens early in the day when they’re crisp and full of moisture.",
      "Root veggies taste best when harvested before they get woody or tough.",
      "Tomatoes and peppers should be allowed to ripen fully on the vine for max flavor.",
      "Harvesting regularly encourages plants to produce more.",
      "Plus, fresh-picked veggies just taste better!",
    ],
  },
  {
    id: "9",
    title: "9. Fun & Useful Facts 🌟🥕",
    bullets: [
      "Gardening is full of surprises!",
      "Did you know carrots were originally purple or yellow before the modern orange variety was bred?",
      "Beans don’t just feed you — they also improve soil fertility by adding nitrogen.",
      "Radishes can grow super fast — in just three weeks!",
      "Kale, the ultimate superfood, can survive freezing winters.",
      "Your garden is a world of wonder waiting to be explored.",
      "🥋 Veggie joke: What’s a vegetable’s favorite martial art? Carrote!",
    ],
  },
];

const VegCard = () => {
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
        {item.bullets.map((point, idx) => (
          <Text key={idx} style={styles.content}>
            • {point}
          </Text>
        ))}
   
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#14532d",
    marginBottom: 12,
  },
  background: {
  flex: 1,
  justifyContent: "center",
  padding: 20,
},

scrollInner: {
  paddingBottom: 40,
},
  content: {
    fontSize: 19, 
    color: "#374151",
    marginBottom: 12,
  },
  joke: {
    fontStyle: "italic",
    color: "#065f46",
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

export default VegCard;