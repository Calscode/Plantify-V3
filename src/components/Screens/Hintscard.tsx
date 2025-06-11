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
  title: "🌿 Gardening Hints & Tips: A Quick Guide 🌱",
  bullets: [
    "Gardening is one of humanity’s oldest and most rewarding activities.",
    "People have been cultivating plants for over 10,000 years, shaping civilizations and nourishing communities.",
    "Whether you have a sprawling backyard or just a sunny windowsill, gardening connects us to nature’s rhythms and cycles.",
    "Gardening is a wonderful way to grow both food and happiness."
  ],
},
  {
    id: "2",
    title: "Best Practices to Grow Like a Pro 🌞💧",
    bullets: [
      "Know Your Soil: Start with a soil test to check pH and nutrient levels. Adding organic compost boosts fertility and water retention.",
      "Right Plant, Right Place: Choose plants that fit your climate, soil type, and sunlight availability for the best growth.",
      "Water Wisely: Deep watering encourages roots to grow strong and deep. Using mulch helps keep moisture in and weeds out.",
      "Feed Consistently: Regularly add balanced fertilizers or compost tea, but avoid overfeeding which can harm plants.",
    ],
  },
  {
    id: "3",
    title: "Best Practices to Grow Like a Pro 🌞💧 (cont.) & Things to Remember 🌼📝",
    bullets: [
      "Rotate & Companion Plant: Switch crops yearly and plant companions together to reduce diseases and pests naturally.",
      "Pest Patrol: Use natural remedies and attract helpful insects like ladybugs and bees to keep your garden healthy.",
      "Prune & Harvest: Timely pruning encourages stronger growth and better yields. Harvest fruits and veggies at their peak for flavor.",
      "Gardening takes patience — expect some trial and error. Each season brings new lessons!",
      "Keep a garden journal. Recording successes and challenges helps improve your skills over time.",
      "Connect with local gardeners or online communities for support and inspiration.",
      "Enjoy the journey — growth happens not just above ground, but beneath it too!",
    ],
  },
  {
    id: "4",
    title: "Quick Hints & Tips ⚡🌿",
    bullets: [
      "Start small — a few pots or a small patch is perfect when you’re just getting started.",
      "Use containers or raised beds if your garden soil isn’t great or to control conditions better.",
      "Clean up fallen leaves and plant debris to prevent diseases and pests.",
      "Mulch is your low-maintenance secret weapon: it conserves moisture and keeps weeds down.",
      "Support tall or floppy plants early with stakes or cages before they grow too large.",
      "Plant pollinator-friendly flowers nearby to attract bees and butterflies, helping your garden thrive naturally.",
      "Save seeds from your best plants to grow your own heirlooms next season.",
    ],
    joke: "🌸 Gardening Joke: Why did the gardener quit? Because his celery wasn’t high enough! 🥬😂",
  },
];

const HintsCard = () => {
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
          {item.content && <Text style={styles.content}>{item.content}</Text>}

          {item.bullets &&
            item.bullets.map((bullet, i) => (
              <Text key={i} style={styles.bullet}>
                • {bullet}
              </Text>
            ))}

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
    color: "#14532d",
    marginBottom: 12,
  },
  content: {
    fontSize: 19,
    color: "#374151",
    marginBottom: 15,
  },
  bullet: {
    fontSize: 19,
    marginLeft: 10,
    marginBottom: 8,
    color: "#374151", 
  },
  joke: {
    fontStyle: "italic",
    fontSize: 19,
    marginTop: 20,
    color: "#065f46",
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

export default HintsCard;